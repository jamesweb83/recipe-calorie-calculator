// src/pages/privacy-policy.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicy() {
  const { texts } = useLanguage();
  
  // 최종 업데이트 날짜
  const lastUpdated = '2025-02-28';

  return (
    <div>
      <SEOHead />
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-indigo-600 mb-4">
            {texts.privacyPolicyTitle}
          </h1>
          
          <p className="text-gray-500 mb-6">
            {texts.privacyPolicyLastUpdated} {lastUpdated}
          </p>
          
          <p className="text-gray-700 mb-8">
            {texts.privacyPolicyIntro}
          </p>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-indigo-700 mb-3">
                {texts.informationWeCollect}
              </h2>
              <p className="text-gray-700">
                {texts.informationWeCollectText}
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-indigo-700 mb-3">
                {texts.howWeUseInfo}
              </h2>
              <p className="text-gray-700">
                {texts.howWeUseInfoText}
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-indigo-700 mb-3">
                {texts.cookies}
              </h2>
              <p className="text-gray-700">
                {texts.cookiesText}
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-indigo-700 mb-3">
                {texts.dataRetention}
              </h2>
              <p className="text-gray-700">
                {texts.dataRetentionText}
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-indigo-700 mb-3">
                {texts.changes}
              </h2>
              <p className="text-gray-700">
                {texts.changesText}
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-indigo-700 mb-3">
                {texts.contactUs}
              </h2>
              <p className="text-gray-700">
                {texts.contactUsText} <a href="mailto:contact@recipe-calorie-calculator.vercel.app" className="text-indigo-600 hover:underline">contact@recipe-calorie-calculator.vercel.app</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}