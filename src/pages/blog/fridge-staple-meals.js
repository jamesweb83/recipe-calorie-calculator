import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const englishContent = {
  title: "30 Meals Under 500 Calories Using Fridge Staples",
  description: "Discover 30 delicious, low-calorie meals under 500 calories using common fridge staples. Simple, healthy, and budget-friendly recipes that make the most of what you have.",
  publishedDate: "February 18, 2025",
  intro: "Transform your fridge staples into delicious, low-calorie meals! These recipes are perfect for busy days when you need something quick and healthy. Let's explore 30 satisfying meals that clock in under 500 calories.",
  
  section1Title: "Quick and Easy Breakfast Options",
  
  meal1Title: "1. Greek Yogurt Parfait (280 cal)",
  meal1Ingredients: [
    "1 cup plain Greek yogurt (130 cal)",
    "1/4 cup granola (120 cal)",
    "1/2 cup mixed berries (30 cal)"
  ],
  meal1Prep: "Prep: Layer ingredients in a glass jar.",
  
  meal2Title: "2. Veggie Egg White Wrap (320 cal)",
  meal2Ingredients: [
    "3 egg whites (50 cal)",
    "1 whole wheat tortilla (120 cal)",
    "1 cup spinach (10 cal)",
    "1/4 avocado (80 cal)"
  ],
  meal2Prep: "Prep: Scramble egg whites, wrap with veggies.",
  
  meal3Title: "3. Overnight Oats (350 cal)",
  meal3Ingredients: [
    "1/2 cup oats (150 cal)",
    "1 cup almond milk (30 cal)",
    "1 tbsp chia seeds (60 cal)",
    "1 tbsp honey (60 cal)"
  ],
  meal3Prep: "Prep: Mix ingredients, refrigerate overnight.",
  
  section2Title: "Satisfying Lunch Ideas",
  
  meal4Title: "4. Turkey Lettuce Wraps (380 cal)",
  meal4Ingredients: [
    "4 oz turkey breast (120 cal)",
    "4 large lettuce leaves (10 cal)",
    "1/4 cup carrots (25 cal)",
    "2 tbsp hummus (70 cal)"
  ],
  meal4Prep: "Prep: Wrap turkey and veggies in lettuce.",
  
  meal5Title: "5. Tuna Salad Bowl (420 cal)",
  meal5Ingredients: [
    "1 can tuna (180 cal)",
    "1 cup mixed greens (20 cal)",
    "1/4 avocado (80 cal)",
    "1 tbsp olive oil (120 cal)"
  ],
  meal5Prep: "Prep: Mix ingredients in a bowl.",
  
  meal6Title: "6. Chicken Stir-Fry (450 cal)",
  meal6Ingredients: [
    "4 oz chicken breast (165 cal)",
    "2 cups mixed vegetables (100 cal)",
    "1 tbsp soy sauce (10 cal)",
    "1/2 cup brown rice (175 cal)"
  ],
  meal6Prep: "Prep: Stir-fry chicken and veggies, serve with rice.",
  
  section3Title: "Healthy Dinner Options",
  
  meal7Title: "7. Salmon with Roasted Veggies (480 cal)",
  meal7Ingredients: [
    "4 oz salmon (240 cal)",
    "2 cups mixed vegetables (100 cal)",
    "1 tbsp olive oil (120 cal)",
    "1/2 lemon (20 cal)"
  ],
  meal7Prep: "Prep: Roast salmon and veggies together.",
  
  meal8Title: "8. Vegetarian Buddha Bowl (460 cal)",
  meal8Ingredients: [
    "1 cup quinoa (220 cal)",
    "1 cup chickpeas (130 cal)",
    "2 cups mixed greens (40 cal)",
    "2 tbsp tahini dressing (70 cal)"
  ],
  meal8Prep: "Prep: Layer ingredients in a bowl.",
  
  meal9Title: "9. Shrimp Scampi (420 cal)",
  meal9Ingredients: [
    "6 oz shrimp (180 cal)",
    "2 cups zucchini noodles (60 cal)",
    "2 tbsp olive oil (240 cal)",
    "2 cloves garlic (10 cal)"
  ],
  meal9Prep: "Prep: Sauté shrimp with garlic, toss with zoodles.",
  
  section4Title: "Quick Snacks Under 200 Calories",
  
  meal10Title: "10. Protein Smoothie Bowl (180 cal)",
  meal10Ingredients: [
    "1 scoop protein powder (120 cal)",
    "1 banana (30 cal)",
    "1 cup almond milk (30 cal)"
  ],
  meal10Prep: "Prep: Blend ingredients, top with fruit.",
  
  meal11Title: "11. Veggie Sticks with Hummus (150 cal)",
  meal11Ingredients: [
    "2 cups mixed vegetables (50 cal)",
    "1/4 cup hummus (100 cal)"
  ],
  meal11Prep: "Prep: Cut veggies, serve with hummus.",
  
  meal12Title: "12. Greek Yogurt with Berries (160 cal)",
  meal12Ingredients: [
    "1 cup Greek yogurt (130 cal)",
    "1/2 cup mixed berries (30 cal)"
  ],
  meal12Prep: "Prep: Top yogurt with berries.",
  
  tipsTitle: "Tips for Success",
  tips: [
    "Keep your fridge stocked with these staples",
    "Prep ingredients in advance",
    "Use portion control",
    "Stay hydrated",
    "Listen to your hunger cues"
  ],
  
  conclusionTitle: "Conclusion",
  conclusionText: "These meals prove that eating under 500 calories can be delicious and satisfying. Try incorporating these recipes into your weekly meal plan!",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your meals and ensure they stay within your calorie goals."
};

