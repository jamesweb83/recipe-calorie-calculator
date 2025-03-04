import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const englishContent = {
  title: "10 Netflix Snack Recipes Under 100 Calories",
  description: "Guilt-Free Netflix Binge: 10 Easy Snack Recipes Under 100 Calories. Perfect for your weekend Netflix marathon!",
  publishedDate: "April 2, 2024",
  intro: "Weekend evening, Netflix marathon starting? 🍿 When you're engrossed in a great drama or movie and feeling peckish, it's hard to resist the urge for a snack. But say goodbye to calorie worries! Here are 10 super easy snack recipes under 100 calories you can enjoy without guilt. 😋",
  
  recipesTitle: "10 Guilt-Free Netflix Snacks",
  
  puffedRiceTitle: "1. Puffed Rice Cakes Instead of Popcorn (Approx. 30kcal)",
  puffedRiceDesc: "Crispy and savory puffed rice cakes are a fantastic alternative to popcorn! Much lower in calories and just as satisfying. 👍",
  puffedRiceTip: "Tip: Sprinkle with seaweed flakes or parsley powder for a flavor boost.",
  
  frozenFruitTitle: "2. Sweet & Tangy Frozen Fruit Mix (Approx. 50kcal)",
  frozenFruitDesc: "Mix your favorite frozen fruits like blueberries, strawberries, and mangoes 🧊! Cool and sweet, perfect as a healthy ice cream substitute.",
  frozenFruitTip: "Tip: Dip them in a little plain Greek yogurt for extra creaminess.",
  
  seaweedTitle: "3. Savory Roasted Seaweed (Approx. 10kcal)",
  seaweedDesc: "Crispy and salty roasted seaweed is a wonderfully light snack. ✨",
  seaweedTip: "Tip: Dip in a touch of soy sauce or use larger sheets to wrap veggies like lettuce for a healthy 'ssam' (wrap).",
  
  tomatoesTitle: "4. Bursting Cherry Tomato Marinade (Approx. 70kcal)",
  tomatoesDesc: "Marinate cherry tomatoes in balsamic vinegar, olive oil, and a touch of honey! Tangy and bursting with flavor! 🍅",
  tomatoesTip: "Tip: Add chopped basil, parsley, or onion for extra depth.",
  
  konjacTitle: "5. Chewy Konjac Jelly (Under 10kcal)",
  konjacDesc: "A dieter's essential! Konjac jelly comes in various flavors and offers a satisfyingly chewy and bouncy texture. 💖",
  konjacTip: "Tip: Keep them chilled in the fridge for a refreshing treat.",
  
  jalapenoTitle: "6. Spicy Jalapeno Pickles (Approx. 20kcal)",
  jalapenoDesc: "Jalapeno pickles cut through richness and offer a spicy, crunchy kick! Perfect when you need to perk up your palate. 🌶️",
  jalapenoTip: "Tip: Use the pickle brine in salad dressings for a zesty flavor.",
  
  herbalTeaTitle: "7. Aromatic Herbal Tea (Under 5kcal)",
  herbalTeaDesc: "Warm herbal tea relaxes your body and mind, and cleanses your palate. ☕",
  herbalTeaTip: "Recommended Herbal Teas: Chamomile, Peppermint, Rooibos",
  
  chickpeasTitle: "8. Crispy Roasted Chickpea Snacks (Approx. 90kcal)",
  chickpeasDesc: "Healthy snack made by roasting chickpeas in an air fryer! Savory and crunchy, providing satisfying texture. 💪",
  chickpeasTip: "Tip: Season with salt, pepper, paprika powder, or your favorite spices.",
  
  yogurtTitle: "9. Sweet Greek Yogurt + Berries (Approx. 80kcal)",
  yogurtDesc: "Protein-packed Greek yogurt topped with frozen berries! Sweet and healthy goodness! 🍓",
  yogurtTip: "Tip: Add a small amount of nuts or granola for extra crunch and staying power.",
  
  eggTitle: "10. Filling Hard-Boiled Egg (Approx. 70kcal)",
  eggDesc: "Protein-rich hard-boiled eggs keep you feeling full for longer. 🥚",
  eggTip: "Tip: Season with salt, pepper, hot sauce, or your preferred spices.",
  
  conclusionTitle: "Enjoy Your Netflix Marathon!",
  conclusionText: "Now you can enjoy delicious snacks while watching Netflix without calorie guilt! 😉",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your snacks and ensure they stay within your calorie goals."
};

