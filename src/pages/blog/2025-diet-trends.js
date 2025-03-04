import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const englishContent = {
  title: "2025 Diet Trends: Latest Low-Calorie Ingredients and Recipes",
  description: "As we step into 2025, diet trends are evolving with a focus on cutting calories while keeping meals tasty and nutritious. From innovative ingredients to creative recipes, this year's diet scene is all about smart swaps and fresh ideas.",
  publishedDate: "April 1, 2024",
  intro: "As we step into 2025, diet trends are evolving with a focus on cutting calories while keeping meals tasty and nutritious. From innovative ingredients to creative recipes, this year's diet scene is all about smart swaps and fresh ideas. Discover the latest low-calorie ingredients and recipes shaping the 2025 diet landscape!",
  
  whyTitle: "What's Driving 2025 Diet Trends?",
  whyText: "With a growing emphasis on health and sustainability, 2025 diets prioritize low-calorie, nutrient-dense foods. Influenced by social media like TikTok and expert insights, these trends blend convenience, flavor, and wellness—perfect for anyone aiming to slim down without sacrificing satisfaction.",
  
  ingredientsTitle: "Top Low-Calorie Ingredients for 2025",
  
  cottageCheeseTitle: "Cottage Cheese (80 cal/cup)",
  cottageCheeseDesc: "High in protein, low in calories—blend it into dips or smoothies.",
  
  kelpNoodlesTitle: "Kelp Noodles (6 cal/4 oz)",
  kelpNoodlesDesc: "A zero-carb pasta swap, crisp and versatile.",
  
  alluloseTitle: "Allulose (0.4 cal/g)",
  alluloseDesc: "A natural sweetener with almost no calories, ideal for baking.",
  
  lupiniBeansTitle: "Lupini Beans (60 cal/1/2 cup)",
  lupiniBeansDesc: "Fiber- and protein-packed, perfect for salads or snacks.",
  
  seaMossTitle: "Sea Moss (5 cal/tbsp)",
  seaMossDesc: "Nutrient-rich and low-cal, great for smoothies or gels.",
  
  recipesTitle: "Trending 2025 Low-Calorie Recipes",
  
  breakfastBowlTitle: "Cottage Cheese Breakfast Bowl (200 cal)",
  breakfastBowlIngredients: "1/2 cup cottage cheese (80 cal)\n1/2 cup berries (30 cal)\n1 tbsp allulose (5 cal)",
  breakfastBowlPrep: "Prep: Mix and top with a sprinkle of chia seeds.",
  
  stirFryTitle: "Kelp Noodle Stir-Fry (150 cal)",
  stirFryIngredients: "4 oz kelp noodles (6 cal)\n1 cup veggies (50 cal)\n1 tsp soy sauce (10 cal)",
  stirFryPrep: "Prep: Sauté veggies, toss in noodles, and season.",
  
  saladTitle: "Lupini Bean Salad (180 cal)",
  saladIngredients: "1/2 cup lupini beans (60 cal)\n1 cup spinach (10 cal)\n1 tsp olive oil (40 cal)",
  saladPrep: "Prep: Toss together with lemon juice.",
  
  smoothieTitle: "Sea Moss Smoothie (120 cal)",
  smoothieIngredients: "1 tbsp sea moss (5 cal)\n1 cup almond milk (30 cal)\n1/2 banana (50 cal)",
  smoothiePrep: "Prep: Blend until smooth.",
  
  muffinsTitle: "Allulose Berry Muffins (90 cal each)",
  muffinsIngredients: "1 cup almond flour (300 cal total)\n2 tbsp allulose (10 cal)\nberries (30 cal)",
  muffinsPrep: "Prep: Mix, bake at 350°F for 20 mins (makes 6).",
  
  conclusionTitle: "Why It Works",
  conclusionText: "These recipes use 2025's hottest ingredients to keep calories low while boosting flavor and nutrition. Try them to stay ahead of the diet curve this year!",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your meals and ensure they stay within your calorie goals."
};

