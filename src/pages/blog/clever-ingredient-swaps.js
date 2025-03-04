// src/pages/blog/clever-ingredient-swaps.js
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const englishContent = {
  title: "Clever Ingredient Swaps to Cut Calories (e.g., Avocado Instead of Butter)",
  description: "Reducing calories doesn't mean sacrificing flavor. By making smart ingredient swaps, you can enjoy your favorite meals with fewer calories and more nutrition.",
  publishedDate: "March 28, 2024",
  intro: "Reducing calories doesn't mean sacrificing flavor. By making smart ingredient swaps, you can enjoy your favorite meals with fewer calories and more nutrition. In this post, we'll share practical tips to lower your calorie intake using simple substitutes—like swapping butter for avocado—and keep your dishes delicious.",
  
  whyTitle: "Why Ingredient Swaps Matter",
  whyText: "Swapping high-calorie ingredients for lighter alternatives helps you manage your calorie intake without feeling deprived. These changes can also boost nutrients, making your meals healthier overall. Ready to cut calories the easy way? Let's dive in!",
  
  swapsTitle: "Top Ingredient Swaps to Reduce Calories",
  
  butterTitle: "Butter → Avocado (Save ~50-100 calories per tablespoon)",
  butterCalories: "Butter: 100 calories/tbsp\nAvocado: 50 calories/tbsp (mashed)",
  butterTip: "Tip: Use mashed avocado on toast or in baking for creamy texture and healthy fats.",
  
  sourCreamTitle: "Sour Cream → Greek Yogurt (Save ~30-40 calories per tablespoon)",
  sourCreamCalories: "Sour Cream: 50 calories/tbsp\nGreek Yogurt: 15-20 calories/tbsp",
  sourCreamTip: "Tip: Perfect for dips, dressings, or toppings with added protein.",
  
  riceTitle: "White Rice → Cauliflower Rice (Save ~150 calories per cup)",
  riceCalories: "White Rice: 200 calories/cup\nCauliflower Rice: 25-30 calories/cup",
  riceTip: "Tip: Blend or grate cauliflower for a low-carb, veggie-packed base.",
  
  sugarTitle: "Sugar → Cinnamon or Stevia (Save ~50 calories per teaspoon)",
  sugarCalories: "Sugar: 50 calories/tsp\nCinnamon/Stevia: 0-5 calories/tsp",
  sugarTip: "Tip: Sweeten oatmeal or coffee naturally without the calorie load.",
  
  pastaTitle: "Pasta → Zucchini Noodles (Save ~150-200 calories per cup)",
  pastaCalories: "Pasta: 200 calories/cup\nZucchini Noodles: 20-30 calories/cup",
  pastaTip: "Tip: Spiralize zucchini for a light, nutrient-rich pasta alternative.",
  
  sampleTitle: "Sample Recipe: Avocado Toast vs. Butter Toast",
  sampleButter: "Butter Toast: Bread (100 cal) + 1 tbsp butter (100 cal) = 200 calories",
  sampleAvocado: "Avocado Toast: Bread (100 cal) + 1 tbsp mashed avocado (50 cal) = 150 calories",
  sampleSavings: "Savings: 50 calories + extra nutrients!",
  
  tipsTitle: "How to Make Swaps Work for You",
  tip1: "Start small: Replace one ingredient at a time.",
  tip2: "Experiment with flavors: Combine swaps with spices for variety.",
  tip3: "Check labels: Ensure substitutes fit your calorie goals.",
  
  conclusionTitle: "Start Your Calorie-Saving Journey Today!",
  conclusionText: "With these clever swaps, you can cut calories effortlessly while keeping your meals tasty and satisfying. Try one today and taste the difference!",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your meals and ensure they stay within your calorie goals."
};

