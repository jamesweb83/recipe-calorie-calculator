import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import Image from 'next/image';
import Link from 'next/link';

export default function HighProteinVegetarianMeals() {
  const { language } = useLanguage();

  const post = {
    title: {
      en: "High-Protein, Low-Calorie Meal Ideas for Vegetarians",
      ko: "채식주의자를 위한 고단백 저칼로리 식단 아이디어"
    },
    description: {
      en: "Discover delicious high-protein, low-calorie vegetarian meals that keep you full and fit. Perfect for plant-based eaters looking to maintain a healthy diet.",
      ko: "채식주의자를 위한 맛있고 건강한 고단백 저칼로리 식단 아이디어를 만나보세요."
    },
    date: "2025-03-05",
    author: "James",
    image: "https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/tofu-veggie-scramble-illustration-noBiYedv9jVEq1I72YezURRVCVqU0O.jpg",
    content: {
      en: `
# High-Protein, Low-Calorie Meal Ideas for Vegetarians

Being a vegetarian doesn't mean missing out on protein or piling on calories. These high-protein, low-calorie meal ideas are tailored for plant-based eaters, offering delicious ways to stay full and fit. Let's explore some creative vegetarian options that pack a protein punch without the extra calories!

## Why High-Protein, Low-Calorie Matters for Vegetarians

Protein is key for muscle health and satiety, especially on a vegetarian diet. Pairing it with low-calorie ingredients ensures you meet your nutritional goals while keeping things light—ideal for weight management or an active lifestyle.

## High-Protein, Low-Calorie Vegetarian Meal Ideas

### 1. Tofu Veggie Scramble (220 cal, 18g protein)
- 1/2 cup firm tofu (100 cal, 10g protein)
- 1 cup spinach (10 cal, 1g protein)
- 1 tbsp nutritional yeast (40 cal, 4g protein)

**Prep:** Crumble tofu, sauté with spinach, sprinkle yeast.

### 2. Lentil Zucchini Boats (250 cal, 15g protein)
- 1/2 cup cooked lentils (115 cal, 9g protein)
- 1 zucchini (30 cal, 1g protein)
- 1 tbsp tahini (90 cal, 3g protein)

**Prep:** Halve zucchini, stuff with lentils, drizzle tahini.

### 3. Edamame Salad (280 cal, 20g protein)
- 1 cup edamame (120 cal, 11g protein)
- 1 cup kale (35 cal, 2g protein)
- 1 tbsp hemp seeds (55 cal, 5g protein)

**Prep:** Toss ingredients with lemon juice and a dash of salt.

### 4. Chickpea Protein Bowl (300 cal, 16g protein)
- 1/2 cup chickpeas (130 cal, 7g protein)
- 1 cup cauliflower rice (25 cal, 2g protein)
- 1 tbsp almond butter (100 cal, 3g protein)

**Prep:** Roast chickpeas, mix with cauli rice, drizzle almond butter.

### 5. Greek Yogurt & Chia Parfait (260 cal, 22g protein)
- 3/4 cup plain Greek yogurt (120 cal, 18g protein)
- 1 tbsp chia seeds (60 cal, 3g protein)
- 1/2 cup berries (30 cal, 0g protein)

**Prep:** Layer yogurt, chia, and berries in a glass.

## Tips for Success

1. Use spices to boost flavor without calories.
2. Batch prep protein sources like lentils or chickpeas.
3. Pair with fiber-rich veggies for extra fullness.

These vegetarian meals prove you can enjoy high-protein, low-calorie goodness without meat. Try one today and fuel your plant-based journey!
      `,
      ko: `
# 채식주의자를 위한 고단백 저칼로리 식단 아이디어

채식주의자라도 단백질을 놓치거나 칼로리를 과도하게 섭취할 필요는 없습니다. 이 고단백 저칼로리 식단 아이디어는 식물 기반 식사를 즐기는 이들을 위해 설계되었으며, 배부프고 건강하게 유지할 맛있는 방법을 제안합니다. 채식으로도 단백질을 채울 수 있는 창의적인 아이디어를 만나보세요!

## 왜 고단백 저칼로리가 중요한가요?

단백질은 근육 건강과 포만감에 필수적이며, 특히 채식 식단에서 중요합니다. 저칼로리 재료와 결합하면 영양 목표를 달성하면서도 가볍게 유지할 수 있어 체중 관리나 활동적인 생활에 최적입니다.

## 고단백 저칼로리 채식 식단 아이디어

### 1. 두부 채소 스크램블 (220칼로리, 18g 단백질)
- 단단한 두부 1/2컵 (100칼로리, 10g 단백질)
- 시금치 1컵 (10칼로리, 1g 단백질)
- 영양 효모 1숟가락 (40칼로리, 4g 단백질)

**준비:** 두부 부수고 시금치와 볶은 뒤 효모 뿌리기.

### 2. 렌틸콩 애호박 보트 (250칼로리, 15g 단백질)
- 익힌 렌틸콩 1/2컵 (115칼로리, 9g 단백질)
- 애호박 1개 (30칼로리, 1g 단백질)
- 타히니 1숟가락 (90칼로리, 3g 단백질)

**준비:** 애호박 반으로 자르고 렌틸콩 채운 뒤 타히니 뿌리기.

### 3. 에다마메 샐러드 (280칼로리, 20g 단백질)
- 에다마메 1컵 (120칼로리, 11g 단백질)
- 케일 1컵 (35칼로리, 2g 단백질)
- 헴프 씨드 1숟가락 (55칼로리, 5g 단백질)

**준비:** 레몬즙과 소금 약간 넣어 버무리기.

### 4. 병아리콩 단백 볼 (300칼로리, 16g 단백질)
- 병아리콩 1/2컵 (130칼로리, 7g 단백질)
- 꽃양배추 쌀 1컵 (25칼로리, 2g 단백질)
- 아몬드 버터 1숟가락 (100칼로리, 3g 단백질)

**준비:** 병아리콩 굽고 쌀과 섞은 뒤 아몬드 버터 뿌리기.

### 5. 그릭 요거트 & 치아 파르페 (260칼로리, 22g 단백질)
- 플레인 그릭 요거트 3/4컵 (120칼로리, 18g 단백질)
- 치아씨드 1숟가락 (60칼로리, 3g 단백질)
- 베리 1/2컵 (30칼로리, 0g 단백질)

**준비:** 유리잔에 요거트, 치아, 베리 층층이 쌓기.

## 성공 팁

1. 칼로리 없이 맛을 내기 위해 향신료 활용.
2. 렌틸콩이나 병아리콩 같은 단백질 재료 미리 준비.
3. 섬유질 풍부한 채소와 함께 포만감 높이기.

이 채식 식단으로 고단백 저칼로리의 맛을 느껴보세요. 오늘 하나 시도하며 식물 기반 여정을 즐기세요!
      `
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        customTitle={post.title[language]}
        customDescription={post.description[language]}
        customCanonicalPath="/blog/high-protein-vegetarian-meals"
      />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <Image
              src={post.image}
              alt={post.title[language]}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {post.title[language]}
                </h1>
                <div className="flex items-center text-gray-600">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
              </div>
              <Link 
                href="/blog"
                className="text-blue-600 hover:text-blue-800"
              >
                ← {language === 'ko' ? '블로그로 돌아가기' : 'Back to Blog'}
              </Link>
            </div>
            
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content[language] }}
            />
          </div>
        </article>
      </main>
    </div>
  );
} 