const koreanContent = {
  title: "2025년 다이어트 트렌드: 칼로리 줄이는 최신 식재료와 레시피",
  description: "2025년이 다가오며 다이어트 트렌드는 칼로리를 줄이면서도 맛과 영양을 유지하는 방향으로 진화하고 있습니다. 혁신적인 식재료와 창의적인 레시피를 소개합니다.",
  publishedDate: "2024년 4월 1일",
  intro: "2025년이 다가오며 다이어트 트렌드는 칼로리를 줄이면서도 맛과 영양을 유지하는 방향으로 진화하고 있습니다. 혁신적인 식재료와 창의적인 레시피로, 올해 다이어트는 똑똑한 대체와 신선한 아이디어가 핵심입니다. 2025년을 이끄는 저칼로리 식재료와 레시피를 만나보세요!",
  
  whyTitle: "2025년 다이어트 트렌드의 원동력",
  whyText: "건강과 지속 가능성에 대한 관심이 커지며, 2025년 다이어트는 저칼로리, 영양 밀도 높은 음식에 주목합니다. 틱톡 같은 소셜 미디어와 전문가 의견에서 영감을 받아 편리함, 맛, 웰빙을 결합한 트렌드가 주목받고 있죠.",
  
  ingredientsTitle: "2025년 인기 저칼로리 식재료",
  
  cottageCheeseTitle: "코티지 치즈 (컵당 80칼로리)",
  cottageCheeseDesc: "단백질 높고 칼로리 낮음—딥이나 스무디에 활용.",
  
  kelpNoodlesTitle: "켈프 누들 (4온스당 6칼로리)",
  kelpNoodlesDesc: "탄수화물 제로 파스타 대체재, 아삭한 식감.",
  
  alluloseTitle: "알룰로스 (g당 0.4칼로리)",
  alluloseDesc: "거의 칼로리 없는 천연 감미료, 베이킹에 최고.",
  
  lupiniBeansTitle: "루피니 빈 (1/2컵당 60칼로리)",
  lupiniBeansDesc: "섬유질과 단백질 풍부, 샐러드나 간식으로.",
  
  seaMossTitle: "씨 모스 (숟가락당 5칼로리)",
  seaMossDesc: "영양 가득, 저칼로리—스무디나 젤로 사용.",
  
  recipesTitle: "2025년 트렌드 저칼로리 레시피",
  
  breakfastBowlTitle: "코티지 치즈 아침 볼 (200칼로리)",
  breakfastBowlIngredients: "코티지 치즈 1/2컵 (80칼로리)\n베리 1/2컵 (30칼로리)\n알룰로스 1숟가락 (5칼로리)",
  breakfastBowlPrep: "준비: 섞고 치아씨드 뿌리기.",
  
  stirFryTitle: "켈프 누들 볶음 (150칼로리)",
  stirFryIngredients: "켈프 누들 4온스 (6칼로리)\n채소 1컵 (50칼로리)\n간장 1작은술 (10칼로리)",
  stirFryPrep: "준비: 채소 볶고 누들 넣어 양념.",
  
  saladTitle: "루피니 빈 샐러드 (180칼로리)",
  saladIngredients: "루피니 빈 1/2컵 (60칼로리)\n시금치 1컵 (10칼로리)\n올리브 오일 1작은술 (40칼로리)",
  saladPrep: "준비: 레몬즙과 함께 버무려.",
  
  smoothieTitle: "씨 모스 스무디 (120칼로리)",
  smoothieIngredients: "씨 모스 1숟가락 (5칼로리)\n아몬드 밀크 1컵 (30칼로리)\n바나나 1/2개 (50칼로리)",
  smoothiePrep: "준비: 블렌더로 갈기.",
  
  muffinsTitle: "알룰로스 베리 머핀 (개당 90칼로리)",
  muffinsIngredients: "아몬드 가루 1컵 (300칼로리 총합)\n알룰로스 2숟가락 (10칼로리)\n베리 (30칼로리)",
  muffinsPrep: "준비: 섞어 180°C에서 20분 굽기 (6개 분량).",
  
  conclusionTitle: "왜 효과적인가요?",
  conclusionText: "2025년 핫한 식재료를 활용한 이 레시피들은 칼로리를 낮추면서도 맛과 영양을 극대화합니다. 올해 다이어트 트렌드에 앞서가보세요!",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용해 식사의 칼로리를 분석하고 목표 칼로리 내에서 유지하세요."
};

export default function DietTrends2025() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/2025-diet-trends"
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
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/kelp-noodle-stir-fry-illustration-7OfhH5xJWLnnRn6iXWc2jK1fy7s9It.jpg"
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
              {content.ingredientsTitle}
            </h2>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.cottageCheeseTitle}
              </h3>
              <p className="text-gray-600">{content.cottageCheeseDesc}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.kelpNoodlesTitle}
              </h3>
              <p className="text-gray-600">{content.kelpNoodlesDesc}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.alluloseTitle}
              </h3>
              <p className="text-gray-600">{content.alluloseDesc}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.lupiniBeansTitle}
              </h3>
              <p className="text-gray-600">{content.lupiniBeansDesc}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.seaMossTitle}
              </h3>
              <p className="text-gray-600">{content.seaMossDesc}</p>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.recipesTitle}
            </h2>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.breakfastBowlTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.breakfastBowlIngredients}</pre>
              <p className="text-gray-600">{content.breakfastBowlPrep}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.stirFryTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.stirFryIngredients}</pre>
              <p className="text-gray-600">{content.stirFryPrep}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.saladTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.saladIngredients}</pre>
              <p className="text-gray-600">{content.saladPrep}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.smoothieTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.smoothieIngredients}</pre>
              <p className="text-gray-600">{content.smoothiePrep}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.muffinsTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.muffinsIngredients}</pre>
              <p className="text-gray-600">{content.muffinsPrep}</p>
            </div>

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