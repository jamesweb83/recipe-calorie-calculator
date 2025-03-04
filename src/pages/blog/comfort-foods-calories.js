import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

// 영어 콘텐츠
const englishContent = {
  title: "How Many Calories Are in Your Favorite Comfort Foods?",
  description: "Discover the calorie content of popular comfort foods and learn how to enjoy them smarter with our calorie calculator.",
  publishedDate: "Published: March 26, 2024",
  
  intro: "Comfort foods warm the soul, but they can also sneakily pack on the calories. Ever wondered how much your go-to dishes—like mac and cheese or fried chicken—really cost your diet? In this post, we'll break down the calorie counts of popular comfort foods and show you how to enjoy them smarter. With our calorie calculator, you can even tweak recipes to fit your goals!",
  
  whyTitle: "Why Comfort Foods Matter",
  whyText: "We turn to comfort foods for nostalgia or stress relief, but their rich flavors often come with a high calorie price tag. Knowing the numbers helps you balance indulgence with health—without the guilt.",
  
  breakdownTitle: "Calorie Breakdown of Your Favorites",
  macAndCheese: {
    title: "Mac and Cheese",
    calories: "Calories: ~700 per 1.5-cup serving (boxed with cheese sauce).",
    ingredients: "What's Inside: Pasta, butter, cheese, milk. That creamy sauce is the calorie culprit!",
    tip: "Lighten It: Swap half the cheese for pureed cauliflower—check the difference with our calculator."
  },
  friedChicken: {
    title: "Fried Chicken",
    calories: "Calories: ~800 per 2-piece serving (drumstick + thigh, breaded).",
    ingredients: "What's Inside: Chicken, flour coating, frying oil. Oil absorption adds hundreds of calories.",
    tip: "Lighten It: Bake instead of fry; see the calorie drop instantly."
  },
  pizza: {
    title: "Pizza (Pepperoni)",
    calories: "Calories: ~600 per 2 slices (medium, chain restaurant).",
    ingredients: "What's Inside: Dough, cheese, pepperoni, sauce. Toppings pile on fast!",
    tip: "Lighten It: Go thin crust and load up on veggies."
  },
  mashedPotatoes: {
    title: "Mashed Potatoes with Gravy",
    calories: "Calories: ~400 per cup with gravy.",
    ingredients: "What's Inside: Potatoes, butter, cream, gravy. Butter and cream double the count.",
    tip: "Lighten It: Use Greek yogurt instead of cream—calculate the savings!"
  },
  cookies: {
    title: "Chocolate Chip Cookies",
    calories: "Calories: ~200 per 2 medium cookies.",
    ingredients: "What's Inside: Flour, sugar, butter, chocolate. Small but mighty!",
    tip: "Lighten It: Cut butter by half and add applesauce."
  },
  
  proTip: "Pro Tip: Plug these recipes into our calorie calculator to get exact numbers for your portions!",
  
  whyCaloriesTitle: "Why Calories Add Up",
  whyCaloriesText: "Comfort foods often lean on fats (butter, oil) and carbs (pasta, breading), which are calorie-dense. A single meal can hit half your daily limit! But with a few swaps, you can keep the comfort without overdoing it.",
  
  howToTitle: "How to Enjoy Comfort Foods Guilt-Free",
  howToList: [
    "Portion Control: Smaller servings still satisfy—measure with our tool.",
    "Smart Swaps: Replace heavy ingredients with lighter ones (e.g., zucchini noodles for pasta).",
    "Bake, Don't Fry: Cuts calories without losing flavor."
  ],
  
  calculatorTitle: "Take Control with Our Calorie Calculator",
  calculatorText: "Curious about your homemade version? Input your ingredients—like 1 cup pasta, 2 oz cheese, 1 tbsp butter—into our calculator for a precise count. Tweak it live to lower the calories and keep the taste. It's your comfort food, your way!",
  
  conclusionTitle: "Know Your Numbers, Love Your Food",
  conclusionText: "Comfort foods don't have to derail your diet. By understanding their calorie content and making small changes, you can savor every bite. Try calculating your favorite recipe today—see how easy it is to lighten up!",
  
  callToAction: "Want more? Search \"low-calorie comfort food recipes\" or test your dish with us now!",
  
  calculatorPromo: "Ready to calculate your comfort food calories? Use our Recipe Calorie Calculator to get precise measurements for your meals."
};