const koreanContent = {
  title: "넷플릭스 보면서 먹기 좋은 100칼로리 이하 간식 레시피",
  description: "넷플릭스 야식 걱정 끝! 100칼로리 이하 초간단 간식 레시피 10가지",
  publishedDate: "2024년 4월 2일",
  intro: "주말 저녁, 넷플릭스 정주행 시작하셨나요? 🍿 꿀잼 드라마, 영화 감상하며 입이 심심할 때, 야식의 유혹을 뿌리치기 힘들죠. 하지만 칼로리 걱정은 이제 그만! 100칼로리 이하로 부담 없이 즐길 수 있는 초간단 간식 레시피 10가지를 소개합니다. 😋",
  
  recipesTitle: "부담 없는 넷플릭스 간식 10가지",
  
  puffedRiceTitle: "1. 팝콘 대신 뻥튀기 (약 30kcal)",
  puffedRiceDesc: "고소하고 바삭한 뻥튀기는 팝콘의 훌륭한 대체재! 칼로리는 훨씬 낮고, 포만감은 UP! 👍",
  puffedRiceTip: "꿀팁: 김 가루나 파슬리 가루를 뿌려 색다른 맛을 즐겨보세요.",
  
  frozenFruitTitle: "2. 상큼 달콤 냉동 과일 (50kcal 내외)",
  frozenFruitDesc: "냉동 블루베리, 냉동 딸기, 냉동 망고 등 🧊 취향에 맞는 냉동 과일을 믹스! 시원하고 달콤해서 아이스크림 대용으로 딱!",
  frozenFruitTip: "꿀팁: 플레인 요거트 살짝 찍어 먹으면 더욱 맛있어요.",
  
  seaweedTitle: "3. 고소한 구운 김 (10kcal 내외)",
  seaweedDesc: "바삭하고 짭짤한 구운 김은 칼로리 부담 없이 즐기기 좋은 간식. ✨",
  seaweedTip: "꿀팁: 간장 살짝 찍어 먹거나, 김밥 김에 밥 대신 채소를 넣어 쌈처럼 즐겨도 좋아요.",
  
  tomatoesTitle: "4. 톡톡 터지는 방울토마토 마리네이드 (70kcal 내외)",
  tomatoesDesc: "방울토마토를 발사믹 식초, 올리브 오일, 약간의 꿀에 재워 마리네이드! 상큼하고 톡톡 터지는 식감이 최고! 🍅",
  tomatoesTip: "꿀팁: 바질이나 파슬리, 양파 다진 것을 추가하면 더욱 풍미가 깊어져요.",
  
  konjacTitle: "5. 오독오독 곤약 젤리 (10kcal 미만)",
  konjacDesc: "다이어터들의 필수템 곤약 젤리! 다양한 맛으로 골라 먹는 재미까지! 쫄깃하고 탱글탱글한 식감으로 만족감을 높여줘요. 💖",
  konjacTip: "꿀팁: 냉장고에 차갑게 보관해서 시원하게 즐기세요.",
  
  jalapenoTitle: "6. 매콤한 할라피뇨 피클 (20kcal 내외)",
  jalapenoDesc: "느끼함을 잡아주는 할라피뇨 피클! 매콤하고 아삭해서 입맛 없을 때 먹으면 딱! 🌶️",
  jalapenoTip: "꿀팁: 피클 국물 살짝 넣어 샐러드 드레싱으로 활용해도 좋아요.",
  
  herbalTeaTitle: "7. 향긋한 허브티 (5kcal 미만)",
  herbalTeaDesc: "따뜻한 허브티는 몸과 마음을 편안하게 해주고, 입 안을 깔끔하게 마무리해줘요. ☕",
  herbalTeaTip: "추천 허브티: 캐모마일, 페퍼민트, 루이보스",
  
  chickpeasTitle: "8. 바삭한 병아리콩 스낵 (90kcal 내외)",
  chickpeasDesc: "병아리콩을 에어프라이어에 구워 만든 건강 스낵! 고소하고 바삭해서 씹는 즐거움까지! 💪",
  chickpeasTip: "꿀팁: 소금, 후추, 파프리카 파우더 등으로 시즈닝해서 즐겨보세요.",
  
  yogurtTitle: "9. 달콤한 그릭 요거트 + 베리 (80kcal 내외)",
  yogurtDesc: "단백질 풍부한 그릭 요거트에 냉동 베리류를 듬뿍! 달콤하고 건강한 맛! 🍓",
  yogurtTip: "꿀팁: 견과류나 그래놀라를 소량 추가하면 더욱 든든하게 즐길 수 있어요.",
  
  eggTitle: "10. 든든한 삶은 계란 (70kcal 내외)",
  eggDesc: "단백질 듬뿍 삶은 계란은 포만감을 오래 유지시켜 줍니다. 🥚",
  eggTip: "꿀팁: 소금, 후추, 핫소스 등 취향에 맞게 곁들여 드세요.",
  
  conclusionTitle: "즐거운 넷플릭스 정주행!",
  conclusionText: "이제 칼로리 걱정 없이 넷플릭스 시청하며 맛있는 간식 즐겨보세요! 😉",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용해 간식의 칼로리를 분석하고 목표 칼로리 내에서 유지하세요."
};

