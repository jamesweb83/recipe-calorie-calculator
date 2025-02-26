// pages/api/analyze-recipe.js
import OpenAI from 'openai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { recipe, language = 'ko' } = req.body;
    
    if (!recipe) {
      return res.status(400).json({ 
        error: language === 'ko' ? '레시피가 제공되지 않았습니다.' : 'Recipe was not provided.'
      });
    }

    // OpenAI 초기화
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    console.log('API 요청 시작:', { recipeLength: recipe.length });

    // 언어에 따른 프롬프트 설정
    const promptText = language === 'ko' 
      ? `다음 레시피의 재료를 분석하고 각 재료의 양과 총 칼로리를 계산해주세요. 
각 재료의 양을 그램 단위로 변환하고 100g당 칼로리를 기준으로 계산해주세요.
결과는 JSON 형식으로 반환해주세요.`
      : `Analyze the ingredients in the following recipe and calculate the amount and total calories for each ingredient.
Convert the amount of each ingredient to grams and calculate based on calories per 100g.
Return the result in JSON format.`;

    // GPT에 전송할 프롬프트 구성
    const prompt = `
${promptText}

레시피:
${recipe}

응답 형식:
{
  "ingredients": [
    {
      "name": "${language === 'ko' ? '재료명' : 'ingredient name'}",
      "quantity": ${language === 'ko' ? '수량' : 'quantity'},
      "unit": "${language === 'ko' ? '단위' : 'unit'}",
      "grams": ${language === 'ko' ? '그램단위로변환' : 'grams'},
      "calories": ${language === 'ko' ? '칼로리' : 'calories'}
    },
    ...
  ],
  "totalCalories": ${language === 'ko' ? '총칼로리' : 'total calories'}
}
`;

    console.log('API 요청 준비 완료');
    
    // OpenAI API 호출 (gpt-4o-mini 모델 사용)
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { 
          "role": "system", 
          "content": language === 'ko' 
            ? "당신은 레시피 분석 및 칼로리 계산을 전문으로 하는 영양사입니다. 정확한 수치와 JSON 형식으로 답변해주세요." 
            : "You are a nutritionist specializing in recipe analysis and calorie calculation. Please answer with accurate numbers and in JSON format."
        },
        { "role": "user", "content": prompt }
      ],
      temperature: 0.2,
    });

    console.log('API 응답 수신');

    // API 응답에서 JSON 파싱
    const responseText = completion.choices[0].message.content;
    console.log('응답 텍스트:', responseText.substring(0, 200) + '...');
    
    let parsedResponse;
    
    try {
      // JSON 문자열 추출
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0]);
        console.log('JSON 파싱 성공', { 
          totalCalories: parsedResponse.totalCalories,
          ingredientsCount: parsedResponse.ingredients?.length 
        });
      } else {
        throw new Error(language === 'ko' ? '유효한 JSON을 찾을 수 없습니다.' : 'Valid JSON could not be found.');
      }
    } catch (parseError) {
      console.error('JSON 파싱 오류:', parseError);
      return res.status(500).json({ 
        error: language === 'ko' ? 'API 응답을 파싱하는 데 문제가 발생했습니다.' : 'There was a problem parsing the API response.',
        rawResponse: responseText 
      });
    }

    // 응답 반환
    res.status(200).json(parsedResponse);
    
  } catch (error) {
    console.error('API 오류 세부 정보:', {
      message: error.message,
      name: error.name,
      stack: error.stack?.substring(0, 300),
      response: error.response?.data
    });
    
    const language = req.body.language || 'ko';
    
    res.status(500).json({ 
      error: language === 'ko' ? '서버 오류가 발생했습니다.' : 'A server error occurred.',
      message: error.message,
      details: error.response?.data || error.message 
    });
  }
}