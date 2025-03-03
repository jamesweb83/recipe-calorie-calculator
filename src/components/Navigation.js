// src/components/Navigation.js
import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const { texts, language, changeLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Add blog translation to texts object
  const blogText = language === 'ko' ? '블로그' : 'Blog';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleLangDropdown = () => {
    setLangDropdownOpen(!langDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-xl font-bold text-indigo-600">
              {texts.title}
            </Link>
            
            {/* 네비게이션 링크 */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-indigo-600">
                {texts.home}
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-indigo-600">
                {blogText}
              </Link>
              <Link href="/faq" className="text-gray-700 hover:text-indigo-600">
                {texts.faq}
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            {/* 언어 선택 드롭다운 */}
            <div className="relative hidden md:block">
              <button
                onClick={toggleLangDropdown}
                className="flex items-center space-x-1 px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
              >
                <span>{language === 'ko' ? '한국어' : 'English'}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${langDropdownOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-lg z-50">
                  <button
                    onClick={() => {
                      changeLanguage('ko');
                      setLangDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      language === 'ko' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'
                    }`}
                  >
                    한국어
                  </button>
                  <button
                    onClick={() => {
                      changeLanguage('en');
                      setLangDropdownOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      language === 'en' ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-gray-100'
                    }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button onClick={toggleMobileMenu} className="md:hidden ml-4 text-gray-700">
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
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-gray-700 hover:bg-gray-100 py-2 px-4 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {texts.home}
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:bg-gray-100 py-2 px-4 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {blogText}
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-700 hover:bg-gray-100 py-2 px-4 block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {texts.faq}
              </Link>
              
              {/* 모바일 언어 선택 */}
              <div className="border-t pt-2 mt-2">
                <button
                  onClick={() => {
                    changeLanguage('ko');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 ${
                    language === 'ko' ? 'text-indigo-600' : 'text-gray-700'
                  }`}
                >
                  한국어
                </button>
                <button
                  onClick={() => {
                    changeLanguage('en');
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 ${
                    language === 'en' ? 'text-indigo-600' : 'text-gray-700'
                  }`}
                >
                  English
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}