// src/pages/faq.js
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

export default function FAQ() {
  const { texts } = useLanguage();

  // FAQ 항목 데이터
  const faqItems = [
    {
      question: texts.faq1Question,
      answer: texts.faq1Answer
    },
    {
      question: texts.faq2Question,
      answer: texts.faq2Answer
    },
    {
      question: texts.faq3Question,
      answer: texts.faq3Answer
    },
    {
      question: texts.faq4Question,
      answer: texts.faq4Answer
    },
    {
      question: texts.faq5Question,
      answer: texts.faq5Answer
    }
  ];

  return (
    <div>
      <SEOHead />
      <Navigation />

      <main className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-8">
          {texts.frequentlyAskedQuestions}
        </h1>
        
        <p className="text-gray-700 text-center mb-8 max-w-2xl mx-auto">
          {texts.faqIntro}
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-medium text-indigo-700 mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-700">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}