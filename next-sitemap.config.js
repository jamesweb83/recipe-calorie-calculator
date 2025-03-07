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
    // 스타일시트 적용 제거 (불필요한 스크립트 태그 방지)
    sitemapXslUrl: undefined,
    sitemapIndexXslUrl: undefined,
    // 사이트맵 파일 이름 설정
    outDir: 'public',
    sourceDir: '.next',
    // 사이트맵 인덱스 파일 생성 비활성화
    generateIndexSitemap: false,
    // 사이트맵 기본 파일 이름 변경
    sitemapBaseFileName: 'main-sitemap',
    autoLastmod: true,
  } 