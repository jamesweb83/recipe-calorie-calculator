// src/pages/blog/under-300-calorie-breakfast.js
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const englishContent = {
  title: "A Collection of Under 300-Calorie Breakfast Recipes",
  description: "Starting your day with a healthy, low-calorie breakfast doesn't have to be boring. These under 300-calorie recipes are quick, delicious, and packed with nutrients to keep you energized.",
  publishedDate: "March 29, 2024",
  intro: "Starting your day with a healthy, low-calorie breakfast doesn't have to be boring. These under 300-calorie recipes are quick, delicious, and packed with nutrients to keep you energized. Here's a roundup of easy breakfast ideas perfect for busy mornings or weight-conscious eaters.",
  
  whyTitle: "Why Choose a 300-Calorie Breakfast?",
  whyText: "A 300-calorie breakfast strikes a balance between lightness and satisfaction. It fuels your morning without weighing you down, making it ideal for healthy living or weight management. Let's explore these tasty options!",
  
  recipesTitle: "Under 300-Calorie Breakfast Recipes",
  
  parfaitTitle: "Greek Yogurt Parfait (250 calories)",
  parfaitIngredients: "3/4 cup plain Greek yogurt (120 cal)\n1/2 cup mixed berries (30 cal)\n1 tbsp chia seeds (60 cal)\n1 tsp honey (40 cal)",
  parfaitPrep: "Prep: Layer ingredients in a glass. Ready in 5 minutes!",
  
  toastTitle: "Avocado Egg Toast (280 calories)",
  toastIngredients: "1 slice whole-grain bread (100 cal)\n1/4 avocado, mashed (60 cal)\n1 poached egg (70 cal)\nPinch of salt and pepper (0 cal)",
  toastPrep: "Prep: Toast bread, spread avocado, top with egg.",
  
  oatmealTitle: "Oatmeal with Almonds (290 calories)",
  oatmealIngredients: "1/3 cup rolled oats (100 cal)\n1 cup unsweetened almond milk (30 cal)\n10 almonds (70 cal)\nDash of cinnamon (0 cal)",
  oatmealPrep: "Prep: Cook oats in milk, top with almonds and cinnamon.",
  
  scrambleTitle: "Veggie Scramble (220 calories)",
  scrambleIngredients: "2 egg whites (35 cal)\n1 whole egg (70 cal)\n1 cup spinach (10 cal)\n1/2 cup diced bell peppers (25 cal)",
  scramblePrep: "Prep: Scramble eggs with veggies in a non-stick pan.",
  
  smoothieTitle: "Banana Smoothie (270 calories)",
  smoothieIngredients: "1 small banana (90 cal)\n1 cup unsweetened almond milk (30 cal)\n1 tbsp peanut butter (90 cal)\nHandful of spinach (10 cal)",
  smoothiePrep: "Prep: Blend all ingredients until smooth.",
  
  tipsTitle: "Tips for Success",
  tip1: "Prep ingredients the night before to save time.",
  tip2: "Use a calorie tracker to adjust portions.",
  tip3: "Swap ingredients based on your preferences or pantry.",
  
  conclusionTitle: "Start Your Day Right!",
  conclusionText: "These under 300-calorie breakfasts are perfect for a healthy start. Pick one and kick off your day right!",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your meals and ensure they stay within your calorie goals."
};

