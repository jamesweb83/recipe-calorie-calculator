// src/components/Navigation.js
import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import Image from 'next/image';

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
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-10">
              <Image
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/jamesweb_logo-r5EhTcjz803XYNTEoAHai4a0VkNYGb.jpg"
                alt="Jamesweb Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>

          {/* 오른쪽 정렬된 네비게이션 링크와 언어 선택 */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              {texts.home}
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-indigo-600 font-medium">
              {blogText}
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-indigo-600 font-medium">
              {texts.faq}
            </Link>

            {/* 언어 선택 드롭다운 */}
            <div className="relative">
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
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-700">
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

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-gray-700 hover:bg-gray-100 py-2 px-4 block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {texts.home}
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:bg-gray-100 py-2 px-4 block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {blogText}
              </Link>
              <Link 
                href="/faq" 
                className="text-gray-700 hover:bg-gray-100 py-2 px-4 block text-center"
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
                  className={`w-full text-center px-4 py-2 ${
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
                  className={`w-full text-center px-4 py-2 ${
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