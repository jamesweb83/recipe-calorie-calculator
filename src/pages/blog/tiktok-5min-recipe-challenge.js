import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const englishContent = {
  title: "TikTok-Popular 5-Minute Low-Calorie Recipe Challenge",
  description: "TikTok is buzzing with quick, low-calorie dishes you can whip up in just 5 minutes! This challenge brings you fun, healthy recipes that fit your busy life and keep calories in check.",
  publishedDate: "March 31, 2024",
  intro: "TikTok is buzzing with quick, low-calorie dishes you can whip up in just 5 minutes! This challenge brings you fun, healthy recipes that fit your busy life and keep calories in check. Ready to join the viral trend? Here are five TikTok-inspired recipes to try now!",
  
  whyTitle: "Why Try This Challenge?",
  whyText: "These 5-minute recipes are perfect for anyone craving fast, guilt-free eats. They're low-calorie, trendy, and TikTok-approved—ideal for a quick snack or meal that still slays on camera.",
  
  recipesTitle: "Top 5 TikTok 5-Minute Low-Calorie Recipes",
  
  sushiTitle: "Cucumber Sushi Rolls (100 calories)",
  sushiIngredients: "1 cucumber (30 cal)\n1 tbsp cream cheese (50 cal)\n1 oz smoked salmon (20 cal)",
  sushiPrep: "Prep: Slice cucumber thin, spread cream cheese, roll with salmon.",
  sushiTip: "TikTok Hack: Use a peeler for insta-worthy ribbons!",
  
  pizzaTitle: "Zucchini Pizza Bites (150 calories)",
  pizzaIngredients: "1 zucchini (30 cal)\n2 tbsp marinara (20 cal)\n1/4 cup low-fat mozzarella (100 cal)",
  pizzaPrep: "Prep: Slice zucchini, top with sauce and cheese, microwave 2 mins.",
  pizzaTip: "TikTok Hack: Stack 'em for a mini pizza tower vibe.",
  
  chiaTitle: "Chia Seed Energy Shot (80 calories)",
  chiaIngredients: "1 tbsp chia seeds (60 cal)\n1/2 cup water (0 cal)\nsqueeze of lemon (5 cal)",
  chiaPrep: "Prep: Mix and let sit 3 mins, drink up!",
  chiaTip: "TikTok Hack: Sip it slow for that aesthetic pour shot.",
  
  wrapTitle: "Turkey Lettuce Wraps (120 calories)",
  wrapIngredients: "2 oz turkey slices (60 cal)\n2 lettuce leaves (5 cal)\n1 tbsp hummus (55 cal)",
  wrapPrep: "Prep: Spread hummus on lettuce, wrap turkey inside.",
  wrapTip: "TikTok Hack: Add a sprinkle of chili flakes for spice and flair.",
  
  barkTitle: "Strawberry Yogurt Bark (180 calories)",
  barkIngredients: "1/2 cup Greek yogurt (100 cal)\n1/2 cup strawberries (25 cal)\n1 tbsp chia seeds (55 cal)",
  barkPrep: "Prep: Spread yogurt on a plate, top with berries and seeds, freeze 3 mins.",
  barkTip: "TikTok Hack: Break it into chunks for a viral snack snap.",
  
  tipsTitle: "How to Win the Challenge",
  tip1: "Time yourself: Keep it under 5 minutes!",
  tip2: "Film it: Share your creation on TikTok with #5MinLowCalChallenge.",
  tip3: "Mix it up: Swap ingredients to keep it fresh and fun.",
  
  conclusionTitle: "Challenge Accepted!",
  conclusionText: "Jump on this TikTok trend and make low-calorie magic in minutes. Which one's your fave?",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your meals and ensure they stay within your calorie goals."
};

