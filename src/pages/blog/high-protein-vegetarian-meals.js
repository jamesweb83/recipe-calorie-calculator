import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const englishContent = {
  title: "High-Protein, Low-Calorie Meal Ideas for Vegetarians",
  description: "Discover delicious high-protein, low-calorie vegetarian meals that keep you full and fit. Perfect for plant-based eaters looking to maintain a healthy diet.",
  publishedDate: "February 19, 2025",
  intro: "Being a vegetarian doesn't mean missing out on protein or piling on calories. These high-protein, low-calorie meal ideas are tailored for plant-based eaters, offering delicious ways to stay full and fit. Let's explore some creative vegetarian options that pack a protein punch without the extra calories!",
  
  section1Title: "Why High-Protein, Low-Calorie Matters for Vegetarians",
  section1Text: "Protein is key for muscle health and satiety, especially on a vegetarian diet. Pairing it with low-calorie ingredients ensures you meet your nutritional goals while keeping things light—ideal for weight management or an active lifestyle.",
  
  section2Title: "High-Protein, Low-Calorie Vegetarian Meal Ideas",
  
  meal1Title: "1. Tofu Veggie Scramble (220 cal, 18g protein)",
  meal1Ingredients: [
    "1/2 cup firm tofu (100 cal, 10g protein)",
    "1 cup spinach (10 cal, 1g protein)",
    "1 tbsp nutritional yeast (40 cal, 4g protein)"
  ],
  meal1Prep: "Prep: Crumble tofu, sauté with spinach, sprinkle yeast.",
  
  meal2Title: "2. Lentil Zucchini Boats (250 cal, 15g protein)",
  meal2Ingredients: [
    "1/2 cup cooked lentils (115 cal, 9g protein)",
    "1 zucchini (30 cal, 1g protein)",
    "1 tbsp tahini (90 cal, 3g protein)"
  ],
  meal2Prep: "Prep: Halve zucchini, stuff with lentils, drizzle tahini.",
  
  meal3Title: "3. Edamame Salad (280 cal, 20g protein)",
  meal3Ingredients: [
    "1 cup edamame (120 cal, 11g protein)",
    "1 cup kale (35 cal, 2g protein)",
    "1 tbsp hemp seeds (55 cal, 5g protein)"
  ],
  meal3Prep: "Prep: Toss ingredients with lemon juice and a dash of salt.",
  
  meal4Title: "4. Chickpea Protein Bowl (300 cal, 16g protein)",
  meal4Ingredients: [
    "1/2 cup chickpeas (130 cal, 7g protein)",
    "1 cup cauliflower rice (25 cal, 2g protein)",
    "1 tbsp almond butter (100 cal, 3g protein)"
  ],
  meal4Prep: "Prep: Roast chickpeas, mix with cauli rice, drizzle almond butter.",
  
  meal5Title: "5. Greek Yogurt & Chia Parfait (260 cal, 22g protein)",
  meal5Ingredients: [
    "3/4 cup plain Greek yogurt (120 cal, 18g protein)",
    "1 tbsp chia seeds (60 cal, 3g protein)",
    "1/2 cup berries (30 cal, 0g protein)"
  ],
  meal5Prep: "Prep: Layer yogurt, chia, and berries in a glass.",
  
  tipsTitle: "Tips for Success",
  tips: [
    "Use spices to boost flavor without calories.",
    "Batch prep protein sources like lentils or chickpeas.",
    "Pair with fiber-rich veggies for extra fullness."
  ],
  
  conclusionTitle: "Conclusion",
  conclusionText: "These vegetarian meals prove you can enjoy high-protein, low-calorie goodness without meat. Try one today and fuel your plant-based journey!",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your meals and ensure they stay within your calorie goals."
};

