// src/components/SEOHead.js
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useLanguage } from '../contexts/LanguageContext';

export default function SEOHead({ customTitle, customDescription, customCanonicalPath }) {
  const { texts, language } = useLanguage();
  const router = useRouter();
  
  // 웹사이트 기본 정보
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://recipe-calorie-calculator.vercel.app';
  const siteName = 'Recipe Calorie Calculator';
  
  // 현재 페이지에 따른 타이틀 및 설명 설정
  let seoTitle = customTitle || texts.title;
  let seoDescription = customDescription || texts.description;
  
  // Custom title/description이 없을 경우 현재 URL 경로에 따라 메타 데이터 조정
  if (!customTitle) {
    if (router.pathname === '/faq') {
      seoTitle = `${texts.faq} - ${texts.title}`;
      seoDescription = `${texts.frequentlyAskedQuestions} ${texts.description}`;
    } else if (router.pathname === '/privacy-policy') {
      seoTitle = `${texts.privacyPolicy} - ${texts.title}`;
      seoDescription = `${texts.privacyPolicyTitle} ${texts.title}`;
    }
  }
  
  // 현재 전체 URL
  const canonicalPath = customCanonicalPath || router.pathname;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;
  
  // OG 이미지 URL
  const ogImageUrl = "https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/jamesweb_opengrafh-EqVKnB2jhs0rC4GraZQ6fUGvA58873.jpg";
  
  // 구조화된 데이터 (Schema.org)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': texts.title,
    'description': texts.description,
    'applicationCategory': 'HealthApplication',
    'operatingSystem': 'Web',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'image': ogImageUrl,
    'inLanguage': [
      language === 'ko' ? 'ko' : 'en'
    ]
  };

  return (
    <Head>
      {/* 기본 메타 태그 */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="content-language" content={language} />
      
      {/* 폰트 */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
      
      {/* 구글 서치 콘솔 인증 */}
      <meta name="google-site-verification" content="AOCF6hHdjOONIgyr0T5HSqwz4SY6udgEgXudh9dTgvU" />
      
      {/* 파비콘 및 앱 아이콘 */}
      <link rel="icon" href="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/jamesweb_Favicon-lsVzaviQT7zVQqCvYOTBEDmN6PhPe4.jpg" />
      <link rel="apple-touch-icon" href="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/jamesweb_Favicon-lsVzaviQT7zVQqCvYOTBEDmN6PhPe4.jpg" />
      <link rel="icon" type="image/png" href="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/jamesweb_Favicon-lsVzaviQT7zVQqCvYOTBEDmN6PhPe4.jpg" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* 캐노니컬 URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* 오픈 그래프 태그 */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
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