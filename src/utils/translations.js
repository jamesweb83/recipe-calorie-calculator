// src/utils/translations.js
const translations = {
  en: {
    title: 'Recipe Calorie Calculator',
    description: 'Calculate calories for your recipe ingredients quickly and accurately. Analyze nutrition information for any dish or meal.',
    recipeLabel: 'Enter your recipe ingredients and quantities',
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
    characters: 'characters',
    maxCharError: 'Recipe cannot exceed 300 characters.',
    // 새로 추가된 번역
    home: 'Home',
    blog: 'Blog', // Added blog translation
    faq: 'FAQ',
    privacyPolicy: 'Privacy Policy',
    allRightsReserved: 'All Rights Reserved.',
    // FAQ 페이지
    frequentlyAskedQuestions: 'Frequently Asked Questions',
    faqIntro: 'Here are some common questions about our Recipe Calorie Calculator.',
    // FAQ 항목들
    faq1Question: 'How accurate is the calorie calculation?',
    faq1Answer: 'Our calculator provides estimates based on standard nutrition databases. Results may vary by up to 10-15% depending on specific brands and preparation methods. For precise nutritional information, consider consulting with a nutritionist or using specialized nutrition software.',
    
    faq2Question: 'Can I calculate calories for a complete meal or just ingredients?',
    faq2Answer: 'You can calculate calories for both individual ingredients and complete meals or recipes. Simply enter all ingredients with their quantities, or enter a general description of your meal (e.g., "1 slice of pepperoni pizza").',
    
    faq3Question: 'What units of measurement are supported?',
    faq3Answer: 'The calculator supports various units including grams, ounces, cups, tablespoons, teaspoons, and common descriptors like "medium" or "large" for fruits and vegetables.',
    
    faq4Question: 'Why is there a character limit?',
    faq4Answer: 'The 300-character limit helps ensure fast processing times and accurate results. For complex recipes, consider breaking them down into smaller components or focusing on the main ingredients.',
    
    faq5Question: 'How often is the nutrition database updated?',
    faq5Answer: 'Our nutrition data is regularly updated to reflect the most current available information from food databases and nutrition resources.',
    
    // Privacy Policy
    privacyPolicyTitle: 'Privacy Policy',
    privacyPolicyLastUpdated: 'Last Updated:',
    privacyPolicyIntro: 'This Privacy Policy describes how your personal information is collected, used, and shared when you visit Recipe Calorie Calculator.',
    informationWeCollect: 'Information We Collect',
    informationWeCollectText: 'When you visit the site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.',
    howWeUseInfo: 'How We Use Your Information',
    howWeUseInfoText: 'We use the information we collect to help us screen for potential risk and fraud, and to improve and optimize our site. We do not share your personal information with third parties except as described in this privacy policy.',
    cookies: 'Cookies',
    cookiesText: 'We use cookies to help us understand how you use the site and to improve your experience. You can opt-out of cookies through your browser settings.',
    dataRetention: 'Data Retention',
    dataRetentionText: 'We will maintain your recipe data only for as long as necessary to provide you with our services.',
    changes: 'Changes',
    changesText: 'We may update this privacy policy from time to time in order to reflect changes to our practices or for other operational, legal or regulatory reasons.',
    contactUs: 'Contact Us',
    contactUsText: 'For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at:'
  },
  ko: {
    title: '레시피 칼로리 계산기',
    description: '레시피의 칼로리를 빠르고 정확하게 계산합니다. 모든 요리나 식사의 영양 정보를 분석해보세요.',
    recipeLabel: '레시피 재료와 양을 입력하세요. 혹은 레시피 이름만 넣어주세요.',
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
    characters: '자',
    maxCharError: '레시피는 300자를 초과할 수 없습니다.',
    // 새로 추가된 번역
    home: '홈',
    blog: '블로그', // Added blog translation
    faq: '자주 묻는 질문',
    privacyPolicy: '개인정보처리방침',
    allRightsReserved: '모든 권리 보유.',
    // FAQ 페이지
    frequentlyAskedQuestions: '자주 묻는 질문',
    faqIntro: '레시피 칼로리 계산기에 대한 일반적인 질문들입니다.',
    // FAQ 항목들
    faq1Question: '칼로리 계산은 얼마나 정확한가요?',
    faq1Answer: '저희 계산기는 표준 영양 데이터베이스를 기반으로 추정치를 제공합니다. 특정 브랜드와 조리 방법에 따라 결과는 10-15% 정도 차이가 날 수 있습니다. 정확한 영양 정보를 위해서는 영양사와 상담하거나 전문 영양 소프트웨어를 사용하는 것을 고려해보세요.',
    
    faq2Question: '완전한 식사 또는 재료만 계산할 수 있나요?',
    faq2Answer: '개별 재료와 완전한 식사 또는 레시피 모두에 대해 칼로리를 계산할 수 있습니다. 모든 재료와 그 양을 입력하거나, 식사에 대한 일반적인 설명(예: "페퍼로니 피자 1조각")을 입력하세요.',
    
    faq3Question: '지원되는 측정 단위는 무엇인가요?',
    faq3Answer: '계산기는 그램, 온스, 컵, 큰술, 작은술 및 과일과 채소에 대한 "중간" 또는 "큰" 같은 일반적인 설명과 같은 다양한 단위를 지원합니다.',
    
    faq4Question: '왜 글자 수 제한이 있나요?',
    faq4Answer: '300자 제한은 빠른 처리 시간과 정확한 결과를 보장하는 데 도움이 됩니다. 복잡한.레시피의 경우, 작은 구성 요소로 나누거나 주요 재료에 집중하는 것을 고려해보세요.',
    
    faq5Question: '영양 데이터베이스는 얼마나 자주 업데이트되나요?',
    faq5Answer: '저희 영양 데이터는 식품 데이터베이스 및 영양 자원에서 가장 최신 정보를 반영하기 위해 정기적으로 업데이트됩니다.',
    
    // Privacy Policy
    privacyPolicyTitle: '개인정보처리방침',
    privacyPolicyLastUpdated: '최종 업데이트:',
    privacyPolicyIntro: '이 개인정보처리방침은 레시피 칼로리 계산기를 방문할 때 귀하의 개인 정보가 어떻게 수집, 사용 및 공유되는지 설명합니다.',
    informationWeCollect: '수집하는 정보',
    informationWeCollectText: '사이트를 방문할 때, 웹 브라우저, IP 주소, 시간대 및 기기에 설치된 일부 쿠키에 관한 정보를 포함하여 귀하의 기기에 관한 특정 정보를 자동으로 수집합니다.',
    howWeUseInfo: '정보 사용 방법',
    howWeUseInfoText: '수집한 정보를 잠재적 위험 및 사기를 선별하고, 사이트를 개선하고 최적화하는 데 사용합니다. 이 개인정보처리방침에 설명된 경우를 제외하고 귀하의 개인 정보를 제3자와 공유하지 않습니다.',
    cookies: '쿠키',
    cookiesText: '사이트 사용 방법을 이해하고 경험을 개선하기 위해 쿠키를 사용합니다. 브라우저 설정을 통해 쿠키를 옵트아웃할 수 있습니다.',
    dataRetention: '데이터 보존',
    dataRetentionText: '귀하의 레시피 데이터는 서비스 제공에 필요한 기간 동안만 유지됩니다.',
    changes: '변경 사항',
    changesText: '당사는 관행의 변경을 반영하거나 기타 운영, 법률 또는 규제 이유로 이 개인정보처리방침을 수시로 업데이트할 수 있습니다.',
    contactUs: '문의하기',
    contactUsText: '개인정보 관행에 대한 자세한 정보, 질문 또는 불만 사항이 있으시면 이메일로 연락해 주세요:'
  }
};

export default translations;