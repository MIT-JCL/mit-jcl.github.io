import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "MIT JCL",
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: "MIT Jews for Collective Liberation",
  // Meta property used as the default description meta property
  description: "A website for MIT Jews for Collective Liberation",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "en-US",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "en_US",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "en-US",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  },
  // webmentions: {
  // 	  link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
  // },
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ title: string; path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Get Involved",
    path: "/get-involved/",
  },
  {
    title: "Our Values",
    path: "/values/",
  },
  {
    title: "Media",
    path: "/media/",
  },
  {
    title: "Statements",
    path: "/posts/",
  },
];
