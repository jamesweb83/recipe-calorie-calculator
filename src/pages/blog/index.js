// src/pages/blog/index.js
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

export default function BlogIndex() {
  const { language } = useLanguage(); // Remove unused 'texts'
  
  // Blog posts data
  const blogPosts = [
    {
      id: 'korean-food-on-diet',
      title: language === 'ko' ? '다이어트하면서 한식 즐기기: 맛있고 건강한 팁' : 'How to Enjoy Korean Food on a Diet: Delicious and Healthy Tips',
      description: language === 'ko' 
        ? '다이어트 목표를 유지하면서 한식을 즐기는 실용적인 팁과 건강한 대안을 알아보세요.' 
        : 'Learn how to enjoy Korean cuisine while maintaining your diet goals with these practical tips and healthy alternatives.',
      date: '2024-03-15',
      formattedDate: language === 'ko' ? '2024년 3월 15일' : 'March 15, 2024'
    },
    {
      id: 'asian-vs-western-diet',
      title: language === 'ko' ? '아시아식 vs. 서양식 다이어트: 칼로리 비교' : 'Asian vs. Western Diet: Calorie Comparison',
      description: language === 'ko' 
        ? '아시아식과 서양식 식단의 칼로리 함량, 음식 구성, 조리 방법, 그리고 건강에 미치는 영향에 대해 비교해봅니다.' 
        : 'Compare the caloric content of Asian and Western diets, their key differences in food composition, cooking methods, and health implications.',
      date: '2024-03-03',
      formattedDate: language === 'ko' ? '2024년 3월 3일' : 'March 3, 2024'
    }
    // Add more blog posts here as they are created
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