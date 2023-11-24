import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/favicon.ico",
  siteUrl: "https://nextjs-mdx-blog-theme.vercel.app",
  siteName: "Gaurav Shukla",
  siteDescription:
    "This is Gaurav Shukla's Blog, expect in-depth technical knowledge on Tech.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/gauravxshukla",
    twitter: "https://twitter.com/gauravxshukla",
    linkedin: "https://www.linkedin.com/in/gauravxshukla/",
  },
};
export default siteConfig;
