// src/pages/blog/asian-vs-western-diet.js
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

// 영어 콘텐츠
const englishContent = {
  title: "Asian vs. Western Diet: Calorie Comparison",
  description: "Compare the caloric content of Asian and Western diets, their key differences in food composition, cooking methods, and health implications.",
  publishedDate: "Published: March 3, 2025",
  
  // Key Differences Section
  keyDifferencesTitle: "Key Differences Between Asian and Western Diets",
  keyDifferencesIntro: "The Asian and Western dietary patterns differ significantly in composition, preparation methods, and caloric density. Understanding these differences can help explain variations in obesity rates, metabolic health, and overall calorie consumption between populations.",
  
  stapleFoodsTitle: "Staple Foods",
  asianDietLabel: "Asian diet",
  westernDietLabel: "Western diet",
  asianDietStaples: "Rice, noodles, tofu, vegetables, fish, fermented foods",
  westernDietStaples: "Bread, pasta, potatoes, dairy products, red meat, processed foods",
  
  cookingMethodsTitle: "Cooking Methods",
  asianCookingMethods: "Steaming, stir-frying, boiling, fermenting",
  westernCookingMethods: "Deep-frying, baking, roasting, grilling",
  
  mealStructureTitle: "Meal Structure",
  asianMealStructure: "Multiple small dishes shared communally, small portions",
  westernMealStructure: "Individual large portions focused on protein and carbohydrates",
  
  // Caloric Content Section
  caloricContentTitle: "Caloric Content Comparison",
  
  stapleCarbohydratesTitle: "Staple Carbohydrates",
  whiteRiceCal: "White rice (1 cup, cooked): 200 calories",
  whiteBreadCal: "White bread (2 slices): 160-200 calories",
  noodlesCal: "Noodles (1 cup, cooked): 220 calories",
  pastaCal: "Pasta (1 cup, cooked): 220 calories",
  carbohydratesNote: "While the base caloric content is similar, Asian meals typically include smaller portions of these staples, accompanied by larger quantities of vegetables.",
  
  proteinSourcesTitle: "Protein Sources",
  tofuCal: "Tofu (100g): 70-100 calories",
  fishCal: "Fish (100g): 100-150 calories",
  chickenCal: "Chicken breast (100g): 165 calories",
  beefCal: "Beef (100g): 250 calories",
  proteinNote: "Asian diets typically emphasize plant proteins and fish, which are lower in calories compared to the red meat common in Western diets.",
  
  fatsOilsTitle: "Fats and Oils",
  sesameOilCal: "Sesame oil (1 tablespoon): 120 calories",
  oliveOilCal: "Olive oil (1 tablespoon): 120 calories",
  butterCal: "Butter (1 tablespoon): 100 calories",
  coconutMilkCal: "Coconut milk (100ml): 230 calories",
  fatsNote: "While oils have similar caloric content, Asian cooking typically uses smaller amounts for flavoring rather than as a primary ingredient.",
  
  // Daily Calorie Intake Section
  dailyCalorieTitle: "Average Daily Calorie Intake",
  dailyCalorieIntro: "Research suggests significant differences in average calorie consumption between regions:",
  japanLabel: "Japan",
  japanCalories: "2,719 calories per day",
  chinaLabel: "China",
  chinaCalories: "3,100 calories per day",
  usLabel: "United States",
  usCalories: "3,800 calories per day",
  ukLabel: "United Kingdom",
  ukCalories: "3,440 calories per day",
  calorieExplanation: "These differences can be attributed to portion sizes, food choices, and cooking methods.",
  
  // Health Implications Section
  healthImplicationsTitle: "Health Implications",
  
  obesityRatesTitle: "Obesity Rates",
  eastAsianLabel: "East Asian countries",
  eastAsianObesity: "Generally under 5% (Japan, Korea)",
  westernCountriesLabel: "Western countries",
  westernObesity: "Often exceeding 30% (United States, United Kingdom)",
  obesityExplanation: "The lower caloric density of traditional Asian diets contributes to lower obesity rates in these populations.",
  
  nutrientDensityTitle: "Nutrient Density",
  nutrientDensityIntro: "Asian diets often provide more nutrients per calorie due to:",
  vegetableConsumption: "Higher vegetable consumption",
  foodDiversity: "Greater food diversity per meal",
  lessProcessedFood: "Less processed food",
  
  // Food Comparison Table
  foodComparisonTitle: "Calorie-Dense Western Foods vs. Asian Alternatives",
  westernFoodHeader: "Western Food",
  asianAlternativeHeader: "Asian Alternative",
  caloriesHeader: "Calories",
  differenceHeader: "Difference",
  
  cheeseburger: "Cheeseburger",
  riceBowl: "Rice bowl with vegetables and tofu",
  pizza: "Pizza (2 slices)",
  sushi: "Sushi roll (6 pieces)",
  creamPasta: "Pasta with cream sauce",
  pho: "Pho (Vietnamese noodle soup)",
  pancakes: "Pancakes with syrup",
  congee: "Congee (rice porridge)",
  frenchFries: "French fries",
  edamame: "Edamame",
  
  // Modernization Section
  modernizationTitle: "Modernization and Changing Dietary Patterns",
  modernizationIntro: "Traditional dietary patterns in both regions are changing with globalization:",
  
  westernizationTitle: "Westernization of Asian diets",
  westernizationText: "Increased consumption of meat, dairy, and processed foods leading to higher calorie intake",
  asianInfluenceTitle: "Asian influences on Western diets",
  asianInfluenceText: "Growing popularity of Asian cooking techniques and ingredients potentially lowering caloric density",
  
  // Practical Applications Section
  practicalApplicationsTitle: "Practical Applications for Calorie Management",
  
  asianCookingTechniquesTitle: "Asian Cooking Techniques for Lower-Calorie Meals",
  wokTechnique: "Use a wok for quick stir-frying with minimal oil",
  vegetableTechnique: "Incorporate more vegetables into every meal",
  portionTechnique: "Serve smaller portions of multiple dishes",
  brothTechnique: "Use broths and light sauces instead of cream-based options",
  proteinTechnique: "Focus on fish and plant proteins over red meat",
  
  mealPlanningTitle: "Meal Planning Tips",
  vegetableFocus: "Build meals around vegetables rather than meat",
  riceComplement: "Use rice as a complement rather than the main component",
  fermentedFoods: "Incorporate fermented foods for flavor and gut health",
  communalEating: "Adopt communal eating styles to naturally control portions",
  
  // Conclusion
  conclusionTitle: "Conclusion",
  conclusionText: "While both Asian and Western diets have their unique attributes, traditional Asian dietary patterns typically result in lower caloric intake due to smaller portions, less processed food, cooking methods that use less oil, and greater emphasis on vegetables and seafood. By adopting some principles from Asian cuisines, individuals following Western diets can potentially reduce their caloric intake while maintaining satisfying and nutritious meals.",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze the caloric content of both Asian and Western dishes and make informed dietary choices based on your nutritional goals."
};

