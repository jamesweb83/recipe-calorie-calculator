// src/components/Footer.js
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { texts } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              &copy; {currentYear} <a 
                href="https://www.threads.net/@jameweb.solopreneur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Jamesweb
              </a>. {texts.allRightsReserved}
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-indigo-600 text-sm">
              {texts.privacyPolicy}
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-indigo-600 text-sm">
              {texts.faq}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}