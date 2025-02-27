// src/pages/_app.js
import { LanguageProvider } from '../contexts/LanguageContext';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Noto+Sans:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;