const koreanContent = {
  title: "아침 식사로 좋은 300칼로리 미만 레시피 모음",
  description: "건강하고 저칼로리 아침 식사로 하루를 시작하는 건 지루할 필요가 없습니다. 300칼로리 미만인 이 레시피들은 빠르고 맛있으며, 아침을 활기차게 만들어줄 영양소로 가득합니다.",
  publishedDate: "2024년 3월 29일",
  intro: "건강하고 저칼로리 아침 식사로 하루를 시작하는 건 지루할 필요가 없습니다. 300칼로리 미만인 이 레시피들은 빠르고 맛있으며, 아침을 활기차게 만들어줄 영양소로 가득합니다. 바쁜 아침이나 체중 관리에 딱 맞는 간단한 아이디어를 모아봤습니다.",
  
  whyTitle: "왜 300칼로리 아침 식사가 좋을까요?",
  whyText: "300칼로리 아침 식사는 가벼우면서도 포만감을 주는 균형을 맞춥니다. 부담 없이 에너지를 충전해 건강한 생활이나 체중 관리에 이상적입니다. 맛있는 선택지를 함께 알아볼까요?",
  
  recipesTitle: "300칼로리 미만 아침 식사 레시피",
  
  parfaitTitle: "그릭 요거트 파르페 (250칼로리)",
  parfaitIngredients: "플레인 그릭 요거트 3/4컵 (120칼로리)\n혼합 베리 1/2컵 (30칼로리)\n치아씨드 1숟가락 (60칼로리)\n꿀 1작은술 (40칼로리)",
  parfaitPrep: "준비: 유리잔에 재료를 층층이 쌓으면 5분 만에 완성!",
  
  toastTitle: "아보카도 달걀 토스트 (280칼로리)",
  toastIngredients: "통곡물 빵 1조각 (100칼로리)\n아보카도 1/4개, 으깸 (60칼로리)\n수란 1개 (70칼로리)\n소금, 후추 약간 (0칼로리)",
  toastPrep: "준비: 빵을 굽고 아보카도를 바른 뒤 수란 올리기.",
  
  oatmealTitle: "아몬드 오트밀 (290칼로리)",
  oatmealIngredients: "롤드 오트 1/3컵 (100칼로리)\n무가당 아몬드 밀크 1컵 (30칼로리)\n아몬드 10개 (70칼로리)\n계피 약간 (0칼로리)",
  oatmealPrep: "준비: 오트를 밀크에 끓이고 아몬드, 계피 뿌리기.",
  
  scrambleTitle: "채소 스크램블 (220칼로리)",
  scrambleIngredients: "흰자 2개 (35칼로리)\n전체 달걀 1개 (70칼로리)\n시금치 1컵 (10칼로리)\n다진 피망 1/2컵 (25칼로리)",
  scramblePrep: "준비: 논스틱 팬에서 채소와 달걀 섞어 볶기.",
  
  smoothieTitle: "바나나 스무디 (270칼로리)",
  smoothieIngredients: "작은 바나나 1개 (90칼로리)\n무가당 아몬드 밀크 1컵 (30칼로리)\n땅콩버터 1숟가락 (90칼로리)\n시금치 한 줌 (10칼로리)",
  smoothiePrep: "준비: 모든 재료를 블렌더로 갈아 부드럽게.",
  
  tipsTitle: "성공 팁",
  tip1: "전날 밤 재료를 준비해 시간을 절약하세요.",
  tip2: "칼로리 앱으로 양을 조정해보세요.",
  tip3: "취향이나 재고에 맞춰 재료를 바꿔보세요.",
  
  conclusionTitle: "오늘 아침을 즐겨보세요!",
  conclusionText: "이 300칼로리 미만 아침 식사로 건강한 하루를 시작하세요. 하나 골라 오늘 아침을 즐겨보세요!",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용해 식사의 칼로리를 분석하고 목표 칼로리 내에서 유지하세요."
};

export default function Under300CalorieBreakfast() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/under-300-calorie-breakfast"
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
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/under-300-calorie-breakfast-illustration-SRIO6R0xOvOkgvojEjLj98Uq9ixnv9.jpg"
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
              {content.recipesTitle}
            </h2>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.parfaitTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.parfaitIngredients}</pre>
              <p className="text-gray-600">{content.parfaitPrep}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.toastTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.toastIngredients}</pre>
              <p className="text-gray-600">{content.toastPrep}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.oatmealTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.oatmealIngredients}</pre>
              <p className="text-gray-600">{content.oatmealPrep}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.scrambleTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.scrambleIngredients}</pre>
              <p className="text-gray-600">{content.scramblePrep}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.smoothieTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.smoothieIngredients}</pre>
              <p className="text-gray-600">{content.smoothiePrep}</p>
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