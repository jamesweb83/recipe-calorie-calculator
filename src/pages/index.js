// src/pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

// 언어 컨텍스트 사용하는 메인 앱 컴포넌트
function RecipeCalculator() {
  const { texts, language } = useLanguage();
  const [recipe, setRecipe] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recipe.trim()) {
      setError(texts.enterRecipe);
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('/api/analyze-recipe', { 
        recipe,
        language // 현재 언어 전달
      });
      setResult(response.data);
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data?.error || (language === 'ko' ? '분석 중 오류가 발생했습니다.' : 'An error occurred during analysis.'));
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>{texts.title}</title>
        <meta name="description" content={texts.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <LanguageSwitcher />
        
        <h1 className={styles.title}>
          {texts.title}
        </h1>
        
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="recipe">{texts.recipeLabel}</label>
              <textarea
                id="recipe"
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
                placeholder={texts.placeholder}
                rows={8}
              />
            </div>
            
            {error && <p className={styles.error}>{error}</p>}
            
            <button
              type="submit"
              disabled={loading}
              className={styles.button}
            >
              {loading ? texts.buttonCalculating : texts.buttonCalculate}
            </button>
          </form>
        </div>
        
        {loading && (
          <div className={styles.loading}>
            <p>{texts.analyzingRecipe}</p>
          </div>
        )}
        
        {result && !loading && (
          <div className={styles.result}>
            <h2>{texts.totalCalories} {result.totalCalories} kcal</h2>
            
            <h3>{texts.ingredientCalories}</h3>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{texts.ingredient}</th>
                  <th>{texts.quantity}</th>
                  <th>{texts.grams}</th>
                  <th>{texts.calories}</th>
                </tr>
              </thead>
              <tbody>
                {result.ingredients.map((ing, index) => (
                  <tr key={index}>
                    <td>{ing.name}</td>
                    <td>{ing.quantity} {ing.unit}</td>
                    <td>{ing.grams}g</td>
                    <td>{ing.calories} kcal</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className={styles.disclaimer}>
              <p>{texts.disclaimer}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// 페이지 컴포넌트 - 언어 제공자로 래핑
export default function Home() {
  return (
    <LanguageProvider>
      <RecipeCalculator />
    </LanguageProvider>
  );
}