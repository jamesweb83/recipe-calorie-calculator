import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../../contexts/LanguageContext';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import SEOHead from '../../components/SEOHead';

// 영어 콘텐츠
const englishContent = {
  title: "How Accurate Calorie Counting Can Transform Your Diet",
  description: "Discover how precise calorie tracking can revolutionize your diet and help you achieve your health goals with our accurate calorie calculator.",
  publishedDate: "Published: March 25, 2024",
  
  intro: "Struggling to see results from your diet? The secret might be simpler than you think: accurate calorie counting. Whether you're aiming to lose weight, maintain it, or just eat healthier, knowing exactly what's on your plate can make all the difference. In this post, we'll explore how precise calorie tracking can transform your diet—and how our calorie calculator can help you get there.",
  
  whyTitle: "Why Calorie Counting Matters",
  whyText: "Calories are the fuel your body runs on, but too many or too few can throw off your goals. Studies show that people often underestimate how much they eat by up to 20-50%. Accurate calorie counting bridges that gap, giving you a clear picture of your intake so you can adjust accordingly. It's not about restriction—it's about empowerment.",
  
  benefitsTitle: "The Benefits of Accurate Calorie Counting",
  benefit1: "Weight Loss Precision: Knowing your daily calorie needs (e.g., 1,500 for weight loss) and sticking to them boosts success rates.",
  benefit2: "Better Food Choices: Seeing the numbers encourages you to swap high-calorie options for nutrient-dense ones.",
  benefit3: "Consistency: Tracking builds habits, making healthy eating second nature over time.",
  
  howToTitle: "How to Count Calories Accurately",
  howTo1: "Measure Ingredients: eyeballing portions is risky—use a scale or measuring cups for precision.",
  howTo2: "Track Everything: That splash of oil or handful of nuts adds up. Include every bite.",
  howTo3: "Use Tools: Our calorie calculator lets you input ingredients and amounts for instant, reliable results.",
  example: "Example: A homemade chicken stir-fry might seem \"healthy,\" but 2 tablespoons of oil adds 240 calories. Plug it into our calculator to see the real total!",
  
  transformationTitle: "Real-Life Transformation Stories",
  transformationText: "Take Sarah, a busy mom who dropped 15 pounds in 3 months. She used to guess her portions, but once she started tracking with precision, she cut 300 calories a day without feeling deprived. Accurate counting showed her where to tweak—like swapping rice for cauliflower. Ready to transform your diet too?",
  
  mistakesTitle: "Common Mistakes to Avoid",
  mistake1: "Ignoring Small Bites: A \"taste\" here and there can add 100+ calories.",
  mistake2: "Generic Estimates: Online databases vary—calculate your recipes for exact numbers.",
  mistake3: "Skipping Days: Consistency is key; even one off day can skew your progress.",
  
  calculatorTitle: "How Our Calorie Calculator Helps",
  calculatorText: "Generic apps might guess, but our tool is built for accuracy. Input your recipe—like 4 oz chicken, 1 cup broccoli, 1 tsp soy sauce—and get a precise calorie breakdown. Adjust portions or swap ingredients to hit your target. It's like having a dietitian in your pocket!",
  
  conclusionTitle: "Start Transforming Your Diet Today",
  conclusionText: "Accurate calorie counting isn't just a tool—it's a game-changer. It takes the guesswork out of eating, letting you enjoy food while hitting your goals. Try it now: grab a recipe, plug it into our calorie calculator, and see the difference precision makes.",
  
  callToAction: "Curious? Search \"calorie counting tips\" or calculate your next meal with us!",
  
  calculatorPromo: "Ready to start counting calories accurately? Use our Recipe Calorie Calculator to get precise measurements for your meals."
};

