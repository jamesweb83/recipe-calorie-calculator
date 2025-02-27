// src/utils/translations.js
const translations = {
  en: {
    title: 'Recipe Calorie Calculator',
    description: 'Calculate calories for your recipe ingredients',
    recipeLabel: 'Enter your recipe ingredients and quantities:',
    placeholder: `Example:
Rice 2 cups
Chicken breast 200g
Onion 1
Carrot 1
Soy sauce 2 tbsp
(or 1 pizza)`,
    buttonCalculate: 'Calculate Calories',
    buttonCalculating: 'Calculating...',
    enterRecipe: 'Please enter a recipe.',
    analyzingRecipe: 'Analyzing recipe...',
    totalCalories: 'Total Calories:',
    ingredientCalories: 'Calories by Ingredient:',
    ingredient: 'Ingredient',
    quantity: 'Quantity',
    grams: 'Grams',
    calories: 'Calories',
    disclaimer: '※ This calculation is approximate and may vary based on the exact type of ingredients and cooking methods.',
    characters: 'characters', // 추가된 번역
    maxCharError: 'Recipe cannot exceed 300 characters.' // 추가된 오류 메시지
  },
  ko: {
    title: '레시피 칼로리 계산기',
    description: '레시피를 넣으면 칼로리를 계산해드려요.',
    recipeLabel: '레시피 재료와 양을 입력하세요. 혹은 레시피 이름만 넣어주세요.:',
    placeholder: `예시:
쌀 2컵
닭가슴살 200g
양파 1개
당근 1개
간장 2큰술
(혹은 라지 피자 1판)`,
    buttonCalculate: '칼로리 계산하기',
    buttonCalculating: '계산 중...',
    enterRecipe: '레시피를 입력해주세요.',
    analyzingRecipe: '레시피를 분석 중입니다...',
    totalCalories: '총 칼로리:',
    ingredientCalories: '재료별 칼로리:',
    ingredient: '재료',
    quantity: '양',
    grams: '그램',
    calories: '칼로리',
    disclaimer: '※ 이 계산은 근사치이며, 실제 값은 재료의 정확한 종류와 조리 방법에 따라 달라질 수 있습니다.',
    characters: '자', // 추가된 번역
    maxCharError: '레시피는 300자를 초과할 수 없습니다.' // 추가된 오류 메시지
  }
};

export default translations;