const koreanContent = {
  title: "채식주의자를 위한 고단백 저칼로리 식단 아이디어",
  description: "채식주의자를 위한 맛있고 건강한 고단백 저칼로리 식단 아이디어를 만나보세요.",
  publishedDate: "2025년 2월 19일",
  intro: "채식주의자라도 단백질을 놓치거나 칼로리를 과다 섭취할 필요는 없습니다. 이 고단백 저칼로리 식단 아이디어는 채식주의자를 위해 특별히 맞춤화되어 있어, 맛있게 먹으면서도 포만감을 유지하고 건강을 지킬 수 있습니다. 칼로리 걱정 없이 단백질을 충분히 섭취할 수 있는 창의적인 채식 옵션들을 살펴보겠습니다!",
  
  section1Title: "채식주의자에게 고단백 저칼로리가 중요한 이유",
  section1Text: "단백질은 특히 채식 식단에서 근육 건강과 포만감에 핵심적인 역할을 합니다. 저칼로리 재료와 함께 조합하면 영양 목표를 달성하면서도 가벼운 식사를 할 수 있어 체중 관리나 활발한 생활을 하는 데 이상적입니다.",
  
  section2Title: "고단백 저칼로리 채식 식단 아이디어",
  
  meal1Title: "1. 두부 채소 스크램블 (220kcal, 단백질 18g)",
  meal1Ingredients: [
    "단단한 두부 1/2컵 (100kcal, 단백질 10g)",
    "시금치 1컵 (10kcal, 단백질 1g)",
    "영양효모 1큰술 (40kcal, 단백질 4g)"
  ],
  meal1Prep: "준비법: 두부를 부수고 시금치와 함께 볶은 후 영양효모를 뿌립니다.",
  
  meal2Title: "2. 렌틸 주키니 보트 (250kcal, 단백질 15g)",
  meal2Ingredients: [
    "삶은 렌틸 1/2컵 (115kcal, 단백질 9g)",
    "주키니 1개 (30kcal, 단백질 1g)",
    "타히니 1큰술 (90kcal, 단백질 3g)"
  ],
  meal2Prep: "준비법: 주키니를 반으로 자르고 렌틸을 채운 후 타히니를 뿌립니다.",
  
  meal3Title: "3. 완두콩 샐러드 (280kcal, 단백질 20g)",
  meal3Ingredients: [
    "완두콩 1컵 (120kcal, 단백질 11g)",
    "케일 1컵 (35kcal, 단백질 2g)",
    "헴프씨드 1큰술 (55kcal, 단백질 5g)"
  ],
  meal3Prep: "준비법: 재료를 레몬즙과 소금으로 간하여 섞습니다.",
  
  meal4Title: "4. 병아리콩 단백질 보울 (300kcal, 단백질 16g)",
  meal4Ingredients: [
    "병아리콩 1/2컵 (130kcal, 단백질 7g)",
    "꽃양배추 라이스 1컵 (25kcal, 단백질 2g)",
    "아몬드 버터 1큰술 (100kcal, 단백질 3g)"
  ],
  meal4Prep: "준비법: 병아리콩을 구워 꽃양배추 라이스와 섞고 아몬드 버터를 뿌립니다.",
  
  meal5Title: "5. 그릭 요거트 & 치아 파르페 (260kcal, 단백질 22g)",
  meal5Ingredients: [
    "플레인 그릭 요거트 3/4컵 (120kcal, 단백질 18g)",
    "치아씨드 1큰술 (60kcal, 단백질 3g)",
    "베리류 1/2컵 (30kcal, 단백질 0g)"
  ],
  meal5Prep: "준비법: 요거트, 치아씨드, 베리를 유리잔에 층층이 쌓습니다.",
  
  tipsTitle: "성공을 위한 팁",
  tips: [
    "칼로리 없이 맛을 높이려면 양념을 활용하세요.",
    "렌틸이나 병아리콩 같은 단백질 공급원을 미리 준비해두세요.",
    "섬유질이 풍부한 채소와 함께 먹어 포만감을 높이세요."
  ],
  
  conclusionTitle: "결론",
  conclusionText: "이러한 채식 식단들은 고기 없이도 고단백 저칼로리 식사를 즐길 수 있다는 것을 보여줍니다. 오늘부터 하나를 시도해보고 채식 생활을 시작해보세요!",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용해 식단의 칼로리를 분석하고 목표 칼로리 내에서 유지하세요."
};

export default function HighProteinVegetarianMeals() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/high-protein-vegetarian-meals"
      />
      <Navigation />

      <main className="max-w-4xl mx-auto px-4 py-8 mt-16">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/tofu-veggie-scramble-illustration-noBiYedv9jVEq1I72YezURRVCVqU0O.jpg"
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
              <p className="mb-6">{content.section1Text}</p>

              <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
                {content.section2Title}
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