export default function NetflixSnacks() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/netflix-snacks"
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
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/konjac-jelly-illustration-QWWy7M4tSQ05fotfZ1PkC3AD7NOq7t.jpg"
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
              {content.recipesTitle}
            </h2>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.puffedRiceTitle}
              </h3>
              <p className="text-gray-600 mb-2">{content.puffedRiceDesc}</p>
              <p className="text-gray-500 italic">{content.puffedRiceTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.frozenFruitTitle}
              </h3>
              <p className="text-gray-600 mb-2">{content.frozenFruitDesc}</p>
              <p className="text-gray-500 italic">{content.frozenFruitTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.seaweedTitle}
              </h3>
              <p className="text-gray-600 mb-2">{content.seaweedDesc}</p>
              <p className="text-gray-500 italic">{content.seaweedTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.tomatoesTitle}
              </h3>
              <p className="text-gray-600 mb-2">{content.tomatoesDesc}</p>
              <p className="text-gray-500 italic">{content.tomatoesTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.konjacTitle}
              </h3>
              <p className="text-gray-600 mb-2">{content.konjacDesc}</p>
              <p className="text-gray-500 italic">{content.konjacTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.jalapenoTitle}
              </h3>
              <p className="text-gray-600 mb-2">{content.jalapenoDesc}</p>
              <p className="text-gray-500 italic">{content.jalapenoTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.herbalTeaTitle}
              </h3>
              <p className="text-gray-600 mb-2">{content.herbalTeaDesc}</p>
              <p className="text-gray-500 italic">{content.herbalTeaTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.chickpeasTitle}
              </h3>
              <p className="text-gray-600 mb-2">{content.chickpeasDesc}</p>
              <p className="text-gray-500 italic">{content.chickpeasTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.yogurtTitle}
              </h3>
              <p className="text-gray-600 mb-2">{content.yogurtDesc}</p>
              <p className="text-gray-500 italic">{content.yogurtTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.eggTitle}
              </h3>
              <p className="text-gray-600 mb-2">{content.eggDesc}</p>
              <p className="text-gray-500 italic">{content.eggTip}</p>
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