const koreanContent = {
  title: "틱톡에서 핫한 5분 저칼로리 레시피 챌린지",
  description: "틱톡에서 5분 안에 완성되는 저칼로리 요리가 대세예요! 이 챌린지는 바쁜 일상 속에서 건강하고 재미있는 레시피를 선사합니다.",
  publishedDate: "2024년 3월 31일",
  intro: "틱톡에서 5분 안에 완성되는 저칼로리 요리가 대세예요! 이 챌린지는 바쁜 일상 속에서 건강하고 재미있는 레시피를 선사합니다. 바이럴 트렌드에 동참할 준비 되셨나요? 지금 바로 시도해볼 5가지 틱톡 레시피를 소개합니다!",
  
  whyTitle: "이 챌린지를 해야 하는 이유",
  whyText: "5분 레시피는 빠르고 죄책감 없는 식사를 원하는 이들에게 딱! 칼로리 낮고 트렌디하며 틱톡에서 인증된 요리로, 간단한 간식이나 식사에 스타일을 더해줍니다.",
  
  recipesTitle: "틱톡 5분 저칼로리 레시피 Top 5",
  
  sushiTitle: "오이 초밥 롤 (100칼로리)",
  sushiIngredients: "오이 1개 (30칼로리)\n크림치즈 1숟가락 (50칼로리)\n훈제 연어 30g (20칼로리)",
  sushiPrep: "준비: 오이를 얇게 썰고 크림치즈 바른 뒤 연어로 말기.",
  sushiTip: "틱톡 팁: 필러로 리본 모양 만들어 인스타 감성 UP!",
  
  pizzaTitle: "애호박 피자 바이트 (150칼로리)",
  pizzaIngredients: "애호박 1개 (30칼로리)\n마리나라 소스 2숟가락 (20칼로리)\n저지방 모짜렐라 1/4컵 (100칼로리)",
  pizzaPrep: "준비: 애호박 썰고 소스, 치즈 올려 전자레인지 2분.",
  pizzaTip: "틱톡 팁: 탑처럼 쌓아 귀여운 비주얼 연출.",
  
  chiaTitle: "치아씨드 에너지 샷 (80칼로리)",
  chiaIngredients: "치아씨드 1숟가락 (60칼로리)\n물 1/2컵 (0칼로리)\n레몬 한 조각 (5칼로리)",
  chiaPrep: "준비: 섞어서 3분 기다린 후 마시기!",
  chiaTip: "틱톡 팁: 천천히 따라 예쁜 샷 연출.",
  
  wrapTitle: "칠면조 샐러드 랩 (120칼로리)",
  wrapIngredients: "칠면조 슬라이스 60g (60칼로리)\n상추 2장 (5칼로리)\n후무스 1숟가락 (55칼로리)",
  wrapPrep: "준비: 상추에 후무스 바르고 칠면조 말기.",
  wrapTip: "틱톡 팁: 고춧가루 뿌려 매콤함과 스타일 추가.",
  
  barkTitle: "딸기 요거트 바크 (180칼로리)",
  barkIngredients: "그릭 요거트 1/2컵 (100칼로리)\n딸기 1/2컵 (25칼로리)\n치아씨드 1숟가락 (55칼로리)",
  barkPrep: "준비: 요거트 펴 바르고 딸기, 씨드 올려 3분 냉동.",
  barkTip: "틱톡 팁: 조각 내서 바이럴 스낵 사진 찍기.",
  
  tipsTitle: "챌린지 성공법",
  tip1: "시간 재기: 5분 안에 끝내보세요!",
  tip2: "촬영하기: #5MinLowCalChallenge 태그로 틱톡에 공유.",
  tip3: "변형하기: 재료 바꿔가며 새롭게 도전.",
  
  conclusionTitle: "챌린지 시작!",
  conclusionText: "틱톡 트렌드에 올라타 5분 안에 저칼로리 마법을 부려보세요. 어떤 게 제일 맘에 드세요?",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용해 식사의 칼로리를 분석하고 목표 칼로리 내에서 유지하세요."
};

export default function TikTok5MinRecipeChallenge() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/tiktok-5min-recipe-challenge"
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
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/chia-seed-energy-shot-illustration-xyAHN0qBQy9EFmHUFF6abnZnEnZJ8Y.jpg"
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
                {content.sushiTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.sushiIngredients}</pre>
              <p className="text-gray-600 mb-2">{content.sushiPrep}</p>
              <p className="text-indigo-600 italic">{content.sushiTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.pizzaTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.pizzaIngredients}</pre>
              <p className="text-gray-600 mb-2">{content.pizzaPrep}</p>
              <p className="text-indigo-600 italic">{content.pizzaTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.chiaTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.chiaIngredients}</pre>
              <p className="text-gray-600 mb-2">{content.chiaPrep}</p>
              <p className="text-indigo-600 italic">{content.chiaTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.wrapTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.wrapIngredients}</pre>
              <p className="text-gray-600 mb-2">{content.wrapPrep}</p>
              <p className="text-indigo-600 italic">{content.wrapTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.barkTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.barkIngredients}</pre>
              <p className="text-gray-600 mb-2">{content.barkPrep}</p>
              <p className="text-indigo-600 italic">{content.barkTip}</p>
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