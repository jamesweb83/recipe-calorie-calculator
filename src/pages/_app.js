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
        
        {/* favicon 추가 */}
        <link rel="icon" href="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/jamesweb_Favicon-lsVzaviQT7zVQqCvYOTBEDmN6PhPe4.jpg" />
        <link rel="apple-touch-icon" href="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/jamesweb_Favicon-lsVzaviQT7zVQqCvYOTBEDmN6PhPe4.jpg" />
        <link rel="icon" type="image/png" href="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/jamesweb_Favicon-lsVzaviQT7zVQqCvYOTBEDmN6PhPe4.jpg" />
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