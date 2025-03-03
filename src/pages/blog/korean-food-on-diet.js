import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

// 영어 콘텐츠
const englishContent = {
  title: "How to Enjoy Korean Food on a Diet: Delicious and Healthy Tips",
  description: "Learn how to enjoy Korean cuisine while maintaining your diet goals with these practical tips and healthy alternatives.",
  publishedDate: "Published: March 15, 2024",
  
  intro: "Korean cuisine is famous for its bold flavors, vibrant colors, and diverse dishes like kimchi, bibimbap, and bulgogi. But if you're on a diet, you might wonder: Can I still enjoy Korean food without ruining my goals? The good news is yes! With a few smart tweaks, you can savor the taste of Korea while staying on track with your health journey. In this guide, we'll share practical tips to enjoy Korean food on a diet, balancing flavor and nutrition effortlessly.",
  
  whyKoreanFoodTitle: "Why Korean Food Can Be Diet-Friendly",
  whyKoreanFoodText: "Korean cuisine is naturally packed with ingredients that align with a healthy lifestyle. Think fermented foods like kimchi (great for gut health), lean proteins like tofu and fish, and plenty of vegetables. The key is knowing how to adjust portions and preparation methods to fit your dietary needs—whether you're aiming for weight loss, low-carb, or balanced eating.",
  
  // Low-Calorie Staples Section
  lowCalorieTitle: "1. Start with Low-Calorie Korean Staples",
  lowCalorieIntro: "Korean meals often come with a variety of side dishes (banchan), many of which are low in calories and high in nutrients. Here's how to make the most of them:",
  
  kimchiTitle: "Kimchi",
  kimchiText: "This spicy fermented cabbage is low in calories (about 20-30 calories per serving) and rich in probiotics. Opt for kimchi without added sugar for the healthiest choice.",
  
  steamedVeggiesTitle: "Steamed Vegetables",
  steamedVeggiesText: "Look for lightly seasoned options like spinach (sigeumchi namul) or bean sprouts (kongnamul). They're filling, fiber-rich, and diet-approved.",
  
  seaweedSoupTitle: "Seaweed Soup (Miyeokguk)",
  seaweedSoupText: "A light, flavorful broth with minimal calories—perfect for a satisfying starter.",
  
  proTip: "Pro Tip: Skip the heavy rice portion and pair your banchan with a small amount of brown rice or cauliflower rice for a low-carb twist.",
  
  // Lean Proteins Section
  leanProteinsTitle: "2. Choose Lean Proteins Over Fried Options",
  leanProteinsIntro: "Korean BBQ is a fan favorite, but it's easy to overindulge in fatty cuts or deep-fried dishes. Instead, focus on these diet-friendly proteins:",
  
  grilledChickenTitle: "Grilled Chicken (Dak Galbi)",
  grilledChickenText: "Marinated in spicy sauce but grilled, not fried—lower in fat and full of flavor.",
  
  tofuTitle: "Tofu (Dubu)",
  tofuText: "Soft or grilled tofu is a staple in dishes like sundubu jjigae (tofu stew). It's high in protein and low in calories.",
  
  fishTitle: "Fish",
  fishText: "Steamed or grilled fish like mackerel (godeungeo) offers omega-3s without the extra grease.",
  
  avoidTip: "Avoid tempura-style dishes or anything coated in sugary sauces to keep your meal light.",
  
  // Portion Control Section
  portionControlTitle: "3. Master Portion Control with Korean Classics",
  portionControlIntro: "Dishes like bibimbap and kimbap are delicious but can sneaky calories if you're not careful. Here's how to enjoy them on a diet:",
  
  bibimbapTitle: "Bibimbap",
  bibimbapText: "Request a smaller rice portion or skip it entirely, loading up on veggies like mushrooms, zucchini, and carrots. Go easy on the sesame oil and ask for the fried egg to be swapped for a boiled one.",
  
  kimbapTitle: "Kimbap",
  kimbapText: "Opt for versions with tuna or veggies instead of fried fillings. One roll can be a balanced snack if you avoid overeating.",
  
  keywordTip: "Keyword Tip: Searching for \"healthy Korean recipes\" or \"low-calorie bibimbap\" online can give you more ideas to customize these classics.",
  
  // Hidden Calories Section
  hiddenCaloriesTitle: "4. Watch Out for Hidden Calories",
  hiddenCaloriesIntro: "Korean food is often healthy at its core, but sauces and cooking methods can add up. Keep an eye on:",
  
  gochujangTitle: "Gochujang",
  gochujangText: "This red pepper paste is tasty but often mixed with sugar or syrup. Use it sparingly or look for low-sugar versions.",
  
  soySauceTitle: "Soy Sauce",
  soySauceText: "High in sodium, so dilute it with water or use less to avoid bloating.",
  
  friedSidesTitle: "Fried Sides",
  friedSidesText: "Skip the Korean fried chicken (yangnyeom chicken) and pancakes (jeon) if you're cutting calories.",
  
  // Balance Section
  balanceTitle: "5. Balance Your Meal Korean-Style",
  balanceIntro: "Traditional Korean meals are served with a variety of small dishes, making it easy to create a balanced plate. Aim for:",
  balanceList: [
    "50% vegetables (non-starchy ones like cabbage, radish, or greens)",
    "25% lean protein (tofu, fish, or chicken)",
    "25% carbs (a small scoop of rice or sweet potato)"
  ],
  balanceNote: "This ratio keeps you full without overloading on calories, all while enjoying the Korean dining experience.",
  
  // Recipe Section
  recipeTitle: "Bonus: Healthy Korean Food Recipe to Try",
  recipeIntro: "Want to bring Korean flavors home? Try this simple Spicy Tofu Stir-Fry:",
  ingredients: [
    "1 block firm tofu",
    "1 tbsp gochujang (low-sugar)",
    "1 tsp soy sauce",
    "1 cup zucchini",
    "1/2 cup mushrooms",
    "sesame seeds (optional)"
  ],
  instructions: "Cube tofu, stir-fry with veggies in a non-stick pan, mix in sauce, and cook until tender. Sprinkle sesame seeds for crunch.",
  calories: "Calories: ~200 per serving.",
  
  // Conclusion
  conclusionTitle: "Final Thoughts: Enjoy Korean Food Guilt-Free",
  conclusionText: "You don't have to give up Korean cuisine to stay on a diet. By choosing nutrient-dense ingredients, controlling portions, and tweaking recipes, you can enjoy the spicy, savory goodness of Korean food while hitting your health goals. Next time you're craving kimchi or bulgogi, use these tips to keep it light and delicious!",
  
  callToAction: "Have a favorite Korean dish you'd like to make healthier? Share your thoughts below, or search \"diet-friendly Korean food\" for more inspiration!"
};

