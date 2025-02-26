// src/components/LanguageSwitcher.js
import { useLanguage } from '../contexts/LanguageContext';
import styles from '../styles/LanguageSwitcher.module.css';

export default function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage();
  
  return (
    <div className={styles.switcher}>
      <button 
        className={`${styles.button} ${language === 'ko' ? styles.active : ''}`}
        onClick={() => changeLanguage('ko')}
      >
        🇰🇷 한국어
      </button>
      <button 
        className={`${styles.button} ${language === 'en' ? styles.active : ''}`}
        onClick={() => changeLanguage('en')}
      >
        🇺🇸 English
      </button>
    </div>
  );
}