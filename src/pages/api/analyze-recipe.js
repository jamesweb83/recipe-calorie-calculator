// pages/api/analyze-recipe.js
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { recipe } = req.body;
    
    if (!recipe) {
      return res.status(400).json({ error: '레시피가 제공되지 않았습니다.' });
    }

    // GPT에 전송할 프롬프트 구성
    const prompt = `
다음 레시피의 재료를 분석하고 각 재료의 양과 총 칼로리를 계산해주세요. 
각 재료의 양을 그램 단위로 변환하고 100g당 칼로리를 기준으로 계산해주세요.
결과는 JSON 형식으로 반환해주세요.

레시피:
${recipe}

응답 형식:
{
  "ingredients": [
    {
      "name": "재료명",
      "quantity": 수량,
      "unit": "단위",
      "grams": 그램단위로변환,
      "calories": 칼로리
    },
    ...
  ],
  "totalCalories": 총칼로리
}
`;

    // OpenAI API 호출
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { "role": "system", "content": "당신은 레시피 분석 및 칼로리 계산을 전문으로 하는 영양사입니다. 정확한 수치와 JSON 형식으로 답변해주세요." },
        { "role": "user", "content": prompt }
      ],
      temperature: 0.2,
    });

    // API 응답에서 JSON 파싱
    const responseText = completion.data.choices[0].message.content;
    let parsedResponse;
    
    try {
      // JSON 문자열 추출
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        parsedResponse = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('유효한 JSON을 찾을 수 없습니다.');
      }
    } catch (parseError) {
      console.error('JSON 파싱 오류:', parseError);
      return res.status(500).json({ 
        error: 'API 응답을 파싱하는 데 문제가 발생했습니다.', 
        rawResponse: responseText 
      });
    }

    // 응답 반환
    res.status(200).json(parsedResponse);
    
  } catch (error) {
    console.error('API 오류:', error.response?.data || error.message);
    res.status(500).json({ 
      error: '서버 오류가 발생했습니다.', 
      details: error.response?.data || error.message 
    });
  }
}