// 한국어 콘텐츠
const koreanContent = {
  title: "당신이 좋아하는 위안 음식의 칼로리는 얼마일까?",
  description: "인기 위안 음식의 칼로리를 알아보고, 우리 칼로리 계산기로 더 스마트하게 즐기는 방법을 배워보세요.",
  publishedDate: "게시일: 2024년 3월 26일",
  
  intro: "위안 음식은 마음을 따뜻하게 하지만, 칼로리를 몰래 쌓이게 할 수도 있어요. 맥앤치즈나 프라이드 치킨 같은 당신의 단골 음식이 식단에 얼마나 영향을 미치는지 궁금하지 않으신가요? 이 글에서 인기 위안 음식의 칼로리를 분석하고, 더 스마트하게 즐기는 법을 알려드릴게요. 우리 칼로리 계산기로 레시피를 목표에 맞게 조정할 수도 있습니다!",
  
  whyTitle: "위안 음식이 중요한 이유",
  whyText: "우리는 추억이나 스트레스 해소를 위해 위안 음식을 찾지만, 그 진한 맛은 종종 높은 칼로리를 동반해요. 숫자를 알면 건강과 즐거움을 균형 있게 유지할 수 있어요—죄책감 없이요.",
  
  breakdownTitle: "인기 음식의 칼로리 분석",
  macAndCheese: {
    title: "맥앤치즈",
    calories: "칼로리: 1.5컵 분량(치즈 소스 포함 박스 제품) 약 700칼로리.",
    ingredients: "재료: 파스타, 버터, 치즈, 우유. 크리미한 소스가 칼로리 주범이에요!",
    tip: "줄이는 법: 치즈 절반을 퓌레한 꽃양배추로 바꿔보세요—계산기로 확인해보세요."
  },
  friedChicken: {
    title: "프라이드 치킨",
    calories: "칼로리: 2조각(닭다리+허벅지, 튀김옷 입힘) 약 800칼로리.",
    ingredients: "재료: 닭고기, 밀가루 튀김옷, 튀김 기름. 기름이 칼로리를 엄청 늘려요.",
    tip: "줄이는 법: 튀기지 말고 구워서 칼로리 차이를 확인하세요."
  },
  pizza: {
    title: "페퍼로니 피자",
    calories: "칼로리: 2조각(중형, 체인점 기준) 약 600칼로리.",
    ingredients: "재료: 도우, 치즈, 페퍼로니, 소스. 토핑이 빠르게 쌓여요!",
    tip: "줄이는 법: 얇은 크러스트에 채소를 듬뿍 올려보세요."
  },
  mashedPotatoes: {
    title: "매쉬드 포테이토와 그레이비",
    calories: "칼로리: 그레이비 포함 1컵 약 400칼로리.",
    ingredients: "재료: 감자, 버터, 크림, 그레이비. 버터와 크림이 칼로리를 두 배로!",
    tip: "줄이는 법: 크림 대신 그릭 요거트를—얼마나 줄어드는지 계산해보세요!"
  },
  cookies: {
    title: "초코칩 쿠키",
    calories: "칼로리: 중형 2개 약 200칼로리.",
    ingredients: "재료: 밀가루, 설탕, 버터, 초콜릿. 작아도 강력해요!",
    tip: "줄이는 법: 버터를 절반으로 줄이고 사과소스를 추가하세요."
  },
  
  proTip: "팁: 이 레시피를 우리 칼로리 계산기에 넣어 당신의 양에 맞는 정확한 숫자를 확인하세요!",
  
  whyCaloriesTitle: "칼로리가 쌓이는 이유",
  whyCaloriesText: "위안 음식은 지방(버터, 기름)과 탄수화물(파스타, 튀김옷)에 의존하는데, 이게 칼로리를 높여요. 한 끼에 하루 권장량의 절반을 채울 수도 있죠! 하지만 몇 가지 변화로 과식을 피할 수 있어요.",
  
  howToTitle: "위안 음식을 죄책감 없이 즐기는 법",
  howToList: [
    "양 조절: 적은 양으로도 만족할 수 있어요—우리 도구로 측정해보세요.",
    "스마트 대체: 무거운 재료를 가벼운 것으로(예: 파스타 대신 호박면).",
    "굽기 대신 튀기지 않기: 맛은 유지하고 칼로리는 줄여요."
  ],
  
  calculatorTitle: "우리 칼로리 계산기로 조절하기",
  calculatorText: "집에서 만든 버전이 궁금하다면? 파스타 1컵, 치즈 60g, 버터 1큰술을 계산기에 입력해보세요. 실시간으로 조정해 칼로리를 낮추고 맛을 유지할 수 있습니다. 나만의 위안 음식을 만들어보세요!",
  
  conclusionTitle: "숫자를 알고 음식을 더 사랑하세요",
  conclusionText: "위안 음식이 식단을 망칠 필요는 없어요. 칼로리를 이해하고 작은 변화를 주면, 맛있게 즐길 수 있습니다. 오늘 당신이 좋아하는 레시피를 계산해보세요—가볍게 만드는 게 얼마나 쉬운지 알게 될 거예요!",
  
  callToAction: "더 알고 싶다면? \"저칼로리 위안 음식 레시피\"를 검색하거나 지금 당신의 요리를 계산해보세요!",
  
  calculatorPromo: "위안 음식의 칼로리를 계산할 준비가 되셨나요? 레시피 칼로리 계산기로 정확한 식사 측정을 시작해보세요."
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
          </header>

          <div className="prose prose-lg max-w-none prose-indigo">
            <p className="mb-8">{content.intro}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.whyTitle}
            </h2>
            <p className="mb-8">{content.whyText}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.breakdownTitle}
            </h2>

            <div className="space-y-8">
              {/* Mac and Cheese */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {content.macAndCheese.title}
                </h3>
                <p className="text-gray-700 mb-2">{content.macAndCheese.calories}</p>
                <p className="text-gray-600 mb-2">{content.macAndCheese.ingredients}</p>
                <p className="text-indigo-600 font-medium">{content.macAndCheese.tip}</p>
              </div>

              {/* Fried Chicken */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {content.friedChicken.title}
                </h3>
                <p className="text-gray-700 mb-2">{content.friedChicken.calories}</p>
                <p className="text-gray-600 mb-2">{content.friedChicken.ingredients}</p>
                <p className="text-indigo-600 font-medium">{content.friedChicken.tip}</p>
              </div>

              {/* Pizza */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {content.pizza.title}
                </h3>
                <p className="text-gray-700 mb-2">{content.pizza.calories}</p>
                <p className="text-gray-600 mb-2">{content.pizza.ingredients}</p>
                <p className="text-indigo-600 font-medium">{content.pizza.tip}</p>
              </div>

              {/* Mashed Potatoes */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {content.mashedPotatoes.title}
                </h3>
                <p className="text-gray-700 mb-2">{content.mashedPotatoes.calories}</p>
                <p className="text-gray-600 mb-2">{content.mashedPotatoes.ingredients}</p>
                <p className="text-indigo-600 font-medium">{content.mashedPotatoes.tip}</p>
              </div>

              {/* Cookies */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {content.cookies.title}
                </h3>
                <p className="text-gray-700 mb-2">{content.cookies.calories}</p>
                <p className="text-gray-600 mb-2">{content.cookies.ingredients}</p>
                <p className="text-indigo-600 font-medium">{content.cookies.tip}</p>
              </div>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg my-8">
              <p className="text-indigo-700">{content.proTip}</p>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.whyCaloriesTitle}
            </h2>
            <p className="mb-8">{content.whyCaloriesText}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.howToTitle}
            </h2>
            <ul className="list-disc pl-6 mb-8">
              {content.howToList.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.calculatorTitle}
            </h2>
            <p className="mb-8">{content.calculatorText}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.conclusionTitle}
            </h2>
            <p className="mb-8">{content.conclusionText}</p>

            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.callToAction}</p>
            </div>

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