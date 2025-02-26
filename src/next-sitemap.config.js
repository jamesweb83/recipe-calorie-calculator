// next-sitemap.config.js
/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://recipe-calorie-calculator.vercel.app',
    generateRobotsTxt: true,
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/'
        }
      ]
    },
    // 다국어 URL 추가
    alternateRefs: [
      {
        href: 'https://recipe-calorie-calculator.vercel.app/en',
        hreflang: 'en'
      },
      {
        href: 'https://recipe-calorie-calculator.vercel.app/ko',
        hreflang: 'ko'
      }
    ],
    // 변경 빈도 및 우선순위 설정
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/404']
  }