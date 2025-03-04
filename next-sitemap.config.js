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
    generateIndexSitemap: false,
    // 각 페이지별 우선순위 설정
    transform: async (config, path) => {
      const priorities = {
        '/': 1.0,
        '/blog': 0.8,
        '/blog/accurate-calorie-counting': 0.7,
        '/blog/low-calorie-dinner-recipes': 0.7,
        '/blog/korean-food-on-diet': 0.7,
        '/blog/asian-vs-western-diet': 0.7,
        '/faq': 0.6,
        '/privacy-policy': 0.3
      };

      return {
        loc: path,
        changefreq: config.changefreq,
        priority: priorities[path] || config.priority,
        lastmod: new Date().toISOString(),
      };
    }
  } 