// src/pages/index.js
import HomePage from '../components/HomePage';
import { LanguageProvider } from '../contexts/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}