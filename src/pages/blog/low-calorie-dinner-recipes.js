import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

// 영어 콘텐츠
const englishContent = {
  title: "The Best Low-Calorie Dinner Recipes for Weight Loss",
  description: "Discover delicious and satisfying low-calorie dinner recipes that support your weight loss goals, complete with calorie counts and cooking tips.",
  publishedDate: "Published: March 20, 2024",
  
  intro: "Looking to shed a few pounds without sacrificing flavor? Dinner doesn't have to be boring or leave you hungry. With the right low-calorie recipes, you can enjoy delicious meals that support your weight loss goals. Even better, by calculating the calories in your recipes, you can stay in control of your diet. In this post, we've rounded up the best low-calorie dinner recipes for weight loss, complete with tips to keep them light and tasty. Plus, we'll show you how to use our calorie calculator to customize them to your needs!",
  
  whyTitle: "Why Low-Calorie Dinners Matter for Weight Loss",
  whyText: "Dinner is often the meal where we unwind and indulge, but overloading on calories can stall your progress. Low-calorie dinners—think 300 to 500 calories per serving—help you maintain a calorie deficit while keeping you satisfied. Pair that with nutrient-dense ingredients, and you've got a recipe for success. Ready to dig in? Here are our top picks.",
  
  // Recipe 1
  recipe1Title: "1. Grilled Lemon Herb Chicken with Veggies",
  recipe1Calories: "Calories: ~350 per serving",
  recipe1Ingredients: "Ingredients: 4 oz chicken breast, 1 tbsp olive oil, lemon juice, garlic, 1 cup zucchini, 1 cup bell peppers.",
  recipe1Instructions: "How to Make It: Marinate chicken in lemon juice, garlic, and herbs. Grill with sliced veggies for 15-20 minutes.",
  recipe1Why: "Why It Works: Lean protein from chicken keeps you full, while veggies add fiber with minimal calories.",
  recipe1Tip: "Tip: Use our calorie calculator to adjust portions based on your needs!",
  
  // Recipe 2
  recipe2Title: "2. Spicy Shrimp Stir-Fry",
  recipe2Calories: "Calories: ~300 per serving",
  recipe2Ingredients: "Ingredients: 5 oz shrimp, 1 tsp chili paste, 1 cup broccoli, 1/2 cup snap peas, soy sauce (low-sodium).",
  recipe2Instructions: "How to Make It: Stir-fry shrimp and veggies in a non-stick pan with chili paste and a splash of soy sauce.",
  recipe2Why: "Why It Works: Shrimp is low in calories but high in protein, and the veggies bulk it up without extra fat.",
  
  // Recipe 3
  recipe3Title: "3. Zucchini Noodles with Turkey Bolognese",
  recipe3Calories: "Calories: ~320 per serving",
  recipe3Ingredients: "Ingredients: 1 large zucchini (spiralized), 4 oz ground turkey, 1/2 cup marinara sauce (no sugar added), garlic.",
  recipe3Instructions: "How to Make It: Cook turkey with garlic, add marinara, and serve over zucchini noodles.",
  recipe3Why: "Why It Works: Swapping pasta for zoodles slashes carbs and calories while keeping the dish hearty.",
  keywordTip: "Keyword Tip: Search \"low-carb dinner ideas\" for more inspiration like this!",
  
  // Recipe 4
  recipe4Title: "4. Baked Salmon with Asparagus",
  recipe4Calories: "Calories: ~400 per serving",
  recipe4Ingredients: "Ingredients: 4 oz salmon fillet, 1 tsp olive oil, lemon zest, 10 asparagus spears.",
  recipe4Instructions: "How to Make It: Season salmon and asparagus, bake at 400°F for 15 minutes.",
  recipe4Why: "Why It Works: Omega-3s from salmon boost metabolism, and asparagus is a low-calorie, nutrient-packed side.",
  
  // Recipe 5
  recipe5Title: "5. Cauliflower Fried \"Rice\" with Tofu",
  recipe5Calories: "Calories: ~280 per serving",
  recipe5Ingredients: "Ingredients: 1 cup riced cauliflower, 3 oz tofu, 1 egg, 1 tbsp soy sauce, green onions.",
  recipe5Instructions: "How to Make It: Scramble egg, stir-fry tofu and cauliflower rice with soy sauce, top with green onions.",
  recipe5Why: "Why It Works: Cauliflower replaces rice for a fraction of the calories, while tofu adds plant-based protein.",
  
  // Tips Section
  tipsTitle: "Tips to Keep Your Dinners Low-Calorie",
  tip1: "Skip the Heavy Sauces: Opt for spices, herbs, or a splash of vinegar instead of creamy dressings.",
  tip2: "Portion Smart: Use a food scale and our calorie calculator to avoid overeating—even healthy ingredients add up!",
  tip3: "Load Up on Veggies: They're low in calories but high in volume, keeping you full longer.",
  
  // Customization Section
  customizeTitle: "How to Customize These Recipes",
  customizeText: "Every body is different, and so are calorie needs. Whether you're aiming for 1,200 or 2,000 calories a day, our calorie calculator can help. Simply input the ingredients and amounts from these recipes, and tweak them to fit your plan. For example, reduce the olive oil or swap tofu for chicken—see the difference instantly!",
  
  // Why It Works Section
  whyWorksTitle: "Why These Recipes Help You Lose Weight",
  whyWorksText: "These dinners aren't just low in calories—they're balanced with protein, fiber, and healthy fats to keep cravings at bay. Plus, they're quick to make, so you're less tempted to order takeout. Studies show consistent calorie tracking can boost weight loss success, and with meals this good, it's easy to stick to.",
  
  // Conclusion
  conclusionTitle: "Ready to Start Cooking?",
  conclusionText: "These low-calorie dinner recipes prove you can enjoy food and lose weight at the same time. Try one tonight, and plug the ingredients into our calorie calculator to see exactly what you're eating. Have a favorite low-calorie dinner idea? Drop it in the comments—we'd love to hear it!",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your favorite recipes and make informed choices about your meals."
};

