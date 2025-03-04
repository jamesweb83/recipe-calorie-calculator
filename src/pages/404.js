import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export default function Custom404() {
  const { language } = useLanguage();
  const title = language === 'ko' ? '페이지를 찾을 수 없습니다' : 'Page Not Found';
  const description = language === 'ko' 
    ? '요청하신 페이지를 찾을 수 없습니다. 다른 페이지로 이동해보세요.' 
    : 'The page you are looking for does not exist. Please try another page.';

  return (
    <div>
      <SEOHead 
        customTitle={title}
        customDescription={description}
        customCanonicalPath="/404"
      />
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">{title}</h2>
          <p className="text-gray-600 mb-8">{description}</p>
          
          <div className="space-y-4">
            <Link 
              href="/"
              className="block w-full md:w-auto px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
            >
              {language === 'ko' ? '홈으로 돌아가기' : 'Back to Home'}
            </Link>
            
            <Link 
              href="/blog"
              className="block w-full md:w-auto px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            >
              {language === 'ko' ? '블로그 보기' : 'View Blog'}
            </Link>
            
            <Link 
              href="/faq"
              className="block w-full md:w-auto px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
            >
              {language === 'ko' ? '자주 묻는 질문' : 'FAQ'}
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 