import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const englishContent = {
  title: "How to Create a Balanced Meal Under 500 Calories",
  description: "Learn how to create a satisfying meal under 500 calories with the right mix of protein, carbs, and healthy fats.",
  publishedDate: "March 27, 2024",
  intro: "Creating a balanced meal under 500 calories doesn't have to be complicated. Whether you're aiming to lose weight, maintain a healthy lifestyle, or simply eat smarter, a low-calorie meal can still be delicious and nutritious. In this guide, we'll show you how to build a satisfying meal with the right mix of protein, carbs, and healthy fats—all while keeping it under 500 calories.",
  
  whyTitle: "Why Choose a 500-Calorie Meal?",
  whyText: "A 500-calorie meal is a great option for portion control and calorie management. It allows you to enjoy flavorful food without overindulging, making it ideal for lunch, dinner, or even a hearty snack. By focusing on nutrient-dense ingredients, you can stay full longer and support your health goals.",
  
  stepsTitle: "Steps to Create a Balanced Meal Under 500 Calories",
  
  proteinTitle: "Start with Lean Protein (100-150 calories)",
  proteinIntro: "Protein keeps you full and supports muscle health. Opt for:",
  protein1: "3 oz (85g) of grilled chicken breast (~120 calories)",
  protein2: "3 oz (85g) of baked salmon (~150 calories)",
  protein3: "1/2 cup of tofu (~100 calories)",
  
  vegetablesTitle: "Add Fiber-Rich Vegetables (50-100 calories)",
  vegetablesIntro: "Veggies add volume and nutrients without many calories. Try:",
  vegetables1: "1 cup of steamed broccoli (~55 calories)",
  vegetables2: "2 cups of mixed greens (~20 calories)",
  vegetables3: "1 cup of roasted zucchini (~60 calories)",
  
  carbsTitle: "Incorporate Healthy Carbs (100-150 calories)",
  carbsIntro: "Complex carbs provide energy without spiking blood sugar. Choose:",
  carbs1: "1/2 cup of cooked quinoa (~110 calories)",
  carbs2: "1 small sweet potato (~100 calories)",
  carbs3: "1/4 cup of brown rice (~55 calories)",
  
  fatsTitle: "Include a Small Amount of Healthy Fats (50-100 calories)",
  fatsIntro: "Fats add flavor and satiety. Use sparingly:",
  fats1: "1 tsp of olive oil (~40 calories)",
  fats2: "1/4 avocado (~60 calories)",
  fats3: "10 almonds (~70 calories)",
  
  seasoningTitle: "Flavor with Low-Calorie Seasonings",
  seasoningText: "Skip creamy sauces and use herbs, spices, lemon juice, or vinegar to keep calories low while boosting taste.",
  
  sampleTitle: "Sample 500-Calorie Meal Idea",
  sampleSubtitle: "Grilled Chicken Salad",
  sample1: "3 oz grilled chicken breast (120 calories)",
  sample2: "2 cups mixed greens (20 calories)",
  sample3: "1/2 cup cooked quinoa (110 calories)",
  sample4: "1/4 avocado (60 calories)",
  sample5: "Lemon juice and black pepper for dressing (negligible calories)",
  sampleTotal: "Total: ~310 calories (leaving room for adjustments!)",
  
  tipsTitle: "Tips for Success",
  tip1: "Use a food scale or calorie-tracking app for accuracy.",
  tip2: "Prep ingredients in advance to save time.",
  tip3: "Experiment with spices to keep meals exciting without adding calories.",
  
  conclusionTitle: "Start Planning Your Next Meal Today!",
  conclusionText: "By following these steps, you can enjoy a balanced, flavorful meal under 500 calories that supports your wellness journey.",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your meals and ensure they stay within your calorie goals."
};

