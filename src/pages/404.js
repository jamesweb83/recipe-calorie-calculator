import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export default function Custom404() {
  const { texts, language } = useLanguage();
  
  const content = {
    title: language === 'ko' ? '페이지를 찾을 수 없습니다 - Recipe Calorie Calculator' : 'Page Not Found - Recipe Calorie Calculator',
    description: language === 'ko' ? '요청하신 페이지를 찾을 수 없습니다.' : 'The page you requested could not be found.',
    message: language === 'ko' ? '죄송합니다. 요청하신 페이지를 찾을 수 없습니다.' : 'Sorry, the page you requested could not be found.',
    suggestion: language === 'ko' ? '다음 중 하나를 시도해보세요:' : 'Try one of these:',
    homeLink: language === 'ko' ? '홈으로 돌아가기' : 'Go back home',
    blogLink: language === 'ko' ? '블로그 보기' : 'View blog',
    faqLink: language === 'ko' ? '자주 묻는 질문' : 'FAQ'
  };

  return (
    <div>
      <SEOHead 
        customTitle={content.title}
        customDescription={content.description}
        customCanonicalPath="/404"
      />
      <Navigation />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {content.message}
          </h2>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <p className="text-gray-600 mb-4">{content.suggestion}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                {content.homeLink}
              </a>
              <a
                href="/blog"
                className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
              >
                {content.blogLink}
              </a>
              <a
                href="/faq"
                className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg border border-indigo-600 hover:bg-indigo-50 transition-colors duration-200"
              >
                {content.faqLink}
              </a>
            </div>
          </div>

          <div className="text-gray-500 text-sm">
            <p>recipe-calorie-calculator.vercel.app</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 