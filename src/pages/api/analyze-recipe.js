// pages/api/analyze-recipe.js
import OpenAI from 'openai';

// 보호를 위한 간단한 메모리 기반 요청 카운터
// 실제 앱에서는 이것을 데이터베이스나 Redis 같은 외부 저장소로 대체해야 합니다
const requestLimiter = {
  requests: {}, // IP별 요청 횟수를 저장
  resetTime: Date.now() + 1000 * 60 * 60, // 1시간마다 리셋
  
  // IP별 요청 카운트 증가
  increment(ip) {
    // 리셋 시간이 지났으면 카운터 초기화
    if (Date.now() > this.resetTime) {
      this.requests = {};
      this.resetTime = Date.now() + 1000 * 60 * 60;
    }
    
    // IP별 요청 횟수 증가
    this.requests[ip] = (this.requests[ip] || 0) + 1;
    return this.requests[ip];
  },
  
  // IP별 요청 횟수 조회
  getCount(ip) {
    return this.requests[ip] || 0;
  }
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 클라이언트 IP 주소 가져오기
  const clientIp = req.headers['x-forwarded-for'] || 
                   req.connection.remoteAddress || 
                   '0.0.0.0';
                   
  // 시간당 최대 요청 수
  const MAX_REQUESTS_PER_HOUR = 10;
  
  // 요청 횟수 확인
  const requestCount = requestLimiter.increment(clientIp);
  
  // 최대 요청 수 초과 확인
  if (requestCount > MAX_REQUESTS_PER_HOUR) {
    return res.status(429).json({ 
      error: req.body.language === 'ko' 
        ? '너무 많은 요청을 보냈습니다. 잠시 후 다시 시도해주세요.' 
        : 'Too many requests. Please try again later.' 
    });
  }

  try {
    const { recipe, language = 'ko' } = req.body;
    
    if (!recipe) {
      return res.status(400).json({ 
        error: language === 'ko' ? '레시피가 제공되지 않았습니다.' : 'Recipe was not provided.'
      });
    }
    
    // 최대 문자 수 제한 확인
    const MAX_CHARS = 300;
    if (recipe.length > MAX_CHARS) {
      return res.status(400).json({ 
        error: language === 'ko' 
          ? `레시피는 ${MAX_CHARS}자를 초과할 수 없습니다.` 
          : `Recipe cannot exceed ${MAX_CHARS} characters.`
      });
    }

    // 요청 로깅
    console.log(`Recipe analysis request from ${clientIp} at ${new Date().toISOString()}, length: ${recipe.length}`);

    // OpenAI 초기화
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // 언어에 따른 프롬프트 설정 (간결하게 수정)
    const systemPrompt = language === 'ko' 
      ? "레시피 분석 및 칼로리 계산. JSON 형식으로 답변하세요." 
      : "Recipe analysis and calorie calculation. Answer in JSON format.";
    
    const userPrompt = language === 'ko'
      ? `다음 레시피의 재료를 분석하고 각 재료의 양과 총 칼로리를 계산해주세요:\n\n${recipe}`
      : `Analyze the ingredients in the following recipe and calculate calories:\n\n${recipe}`;
    
    // GPT-4o-mini 모델 사용 (GPT-3.5-turbo보다 더 저렴함)
    const MODEL = "gpt-4o-mini";
    
    // OpenAI API 호출 (함수 호출 사용)
    const completion = await openai.chat.completions.create({
      model: MODEL,
      messages: [
        { "role": "system", "content": systemPrompt },
        { "role": "user", "content": userPrompt }
      ],
      functions: [
        {
          name: "calculate_recipe_calories",
          description: "Calculate calories for recipe ingredients and return structured data",
          parameters: {
            type: "object",
            properties: {
              ingredients: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    quantity: { type: "number" },
                    unit: { type: "string" },
                    grams: { type: "number" },
                    calories: { type: "number" }
                  },
                  required: ["name", "quantity", "unit", "grams", "calories"]
                }
              },
              totalCalories: { type: "number" }
            },
            required: ["ingredients", "totalCalories"]
          }
        }
      ],
      function_call: { name: "calculate_recipe_calories" },
      temperature: 0.2,
    });
    
    // 토큰 사용량 로깅 (비용 모니터링)
    if (completion.usage) {
      console.log('Token usage:', {
        prompt_tokens: completion.usage.prompt_tokens,
        completion_tokens: completion.usage.completion_tokens,
        total_tokens: completion.usage.total_tokens,
        // GPT-4o-mini 가격으로 예상 비용 계산 업데이트
        estimated_cost_usd: (
          (completion.usage.prompt_tokens * 0.00015 / 1000) + 
          (completion.usage.completion_tokens * 0.0006 / 1000)
        ).toFixed(6)
      });
    }
    
    // 함수 호출에서 구조화된 응답 직접 추출
    let parsedResponse;
    
    try {
      // 함수 호출 응답 파싱
      if (completion.choices[0].message.function_call) {
        parsedResponse = JSON.parse(completion.choices[0].message.function_call.arguments);
      } else {
        // 일반 텍스트 응답에서 JSON 추출 (backup)
        const jsonMatch = completion.choices[0].message.content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          parsedResponse = JSON.parse(jsonMatch[0]);
        } else {
          throw new Error(language === 'ko' ? '유효한 JSON을 찾을 수 없습니다.' : 'Valid JSON could not be found.');
        }
      }
    } catch (parseError) {
      console.error('JSON 파싱 오류:', parseError);
      return res.status(500).json({ 
        error: language === 'ko' ? 'API 응답을 파싱하는 데 문제가 발생했습니다.' : 'There was a problem parsing the API response.'
      });
    }

    // 응답 반환
    res.status(200).json(parsedResponse);
    
  } catch (error) {
    console.error('API 오류 세부 정보:', {
      message: error.message,
      name: error.name,
      stack: error.stack?.substring(0, 300)
    });
    
    const language = req.body.language || 'ko';
    
    res.status(500).json({ 
      error: language === 'ko' ? '서버 오류가 발생했습니다.' : 'A server error occurred.',
      message: error.message
    });
  }
}