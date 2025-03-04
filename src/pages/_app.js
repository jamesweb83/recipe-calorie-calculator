// src/pages/_app.js
import { LanguageProvider } from '../contexts/LanguageContext';
import '../styles/globals.css';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
        
        {/* 구글 애드센스 코드 */}
        <script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7988179761724460"
          crossOrigin="anonymous"
        />
        
        {/* 파비콘 설정은 SEOHead 컴포넌트에서 관리 */}
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ZX3Q4336PS"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZX3Q4336PS');
          `,
        }}
      />
      
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;