const koreanContent = {
  title: "500칼로리 이하의 균형 잡힌 식사 만드는 법",
  description: "단백질, 탄수화물, 건강한 지방을 적절히 조합해 500칼로리 이하의 만족스러운 식사를 만드는 방법을 알아보세요.",
  publishedDate: "2024년 3월 27일",
  intro: "500칼로리 이하의 균형 잡힌 식사를 만드는 것은 생각보다 어렵지 않습니다. 체중 감량, 건강한 생활 유지, 혹은 더 현명한 식습관을 목표로 하든, 저칼로리 식사도 맛있고 영양가 높게 즐길 수 있습니다. 이 가이드에서는 단백질, 탄수화물, 건강한 지방을 적절히 조합해 500칼로리 이하의 만족스러운 식사를 만드는 방법을 알려드리겠습니다.",
  
  whyTitle: "왜 500칼로리 식사를 선택해야 할까요?",
  whyText: "500칼로리 식사는 섭취량 조절과 칼로리 관리에 최적입니다. 과식 없이 맛있는 음식을 즐길 수 있어 점심, 저녁, 혹은 든든한 간식으로 이상적입니다. 영양 밀도가 높은 재료를 사용하면 포만감을 오래 유지하며 건강 목표를 지원할 수 있습니다.",
  
  stepsTitle: "500칼로리 이하 균형 식사 만드는 단계",
  
  proteinTitle: "저지방 단백질로 시작 (100-150칼로리)",
  proteinIntro: "단백질은 포만감을 주고 근육 건강을 돕습니다. 추천 재료:",
  protein1: "구운 닭가슴살 85g (~120칼로리)",
  protein2: "구운 연어 85g (~150칼로리)",
  protein3: "두부 1/2컵 (~100칼로리)",
  
  vegetablesTitle: "섬유질이 풍부한 채소 추가 (50-100칼로리)",
  vegetablesIntro: "채소는 칼로리를 낮추면서 양과 영양을 더합니다. 추천:",
  vegetables1: "찐 브로콜리 1컵 (~55칼로리)",
  vegetables2: "샐러드 채소 2컵 (~20칼로리)",
  vegetables3: "구운 호박 1컵 (~60칼로리)",
  
  carbsTitle: "건강한 탄수화물 포함 (100-150칼로리)",
  carbsIntro: "복합 탄수화물은 혈당 급등 없이 에너지를 제공합니다. 추천:",
  carbs1: "퀴노아 1/2컵 (~110칼로리)",
  carbs2: "작은 고구마 1개 (~100칼로리)",
  carbs3: "현미 1/4컵 (~55칼로리)",
  
  fatsTitle: "소량의 건강한 지방 추가 (50-100칼로리)",
  fatsIntro: "지방은 풍미와 포만감을 더합니다. 적당히 사용:",
  fats1: "올리브 오일 1작은술 (~40칼로리)",
  fats2: "아보카도 1/4개 (~60칼로리)",
  fats3: "아몬드 10개 (~70칼로리)",
  
  seasoningTitle: "저칼로리 양념으로 맛 내기",
  seasoningText: "크림 소스 대신 허브, 향신료, 레몬즙, 식초를 사용해 칼로리를 낮추고 맛을 업그레이드하세요.",
  
  sampleTitle: "500칼로리 이하 샘플 식사 아이디어",
  sampleSubtitle: "구운 닭가슴살 샐러드",
  sample1: "구운 닭가슴살 85g (120칼로리)",
  sample2: "샐러드 채소 2컵 (20칼로리)",
  sample3: "퀴노아 1/2컵 (110칼로리)",
  sample4: "아보카도 1/4개 (60칼로리)",
  sample5: "레몬즙과 후추 드레싱 (칼로리 거의 없음)",
  sampleTotal: "총합: ~310칼로리 (조정 여유분 포함!)",
  
  tipsTitle: "성공을 위한 팁",
  tip1: "음식 저울이나 칼로리 추적 앱으로 정확히 측정하세요.",
  tip2: "재료를 미리 준비해 시간을 절약하세요.",
  tip3: "칼로리 추가 없이 다양한 향신료로 맛을 실험해보세요.",
  
  conclusionTitle: "지금 다음 식사를 계획해보세요!",
  conclusionText: "이 단계를 따르면 500칼로리 이하로도 균형 잡히고 맛있는 식사를 즐기며 건강 여정을 지원할 수 있습니다.",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용해 식사의 칼로리를 분석하고 목표 칼로리 내에서 유지하세요."
};

export default function BalancedMealUnder500() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/balanced-meal-under-500"
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
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/balanced-meal-under-500-calories-illustration-KyD5keWpuLFNp8FLAsQECRs2sslBSB.jpg"
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
              {content.stepsTitle}
            </h2>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.proteinTitle}
            </h3>
            <p className="mb-4">{content.proteinIntro}</p>
            <ul className="list-disc pl-6 mb-8">
              <li>{content.protein1}</li>
              <li>{content.protein2}</li>
              <li>{content.protein3}</li>
            </ul>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.vegetablesTitle}
            </h3>
            <p className="mb-4">{content.vegetablesIntro}</p>
            <ul className="list-disc pl-6 mb-8">
              <li>{content.vegetables1}</li>
              <li>{content.vegetables2}</li>
              <li>{content.vegetables3}</li>
            </ul>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.carbsTitle}
            </h3>
            <p className="mb-4">{content.carbsIntro}</p>
            <ul className="list-disc pl-6 mb-8">
              <li>{content.carbs1}</li>
              <li>{content.carbs2}</li>
              <li>{content.carbs3}</li>
            </ul>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.fatsTitle}
            </h3>
            <p className="mb-4">{content.fatsIntro}</p>
            <ul className="list-disc pl-6 mb-8">
              <li>{content.fats1}</li>
              <li>{content.fats2}</li>
              <li>{content.fats3}</li>
            </ul>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.seasoningTitle}
            </h3>
            <p className="mb-8">{content.seasoningText}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.sampleTitle}
            </h2>
            <h3 className="text-xl font-medium text-indigo-700 mb-4">
              {content.sampleSubtitle}
            </h3>
            <ul className="list-disc pl-6 mb-4">
              <li>{content.sample1}</li>
              <li>{content.sample2}</li>
              <li>{content.sample3}</li>
              <li>{content.sample4}</li>
              <li>{content.sample5}</li>
            </ul>
            <p className="font-medium mb-8">{content.sampleTotal}</p>

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