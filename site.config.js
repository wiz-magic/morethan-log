const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Wiz",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Problem Solver",
    bio: "세상의 문제를 해결합니다.",
    email: "capediem7760@gmail.com",
    linkedin: "wiz",
    github: "lee-insu",
    instagram: "",
  },
  projects: [
    {
      name: `궁금한 재테크`,
      href: "https://brunch.co.kr/@carpediem7760",
    },
    {
      name: `집패스`,
      href: "https://wizblog.vercel.app/",
    },
     {
      name: `오코`,
      href: "https://wizblog.vercel.app/",
    },
    {
      name: `코인앵무새`,
      href: "https://wizblog.vercel.app/",
    },
    {
      name: `헤이서`,
      href: "https://wizblog.vercel.app/",
    },
  ],
  // blog setting (required)
  blog: {
    title: "🍏 위즈의 Blog ",
    description: "문제 해결사의 기록",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["포트폴리오", "마케터", "창업가"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
