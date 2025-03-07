// src/components/HomePage.js
import { useState } from 'react';
import axios from 'axios';
import styles from '../styles/Home.module.css';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from './SEOHead';

// 최대 문자 수 상수 정의
const MAX_CHARS = 300;

export default function HomePage() {
  const { texts, language } = useLanguage();
  const [recipe, setRecipe] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // 텍스트 입력 처리 함수
  const handleRecipeChange = (e) => {
    const input = e.target.value;
    if (input.length <= MAX_CHARS) {
      setRecipe(input);
      setCharCount(input.length);
    }
  };

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
    <div>
      <SEOHead />
      <main className={styles.main}>
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
                onChange={handleRecipeChange}
                placeholder={texts.placeholder}
                rows={8}
                maxLength={MAX_CHARS}
              />
              <div className={styles.charCounter}>
                {charCount}/{MAX_CHARS} {texts.characters || '자'}
              </div>
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
        
        {result && (
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