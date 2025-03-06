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
        // 추가 사이트맵이 필요한 경우 여기에 추가
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
    // 사이트맵 XSL 스타일시트 설정
    sitemapXslUrl: '/sitemap.xsl',
    sitemapIndexXslUrl: '/sitemap-index.xsl',
    // 사이트맵 파일 이름 설정
    outDir: 'public',
    sourceDir: '.next',
    // 사이트맵 생성 후 처리
    generateIndexSitemap: true,
    autoLastmod: true,
  } 