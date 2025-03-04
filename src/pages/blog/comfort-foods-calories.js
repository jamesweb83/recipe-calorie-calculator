import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

// 영어 콘텐츠
const englishContent = {
  title: "How Many Calories Are in Your Favorite Comfort Foods?",
  description: "Discover the calorie content of popular comfort foods and learn how to enjoy them while maintaining a healthy diet.",
  publishedDate: "Published: March 26, 2024",
  
  intro: "Comfort foods have a special place in our hearts and stomachs. They're the dishes we turn to when we need a pick-me-up or want to celebrate. But have you ever wondered about their calorie content? In this post, we'll explore some popular comfort foods and their calorie counts, plus tips for enjoying them guilt-free.",
  
  macAndCheeseTitle: "1. Mac and Cheese",
  macAndCheeseCalories: "Calories: ~350-400 per serving",
  macAndCheeseIngredients: "Main ingredients: Pasta, cheese, milk, butter, flour",
  macAndCheeseTip: "Tip: Use whole-grain pasta and reduced-fat cheese to cut calories while maintaining flavor.",
  
  friedChickenTitle: "2. Fried Chicken",
  friedChickenCalories: "Calories: ~400-450 per piece",
  friedChickenIngredients: "Main ingredients: Chicken, flour, oil, spices",
  friedChickenTip: "Tip: Bake instead of fry, or remove the skin to significantly reduce calories.",
  
  pizzaTitle: "3. Pizza",
  pizzaCalories: "Calories: ~250-300 per slice",
  pizzaIngredients: "Main ingredients: Dough, cheese, sauce, toppings",
  pizzaTip: "Tip: Choose thin crust and load up on vegetables to keep calories in check.",
  
  iceCreamTitle: "4. Ice Cream",
  iceCreamCalories: "Calories: ~200-250 per cup",
  iceCreamIngredients: "Main ingredients: Cream, sugar, flavorings",
  iceCreamTip: "Tip: Try frozen yogurt or sorbet for a lower-calorie treat.",
  
  chocolateTitle: "5. Chocolate",
  chocolateCalories: "Calories: ~150-200 per bar",
  chocolateIngredients: "Main ingredients: Cocoa, sugar, milk (in milk chocolate)",
  chocolateTip: "Tip: Choose dark chocolate with higher cocoa content for more antioxidants and less sugar.",
  
  whyCaloriesAddUpTitle: "Why Calories Add Up",
  whyCaloriesAddUpText: "Comfort foods often pack extra calories due to their rich ingredients and cooking methods. Frying, heavy sauces, and generous portions all contribute to higher calorie counts.",
  
  tipsTitle: "Tips for Enjoying Comfort Foods Guilt-Free",
  tip1: "Practice portion control - use smaller plates and bowls",
  tip2: "Make healthier versions at home with better ingredients",
  tip3: "Balance with physical activity",
  tip4: "Eat mindfully and savor each bite",
  
  conclusionTitle: "Enjoy Your Comfort Foods Wisely",
  conclusionText: "Understanding the calorie content of your favorite comfort foods helps you make informed choices. Remember, it's not about deprivation but about balance and moderation.",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your favorite comfort food recipes and make informed choices about your meals."
};