const koreanContent = {
  title: "냉장고 재료로 만드는 500kcal 이하 한 끼 식사 30가지",
  description: "냉장고에 있는 기본 재료로 만드는 500칼로리 이하의 맛있고 건강한 식사 30가지를 만나보세요.",
  publishedDate: "2025년 2월 18일",
  intro: "냉장고에 있는 기본 재료로 맛있고 건강한 식사를 만들어보세요! 이 레시피들은 바쁜 날에 빠르고 건강한 식사가 필요할 때 완벽합니다. 500칼로리 이하의 만족스러운 식사 30가지를 살펴보겠습니다.",
  
  section1Title: "빠르고 쉬운 아침 식사 옵션",
  
  meal1Title: "1. 그릭 요거트 파르페 (280kcal)",
  meal1Ingredients: [
    "플레인 그릭 요거트 1컵 (130kcal)",
    "그라놀라 1/4컵 (120kcal)",
    "혼합 베리 1/2컵 (30kcal)"
  ],
  meal1Prep: "준비법: 재료를 유리잔에 층층이 쌓습니다.",
  
  meal2Title: "2. 채소 달걀 흰자 랩 (320kcal)",
  meal2Ingredients: [
    "달걀 흰자 3개 (50kcal)",
    "통밀 토르티야 1장 (120kcal)",
    "시금치 1컵 (10kcal)",
    "아보카도 1/4개 (80kcal)"
  ],
  meal2Prep: "준비법: 달걀 흰자를 스크램블하고 채소와 함께 감쌉니다.",
  
  meal3Title: "3. 오버나이트 오트밀 (350kcal)",
  meal3Ingredients: [
    "오트밀 1/2컵 (150kcal)",
    "아몬드 우유 1컵 (30kcal)",
    "치아씨드 1큰술 (60kcal)",
    "꿀 1큰술 (60kcal)"
  ],
  meal3Prep: "준비법: 재료를 섞어 냉장고에 하룻밤 보관합니다.",
  
  section2Title: "만족스러운 점심 아이디어",
  
  meal4Title: "4. 칠면조 상추 랩 (380kcal)",
  meal4Ingredients: [
    "칠면조 가슴살 4온스 (120kcal)",
    "큰 상추잎 4장 (10kcal)",
    "당근 1/4컵 (25kcal)",
    "훔무스 2큰술 (70kcal)"
  ],
  meal4Prep: "준비법: 칠면조와 채소를 상추로 감쌉니다.",
  
  meal5Title: "5. 참치 샐러드 보울 (420kcal)",
  meal5Ingredients: [
    "참치 통조림 1캔 (180kcal)",
    "혼합 채소 1컵 (20kcal)",
    "아보카도 1/4개 (80kcal)",
    "올리브 오일 1큰술 (120kcal)"
  ],
  meal5Prep: "준비법: 재료를 보울에 섞습니다.",
  
  meal6Title: "6. 치킨 스티어프라이 (450kcal)",
  meal6Ingredients: [
    "닭가슴살 4온스 (165kcal)",
    "혼합 채소 2컵 (100kcal)",
    "간장 1큰술 (10kcal)",
    "현미 1/2컵 (175kcal)"
  ],
  meal6Prep: "준비법: 닭고기와 채소를 볶고 현미와 함께 먹습니다.",
  
  section3Title: "건강한 저녁 식사 옵션",
  
  meal7Title: "7. 연어와 구운 채소 (480kcal)",
  meal7Ingredients: [
    "연어 4온스 (240kcal)",
    "혼합 채소 2컵 (100kcal)",
    "올리브 오일 1큰술 (120kcal)",
    "레몬 1/2개 (20kcal)"
  ],
  meal7Prep: "준비법: 연어와 채소를 함께 구웁니다.",
  
  meal8Title: "8. 채식 부처 보울 (460kcal)",
  meal8Ingredients: [
    "퀴노아 1컵 (220kcal)",
    "병아리콩 1컵 (130kcal)",
    "혼합 채소 2컵 (40kcal)",
    "타히니 드레싱 2큰술 (70kcal)"
  ],
  meal8Prep: "준비법: 재료를 보울에 층층이 쌓습니다.",
  
  meal9Title: "9. 새우 스캄피 (420kcal)",
  meal9Ingredients: [
    "새우 6온스 (180kcal)",
    "주키니 누들 2컵 (60kcal)",
    "올리브 오일 2큰술 (240kcal)",
    "마늘 2쪽 (10kcal)"
  ],
  meal9Prep: "준비법: 새우를 마늘과 함께 볶고 주키니 누들과 섞습니다.",
  
  section4Title: "200칼로리 이하의 빠른 간식",
  
  meal10Title: "10. 단백질 스무디 보울 (180kcal)",
  meal10Ingredients: [
    "단백질 파우더 1스쿱 (120kcal)",
    "바나나 1개 (30kcal)",
    "아몬드 우유 1컵 (30kcal)"
  ],
  meal10Prep: "준비법: 재료를 블렌더에 갈아 과일을 올립니다.",
  
  meal11Title: "11. 채소 스틱과 훔무스 (150kcal)",
  meal11Ingredients: [
    "혼합 채소 2컵 (50kcal)",
    "훔무스 1/4컵 (100kcal)"
  ],
  meal11Prep: "준비법: 채소를 썰어 훔무스와 함께 먹습니다.",
  
  meal12Title: "12. 그릭 요거트와 베리 (160kcal)",
  meal12Ingredients: [
    "그릭 요거트 1컵 (130kcal)",
    "혼합 베리 1/2컵 (30kcal)"
  ],
  meal12Prep: "준비법: 요거트 위에 베리를 올립니다.",
  
  tipsTitle: "성공을 위한 팁",
  tips: [
    "냉장고에 기본 재료를 항상 비축해두세요",
    "재료를 미리 준비해두세요",
    "적절한 양을 먹으세요",
    "충분한 수분을 섭취하세요",
    "배고픔 신호를 잘 듣으세요"
  ],
  
  conclusionTitle: "결론",
  conclusionText: "이러한 식사들은 500칼로리 이하로도 맛있고 만족스러운 식사를 할 수 있다는 것을 보여줍니다. 이 레시피들을 주간 식단에 포함시켜보세요!",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용해 식단의 칼로리를 분석하고 목표 칼로리 내에서 유지하세요."
};