// 한국어 콘텐츠
const koreanContent = {
  title: "정확한 칼로리 계산이 당신의 식단을 어떻게 바꿀 수 있는가",
  description: "정확한 칼로리 추적이 어떻게 당신의 식단을 혁신하고 건강 목표 달성을 도울 수 있는지 알아보세요.",
  publishedDate: "게시일: 2024년 3월 25일",
  
  intro: "다이어트에서 원하는 결과를 못 보고 있나요? 그 비밀은 생각보다 간단할 수 있습니다: 정확한 칼로리 계산. 살을 빼고 싶든, 유지하고 싶든, 더 건강하게 먹고 싶든, 접시에 담긴 칼로리를 정확히 아는 건 큰 차이를 만듭니다. 이 글에서 정확한 칼로리 추적이 식단을 어떻게 바꿀 수 있는지, 그리고 우리 칼로리 계산기가 어떻게 도울 수 있는지 알아보겠습니다.",
  
  whyTitle: "칼로리 계산이 중요한 이유",
  whyText: "칼로리는 몸이 움직이는 연료지만, 너무 많거나 적으면 목표가 어긋날 수 있어요. 연구에 따르면 사람들은 섭취량을 20~50%까지 과소평가한다고 합니다. 정확한 칼로리 계산은 이 차이를 메워주고, 섭취량을 명확히 보여줘 조정할 수 있게 해줍니다. 억제가 아니라 힘을 주는 거예요.",
  
  benefitsTitle: "정확한 칼로리 계산의 장점",
  benefit1: "정확한 체중 감량: 하루 칼로리 필요량(예: 다이어트 시 1,500칼로리)을 알고 지키면 성공률이 높아져요.",
  benefit2: "더 나은 음식 선택: 숫자를 보면 고칼로리 음식을 영양가 높은 선택으로 바꾸게 됩니다.",
  benefit3: "일관성: 추적은 습관을 만들고, 건강한 식단을 자연스럽게 유지하게 해줍니다.",
  
  howToTitle: "칼로리를 정확히 계산하는 법",
  howTo1: "재료 계량하기: 눈대중은 위험해요—저울이나 계량컵으로 정확히 측정하세요.",
  howTo2: "모든 걸 기록하기: 기름 한 방울, 견과류 한 줌도 칼로리가 됩니다. 모든 음식을 포함하세요.",
  howTo3: "도구 활용하기: 우리 칼로리 계산기에 재료와 양을 입력하면 즉시 정확한 결과를 얻을 수 있어요.",
  example: "예시: 집에서 만든 닭고기 볶음이 \"건강하다\"고 생각했는데, 기름 2큰술이 240칼로리를 추가합니다. 계산기에 넣어보면 진짜 칼로리를 알 수 있어요!",
  
  transformationTitle: "실제 변화 사례",
  transformationText: "바쁜 엄마 사라(Sarah)는 3개월 만에 15파운드를 뺐어요. 예전엔 양을 대충 짐작했지만, 정확히 추적하면서 하루 300칼로리를 줄였고 배고프지 않았죠. 밥을 꽃양배추로 바꾸는 조정을 계산으로 알아냈습니다. 당신의 식단도 바꿀 준비 되셨나요?",
  
  mistakesTitle: "피해야 할 흔한 실수",
  mistake1: "작은 간과: 여기저기 맛보기가 100칼로리 이상 될 수 있어요.",
  mistake2: "대충 추정: 온라인 데이터는 제각각—당신 레시피로 정확히 계산하세요.",
  mistake3: "건너뛰기: 일관성이 중요해요. 하루라도 빼먹으면 진행이 흔들릴 수 있습니다.",
  
  calculatorTitle: "우리 칼로리 계산기가 돕는 방법",
  calculatorText: "일반 앱은 추측할 수 있지만, 우리 도구는 정확성을 위해 만들어졌어요. 닭고기 120g, 브로콜리 1컵, 간장 1작은술을 입력하면 정확한 칼로리 분석이 나옵니다. 양을 조정하거나 재료를 바꿔 목표에 맞춰보세요. 주머니 속 영양사 같죠!",
  
  conclusionTitle: "오늘부터 식단을 바꿔보세요",
  conclusionText: "정확한 칼로리 계산은 단순한 도구가 아니라 게임 체인저예요. 먹는 것의 추측을 없애고, 목표를 이루며 음식을 즐길 수 있게 합니다. 지금 해보세요: 레시피를 꺼내 우리 계산기에 입력하고, 정확함이 가져오는 변화를 느껴보세요.",
  
  callToAction: "궁금하시죠? \"칼로리 계산 팁\"을 검색하거나 지금 다음 식사를 계산해보세요!",
  
  calculatorPromo: "정확한 칼로리 계산을 시작할 준비가 되셨나요? 레시피 칼로리 계산기로 정확한 식사 측정을 시작해보세요."
};

export default function AccurateCalorieCounting() {
  const { language } = useLanguage();
  const content = language === 'ko' ? koreanContent : englishContent;

  return (
    <div>
      <SEOHead 
        customTitle={content.title} 
        customDescription={content.description} 
        customCanonicalPath="/blog/accurate-calorie-counting"
      />
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">
              {content.title}
            </h1>
            <p className="text-gray-600 italic">
              {content.publishedDate}
            </p>
            <div className="relative w-full h-[400px] mt-8 rounded-lg overflow-hidden">
              <Image
                src="https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/accurate-calorie-counting-diet-illustration-HOjRMe9zxsRXLwof1CvysckZBHpqNc.jpg"
                alt={content.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </header>

          <div className="prose prose-lg max-w-none prose-indigo">
            <p className="mb-8">{content.intro}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.whyTitle}
            </h2>
            <p className="mb-8">{content.whyText}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.benefitsTitle}
            </h2>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2">{content.benefit1}</li>
              <li className="mb-2">{content.benefit2}</li>
              <li className="mb-2">{content.benefit3}</li>
            </ul>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.howToTitle}
            </h2>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">{content.howTo1}</li>
              <li className="mb-2">{content.howTo2}</li>
              <li className="mb-2">{content.howTo3}</li>
            </ul>
            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.example}</p>
            </div>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.transformationTitle}
            </h2>
            <p className="mb-8">{content.transformationText}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.mistakesTitle}
            </h2>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2">{content.mistake1}</li>
              <li className="mb-2">{content.mistake2}</li>
              <li className="mb-2">{content.mistake3}</li>
            </ul>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.calculatorTitle}
            </h2>
            <p className="mb-8">{content.calculatorText}</p>

            <h2 className="text-2xl font-semibold text-indigo-600 mt-12 mb-4">
              {content.conclusionTitle}
            </h2>
            <p className="mb-8">{content.conclusionText}</p>

            <div className="bg-indigo-50 p-4 rounded-lg mb-8">
              <p className="text-indigo-700">{content.callToAction}</p>
            </div>

            {/* Calculator Promotion */}
            <div className="bg-indigo-50 p-6 rounded-lg mt-8">
              <p className="mb-4 text-indigo-700 font-medium">{content.calculatorPromo}</p>
              <div className="text-center">
                <a
                  href="https://recipe-calorie-calculator.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                >
                  {language === 'ko' ? '칼로리 계산기 사용하기' : 'Use Calorie Calculator'}
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
} 