// 한국어 콘텐츠
const koreanContent = {
  title: "당신이 좋아하는 위안 음식의 칼로리는 얼마일까?",
  description: "인기 있는 위안 음식들의 칼로리 함량을 알아보고 건강한 식단을 유지하면서 즐기는 방법을 배워보세요.",
  publishedDate: "게시일: 2024년 3월 26일",
  
  intro: "위안 음식은 우리의 마음과 위장에 특별한 자리를 차지합니다. 기분이 좋지 않을 때나 축하하고 싶을 때 찾는 음식이죠. 하지만 이 음식들의 칼로리는 얼마나 될까요? 이 글에서는 인기 있는 위안 음식들과 그들의 칼로리, 그리고 죄책감 없이 즐기는 팁을 알아보겠습니다.",
  
  macAndCheeseTitle: "1. 맥앤치즈",
  macAndCheeseCalories: "칼로리: 1인분당 약 350-400칼로리",
  macAndCheeseIngredients: "주요 재료: 파스타, 치즈, 우유, 버터, 밀가루",
  macAndCheeseTip: "팁: 통곡물 파스타와 저지방 치즈를 사용해 칼로리를 줄이면서도 맛을 유지하세요.",
  
  friedChickenTitle: "2. 치킨",
  friedChickenCalories: "칼로리: 1조각당 약 400-450칼로리",
  friedChickenIngredients: "주요 재료: 닭고기, 밀가루, 기름, 향신료",
  friedChickenTip: "팁: 튀기지 않고 구워서, 또는 껍질을 제거해 칼로리를 크게 줄이세요.",
  
  pizzaTitle: "3. 피자",
  pizzaCalories: "칼로리: 1조각당 약 250-300칼로리",
  pizzaIngredients: "주요 재료: 도우, 치즈, 소스, 토핑",
  pizzaTip: "팁: 얇은 크러스트를 선택하고 채소를 많이 올려 칼로리를 조절하세요.",
  
  iceCreamTitle: "4. 아이스크림",
  iceCreamCalories: "칼로리: 1컵당 약 200-250칼로리",
  iceCreamIngredients: "주요 재료: 크림, 설탕, 향료",
  iceCreamTip: "팁: 칼로리가 낮은 프로즌 요구르트나 셔벗을 시도해보세요.",
  
  chocolateTitle: "5. 초콜릿",
  chocolateCalories: "칼로리: 1바당 약 150-200칼로리",
  chocolateIngredients: "주요 재료: 코코아, 설탕, 우유(밀크 초콜릿의 경우)",
  chocolateTip: "팁: 항산화 물질이 많고 설탕이 적은 코코아 함량이 높은 다크 초콜릿을 선택하세요.",
  
  whyCaloriesAddUpTitle: "칼로리가 쌓이는 이유",
  whyCaloriesAddUpText: "위안 음식은 풍부한 재료와 조리 방법으로 인해 칼로리가 높은 경우가 많습니다. 튀기기, 진한 소스, 큰 양이 모두 높은 칼로리에 기여합니다.",
  
  tipsTitle: "위안 음식을 죄책감 없이 즐기는 팁",
  tip1: "양 조절하기 - 작은 접시와 그릇 사용하기",
  tip2: "더 나은 재료로 집에서 건강한 버전 만들기",
  tip3: "운동과 균형 맞추기",
  tip4: "의식적으로 먹고 한 입 한 입 맛보기",
  
  conclusionTitle: "위안 음식을 현명하게 즐기세요",
  conclusionText: "좋아하는 위안 음식의 칼로리를 이해하면 현명한 선택을 할 수 있습니다. 참는 것이 아니라 균형과 절제를 기억하세요.",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용하여 좋아하는 위안 음식 레시피를 분석하고 현명한 식사 선택을 하세요."
};

export default function ComfortFoodsCalories() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/comfort-foods-calories"
      />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
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
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/calories-in-comfort-foods-illustration-wNmHUiC1GCWn6Mye3HysvLoAa5jDQN.jpg"
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
              {content.macAndCheeseTitle}
            </h2>
            <p className="text-indigo-600 font-medium">{content.macAndCheeseCalories}</p>
            <p className="mb-2">{content.macAndCheeseIngredients}</p>
            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.macAndCheeseTip}</p>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.friedChickenTitle}
            </h2>
            <p className="text-indigo-600 font-medium">{content.friedChickenCalories}</p>
            <p className="mb-2">{content.friedChickenIngredients}</p>
            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.friedChickenTip}</p>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.pizzaTitle}
            </h2>
            <p className="text-indigo-600 font-medium">{content.pizzaCalories}</p>
            <p className="mb-2">{content.pizzaIngredients}</p>
            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.pizzaTip}</p>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.iceCreamTitle}
            </h2>
            <p className="text-indigo-600 font-medium">{content.iceCreamCalories}</p>
            <p className="mb-2">{content.iceCreamIngredients}</p>
            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.iceCreamTip}</p>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.chocolateTitle}
            </h2>
            <p className="text-indigo-600 font-medium">{content.chocolateCalories}</p>
            <p className="mb-2">{content.chocolateIngredients}</p>
            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.chocolateTip}</p>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.whyCaloriesAddUpTitle}
            </h2>
            <p className="mb-8">{content.whyCaloriesAddUpText}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.tipsTitle}
            </h2>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2">{content.tip1}</li>
              <li className="mb-2">{content.tip2}</li>
              <li className="mb-2">{content.tip3}</li>
              <li className="mb-2">{content.tip4}</li>
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