// 한국어 콘텐츠
const koreanContent = {
  title: "다이어트를 위한 최고의 저칼로리 저녁 레시피",
  description: "맛있고 만족스러운 저칼로리 저녁 레시피로 다이어트 목표를 달성하세요. 칼로리 계산과 요리 팁을 함께 제공합니다.",
  publishedDate: "게시일: 2024년 3월 20일",
  
  intro: "몇 킬로를 빼고 싶지만 맛있는 음식을 포기하고 싶지 않으신가요? 저녁 식사가 지루하거나 배고프게 남을 필요는 없습니다. 적절한 저칼로리 레시피로 맛있고 다이어트 목표에 맞는 식사를 즐길 수 있습니다. 게다가 레시피의 칼로리를 계산하면 식단을 더 잘 관리할 수 있죠. 이 글에서는 다이어트를 위한 최고의 저칼로리 저녁 레시피를 소개하고, 가볍고 맛있게 유지하는 팁을 공유합니다. 우리 칼로리 계산기로 나만의 식단에 맞게 조정하는 방법도 알려드릴게요!",
  
  whyTitle: "저칼로리 저녁이 다이어트에 중요한 이유",
  whyText: "저녁은 하루를 마무리하며 여유를 즐기는 시간이라 과식하기 쉽습니다. 하지만 칼로리를 너무 많이 섭취하면 다이어트 진행이 멈출 수 있어요. 저칼로리 저녁 식사(한 끼 300~500칼로리)는 칼로리 부족을 유지하면서도 포만감을 줍니다. 영양가 높은 재료를 곁들이면 성공적인 다이어트 식단이 완성되죠. 준비되셨나요? 최고의 레시피를 소개합니다.",
  
  // Recipe 1
  recipe1Title: "1. 레몬 허브 구운 닭가슴살과 채소",
  recipe1Calories: "칼로리: 1인분 약 350칼로리",
  recipe1Ingredients: "재료: 닭가슴살 120g, 올리브 오일 1큰술, 레몬즙, 마늘, 애호박 1컵, 피망 1컵.",
  recipe1Instructions: "만드는 법: 닭가슴살을 레몬즙, 마늘, 허브로 마리네이드한 뒤 채소와 함께 15~20분간 굽습니다.",
  recipe1Why: "추천 이유: 닭가슴살의 저지방 단백질이 포만감을 주고, 채소는 적은 칼로리로 영양을 더합니다.",
  recipe1Tip: "팁: 우리 칼로리 계산기로 양을 조정해 나만의 식단에 맞춰보세요!",
  
  // Recipe 2
  recipe2Title: "2. 매콤한 새우 볶음",
  recipe2Calories: "칼로리: 1인분 약 300칼로리",
  recipe2Ingredients: "재료: 새우 150g, 고추장 1작은술, 브로콜리 1컵, 스냅피 1/2컵, 저염 간장.",
  recipe2Instructions: "만드는 법: 새우와 채소를 논스틱 팬에 볶고, 고추장과 간장으로 맛을 냅니다.",
  recipe2Why: "추천 이유: 새우는 칼로리가 낮고 단백질이 높으며, 채소가 부피를 더해줍니다.",
  
  // Recipe 3
  recipe3Title: "3. 호박면 터키 볼로네즈",
  recipe3Calories: "칼로리: 1인분 약 320칼로리",
  recipe3Ingredients: "재료: 큰 애호박 1개(면으로 spiralize), 칠면조 다짐육 120g, 무설탕 마리나라 소스 1/2컵, 마늘.",
  recipe3Instructions: "만드는 법: 칠면조를 마늘과 볶고 소스를 넣은 뒤 호박면 위에 얹습니다.",
  recipe3Why: "추천 이유: 파스타 대신 호박면을 사용해 탄수화물과 칼로리를 줄이고 푸짐함은 유지했어요.",
  keywordTip: "키워드 팁: \"저탄수화물 저녁 레시피\"를 검색해 더 많은 아이디어를 찾아보세요!",
  
  // Recipe 4
  recipe4Title: "4. 구운 연어와 아스파라거스",
  recipe4Calories: "칼로리: 1인분 약 400칼로리",
  recipe4Ingredients: "재료: 연어 필렛 120g, 올리브 오일 1작은술, 레몬 제스트, 아스파라거스 10줄기.",
  recipe4Instructions: "만드는 법: 연어와 아스파라거스를 양념해 200°C 오븐에서 15분 굽습니다.",
  recipe4Why: "추천 이유: 연어의 오메가-3가 신진대사를 돕고, 아스파라거스는 저칼로리 영양 덩어리예요.",
  
  // Recipe 5
  recipe5Title: "5. 꽃양배추 프라이드 \"라이스\"와 두부",
  recipe5Calories: "칼로리: 1인분 약 280칼로리",
  recipe5Ingredients: "재료: 꽃양배추 밥 1컵, 두부 90g, 계란 1개, 간장 1큰술, 파.",
  recipe5Instructions: "만드는 법: 계란을 스크램블하고, 두부와 꽃양배추 밥을 볶아 간장으로 맛을 낸 뒤 파를 뿌립니다.",
  recipe5Why: "추천 이유: 밥 대신 꽃양배추로 칼로리를 줄이고, 두부가 식물성 단백질을 더해줍니다.",
  
  // Tips Section
  tipsTitle: "저칼로리 저녁을 위한 팁",
  tip1: "진한 소스 피하기: 크림 소스 대신 향신료, 허브, 식초를 활용하세요.",
  tip2: "양 조절하기: 주방 저울과 우리 칼로리 계산기로 건강한 재료도 과식하지 않도록 확인하세요!",
  tip3: "채소 듬뿍: 칼로리는 낮고 부피는 커 포만감을 오래 유지해줍니다.",
  
  // Customization Section
  customizeTitle: "레시피를 나만의 스타일로 바꾸는 법",
  customizeText: "사람마다 필요한 칼로리가 다릅니다. 하루 1,200칼로리든 2,000칼로리든, 우리 칼로리 계산기가 도와줄게요. 이 레시피의 재료와 양을 입력하고, 올리브 오일을 줄이거나 두부를 닭고기로 바꿔보세요. 결과가 바로 나옵니다!",
  
  // Why It Works Section
  whyWorksTitle: "이 레시피가 다이어트에 좋은 이유",
  whyWorksText: "이 저녁 메뉴들은 칼로리가 낮을 뿐 아니라 단백질, 섬유질, 건강한 지방이 균형을 이뤄 허기를 줄여줍니다. 게다가 조리가 간단해 배달 음식 유혹도 덜 받죠. 연구에 따르면 칼로리 추적을 꾸준히 하면 다이어트 성공률이 높아진다고 해요. 맛있는 식단으로 쉽게 실천해보세요.",
  
  // Conclusion
  conclusionTitle: "요리 시작할 준비되셨나요?",
  conclusionText: "이 저칼로리 저녁 레시피로 다이어트도 맛있게 즐길 수 있다는 걸 증명했죠. 지금 우리 사이트에서 재료를 입력하고 칼로리를 계산해보세요. 당신의 다이어트 여정을 응원합니다!",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용하여 좋아하는 요리의 칼로리를 분석하고 현명한 식사 선택을 하세요."
};