// 한국어 콘텐츠
const koreanContent = {
  title: "다이어트하면서 한식 즐기기: 맛있고 건강한 팁",
  description: "다이어트 목표를 유지하면서 한식을 즐기는 실용적인 팁과 건강한 대안을 알아보세요.",
  publishedDate: "게시일: 2024년 3월 15일",
  
  intro: "한식은 김치, 비빔밥, 불고기와 같은 다양한 요리로 강렬한 맛과 선명한 색감으로 유명합니다. 하지만 다이어트 중이라면 고민이 될 수 있죠: 목표를 망치지 않고 한식을 즐길 수 있을까요? 답은 '예'입니다! 몇 가지 현명한 조정만으로도 건강한 식단을 유지하면서 한식의 맛을 즐길 수 있습니다. 이 가이드에서는 맛과 영양의 균형을 쉽게 맞추면서 다이어트 중에도 한식을 즐기는 실용적인 팁을 공유합니다.",
  
  whyKoreanFoodTitle: "한식이 다이어트에 좋은 이유",
  whyKoreanFoodText: "한식은 자연스럽게 건강한 라이프스타일에 맞는 재료들로 구성되어 있습니다. 장 건강에 좋은 발효식품인 김치, 두부와 생선 같은 저지방 단백질, 그리고 풍부한 채소가 포함됩니다. 핵심은 체중 감량, 저탄수화물, 균형 잡힌 식사 등 여러분의 식단 목표에 맞게 양과 조리 방법을 조절하는 것입니다.",
  
  // Low-Calorie Staples Section
  lowCalorieTitle: "1. 저칼로리 한식 기본 반찬으로 시작하기",
  lowCalorieIntro: "한식은 다양한 반찬이 함께 제공되며, 대부분 칼로리가 낮고 영양가가 높습니다. 다음과 같이 활용해보세요:",
  
  kimchiTitle: "김치",
  kimchiText: "이 매콤한 발효 채소는 칼로리가 낮고(1회 제공량당 20-30칼로리) 프로바이오틱스가 풍부합니다. 가장 건강한 선택을 위해 설탕이 첨가되지 않은 김치를 선택하세요.",
  
  steamedVeggiesTitle: "숙채",
  steamedVeggiesText: "시금치나물이나 콩나물과 같이 가볍게 간이 된 옵션을 찾아보세요. 포만감이 있고 식이섬유가 풍부하며 다이어트에 적합합니다.",
  
  seaweedSoupTitle: "미역국",
  seaweedSoupText: "칼로리가 적고 맛있는 국물로 만족스러운 식사 시작을 위한 완벽한 선택입니다.",
  
  proTip: "프로 팁: 많은 양의 밥 대신 현미나 칼리플라워 라이스를 소량 곁들여 저탄수화물 식단으로 변형해보세요.",
  
  // Lean Proteins Section
  leanProteinsTitle: "2. 튀긴 음식 대신 담백한 단백질 선택하기",
  leanProteinsIntro: "한국식 바비큐는 인기 있는 메뉴지만, 기름진 고기나 튀긴 요리를 과하게 먹기 쉽습니다. 대신 이런 다이어트에 좋은 단백질을 선택해보세요:",
  
  grilledChickenTitle: "닭갈비",
  grilledChickenText: "매운 소스에 양념되어 있지만 튀기지 않고 구워 지방이 적고 맛이 풍부합니다.",
  
  tofuTitle: "두부",
  tofuText: "순두부찌개와 같은 요리에 사용되는 부드럽거나 구운 두부는 단백질이 높고 칼로리가 낮습니다.",
  
  fishTitle: "생선",
  fishText: "고등어와 같은 찜이나 구운 생선은 추가 기름 없이 오메가-3를 제공합니다.",
  
  avoidTip: "가벼운 식사를 위해 튀김류나 달콤한 소스가 묻은 음식은 피하세요.",
  
  // Portion Control Section
  portionControlTitle: "3. 한식 클래식 메뉴의 양 조절 마스터하기",
  portionControlIntro: "비빔밥과 김밥은 맛있지만 조심하지 않으면 칼로리가 높을 수 있습니다. 다이어트 중에도 이렇게 즐겨보세요:",
  
  bibimbapTitle: "비빔밥",
  bibimbapText: "밥의 양을 줄이거나 생략하고, 버섯, 호박, 당근과 같은 채소를 많이 넣으세요. 참기름은 적게 사용하고 계란프라이 대신 삶은 계란을 요청해보세요.",
  
  kimbapTitle: "김밥",
  kimbapText: "튀긴 재료 대신 참치나 채소가 들어간 버전을 선택하세요. 과식만 하지 않으면 한 줄이 균형 잡힌 간식이 될 수 있습니다.",
  
  keywordTip: "키워드 팁: \"건강한 한식 레시피\" 또는 \"저칼로리 비빔밥\"을 온라인에서 검색하면 이러한 클래식 메뉴를 커스터마이즈하는 더 많은 아이디어를 얻을 수 있습니다.",
  
  // Hidden Calories Section
  hiddenCaloriesTitle: "4. 숨은 칼로리 주의하기",
  hiddenCaloriesIntro: "한식은 기본적으로 건강하지만, 소스와 조리 방법에 따라 칼로리가 높아질 수 있습니다. 다음 사항에 주의하세요:",
  
  gochujangTitle: "고추장",
  gochujangText: "맛있지만 대개 설탕이나 시럽이 섞여 있습니다. 적게 사용하거나 저당 버전을 찾아보세요.",
  
  soySauceTitle: "간장",
  soySauceText: "나트륨이 높으므로 물로 희석하거나 적게 사용하여 붓기를 피하세요.",
  
  friedSidesTitle: "튀긴 반찬",
  friedSidesText: "칼로리를 줄이고 있다면 양념치킨과 전류는 피하세요.",
  
  // Balance Section
  balanceTitle: "5. 한식 스타일로 균형 잡힌 식사하기",
  balanceIntro: "전통적인 한식은 다양한 작은 반찬들로 제공되어 균형 잡힌 식단을 만들기 쉽습니다. 다음과 같은 비율을 목표로 하세요:",
  balanceList: [
    "50% 채소 (배추, 무, 푸른 잎 채소와 같은 녹말이 적은 채소)",
    "25% 담백한 단백질 (두부, 생선, 닭고기)",
    "25% 탄수화물 (밥이나 고구마 소량)"
  ],
  balanceNote: "이러한 비율은 한식의 맛을 즐기면서도 칼로리 과잉 없이 포만감을 유지할 수 있게 해줍니다.",
  
  // Recipe Section
  recipeTitle: "보너스: 시도해볼 만한 건강한 한식 레시피",
  recipeIntro: "집에서 한식 맛을 즐기고 싶으신가요? 이 간단한 매콤 두부 볶음을 시도해보세요:",
  ingredients: [
    "두부 1모",
    "고추장 1큰술 (저당)",
    "간장 1작은술",
    "호박 1컵",
    "버섯 1/2컵",
    "참깨 (선택사항)"
  ],
  instructions: "두부를 깍둑썰기하고, 논스틱 팬에서 채소와 함께 볶다가 소스를 넣고 부드러워질 때까지 조리하세요. 바삭한 식감을 위해 참깨를 뿌려주세요.",
  calories: "칼로리: 1인분당 약 200칼로리",
  
  // Conclusion
  conclusionTitle: "마무리: 죄책감 없이 한식 즐기기",
  conclusionText: "다이어트를 위해 한식을 포기할 필요는 없습니다. 영양가 높은 재료를 선택하고, 양을 조절하며, 레시피를 조금 변형하는 것만으로도 건강 목표를 달성하면서 매콤하고 감칠맛 나는 한식을 즐길 수 있습니다. 다음에 김치나 불고기가 먹고 싶을 때, 이러한 팁들을 활용해 가볍고 맛있게 즐겨보세요!",
  
  callToAction: "더 건강하게 만들고 싶은 좋아하는 한식이 있으신가요? 아래에 의견을 공유하거나 \"다이어트에 좋은 한식\"을 검색해서 더 많은 영감을 얻어보세요!"
};

