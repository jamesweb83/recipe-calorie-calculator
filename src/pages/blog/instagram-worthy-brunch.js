// src/pages/blog/instagram-worthy-brunch.js
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

const englishContent = {
  title: "Top 5 Instagram-Worthy Low-Calorie Brunch Recipes",
  description: "Brunch is the perfect meal to snap and share, but it doesn't have to break your calorie bank. These top 5 low-calorie brunch recipes are as photogenic as they are delicious, all under 400 calories.",
  publishedDate: "March 30, 2024",
  intro: "Brunch is the perfect meal to snap and share, but it doesn't have to break your calorie bank. These top 5 low-calorie brunch recipes are as photogenic as they are delicious, all under 400 calories. Get ready to impress your followers with these Insta-worthy dishes!",
  
  whyTitle: "Why Low-Calorie Brunch?",
  whyText: "A low-calorie brunch keeps you feeling light while looking luxe. Perfect for weekend vibes or a midweek treat, these recipes combine flavor, style, and health in one gorgeous plate.",
  
  recipesTitle: "Top 5 Low-Calorie Brunch Recipes",
  
  puddingTitle: "Berry Chia Pudding (200 calories)",
  puddingIngredients: "1/4 cup chia seeds (120 cal)\n1 cup almond milk (30 cal)\n1/2 cup berries (30 cal)",
  puddingPrep: "Prep: Mix chia and milk, chill overnight, top with berries.",
  puddingTip: "Insta Tip: Serve in a mason jar with a pastel spoon.",
  
  salmonTitle: "Smoked Salmon Toast (350 calories)",
  salmonIngredients: "1 slice rye bread (100 cal)\n2 oz smoked salmon (100 cal)\n1 tbsp cream cheese (50 cal)\ncucumber slices (10 cal)",
  salmonPrep: "Prep: Toast bread, spread cheese, layer salmon and cucumber.",
  salmonTip: "Insta Tip: Garnish with dill for that chic touch.",
  
  hashTitle: "Sweet Potato Hash (300 calories)",
  hashIngredients: "1 small sweet potato (100 cal)\n1 egg (70 cal)\n1 cup spinach (10 cal)\n1 tsp olive oil (40 cal)",
  hashPrep: "Prep: Dice and sauté sweet potato, add spinach, top with fried egg.",
  hashTip: "Insta Tip: Use a rustic skillet for cozy vibes.",
  
  acaiTitle: "Acai Smoothie Bowl (380 calories)",
  acaiIngredients: "1 packet frozen acai (100 cal)\n1/2 banana (50 cal)\n1 tbsp granola (50 cal)\n1 tbsp peanut butter (90 cal)",
  acaiPrep: "Prep: Blend acai and banana, top with granola and peanut butter drizzle.",
  acaiTip: "Insta Tip: Add edible flowers for extra flair.",
  
  frittataTitle: "Veggie Frittata Bites (250 calories)",
  frittataIngredients: "2 eggs (140 cal)\n1 cup mixed veggies (50 cal)\n1 tbsp feta (60 cal)",
  frittataPrep: "Prep: Whisk eggs, mix in veggies and feta, bake in muffin tins.",
  frittataTip: "Insta Tip: Stack bites on a wooden board with a latte.",
  
  tipsTitle: "Tips for Insta Perfection",
  tip1: "Use natural light for bright, crisp photos.",
  tip2: "Play with textures: smooth, crunchy, colorful layers.",
  tip3: "Add props like flowers or coffee cups for that aesthetic edge.",
  
  conclusionTitle: "Start Your Instagram Journey!",
  conclusionText: "These low-calorie brunch recipes are your ticket to a feed full of likes. Whip one up and snap away!",
  
  calculatorPromo: "Use our Recipe Calorie Calculator to analyze your meals and ensure they stay within your calorie goals."
};