export default function LowCalorieDinnerRecipes() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/low-calorie-dinner-recipes"
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
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/low-calorie-dinner-recipes-illustration-YqLizc8GNNPzpxOC7mSg87uaBPdSjg.jpg"
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

            {/* Recipe 1 */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.recipe1Title}
            </h2>
            <p className="text-indigo-600 font-medium">{content.recipe1Calories}</p>
            <p className="mb-2">{content.recipe1Ingredients}</p>
            <p className="mb-2">{content.recipe1Instructions}</p>
            <p className="mb-2">{content.recipe1Why}</p>
            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.recipe1Tip}</p>
            </div>

            {/* Recipe 2 */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.recipe2Title}
            </h2>
            <p className="text-indigo-600 font-medium">{content.recipe2Calories}</p>
            <p className="mb-2">{content.recipe2Ingredients}</p>
            <p className="mb-2">{content.recipe2Instructions}</p>
            <p className="mb-8">{content.recipe2Why}</p>

            {/* Recipe 3 */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.recipe3Title}
            </h2>
            <p className="text-indigo-600 font-medium">{content.recipe3Calories}</p>
            <p className="mb-2">{content.recipe3Ingredients}</p>
            <p className="mb-2">{content.recipe3Instructions}</p>
            <p className="mb-2">{content.recipe3Why}</p>
            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.keywordTip}</p>
            </div>

            {/* Recipe 4 */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.recipe4Title}
            </h2>
            <p className="text-indigo-600 font-medium">{content.recipe4Calories}</p>
            <p className="mb-2">{content.recipe4Ingredients}</p>
            <p className="mb-2">{content.recipe4Instructions}</p>
            <p className="mb-8">{content.recipe4Why}</p>

            {/* Recipe 5 */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.recipe5Title}
            </h2>
            <p className="text-indigo-600 font-medium">{content.recipe5Calories}</p>
            <p className="mb-2">{content.recipe5Ingredients}</p>
            <p className="mb-2">{content.recipe5Instructions}</p>
            <p className="mb-8">{content.recipe5Why}</p>

            {/* Tips Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.tipsTitle}
            </h2>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2">{content.tip1}</li>
              <li className="mb-2">{content.tip2}</li>
              <li className="mb-2">{content.tip3}</li>
            </ul>

            {/* Customization Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.customizeTitle}
            </h2>
            <p className="mb-8">{content.customizeText}</p>

            {/* Why It Works Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.whyWorksTitle}
            </h2>
            <p className="mb-8">{content.whyWorksText}</p>

            {/* Conclusion */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.conclusionTitle}
            </h2>
            <p className="mb-8">{content.conclusionText}</p>

            {/* Calculator Promotion */}
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