import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import Image from 'next/image';
import Link from 'next/link';

export default function FridgeStapleMeals() {
  const { language } = useLanguage();

  const post = {
    title: {
      en: "30 Meals Under 500 Calories Using Fridge Staples",
      ko: "냉장고 재료로 만드는 500kcal 이하 한 끼 식사 30가지"
    },
    description: {
      en: "Discover 30 delicious, low-calorie meals under 500 calories using common fridge staples. Simple, healthy, and budget-friendly recipes that make the most of what you have.",
      ko: "냉장고에 있는 기본 재료로 만드는 500칼로리 이하의 맛있고 건강한 식사 30가지를 만나보세요."
    },
    date: "2025-03-06",
    author: "James",
    image: "https://pfucce7ttunjmfqz.public.blob.vercel-storage.com/turkey-lettuce-wraps-illustration-NcD8dCE6eNowc84kIO9aISZFIPGjLC.jpg",
    content: {
      en: `
# 30 Meals Under 500 Calories Using Fridge Staples

Running out of meal ideas? You don't need fancy ingredients to whip up a delicious, low-calorie meal. These 30 recipes, all under 500 calories, use common fridge staples to keep things simple, healthy, and budget-friendly. Let's raid your fridge and get cooking!

## Why Use Fridge Staples?

Fridge staples like eggs, veggies, and yogurt are versatile and often low in calories. They're perfect for quick meals that support your health goals without requiring a grocery run.

## Featured Meals Under 500 Calories (Detailed)

### 1. Egg & Spinach Scramble (200 cal)
- 2 eggs (140 cal)
- 1 cup spinach (10 cal)
- 1 tsp olive oil (40 cal)

**Prep:** Scramble eggs with spinach in olive oil.

### 2. Greek Yogurt Veggie Bowl (300 cal)
- 3/4 cup Greek yogurt (120 cal)
- 1 cup cucumber (30 cal)
- 1/2 cup cherry tomatoes (15 cal)
- 1 tbsp hummus (60 cal)

**Prep:** Mix yogurt with chopped veggies, top with hummus.

### 3. Turkey Lettuce Wraps (250 cal)
- 3 oz turkey slices (90 cal)
- 2 lettuce leaves (5 cal)
- 1 tbsp mustard (10 cal)
- 1/2 cup shredded carrots (25 cal)

**Prep:** Spread mustard on lettuce, wrap turkey and carrots.

### 4. Tuna Salad on Cucumber (180 cal)
- 1 can tuna in water (120 cal)
- 1 tbsp Greek yogurt (15 cal)
- 1 cucumber (30 cal)

**Prep:** Mix tuna with yogurt, scoop onto cucumber slices.

### 5. Zucchini & Cheese Melt (350 cal)
- 1 zucchini (30 cal)
- 1/4 cup shredded cheese (110 cal)
- 1 tbsp marinara (20 cal)

**Prep:** Slice zucchini, top with sauce and cheese, bake or microwave.

## More Fridge Staple Meals (Quick List)

1. Egg White Omelette with Peppers (150 cal)
2. Cottage Cheese & Berries (220 cal)
3. Chicken & Spinach Salad (300 cal)
4. Veggie Stir-Fry with Soy Sauce (200 cal)
5. Yogurt & Chia Seed Parfait (280 cal)
6. Tomato & Mozzarella Stack (250 cal)
7. Turkey & Avocado Roll (320 cal)
8. Cucumber & Cream Cheese Bites (180 cal)
9. Spinach & Feta Scramble (240 cal)
10. Zucchini Noodles with Tomato (150 cal)
11. Egg Salad Lettuce Wrap (200 cal)
12. Greek Yogurt with Honey & Nuts (350 cal)
13. Tuna & Celery Sticks (160 cal)
14. Chicken & Cucumber Salad (280 cal)
15. Veggie Omelette with Salsa (220 cal)
16. Cottage Cheese & Pineapple (250 cal)
17. Turkey & Bell Pepper Bites (200 cal)
18. Yogurt & Veggie Dip Platter (300 cal)
19. Spinach & Egg Muffin (180 cal)
20. Zucchini & Hummus Wrap (320 cal)
21. Tomato Soup with Yogurt (200 cal)
22. Chicken & Lettuce Cups (270 cal)
23. Cucumber & Egg Slices (150 cal)
24. Cheese & Veggie Skewers (280 cal)
25. Turkey & Spinach Roll-Up (240 cal)

## Tips for Success

1. Mix and match based on what's in your fridge.
2. Use spices or herbs for flavor without calories.
3. Portion control keeps you under 500 calories.

With these 30 ideas, your fridge becomes a goldmine for healthy, low-calorie meals. Pick one and start today!
      `,
      ko: `
# 냉장고 재료로 만드는 500kcal 이하 한 끼 식사 30가지

식사 아이디어가 떠오르지 않나요? 냉장고에 있는 기본 재료로 맛있고 저칼로리 한 끼를 만들 수 있습니다. 이 30가지 레시피는 모두 500칼로리 이하로, 간단하고 건강하며 예산 친화적이에요. 냉장고를 열고 요리 시작해볼까요?

## 왜 냉장고 재료를 활용하나요?

달걀, 채소, 요거트 같은 냉장고 재료는 활용도가 높고 칼로리가 낮습니다. 건강 목표를 지원하는 빠른 식사에 딱 맞아 쇼핑 없이도 충분해요.

## 500칼로리 이하 추천 식사 (상세)

### 1. 달걀 & 시금치 스크램블 (200칼로리)
- 달걀 2개 (140칼로리)
- 시금치 1컵 (10칼로리)
- 올리브 오일 1작은술 (40칼로리)

**준비:** 달걀과 시금치를 오일에 볶기.

### 2. 그릭 요거트 채소 볼 (300칼로리)
- 그릭 요거트 3/4컵 (120칼로리)
- 오이 1컵 (30칼로리)
- 방울토마토 1/2컵 (15칼로리)
- 후무스 1숟가락 (60칼로리)

**준비:** 요거트에 썬 채소 섞고 후무스 얹기.

### 3. 칠면조 상추 랩 (250칼로리)
- 칠면조 슬라이스 85g (90칼로리)
- 상추 2장 (5칼로리)
- 머스타드 1숟가락 (10칼로리)
- 당근 채 1/2컵 (25칼로리)

**준비:** 상추에 머스타드 바르고 칠면조, 당근 말기.

### 4. 참치 오이 샐러드 (180칼로리)
- 물 참치 1캔 (120칼로리)
- 그릭 요거트 1숟가락 (15칼로리)
- 오이 1개 (30칼로리)

**준비:** 참치와 요거트 섞어 오이 조각에 얹기.

### 5. 애호박 치즈 멜트 (350칼로리)
- 애호박 1개 (30칼로리)
- 슈레드 치즈 1/4컵 (110칼로리)
- 마리나라 소스 1숟가락 (20칼로리)

**준비:** 애호박 썰고 소스, 치즈 올려 굽거나 전자레인지 돌리기.

## 추가 냉장고 식사 아이디어 (간략 리스트)

1. 흰자 피망 오믈렛 (150칼로리)
2. 코티지 치즈 & 베리 (220칼로리)
3. 닭고기 & 시금치 샐러드 (300칼로리)
4. 채소 간장 볶음 (200칼로리)
5. 요거트 & 치아씨드 파르페 (280칼로리)
6. 토마토 & 모짜렐라 스택 (250칼로리)
7. 칠면조 & 아보카도 롤 (320칼로리)
8. 오이 & 크림치즈 바이트 (180칼로리)
9. 시금치 & 페타 스크램블 (240칼로리)
10. 애호박 토마토 면 (150칼로리)
11. 달걀 샐러드 상추 랩 (200칼로리)
12. 그릭 요거트 꿀 & 견과류 (350칼로리)
13. 참치 & 셀러리 스틱 (160칼로리)
14. 닭고기 & 오이 샐러드 (280칼로리)
15. 채소 오믈렛 & 살사 (220칼로리)
16. 코티지 치즈 & 파인애플 (250칼로리)
17. 칠면조 & 피망 바이트 (200칼로리)
18. 요거트 & 채소 딥 플래터 (300칼로리)
19. 시금치 & 달걀 머핀 (180칼로리)
20. 애호박 & 후무스 랩 (320칼로리)
21. 토마토 요거트 수프 (200칼로리)
22. 닭고기 & 상추 컵 (270칼로리)
23. 오이 & 달걀 슬라이스 (150칼로리)
24. 치즈 & 채소 꼬치 (280칼로리)
25. 칠면조 & 시금치 롤업 (240칼로리)

## 성공 팁

1. 냉장고 재료로 조합 자유롭게.
2. 향신료나 허브로 칼로리 없이 맛 내기.
3. 양 조절로 500칼로리 이하 유지.

이 30가지 아이디어로 냉장고를 건강한 식사의 보고로 바꿔보세요. 지금 하나 골라 시작하세요!
      `
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        customTitle={post.title[language]}
        customDescription={post.description[language]}
        customCanonicalPath="/blog/fridge-staple-meals"
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