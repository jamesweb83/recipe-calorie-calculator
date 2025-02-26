import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [recipe, setRecipe] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!recipe.trim()) {
      setError('레시피를 입력해주세요.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await axios.post('/api/analyze-recipe', { recipe });
      setResult(response.data);
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data?.error || '분석 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>레시피 칼로리 계산기</title>
        <meta name="description" content="GPT를 활용한 레시피 칼로리 계산기" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          레시피 칼로리 계산기
        </h1>
        
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="recipe">레시피 재료와 양을 입력하세요:</label>
              <textarea
                id="recipe"
                value={recipe}
                onChange={(e) => setRecipe(e.target.value)}
                placeholder="예시:


쌀 2컵
닭가슴살 200g
양파 1개
당근 1개
간장 2큰술"
rows={8}
/>
</div>
Copy           {error && <p className={styles.error}>{error}</p>}
           
           <button
             type="submit"
             disabled={loading}
             className={styles.button}
           >
             {loading ? '계산 중...' : '칼로리 계산하기'}
           </button>
         </form>
       </div>
       
       {loading && (
         <div className={styles.loading}>
           <p>GPT를 통해 레시피를 분석 중입니다...</p>
         </div>
       )}
       
       {result && !loading && (
         <div className={styles.result}>
           <h2>총 칼로리: {result.totalCalories} kcal</h2>
           
           <h3>재료별 칼로리:</h3>
           <table className={styles.table}>
             <thead>
               <tr>
                 <th>재료</th>
                 <th>양</th>
                 <th>그램</th>
                 <th>칼로리</th>
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
             <p>※ 이 계산은 근사치이며, 실제 값은 재료의 정확한 종류와 조리 방법에 따라 달라질 수 있습니다.</p>
           </div>
         </div>
       )}
     </main>
   </div>
 );
}