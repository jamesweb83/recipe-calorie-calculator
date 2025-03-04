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
      date: '2024-03-29',
      formattedDate: language === 'ko' ? '2024년 3월 29일' : 'March 29, 2024',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/under-300-calorie-breakfast-illustration-SRIO6R0xOvOkgvojEjLj98Uq9ixnv9.jpg'
    },
    {
      id: 'clever-ingredient-swaps',
      title: language === 'ko' ? '식재료 대체로 칼로리 줄이는 꿀팁 (예: 버터 대신 아보카도)' : 'Clever Ingredient Swaps to Cut Calories (e.g., Avocado Instead of Butter)',
      description: language === 'ko' 
        ? '칼로리를 줄인다고 맛을 포기할 필요는 없습니다. 영리한 식재료 대체를 통해 좋아하는 음식을 더 적은 칼로리로, 더 건강하게 즐길 수 있습니다.' 
        : 'Reducing calories doesn\'t mean sacrificing flavor. By making smart ingredient swaps, you can enjoy your favorite meals with fewer calories and more nutrition.',
      date: '2024-03-28',
      formattedDate: language === 'ko' ? '2024년 3월 28일' : 'March 28, 2024',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/ingredient-swaps-cut-calories-illustration-kOq12M0pcPMhbApuKC0acJfFDCgm6d.jpg'
    },
    {
      id: 'balanced-meal-under-500',
      title: language === 'ko' ? '500칼로리 이하의 균형 잡힌 식사 만드는 법' : 'How to Create a Balanced Meal Under 500 Calories',
      description: language === 'ko' 
        ? '단백질, 탄수화물, 건강한 지방을 적절히 조합해 500칼로리 이하의 만족스러운 식사를 만드는 방법을 알아보세요.' 
        : 'Learn how to create a satisfying meal under 500 calories with the right mix of protein, carbs, and healthy fats.',
      date: '2024-03-27',
      formattedDate: language === 'ko' ? '2024년 3월 27일' : 'March 27, 2024',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/balanced-meal-under-500-calories-illustration-KyD5keWpuLFNp8FLAsQECRs2sslBSB.jpg'
    },
    {
      id: 'comfort-foods-calories',
      title: language === 'ko' ? '당신이 좋아하는 위안 음식의 칼로리는 얼마일까?' : 'How Many Calories Are in Your Favorite Comfort Foods?',
      description: language === 'ko' 
        ? '맥앤치즈, 프라이드 치킨, 피자 등 인기 위안 음식의 칼로리를 분석하고, 더 스마트하게 즐기는 방법을 알아보세요.' 
        : 'Discover the calorie content of popular comfort foods like mac and cheese, fried chicken, and pizza, and learn how to enjoy them smarter.',
      date: '2024-03-26',
      formattedDate: language === 'ko' ? '2024년 3월 26일' : 'March 26, 2024',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/calories-in-comfort-foods-illustration-wNmHUiC1GCWn6Mye3HysvLoAa5jDQN.jpg'
    },
    {
      id: 'accurate-calorie-counting',
      title: language === 'ko' ? '정확한 칼로리 계산이 당신의 식단을 어떻게 바꿀 수 있는가' : 'How Accurate Calorie Counting Can Transform Your Diet',
      description: language === 'ko' 
        ? '정확한 칼로리 추적이 어떻게 당신의 식단을 혁신하고 건강 목표 달성을 도울 수 있는지 알아보세요.' 
        : 'Discover how precise calorie tracking can revolutionize your diet and help you achieve your health goals with our accurate calorie calculator.',
      date: '2024-03-25',
      formattedDate: language === 'ko' ? '2024년 3월 25일' : 'March 25, 2024',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/accurate-calorie-counting-diet-illustration-HOjRMe9zxsRXLwof1CvysckZBHpqNc.jpg'
    },
    {
      id: 'low-calorie-dinner-recipes',
      title: language === 'ko' ? '다이어트를 위한 최고의 저칼로리 저녁 레시피' : 'The Best Low-Calorie Dinner Recipes for Weight Loss',
      description: language === 'ko' 
        ? '맛있고 만족스러운 저칼로리 저녁 레시피로 다이어트 목표를 달성하세요. 칼로리 계산과 요리 팁을 함께 제공합니다.' 
        : 'Discover delicious and satisfying low-calorie dinner recipes that support your weight loss goals, complete with calorie counts and cooking tips.',
      date: '2024-03-20',
      formattedDate: language === 'ko' ? '2024년 3월 20일' : 'March 20, 2024',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/low-calorie-dinner-recipes-illustration-YqLizc8GNNPzpxOC7mSg87uaBPdSjg.jpg'
    },
    {
      id: 'korean-food-on-diet',
      title: language === 'ko' ? '다이어트하면서 한식 즐기기: 맛있고 건강한 팁' : 'How to Enjoy Korean Food on a Diet: Delicious and Healthy Tips',
      description: language === 'ko' 
        ? '다이어트 목표를 유지하면서 한식을 즐기는 실용적인 팁과 건강한 대안을 알아보세요.' 
        : 'Learn how to enjoy Korean cuisine while maintaining your diet goals with these practical tips and healthy alternatives.',
      date: '2024-03-15',
      formattedDate: language === 'ko' ? '2024년 3월 15일' : 'March 15, 2024',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/korean-food-on-diet-illustration-nPMghLyM5EF9zOQilAL7Gk2Ys2VWql.jpg'
    },
    {
      id: 'asian-vs-western-diet',
      title: language === 'ko' ? '아시아식 vs. 서양식 다이어트: 칼로리 비교' : 'Asian vs. Western Diet: Calorie Comparison',
      description: language === 'ko' 
        ? '아시아식과 서양식 식단의 칼로리 함량, 음식 구성, 조리 방법, 그리고 건강에 미치는 영향에 대해 비교해봅니다.' 
        : 'Compare the caloric content of Asian and Western diets, their key differences in food composition, cooking methods, and health implications.',
      date: '2024-03-03',
      formattedDate: language === 'ko' ? '2024년 3월 3일' : 'March 3, 2024',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/asian-vs-western-diet-calorie-illustration-UtiTOp5wa6vupGKMOuRHH8ZXH693Qw.jpg'
    },
    {
      id: 'instagram-worthy-brunch',
      title: language === 'ko' ? '인스타 감성 저칼로리 브런치 레시피 Top 5' : 'Top 5 Instagram-Worthy Low-Calorie Brunch Recipes',
      description: language === 'ko' 
        ? '브런치는 사진 찍어 공유하기 좋은 식사지만, 칼로리 폭탄일 필요는 없습니다. 400칼로리 미만인 이 Top 5 저칼로리 브런치 레시피는 맛있고 예쁘기까지 해서 인스타 피드를 빛내줄 거예요.' 
        : 'Brunch is the perfect meal to snap and share, but it doesn\'t have to break your calorie bank. These top 5 low-calorie brunch recipes are as photogenic as they are delicious, all under 400 calories.',
      date: '2024-03-30',
      formattedDate: language === 'ko' ? '2024년 3월 30일' : 'March 30, 2024',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/berry-chia-pudding-illustration-EBBx2NUUIVQ9kqXPwvqBnWnyO3NlTO.jpg'
    },
    {
      id: 'tiktok-5min-recipe-challenge',
      title: language === 'ko' ? '틱톡에서 핫한 5분 저칼로리 레시피 챌린지' : 'TikTok-Popular 5-Minute Low-Calorie Recipe Challenge',
      description: language === 'ko' 
        ? '틱톡에서 5분 안에 완성되는 저칼로리 요리가 대세예요! 이 챌린지는 바쁜 일상 속에서 건강하고 재미있는 레시피를 선사합니다.' 
        : 'TikTok is buzzing with quick, low-calorie dishes you can whip up in just 5 minutes! This challenge brings you fun, healthy recipes that fit your busy life.',
      date: '2024-03-31',
      formattedDate: language === 'ko' ? '2024년 3월 31일' : 'March 31, 2024',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/chia-seed-energy-shot-illustration-xyAHN0qBQy9EFmHUFF6abnZnEnZJ8Y.jpg'
    },
    {
      id: '2025-diet-trends',
      title: language === 'ko' ? '2025년 다이어트 트렌드: 칼로리 줄이는 최신 식재료와 레시피' : '2025 Diet Trends: Latest Low-Calorie Ingredients and Recipes',
      description: language === 'ko' 
        ? '2025년이 다가오며 다이어트 트렌드는 칼로리를 줄이면서도 맛과 영양을 유지하는 방향으로 진화하고 있습니다. 혁신적인 식재료와 창의적인 레시피를 소개합니다.' 
        : 'As we step into 2025, diet trends are evolving with a focus on cutting calories while keeping meals tasty and nutritious. Discover innovative ingredients and creative recipes.',
      date: '2024-04-01',
      formattedDate: language === 'ko' ? '2024년 4월 1일' : 'April 1, 2024',
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/kelp-noodle-stir-fry-illustration-7OfhH5xJWLnnRn6iXWc2jK1fy7s9It.jpg'
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
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {post.description}
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