const koreanContent = {
  title: "식재료 대체로 칼로리 줄이는 꿀팁 (예: 버터 대신 아보카도)",
  description: "칼로리를 줄인다고 맛을 포기할 필요는 없습니다. 영리한 식재료 대체를 통해 좋아하는 음식을 더 적은 칼로리로, 더 건강하게 즐길 수 있습니다.",
  publishedDate: "2024년 3월 28일",
  intro: "칼로리를 줄인다고 맛을 포기할 필요는 없습니다. 영리한 식재료 대체를 통해 좋아하는 음식을 더 적은 칼로리로, 더 건강하게 즐길 수 있습니다. 이 글에서는 버터 대신 아보카도를 사용하는 것과 같은 간단한 대체 팁으로 칼로리를 낮추고 맛을 유지하는 방법을 소개합니다.",
  
  whyTitle: "왜 식재료 대체가 중요한가요?",
  whyText: "고칼로리 재료를 가벼운 대체품으로 바꾸면 섭취 칼로리를 줄이면서도 만족감을 유지할 수 있습니다. 게다가 영양소를 늘려 더 건강한 식단을 만들 수 있죠. 칼로리를 쉽게 줄일 준비 되셨나요? 시작해봅시다!",
  
  swapsTitle: "칼로리를 줄이는 최고의 대체 팁",
  
  butterTitle: "버터 → 아보카도 (1숟가락당 ~50-100칼로리 절약)",
  butterCalories: "버터: 100칼로리/숟가락\n아보카도: 50칼로리/숟가락 (으깬 것)",
  butterTip: "팁: 토스트나 베이킹에 으깬 아보카도를 사용해 크리미한 질감과 건강한 지방 추가.",
  
  sourCreamTitle: "사워크림 → 그릭 요거트 (1숟가락당 ~30-40칼로리 절약)",
  sourCreamCalories: "사워크림: 50칼로리/숟가락\n그릭 요거트: 15-20칼로리/숟가락",
  sourCreamTip: "팁: 딥, 드레싱, 토핑에 사용하며 단백질까지 챙기세요.",
  
  riceTitle: "흰쌀 → 꽃양배추 쌀 (1컵당 ~150칼로리 절약)",
  riceCalories: "흰쌀: 200칼로리/컵\n꽃양배추 쌀: 25-30칼로리/컵",
  riceTip: "팁: 꽃양배추를 갈아 저탄수화물, 채소 가득한 밥 대체.",
  
  sugarTitle: "설탕 → 계피 또는 스테비아 (1작은술당 ~50칼로리 절약)",
  sugarCalories: "설탕: 50칼로리/작은술\n계피/스테비아: 0-5칼로리/작은술",
  sugarTip: "팁: 오트밀이나 커피를 자연스럽게 달게 하세요.",
  
  pastaTitle: "파스타 → 애호박 면 (1컵당 ~150-200칼로리 절약)",
  pastaCalories: "파스타: 200칼로리/컵\n애호박 면: 20-30칼로리/컵",
  pastaTip: "팁: 애호박을 나선형으로 잘라 가볍고 영양 풍부한 대체품으로.",
  
  sampleTitle: "샘플 레시피: 아보카도 토스트 vs. 버터 토스트",
  sampleButter: "버터 토스트: 빵 (100칼로리) + 버터 1숟가락 (100칼로리) = 200칼로리",
  sampleAvocado: "아보카도 토스트: 빵 (100칼로리) + 으깬 아보카도 1숟가락 (50칼로리) = 150칼로리",
  sampleSavings: "절약: 50칼로리 + 추가 영양소!",
  
  tipsTitle: "대체를 성공시키는 법",
  tip1: "작게 시작: 한 번에 한 가지씩 바꿔보세요.",
  tip2: "맛 실험: 향신료와 함께 사용해 다양성 더하기.",
  tip3: "라벨 확인: 대체품이 칼로리 목표에 맞는지 체크.",
  
  conclusionTitle: "오늘부터 칼로리 절약을 시작하세요!",
  conclusionText: "이 간단한 대체 팁으로 칼로리를 손쉽게 줄이고 맛있고 만족스러운 식사를 즐길 수 있습니다. 오늘 한 가지를 시도해보세요!",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용해 식사의 칼로리를 분석하고 목표 칼로리 내에서 유지하세요."
};

export default function CleverIngredientSwaps() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/clever-ingredient-swaps"
      />
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16">
        <article className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
              {content.title}
            </h1>
            <p className="text-gray-600 italic">
              {content.publishedDate}
            </p>
            <div className="relative w-full h-[400px] mt-8 rounded-lg overflow-hidden">
              <Image
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/ingredient-swaps-cut-calories-illustration-kOq12M0pcPMhbApuKC0acJfFDCgm6d.jpg"
                alt={content.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none prose-indigo">
            <p className="mb-8">{content.intro}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.whyTitle}
            </h2>
            <p className="mb-8">{content.whyText}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.swapsTitle}
            </h2>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.butterTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.butterCalories}</pre>
              <p className="text-gray-600">{content.butterTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.sourCreamTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.sourCreamCalories}</pre>
              <p className="text-gray-600">{content.sourCreamTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.riceTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.riceCalories}</pre>
              <p className="text-gray-600">{content.riceTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.sugarTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.sugarCalories}</pre>
              <p className="text-gray-600">{content.sugarTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.pastaTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.pastaCalories}</pre>
              <p className="text-gray-600">{content.pastaTip}</p>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.sampleTitle}
            </h2>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <p className="text-gray-600 mb-2">{content.sampleButter}</p>
              <p className="text-gray-600 mb-2">{content.sampleAvocado}</p>
              <p className="font-medium text-gray-700">{content.sampleSavings}</p>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.tipsTitle}
            </h2>
            <ul className="list-disc pl-6 mb-8">
              <li>{content.tip1}</li>
              <li>{content.tip2}</li>
              <li>{content.tip3}</li>
            </ul>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.conclusionTitle}
            </h2>
            <p className="mb-8">{content.conclusionText}</p>

            <div className="bg-indigo-50 p-6 rounded-lg mt-8">
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
        </article>
      </main>

      <Footer />
    </div>
  );
} 