// src/pages/_app.js
import { LanguageProvider } from '../contexts/LanguageContext';
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      {/* 구글 애드센스 코드 */}
      <Script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7988179761724460"
        crossOrigin="anonymous"
      />

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