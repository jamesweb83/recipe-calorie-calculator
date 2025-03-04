import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const englishContent = {
  title: "K-pop Idol Diet Plan: Follow Along with Calorie Counting",
  description: "Discover the secrets behind K-pop idols' perfect physiques and learn how to apply their scientific calorie counting methods to your diet.",
  publishedDate: "April 3, 2024",
  intro: "K-pop idols are known worldwide for their impeccable physiques and energetic performances. Behind their flawless appearances lies a disciplined approach to nutrition that balances calorie intake with their demanding schedules. This article breaks down the typical K-pop idol diet plan and shows you how to adapt it to your lifestyle through proper calorie counting.",
  
  section1Title: "Understanding Calorie Requirements for K-pop Idol Body Goals",
  section1Text: "The average K-pop idol consumes between 1,200-1,800 calories daily, depending on their gender, height, training intensity, and comeback schedule. This carefully calculated intake allows them to maintain low body fat percentages while preserving muscle mass for performances.",
  
  macroBreakdownTitle: "Key calorie breakdown:",
  macroBreakdown: [
    "Protein: 30-35% (essential for muscle maintenance during weight loss)",
    "Carbohydrates: 40-45% (timed around practice sessions)",
    "Fats: 20-25% (healthy fats for hormone balance)"
  ],
  
  section2Title: "Popular K-pop Idol Diet Methods and Their Calorie Counts",
  
  iuDietTitle: "1. The IU Diet (Around 1,300 calories)",
  iuDiet: [
    "Breakfast: One apple (80 calories)",
    "Lunch: Sweet potato (130 calories)",
    "Dinner: Protein shake with vegetables (300 calories)"
  ],
  
  blackpinkDietTitle: "2. The BLACKPINK Diet (Around 1,500 calories)",
  blackpinkDiet: [
    "Breakfast: Oatmeal with berries (300 calories)",
    "Lunch: Grilled chicken salad (400 calories)",
    "Snack: Protein yogurt (150 calories)",
    "Dinner: Steamed fish with vegetables (350 calories)"
  ],
  
  btsDietTitle: "3. The BTS Diet (Around 1,800 calories)",
  btsDiet: [
    "Breakfast: Egg whites, whole grain toast, fruit (350 calories)",
    "Lunch: Lean protein with rice and vegetables (450 calories)",
    "Snack: Protein bar or nuts (200 calories)",
    "Dinner: Lean protein with vegetables (400 calories)",
    "Post-workout: Protein shake (200 calories)"
  ],
  
  section3Title: "Calculating Your Personal Calorie Needs for K-pop Inspired Results",
  section3Text: "To adapt these diets to your lifestyle, follow these steps:",
  
  bmrTitle: "Calculate your Basal Metabolic Rate (BMR) using the Harris-Benedict formula:",
  bmrFormula: [
    "Women: BMR = 655 + (9.6 × weight in kg) + (1.8 × height in cm) - (4.7 × age in years)",
    "Men: BMR = 66 + (13.7 × weight in kg) + (5 × height in cm) - (6.8 × age in years)"
  ],
  
  activityLevelTitle: "Multiply by activity level:",
  activityLevels: [
    "Sedentary: BMR × 1.2",
    "Light activity: BMR × 1.375",
    "Moderate activity (K-pop dance practice 3-5 days/week): BMR × 1.55",
    "Very active (daily intense practice): BMR × 1.725"
  ],
  
  section4Title: "Healthy Meal Planning: Creating a Sustainable K-pop Inspired Diet",
  
  breakfastTitle: "Breakfast Options (250-350 calories)",
  breakfastOptions: [
    "Egg white omelet with vegetables",
    "Protein oatmeal with berries",
    "Greek yogurt with granola and fruit"
  ],
  
  lunchTitle: "Lunch Options (350-450 calories)",
  lunchOptions: [
    "Grilled chicken breast with brown rice and vegetables",
    "Tuna salad with mixed greens",
    "Tofu stir-fry with quinoa"
  ],
  
  dinnerTitle: "Dinner Options (300-400 calories)",
  dinnerOptions: [
    "Steamed fish with sweet potato and broccoli",
    "Lean beef with vegetables",
    "Protein-rich soup with side salad"
  ],
  
  snacksTitle: "Snacks (100-200 calories)",
  snackOptions: [
    "Protein shake",
    "Rice cakes with avocado",
    "Edamame",
    "Hard-boiled eggs"
  ],
  
  section5Title: "Important Health Considerations When Following K-pop Diets",
  healthConsiderations: [
    "Nutritional sustainability: Ensure adequate micronutrient intake through a variety of foods",
    "Performance optimization: Fuel properly for workouts with timed carbohydrate intake",
    "Mental health: Develop a healthy relationship with food rather than extreme restriction",
    "Professional guidance: Consult with a registered dietitian before making significant dietary changes"
  ],
  
  conclusionTitle: "Conclusion: Balancing K-pop Diet Inspiration with Healthy Habits",
  conclusionText: "K-pop idol diets can provide structure and inspiration for your fitness journey, but remember that these performers have teams of nutritionists and trainers supporting them. Focus on creating sustainable habits that work for your body and lifestyle while using calorie counting as a tool rather than a strict rule.",
  
  disclaimer: "Disclaimer: This article is for informational purposes only and should not replace professional medical or nutritional advice.",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your meals and ensure they stay within your calorie goals."
};

