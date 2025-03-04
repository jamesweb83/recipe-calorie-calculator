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
    // 변경 빈도 및 우선순위 설정
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 50000,
    exclude: ['/404'],
    generateIndexSitemap: false
  } 