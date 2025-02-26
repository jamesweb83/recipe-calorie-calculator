// src/components/SEOHead.js
import Head from 'next/head';
import { useLanguage } from '../contexts/LanguageContext';

export default function SEOHead() {
  const { texts, language } = useLanguage();
  
  // 웹사이트 기본 정보
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://recipe-calorie-calculator.vercel.app';
  const siteName = 'Recipe Calorie Calculator';
  
  // 언어별 타이틀, 설명
  const seoTitle = texts.title || 'Recipe Calorie Calculator';
  const seoDescription = texts.description || 'Calculate calories for your recipe ingredients';
  
  // OG 이미지 URL (나중에 추가하면 좋은 부분)
  const ogImageUrl = `${baseUrl}/og-image.jpg`;
  
  // 현재 언어에 따른 hreflang 태그 정보
  const alternateLanguages = [
    { lang: 'en', url: `${baseUrl}/en` },
    { lang: 'ko', url: `${baseUrl}/ko` }
  ];
  
  // 구조화된 데이터 (Schema.org)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': seoTitle,
    'description': seoDescription,
    'applicationCategory': 'HealthApplication',
    'operatingSystem': 'Web',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'inLanguage': [
      language === 'ko' ? 'ko' : 'en'
    ]
  };

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* 파비콘 및 앱 아이콘 */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {/* 언어 설정 */}
      <meta httpEquiv="content-language" content={language} />
      <link rel="canonical" href={baseUrl} />
      
      {/* 대체 언어 링크 */}
      {alternateLanguages.map((altLang) => (
        <link 
          key={altLang.lang}
          rel="alternate" 
          hrefLang={altLang.lang} 
          href={altLang.url} 
        />
      ))}
      
      {/* 오픈 그래프 태그 */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language === 'ko' ? 'ko_KR' : 'en_US'} />
      
      {/* 트위터 카드 */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={ogImageUrl} />
      
      {/* 구조화된 데이터 */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </Head>
  );
}