const koreanContent = {
  title: "K-팝 아이돌 다이어트 식단: 칼로리 계산으로 따라 해보기",
  description: "K-팝 아이돌들의 완벽한 몸매 비결을 알아보고, 과학적인 칼로리 계산 방법으로 여러분의 다이어트에 적용해보세요.",
  publishedDate: "2024년 4월 3일",
  intro: "K-팝 아이돌들은 완벽한 몸매와 에너지 넘치는 퍼포먼스로 전 세계적으로 유명합니다. 이 눈부신 외모 뒤에는 빡빡한 스케줄과 균형 잡힌 칼로리 섭취를 조화시키는 철저한 영양 관리가 있습니다. 이 글에서는 일반적인 K-팝 아이돌 다이어트 식단을 분석하고 적절한 칼로리 계산을 통해 여러분의 생활 방식에 맞게 조정하는 방법을 알려드립니다.",
  
  section1Title: "K-팝 아이돌 체형 목표를 위한 칼로리 요구량 이해하기",
  section1Text: "평균적인 K-팝 아이돌은 성별, 키, 트레이닝 강도, 컴백 일정에 따라 하루에 약 1,200-1,800 칼로리를 섭취합니다. 이러한 세심하게 계산된 섭취량은 퍼포먼스를 위한 근육량을 유지하면서도 낮은 체지방률을 유지할 수 있게 해줍니다.",
  
  macroBreakdownTitle: "주요 칼로리 분배:",
  macroBreakdown: [
    "단백질: 30-35% (체중 감량 중 근육 유지에 필수)",
    "탄수화물: 40-45% (연습 시간대에 맞춰 섭취)",
    "지방: 20-25% (호르몬 균형을 위한 건강한 지방)"
  ],
  
  section2Title: "인기 있는 K-팝 아이돌 다이어트 방법과 칼로리 계산",
  
  iuDietTitle: "1. 아이유 다이어트 (약 1,300 칼로리)",
  iuDiet: [
    "아침: 사과 1개 (80 칼로리)",
    "점심: 고구마 (130 칼로리)",
    "저녁: 단백질 쉐이크와 채소 (300 칼로리)"
  ],
  
  blackpinkDietTitle: "2. 블랙핑크 다이어트 (약 1,500 칼로리)",
  blackpinkDiet: [
    "아침: 베리 곁들인 오트밀 (300 칼로리)",
    "점심: 그릴 치킨 샐러드 (400 칼로리)",
    "간식: 단백질 요거트 (150 칼로리)",
    "저녁: 찐 생선과 채소 (350 칼로리)"
  ],
  
  btsDietTitle: "3. 방탄소년단 다이어트 (약 1,800 칼로리)",
  btsDiet: [
    "아침: 달걀 흰자, 통곡물 토스트, 과일 (350 칼로리)",
    "점심: 저지방 단백질과 밥, 채소 (450 칼로리)",
    "간식: 프로틴 바 또는 견과류 (200 칼로리)",
    "저녁: 저지방 단백질과 채소 (400 칼로리)",
    "운동 후: 단백질 쉐이크 (200 칼로리)"
  ],
  
  section3Title: "K-팝 스타일 결과를 위한 개인 칼로리 요구량 계산하기",
  section3Text: "이러한 다이어트를 자신의 생활 방식에 맞게 조정하려면 다음 단계를 따르세요:",
  
  bmrTitle: "기초 대사율(BMR)을 계산하세요 Harris-Benedict 공식 사용:",
  bmrFormula: [
    "여성: BMR = 655 + (9.6 × 체중 kg) + (1.8 × 키 cm) - (4.7 × 나이)",
    "남성: BMR = 66 + (13.7 × 체중 kg) + (5 × 키 cm) - (6.8 × 나이)"
  ],
  
  activityLevelTitle: "활동 수준에 따라 곱하기:",
  activityLevels: [
    "비활동적: BMR × 1.2",
    "가벼운 활동: BMR × 1.375",
    "중간 활동 (K-팝 댄스 연습 주 3-5일): BMR × 1.55",
    "매우 활동적 (매일 강도 높은 연습): BMR × 1.725"
  ],
  
  section4Title: "건강한 식단 계획: 지속 가능한 K-팝 스타일 다이어트 만들기",
  
  breakfastTitle: "아침 옵션 (250-350 칼로리)",
  breakfastOptions: [
    "채소를 곁들인 달걀 흰자 오믈렛",
    "베리를 곁들인 단백질 오트밀",
    "그래놀라와 과일을 곁들인 그릭 요거트"
  ],
  
  lunchTitle: "점심 옵션 (350-450 칼로리)",
  lunchOptions: [
    "현미와 채소를 곁들인 그릴 닭가슴살",
    "샐러드 채소를 곁들인 참치 샐러드",
    "퀴노아를 곁들인 두부 볶음"
  ],
  
  dinnerTitle: "저녁 옵션 (300-400 칼로리)",
  dinnerOptions: [
    "고구마와 브로콜리를 곁들인 찐 생선",
    "채소를 곁들인 저지방 소고기",
    "사이드 샐러드와 단백질이 풍부한 수프"
  ],
  
  snacksTitle: "간식 (100-200 칼로리)",
  snackOptions: [
    "단백질 쉐이크",
    "아보카도를 곁들인 라이스 케이크",
    "에다마메",
    "삶은 계란"
  ],
  
  section5Title: "K-팝 다이어트를 따를 때 중요한 건강 고려사항",
  healthConsiderations: [
    "영양의 지속 가능성: 다양한 식품을 통해 충분한 미량 영양소 섭취 보장",
    "퍼포먼스 최적화: 시간대별 탄수화물 섭취로 운동에 적절히 연료 공급",
    "정신 건강: 극단적인 제한보다는 음식과 건강한 관계 형성",
    "전문가 지도: 큰 식이 변화를 하기 전에 영양사와 상담"
  ],
  
  conclusionTitle: "결론: K-팝 다이어트 영감과 건강한 습관의 균형 잡기",
  conclusionText: "K-팝 아이돌 다이어트는 여러분의 피트니스 여정에 구조와 영감을 제공할 수 있지만, 이들 퍼포머들에게는 영양사와 트레이너 팀이 지원하고 있다는 것을 기억하세요. 칼로리 계산을 엄격한 규칙이 아닌 도구로 활용하면서 자신의 신체와 생활 방식에 맞는 지속 가능한 습관을 만드는 데 집중하세요.",
  
  disclaimer: "면책 조항: 이 글은 정보 제공 목적으로만 작성되었으며 전문적인 의료 또는 영양 조언을 대체할 수 없습니다.",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용해 식단의 칼로리를 분석하고 목표 칼로리 내에서 유지하세요."
};