// 한국어 콘텐츠
const koreanContent = {
  title: "아시아식 vs. 서양식 다이어트: 칼로리 비교",
  description: "아시아식과 서양식 식단의 칼로리 함량, 음식 구성, 조리 방법, 그리고 건강에 미치는 영향에 대해 비교해봅니다.",
  publishedDate: "게시일: 2025년 3월 3일",
  
  // Key Differences Section
  keyDifferencesTitle: "아시아식과 서양식 식단의 주요 차이점",
  keyDifferencesIntro: "아시아식과 서양식 식단 패턴은 구성, 조리 방법, 칼로리 밀도 측면에서 크게 다릅니다. 이러한 차이점을 이해하면 인구 간 비만율, 대사 건강, 전반적인 칼로리 소비의 변화를 설명하는 데 도움이 됩니다.",
  
  stapleFoodsTitle: "주요 식품",
  asianDietLabel: "아시아식 식단",
  westernDietLabel: "서양식 식단",
  asianDietStaples: "쌀, 국수, 두부, 채소, 생선, 발효 식품",
  westernDietStaples: "빵, 파스타, 감자, 유제품, 붉은 고기, 가공 식품",
  
  cookingMethodsTitle: "조리 방법",
  asianCookingMethods: "찌기, 볶기, 삶기, 발효하기",
  westernCookingMethods: "튀기기, 굽기, 로스팅, 그릴링",
  
  mealStructureTitle: "식사 구조",
  asianMealStructure: "여러 작은 접시를 공동으로 나누어 먹기, 작은 포션",
  westernMealStructure: "단백질과 탄수화물 중심의 개인별 대용량 포션",
  
  // Caloric Content Section
  caloricContentTitle: "칼로리 함량 비교",
  
  stapleCarbohydratesTitle: "주요 탄수화물",
  whiteRiceCal: "흰 쌀밥 (1컵, 조리됨): 200 칼로리",
  whiteBreadCal: "흰 빵 (2조각): 160-200 칼로리",
  noodlesCal: "국수 (1컵, 조리됨): 220 칼로리",
  pastaCal: "파스타 (1컵, 조리됨): 220 칼로리",
  carbohydratesNote: "기본 칼로리 함량은 비슷하지만, 아시아식 식사는 일반적으로 이러한 주식의 양이 더 적고, 더 많은 양의 채소가 동반됩니다.",
  
  proteinSourcesTitle: "단백질 공급원",
  tofuCal: "두부 (100g): 70-100 칼로리",
  fishCal: "생선 (100g): 100-150 칼로리",
  chickenCal: "닭 가슴살 (100g): 165 칼로리",
  beefCal: "소고기 (100g): 250 칼로리",
  proteinNote: "아시아식 식단은 일반적으로 서양식 식단에서 흔한 붉은 고기에 비해 칼로리가 낮은 식물성 단백질과 생선을 강조합니다.",
  
  fatsOilsTitle: "지방 및 오일",
  sesameOilCal: "참기름 (1큰술): 120 칼로리",
  oliveOilCal: "올리브 오일 (1큰술): 120 칼로리",
  butterCal: "버터 (1큰술): 100 칼로리",
  coconutMilkCal: "코코넛 밀크 (100ml): 230 칼로리",
  fatsNote: "오일의 칼로리 함량은 비슷하지만, 아시아식 요리는 일반적으로 주 재료가 아닌 향신료로 더 적은 양을 사용합니다.",
  
  // Daily Calorie Intake Section
  dailyCalorieTitle: "평균 일일 칼로리 섭취량",
  dailyCalorieIntro: "연구에 따르면 지역 간 평균 칼로리 소비에는 상당한 차이가 있습니다:",
  japanLabel: "일본",
  japanCalories: "하루 2,719 칼로리",
  chinaLabel: "중국",
  chinaCalories: "하루 3,100 칼로리",
  usLabel: "미국",
  usCalories: "하루 3,800 칼로리",
  ukLabel: "영국",
  ukCalories: "하루 3,440 칼로리",
  calorieExplanation: "이러한 차이는 포션 크기, 음식 선택, 조리 방법에 기인할 수 있습니다.",
  
  // Health Implications Section
  healthImplicationsTitle: "건강에 미치는 영향",
  
  obesityRatesTitle: "비만율",
  eastAsianLabel: "동아시아 국가",
  eastAsianObesity: "일반적으로 5% 미만 (일본, 한국)",
  westernCountriesLabel: "서양 국가",
  westernObesity: "종종 30%를 초과 (미국, 영국)",
  obesityExplanation: "전통적인 아시아식 식단의 낮은 칼로리 밀도는 이러한 인구의 낮은 비만율에 기여합니다.",
  
  nutrientDensityTitle: "영양 밀도",
  nutrientDensityIntro: "아시아식 식단은 다음과 같은 이유로 칼로리당 더 많은 영양소를 제공하는 경우가 많습니다:",
  vegetableConsumption: "더 높은 채소 소비",
  foodDiversity: "식사당 더 큰 음식 다양성",
  lessProcessedFood: "적은 가공 식품",
  
  // Food Comparison Table
  foodComparisonTitle: "칼로리가 높은 서양 음식 vs. 아시아 대안",
  westernFoodHeader: "서양 음식",
  asianAlternativeHeader: "아시아 대안",
  caloriesHeader: "칼로리",
  differenceHeader: "차이",
  
  cheeseburger: "치즈버거",
  riceBowl: "채소와 두부를 곁들인 밥그릇",
  pizza: "피자 (2조각)",
  sushi: "초밥 (6개)",
  creamPasta: "크림 소스 파스타",
  pho: "쌀국수 (베트남 국수 수프)",
  pancakes: "팬케이크와 시럽",
  congee: "죽 (쌀 죽)",
  frenchFries: "감자튀김",
  edamame: "풋콩",
  
  // Modernization Section
  modernizationTitle: "현대화와 변화하는 식이 패턴",
  modernizationIntro: "두 지역의 전통적인 식이 패턴은 세계화와 함께 변화하고 있습니다:",
  
  westernizationTitle: "아시아 식단의 서구화",
  westernizationText: "고기, 유제품, 가공 식품의 소비 증가로 인한 칼로리 섭취 증가",
  asianInfluenceTitle: "서양 식단에 대한 아시아의 영향",
  asianInfluenceText: "아시아 요리 기술과 재료의 인기 증가로 인한 칼로리 밀도 감소 가능성",
  
  // Practical Applications Section
  practicalApplicationsTitle: "칼로리 관리를 위한 실용적 응용",
  
  asianCookingTechniquesTitle: "저칼로리 식사를 위한 아시아 요리 기술",
  wokTechnique: "최소한의 기름으로 빠른 볶음에 웍(냄비)을 사용하세요",
  vegetableTechnique: "모든 식사에 더 많은 채소를 포함하세요",
  portionTechnique: "여러 접시의 작은 포션을 제공하세요"
};

export default function AsianVsWesternDiet() {
  const { language } = useLanguage();
  
  // 언어에 따라 콘텐츠 결정
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/asian-vs-western-diet"
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
          </header>

          <div className="prose prose-lg max-w-none prose-indigo">
            {/* Key Differences Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-8 mb-4">
              {content.keyDifferencesTitle}
            </h2>
            <p className="mb-6">{content.keyDifferencesIntro}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.stapleFoodsTitle}
            </h3>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>{content.asianDietLabel}:</strong> {content.asianDietStaples}</li>
              <li><strong>{content.westernDietLabel}:</strong> {content.westernDietStaples}</li>
            </ul>

            {/* The rest of the HTML structure remains unchanged */}
            {/* Only showing essential parts for the fix */}
            {/* ... */}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}