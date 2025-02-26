// src/contexts/LanguageContext.js
import { createContext, useState, useEffect, useContext } from 'react';
import translations from '../utils/translations';

// 언어 컨텍스트 생성
const LanguageContext = createContext();

// 언어 공급자 컴포넌트
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en'); // 기본 언어는 영어
  const [texts, setTexts] = useState(translations.en);
  
  useEffect(() => {
    // 브라우저 언어 감지 (GeoIP 대신 브라우저 언어 사용)
    const detectLanguage = () => {
      try {
        // 브라우저 언어 설정 확인
        const browserLang = navigator.language || navigator.userLanguage;
        
        // 한국어인 경우 한국어로 설정
        if (browserLang.includes('ko')) {
          setLanguage('ko');
          setTexts(translations.ko);
        }
        
        // 로컬 스토리지에 저장된 언어 설정이 있으면 사용
        const savedLang = localStorage.getItem('preferredLanguage');
        if (savedLang && translations[savedLang]) {
          setLanguage(savedLang);
          setTexts(translations[savedLang]);
        }
      } catch (error) {
        console.error("언어 감지 오류:", error);
      }
    };
    
    detectLanguage();
  }, []);
  
  // 언어 변경 함수
  const changeLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
      setTexts(translations[lang]);
      
      // 언어 설정을 로컬 스토리지에 저장
      try {
        localStorage.setItem('preferredLanguage', lang);
      } catch (error) {
        console.error("로컬 스토리지 접근 오류:", error);
      }
    }
  };
  
  return (
    <LanguageContext.Provider value={{ language, texts, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// 커스텀 훅으로 쉽게 접근
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}