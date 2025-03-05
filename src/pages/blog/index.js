// src/pages/blog/index.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

export default function BlogIndex() {
  const { language } = useLanguage();
  
  // Blog posts data
  const blogPosts = [
    {
      id: 'under-300-calorie-breakfast',
      title: language === 'ko' ? '아침 식사로 좋은 300칼로리 미만 레시피 모음' : 'A Collection of Under 300-Calorie Breakfast Recipes',
      description: language === 'ko' 
        ? '건강하고 저칼로리 아침 식사로 하루를 시작하는 건 지루할 필요가 없습니다. 300칼로리 미만인 이 레시피들은 빠르고 맛있으며, 아침을 활기차게 만들어줄 영양소로 가득합니다.' 
        : 'Starting your day with a healthy, low-calorie breakfast doesn\'t have to be boring. These under 300-calorie recipes are quick, delicious, and packed with nutrients to keep you energized.',
      date: '2025-03-04',
      formattedDate: language === 'ko' ? '2025년 3월 4일' : 'March 4, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/under-300-calorie-breakfast-illustration-SRIO6R0xOvOkgvojEjLj98Uq9ixnv9.jpg'
    },
    {
      id: 'clever-ingredient-swaps',
      title: language === 'ko' ? '식재료 대체로 칼로리 줄이는 꿀팁 (예: 버터 대신 아보카도)' : 'Clever Ingredient Swaps to Cut Calories (e.g., Avocado Instead of Butter)',
      description: language === 'ko' 
        ? '칼로리를 줄인다고 맛을 포기할 필요는 없습니다. 영리한 식재료 대체를 통해 좋아하는 음식을 더 적은 칼로리로, 더 건강하게 즐길 수 있습니다.' 
        : 'Reducing calories doesn\'t mean sacrificing flavor. By making smart ingredient swaps, you can enjoy your favorite meals with fewer calories and more nutrition.',
      date: '2025-03-03',
      formattedDate: language === 'ko' ? '2025년 3월 3일' : 'March 3, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/ingredient-swaps-cut-calories-illustration-kOq12M0pcPMhbApuKC0acJfFDCgm6d.jpg'
    },
    {
      id: 'balanced-meal-under-500',
      title: language === 'ko' ? '500칼로리 이하의 균형 잡힌 식사 만드는 법' : 'How to Create a Balanced Meal Under 500 Calories',
      description: language === 'ko' 
        ? '단백질, 탄수화물, 건강한 지방을 적절히 조합해 500칼로리 이하의 만족스러운 식사를 만드는 방법을 알아보세요.' 
        : 'Learn how to create a satisfying meal under 500 calories with the right mix of protein, carbs, and healthy fats.',
      date: '2025-03-02',
      formattedDate: language === 'ko' ? '2025년 3월 2일' : 'March 2, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/balanced-meal-under-500-calories-illustration-KyD5keWpuLFNp8FLAsQECRs2sslBSB.jpg'
    },
    {
      id: 'comfort-foods-calories',
      title: language === 'ko' ? '당신이 좋아하는 위안 음식의 칼로리는 얼마일까?' : 'How Many Calories Are in Your Favorite Comfort Foods?',
      description: language === 'ko' 
        ? '맥앤치즈, 프라이드 치킨, 피자 등 인기 위안 음식의 칼로리를 분석하고, 더 스마트하게 즐기는 방법을 알아보세요.' 
        : 'Discover the calorie content of popular comfort foods like mac and cheese, fried chicken, and pizza, and learn how to enjoy them smarter.',
      date: '2025-03-01',
      formattedDate: language === 'ko' ? '2025년 3월 1일' : 'March 1, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/calories-in-comfort-foods-illustration-wNmHUiC1GCWn6Mye3HysvLoAa5jDQN.jpg'
    },
    {
      id: 'accurate-calorie-counting',
      title: language === 'ko' ? '정확한 칼로리 계산이 당신의 식단을 어떻게 바꿀 수 있는가' : 'How Accurate Calorie Counting Can Transform Your Diet',
      description: language === 'ko' 
        ? '정확한 칼로리 추적이 어떻게 당신의 식단을 혁신하고 건강 목표 달성을 도울 수 있는지 알아보세요.' 
        : 'Discover how precise calorie tracking can revolutionize your diet and help you achieve your health goals with our accurate calorie calculator.',
      date: '2025-02-28',
      formattedDate: language === 'ko' ? '2025년 2월 28일' : 'February 28, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/accurate-calorie-counting-diet-illustration-HOjRMe9zxsRXLwof1CvysckZBHpqNc.jpg'
    },
    {
      id: 'low-calorie-dinner-recipes',
      title: language === 'ko' ? '다이어트를 위한 최고의 저칼로리 저녁 레시피' : 'The Best Low-Calorie Dinner Recipes for Weight Loss',
      description: language === 'ko' 
        ? '맛있고 만족스러운 저칼로리 저녁 레시피로 다이어트 목표를 달성하세요. 칼로리 계산과 요리 팁을 함께 제공합니다.' 
        : 'Discover delicious and satisfying low-calorie dinner recipes that support your weight loss goals, complete with calorie counts and cooking tips.',
      date: '2025-02-27',
      formattedDate: language === 'ko' ? '2025년 2월 27일' : 'February 27, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/low-calorie-dinner-recipes-illustration-YqLizc8GNNPzpxOC7mSg87uaBPdSjg.jpg'
    },
    {
      id: 'korean-food-on-diet',
      title: language === 'ko' ? '다이어트하면서 한식 즐기기: 맛있고 건강한 팁' : 'How to Enjoy Korean Food on a Diet: Delicious and Healthy Tips',
      description: language === 'ko' 
        ? '다이어트 목표를 유지하면서 한식을 즐기는 실용적인 팁과 건강한 대안을 알아보세요.' 
        : 'Learn how to enjoy Korean cuisine while maintaining your diet goals with these practical tips and healthy alternatives.',
      date: '2025-02-26',
      formattedDate: language === 'ko' ? '2025년 2월 26일' : 'February 26, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/korean-food-on-diet-illustration-nPMghLyM5EF9zOQilAL7Gk2Ys2VWql.jpg'
    },
    {
      id: 'asian-vs-western-diet',
      title: language === 'ko' ? '아시아식 vs. 서양식 다이어트: 칼로리 비교' : 'Asian vs. Western Diet: Calorie Comparison',
      description: language === 'ko' 
        ? '아시아식과 서양식 식단의 칼로리 함량, 음식 구성, 조리 방법, 그리고 건강에 미치는 영향에 대해 비교해봅니다.' 
        : 'Compare the caloric content of Asian and Western diets, their key differences in food composition, cooking methods, and health implications.',
      date: '2025-02-25',
      formattedDate: language === 'ko' ? '2025년 2월 25일' : 'February 25, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/asian-vs-western-diet-calorie-illustration-UtiTOp5wa6vupGKMOuRHH8ZXH693Qw.jpg'
    },
    {
      id: 'instagram-worthy-brunch',
      title: language === 'ko' ? '인스타 감성 저칼로리 브런치 레시피 Top 5' : 'Top 5 Instagram-Worthy Low-Calorie Brunch Recipes',
      description: language === 'ko' 
        ? '브런치는 사진 찍어 공유하기 좋은 식사지만, 칼로리 폭탄일 필요는 없습니다. 400칼로리 미만인 이 Top 5 저칼로리 브런치 레시피는 맛있고 예쁘기까지 해서 인스타 피드를 빛내줄 거예요.' 
        : 'Brunch is the perfect meal to snap and share, but it doesn\'t have to break your calorie bank. These top 5 low-calorie brunch recipes are as photogenic as they are delicious, all under 400 calories.',
      date: '2025-02-24',
      formattedDate: language === 'ko' ? '2025년 2월 24일' : 'February 24, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/berry-chia-pudding-illustration-EBBx2NUUIVQ9kqXPwvqBnWnyO3NlTO.jpg'
    },
    {
      id: 'tiktok-5min-recipe-challenge',
      title: language === 'ko' ? '틱톡에서 핫한 5분 저칼로리 레시피 챌린지' : 'TikTok-Popular 5-Minute Low-Calorie Recipe Challenge',
      description: language === 'ko' 
        ? '틱톡에서 5분 안에 완성되는 저칼로리 요리가 대세예요! 이 챌린지는 바쁜 일상 속에서 건강하고 재미있는 레시피를 선사합니다.' 
        : 'TikTok is buzzing with quick, low-calorie dishes you can whip up in just 5 minutes! This challenge brings you fun, healthy recipes that fit your busy life.',
      date: '2025-02-23',
      formattedDate: language === 'ko' ? '2025년 2월 23일' : 'February 23, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/chia-seed-energy-shot-illustration-xyAHN0qBQy9EFmHUFF6abnZnEnZJ8Y.jpg'
    },
    {
      id: '2025-diet-trends',
      title: language === 'ko' ? '2025년 다이어트 트렌드: 칼로리 줄이는 최신 식재료와 레시피' : '2025 Diet Trends: Latest Low-Calorie Ingredients and Recipes',
      description: language === 'ko' 
        ? '2025년이 다가오며 다이어트 트렌드는 칼로리를 줄이면서도 맛과 영양을 유지하는 방향으로 진화하고 있습니다. 혁신적인 식재료와 창의적인 레시피를 소개합니다.' 
        : 'As we step into 2025, diet trends are evolving with a focus on cutting calories while keeping meals tasty and nutritious. Discover innovative ingredients and creative recipes.',
      date: '2025-02-22',
      formattedDate: language === 'ko' ? '2025년 2월 22일' : 'February 22, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/kelp-noodle-stir-fry-illustration-7OfhH5xJWLnnRn6iXWc2jK1fy7s9It.jpg'
    },
    {
      id: 'netflix-snacks',
      title: language === 'ko' ? '넷플릭스 보면서 먹기 좋은 100칼로리 이하 간식 레시피' : '10 Netflix Snack Recipes Under 100 Calories',
      description: language === 'ko' 
        ? '넷플릭스 정주행할 때 부담 없는 100칼로리 이하의 맛있는 간식 레시피 10가지를 소개합니다. 칼로리 걱정 없이 즐겨보세요!' 
        : 'Discover 10 delicious snack recipes under 100 calories perfect for Netflix binge-watching. Enjoy guilt-free snacking!',
      date: '2025-02-21',
      formattedDate: language === 'ko' ? '2025년 2월 21일' : 'February 21, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/konjac-jelly-illustration-QWWy7M4tSQ05fotfZ1PkC3AD7NOq7t.jpg'
    },
    {
      id: 'kpop-idol-diet',
      title: language === 'ko' ? 'K-팝 아이돌 다이어트 식단: 칼로리 계산으로 따라 해보기' : 'K-pop Idol Diet Plan: Follow Along with Calorie Counting',
      description: language === 'ko' 
        ? 'K-팝 아이돌들의 완벽한 몸매 비결을 알아보고, 과학적인 칼로리 계산 방법으로 여러분의 다이어트에 적용해보세요.' 
        : 'Discover the secrets behind K-pop idols\' perfect physiques and learn how to apply their scientific calorie counting methods to your diet.',
      date: '2025-02-20',
      formattedDate: language === 'ko' ? '2025년 2월 20일' : 'February 20, 2025',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/kpop_idol_diet_header-Ceer0ojQEFdW0YPVZ5CBDBz9B8GQ89.jpg'
    },
    {
      id: 'high-protein-vegetarian-meals',
      title: {
        en: "High-Protein, Low-Calorie Meal Ideas for Vegetarians",
        ko: "채식주의자를 위한 고단백 저칼로리 식단 아이디어"
      },
      description: {
        en: "Discover delicious high-protein, low-calorie vegetarian meals that keep you full and fit. Perfect for plant-based eaters looking to maintain a healthy diet.",
        ko: "채식주의자를 위한 맛있고 건강한 고단백 저칼로리 식단 아이디어를 만나보세요."
      },
      date: "2025-02-19",
      formattedDate: language === 'ko' ? '2025년 2월 19일' : 'February 19, 2025',
      image: "https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/tofu-veggie-scramble-illustration-noBiYedv9jVEq1I72YezURRVCVqU0O.jpg"
    },
    {
      id: 'fridge-staple-meals',
      title: {
        en: "30 Meals Under 500 Calories Using Fridge Staples",
        ko: "냉장고 재료로 만드는 500kcal 이하 한 끼 식사 30가지"
      },
      description: {
        en: "Discover 30 delicious, low-calorie meals under 500 calories using common fridge staples. Simple, healthy, and budget-friendly recipes that make the most of what you have.",
        ko: "냉장고에 있는 기본 재료로 만드는 500칼로리 이하의 맛있고 건강한 식사 30가지를 만나보세요."
      },
      date: "2025-02-18",
      formattedDate: language === 'ko' ? '2025년 2월 18일' : 'February 18, 2025',
      image: "https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/turkey-lettuce-wraps-illustration-NcD8dCE6eNowc84kIO9aISZFIPGjLC.jpg"
    }
  ].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const blogTitle = language === 'ko' ? '레시피 칼로리 블로그' : 'Recipe Calorie Blog';
  const blogDescription = language === 'ko' 
    ? '식단, 요리법, 그리고 칼로리 계산에 관한 유용한 정보' 
    : 'Useful information about diets, recipes, and calorie calculations';

  return (
    <div>
      <SEOHead
        customTitle={blogTitle}
        customDescription={blogDescription}
        customCanonicalPath="/blog"
      />
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
            {blogTitle}
          </h1>
          
          <p className="text-xl text-gray-600 text-center mb-12">
            {blogDescription}
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden"
              >
                <div className="flex flex-col">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image}
                      alt={typeof post.title === 'object' ? post.title[language] : post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {typeof post.title === 'object' ? post.title[language] : post.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {typeof post.description === 'object' ? post.description[language] : post.description}
                    </p>
                    <p className="text-xs text-gray-500">
                      {post.formattedDate}
                    </p>
                  </div>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}