export default function KpopIdolDiet() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/kpop-idol-diet"
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
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/kpop_idol_diet_header-Ceer0ojQEFdW0YPVZ5CBDBz9B8GQ89.jpg"
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
              {content.section1Title}
            </h2>
            <p className="mb-6">{content.section1Text}</p>

            <h3 className="text-xl font-medium text-indigo-700 mb-4">
              {content.macroBreakdownTitle}
            </h3>
            <ul className="list-disc pl-6 mb-8">
              {content.macroBreakdown.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.section2Title}
            </h2>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-4">
                {content.iuDietTitle}
              </h3>
              <ul className="list-disc pl-6">
                {content.iuDiet.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-4">
                {content.blackpinkDietTitle}
              </h3>
              <ul className="list-disc pl-6">
                {content.blackpinkDiet.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-4">
                {content.btsDietTitle}
              </h3>
              <ul className="list-disc pl-6">
                {content.btsDiet.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.section3Title}
            </h2>
            <p className="mb-6">{content.section3Text}</p>

            <h3 className="text-xl font-medium text-indigo-700 mb-4">
              {content.bmrTitle}
            </h3>
            <ul className="list-disc pl-6 mb-8">
              {content.bmrFormula.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-medium text-indigo-700 mb-4">
              {content.activityLevelTitle}
            </h3>
            <ul className="list-disc pl-6 mb-8">
              {content.activityLevels.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.section4Title}
            </h2>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-4">
                {content.breakfastTitle}
              </h3>
              <ul className="list-disc pl-6">
                {content.breakfastOptions.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-4">
                {content.lunchTitle}
              </h3>
              <ul className="list-disc pl-6">
                {content.lunchOptions.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-4">
                {content.dinnerTitle}
              </h3>
              <ul className="list-disc pl-6">
                {content.dinnerOptions.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-4">
                {content.snacksTitle}
              </h3>
              <ul className="list-disc pl-6">
                {content.snackOptions.map((item, index) => (
                  <li key={index} className="mb-2">{item}</li>
                ))}
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.section5Title}
            </h2>
            <ul className="list-disc pl-6 mb-8">
              {content.healthConsiderations.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.conclusionTitle}
            </h2>
            <p className="mb-8">{content.conclusionText}</p>

            <p className="text-sm text-gray-500 italic mb-8">
              {content.disclaimer}
            </p>

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