export default function FridgeStapleMeals() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/fridge-staple-meals"
      />
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-8 mt-16">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/turkey-lettuce-wraps-illustration-NcD8dCE6eNowc84kIO9aISZFIPGjLC.jpg"
              alt={content.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {content.title}
                </h1>
                <div className="flex items-center text-gray-600">
                  <span>{content.publishedDate}</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="mb-8">{content.intro}</p>

              <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
                {content.section1Title}
              </h2>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal1Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal1Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal1Prep}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal2Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal2Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal2Prep}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal3Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal3Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal3Prep}</p>
              </div>

              <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
                {content.section2Title}
              </h2>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal4Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal4Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal4Prep}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal5Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal5Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal5Prep}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal6Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal6Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal6Prep}</p>
              </div>

              <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
                {content.section3Title}
              </h2>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal7Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal7Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal7Prep}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal8Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal8Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal8Prep}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal9Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal9Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal9Prep}</p>
              </div>

              <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
                {content.section4Title}
              </h2>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal10Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal10Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal10Prep}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal11Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal11Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal11Prep}</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-xl font-medium text-indigo-700 mb-4">
                  {content.meal12Title}
                </h3>
                <ul className="list-disc pl-6">
                  {content.meal12Ingredients.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                  ))}
                </ul>
                <p className="mt-4 font-medium">{content.meal12Prep}</p>
              </div>

              <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
                {content.tipsTitle}
              </h2>
              <ul className="list-disc pl-6 mb-8">
                {content.tips.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>

              <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
                {content.conclusionTitle}
              </h2>
              <p className="mb-8">{content.conclusionText}</p>

              <div className="bg-indigo-50 rounded-lg p-6 mt-8">
                <p className="mb-4 text-indigo-700 font-medium">{content.calculatorPromo}</p>
                <div className="text-center">
                  <a
                    href="https://recipe-calorie-calculator.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                  >
                    {language === 'ko' ? '칼로리 계산기 사용하기' : 'Use Calorie Calculator'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
} 