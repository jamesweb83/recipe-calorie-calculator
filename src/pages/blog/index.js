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
      image: 'https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/asian-vs-western-diet-calorie-illustration-UtiTOp5wa6vupGKMOuRHH8ZXH693Qw.jpg'
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
    }
  ];
  
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

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8 text-center">
            {blogTitle}
          </h1>
          
          <p className="text-xl text-gray-600 text-center mb-12">
            {blogDescription}
          </p>

          <div className="grid gap-8 md:grid-cols-1">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-3">
                      {post.formattedDate}
                    </p>
                    <p className="text-gray-700">
                      {post.description}
                    </p>
                    <div className="mt-4 text-indigo-600 font-medium">
                      {language === 'ko' ? '더 읽기 →' : 'Read more →'}
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}