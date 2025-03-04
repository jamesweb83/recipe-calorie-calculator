// src/pages/index.js
import HomePage from '../components/HomePage';
import { LanguageProvider } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <LanguageProvider>
      <Navigation />

      <main className={styles.main + " mt-20"}>
        <HomePage />
      </main>
    </LanguageProvider>
  );
}