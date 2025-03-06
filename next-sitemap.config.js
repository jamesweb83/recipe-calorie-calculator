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
      ],
      additionalSitemaps: [
        `${process.env.NEXT_PUBLIC_SITE_URL || 'https://recipe-calorie-calculator.vercel.app'}/sitemap-index.xml`,
      ],
    },
    // 변경 빈도 및 우선순위 설정
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/404'],
    // 사이트맵 출력 형식 설정
    transform: async (config, path) => {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: new Date().toISOString().split('T')[0],
      }
    },
  } 