// src/pages/[lang]/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '../../contexts/LanguageContext';
import HomePage from '../../components/HomePage';

export default function LanguagePage() {
  const router = useRouter();
  const { lang } = router.query;
  const { changeLanguage } = useLanguage();
  
  useEffect(() => {
    // 유효한 언어 코드인 경우에만 언어 변경
    if (lang === 'ko' || lang === 'en') {
      changeLanguage(lang);
    }
  }, [lang, changeLanguage]);
  
  // 메인 페이지 컴포넌트 렌더링
  return <HomePage />;
}

// 정적 경로 생성 (빌드 시)
export async function getStaticPaths() {
  return {
    paths: [
      { params: { lang: 'en' } },
      { params: { lang: 'ko' } }
    ],
    fallback: false
  };
}

// 페이지 프롭스 가져오기
export async function getStaticProps({ params }) {
  return {
    props: {
      lang: params.lang
    }
  };
}