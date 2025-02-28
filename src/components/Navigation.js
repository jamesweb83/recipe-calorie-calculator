// src/components/Navigation.js
import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const { texts, language, changeLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link href="/" className="text-xl font-bold text-indigo-600">
              {texts.title}
            </Link>
          </div>
          
          {/* 언어 전환 버튼 */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => changeLanguage('ko')}
              className={`px-3 py-1 rounded text-sm ${
                language === 'ko' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              한국어
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded text-sm ${
                language === 'en' 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              English
            </button>
            
            {/* 네비게이션 링크 */}
            <Link href="/" className="text-gray-700 hover:text-indigo-600">
              {texts.home}
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-indigo-600">
              {texts.faq}
            </Link>
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex justify-center space-x-4 mb-4">
              <button
                onClick={() => changeLanguage('ko')}
                className={`px-3 py-1 rounded text-sm ${
                  language === 'ko' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                한국어
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1 rounded text-sm ${
                  language === 'en' 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                English
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-gray-700 hover:bg-gray-100 py-2 px-4 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {texts.home}
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-700 hover:bg-gray-100 py-2 px-4 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {texts.faq}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}