const koreanContent = {
  title: "인스타 감성 저칼로리 브런치 레시피 Top 5",
  description: "브런치는 사진 찍어 공유하기 좋은 식사지만, 칼로리 폭탄일 필요는 없습니다. 400칼로리 미만인 이 Top 5 저칼로리 브런치 레시피는 맛있고 예쁘기까지 해서 인스타 피드를 빛내줄 거예요.",
  publishedDate: "2024년 3월 30일",
  intro: "브런치는 사진 찍어 공유하기 좋은 식사지만, 칼로리 폭탄일 필요는 없습니다. 400칼로리 미만인 이 Top 5 저칼로리 브런치 레시피는 맛있고 예쁘기까지 해서 인스타 피드를 빛내줄 거예요. 팔로워들을 감동시킬 준비 되셨나요?",
  
  whyTitle: "왜 저칼로리 브런치인가요?",
  whyText: "저칼로리 브런치는 가볍게 즐기면서도 고급스러운 느낌을 줍니다. 주말 분위기나 평일 특별 식사로 딱 맞는 이 레시피들은 맛, 스타일, 건강을 한 접시에 담았습니다.",
  
  recipesTitle: "저칼로리 브런치 레시피 Top 5",
  
  puddingTitle: "베리 치아 푸딩 (200칼로리)",
  puddingIngredients: "치아씨드 1/4컵 (120칼로리)\n아몬드 밀크 1컵 (30칼로리)\n베리 1/2컵 (30칼로리)",
  puddingPrep: "준비: 치아와 밀크를 섞어 하룻밤 냉장, 베리로 장식.",
  puddingTip: "인스타 팁: 메이슨 잔에 담고 파스텔 스푼 추가.",
  
  salmonTitle: "훈제 연어 토스트 (350칼로리)",
  salmonIngredients: "호밀빵 1조각 (100칼로리)\n훈제 연어 60g (100칼로리)\n크림치즈 1숟가락 (50칼로리)\n오이 슬라이스 (10칼로리)",
  salmonPrep: "준비: 빵 굽고 크림치즈 바른 뒤 연어와 오이 얹기.",
  salmonTip: "인스타 팁: 딜로 장식해 세련되게.",
  
  hashTitle: "고구마 해시 (300칼로리)",
  hashIngredients: "작은 고구마 1개 (100칼로리)\n달걀 1개 (70칼로리)\n시금치 1컵 (10칼로리)\n올리브 오일 1작은술 (40칼로리)",
  hashPrep: "준비: 고구마 썰어 볶고 시금치 추가, 계란 프라이 올리기.",
  hashTip: "인스타 팁: 소박한 스킬릿으로 따뜻한 느낌.",
  
  acaiTitle: "아사이 스무디 볼 (380칼로리)",
  acaiIngredients: "냉동 아사이 1팩 (100칼로리)\n바나나 1/2개 (50칼로리)\n그래놀라 1숟가락 (50칼로리)\n땅콩버터 1숟가락 (90칼로리)",
  acaiPrep: "준비: 아사이와 바나나 갈아 그래놀라, 땅콩버터 뿌리기.",
  acaiTip: "인스타 팁: 식용 꽃으로 화려함 더하기.",
  
  frittataTitle: "채소 프리타타 바이트 (250칼로리)",
  frittataIngredients: "달걀 2개 (140칼로리)\n혼합 채소 1컵 (50칼로리)\n페타 치즈 1숟가락 (60칼로리)",
  frittataPrep: "준비: 달걀과 채소, 페타 섞어 머핀 틀에 구움.",
  frittataTip: "인스타 팁: 나무 보드에 쌓고 라떼와 함께.",
  
  tipsTitle: "인스타 감성 팁",
  tip1: "자연광으로 밝고 선명한 사진 찍기.",
  tip2: "질감 살리기: 부드럽고, 바삭하고, 컬러풀한 층.",
  tip3: "소품 활용: 꽃이나 커피잔으로 분위기 업.",
  
  conclusionTitle: "인스타 여정을 시작하세요!",
  conclusionText: "이 저칼로리 브런치 레시피로 인스타 피드를 채워보세요. 하나 만들어서 사진 찍어보세요!",
  
  calculatorPromo: "레시피 칼로리 계산기를 사용해 식사의 칼로리를 분석하고 목표 칼로리 내에서 유지하세요."
};

export default function InstagramWorthyBrunch() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/instagram-worthy-brunch"
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
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/berry-chia-pudding-illustration-EBBx2NUUIVQ9kqXPwvqBnWnyO3NlTO.jpg"
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
                {content.puddingTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.puddingIngredients}</pre>
              <p className="text-gray-600 mb-2">{content.puddingPrep}</p>
              <p className="text-indigo-600 italic">{content.puddingTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.salmonTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.salmonIngredients}</pre>
              <p className="text-gray-600 mb-2">{content.salmonPrep}</p>
              <p className="text-indigo-600 italic">{content.salmonTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.hashTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.hashIngredients}</pre>
              <p className="text-gray-600 mb-2">{content.hashPrep}</p>
              <p className="text-indigo-600 italic">{content.hashTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.acaiTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.acaiIngredients}</pre>
              <p className="text-gray-600 mb-2">{content.acaiPrep}</p>
              <p className="text-indigo-600 italic">{content.acaiTip}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-medium text-indigo-700 mb-2">
                {content.frittataTitle}
              </h3>
              <pre className="whitespace-pre-wrap text-gray-600 mb-2">{content.frittataIngredients}</pre>
              <p className="text-gray-600 mb-2">{content.frittataPrep}</p>
              <p className="text-indigo-600 italic">{content.frittataTip}</p>
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