export default function KoreanFoodOnDiet() {
  const { language } = useLanguage();
  
  // 언어에 따라 콘텐츠 결정
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/korean-food-on-diet"
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
            <p className="mb-8">{content.intro}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.whyKoreanFoodTitle}
            </h2>
            <p className="mb-8">{content.whyKoreanFoodText}</p>

            {/* Low-Calorie Staples Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.lowCalorieTitle}
            </h2>
            <p className="mb-6">{content.lowCalorieIntro}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.kimchiTitle}
            </h3>
            <p className="mb-4">{content.kimchiText}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.steamedVeggiesTitle}
            </h3>
            <p className="mb-4">{content.steamedVeggiesText}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.seaweedSoupTitle}
            </h3>
            <p className="mb-4">{content.seaweedSoupText}</p>

            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.proTip}</p>
            </div>

            {/* Lean Proteins Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.leanProteinsTitle}
            </h2>
            <p className="mb-6">{content.leanProteinsIntro}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.grilledChickenTitle}
            </h3>
            <p className="mb-4">{content.grilledChickenText}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.tofuTitle}
            </h3>
            <p className="mb-4">{content.tofuText}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.fishTitle}
            </h3>
            <p className="mb-4">{content.fishText}</p>

            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.avoidTip}</p>
            </div>

            {/* Portion Control Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.portionControlTitle}
            </h2>
            <p className="mb-6">{content.portionControlIntro}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.bibimbapTitle}
            </h3>
            <p className="mb-4">{content.bibimbapText}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.kimbapTitle}
            </h3>
            <p className="mb-4">{content.kimbapText}</p>

            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.keywordTip}</p>
            </div>

            {/* Hidden Calories Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.hiddenCaloriesTitle}
            </h2>
            <p className="mb-6">{content.hiddenCaloriesIntro}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.gochujangTitle}
            </h3>
            <p className="mb-4">{content.gochujangText}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.soySauceTitle}
            </h3>
            <p className="mb-4">{content.soySauceText}</p>

            <h3 className="text-xl font-medium text-indigo-700 mt-6 mb-3">
              {content.friedSidesTitle}
            </h3>
            <p className="mb-4">{content.friedSidesText}</p>

            {/* Balance Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.balanceTitle}
            </h2>
            <p className="mb-6">{content.balanceIntro}</p>
            <ul className="list-disc pl-6 mb-6">
              {content.balanceList.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>
            <p className="mb-8">{content.balanceNote}</p>

            {/* Recipe Section */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.recipeTitle}
            </h2>
            <p className="mb-6">{content.recipeIntro}</p>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-medium mb-4">재료:</h3>
              <ul className="list-disc pl-6 mb-6">
                {content.ingredients.map((ingredient, index) => (
                  <li key={index} className="mb-2">{ingredient}</li>
                ))}
              </ul>
              <h3 className="font-medium mb-4">조리 방법:</h3>
              <p className="mb-4">{content.instructions}</p>
              <p className="text-indigo-700 font-medium">{content.calories}</p>
            </div>

            {/* Conclusion */}
            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.conclusionTitle}
            </h2>
            <p className="mb-8">{content.conclusionText}</p>

            <div className="bg-indigo-50 p-6 rounded-lg mt-8">
              <p className="text-indigo-700">{content.callToAction}</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg mt-8">
              <p className="mb-4 text-indigo-700 font-medium">
                {language === 'ko' 
                  ? '레시피 칼로리 계산기를 사용하여 한식의 칼로리를 분석하고 건강한 식단을 계획해보세요.'
                  : 'Use our Recipe Calorie Calculator to analyze Korean dishes and plan your healthy diet.'}
              </p>
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