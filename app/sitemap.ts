import { MetadataRoute } from "next";
import { services } from "@/data/services";
import { practiceAreas } from "@/data/practiceAreas";
import { intersections } from "@/data/intersections";
import { caseStudies } from "@/data/caseStudies";
import { getAllPosts } from "@/lib/blog";
import fs from "fs";
import path from "path";

const BASE_URL = "https://jurispage.com";

function getNewsSlugs(): string[] {
  const dir = path.join(process.cwd(), "content/news");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(".mdx", ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL + "/", changeFrequency: "weekly", priority: 1.0 },
    { url: BASE_URL + "/about-us/", changeFrequency: "monthly", priority: 0.8 },
    { url: BASE_URL + "/contact/", changeFrequency: "monthly", priority: 0.9 },
    { url: BASE_URL + "/services/pricing/", changeFrequency: "monthly", priority: 0.9 },
    { url: BASE_URL + "/best-law-firm-seo-companies/", changeFrequency: "monthly", priority: 0.8 },
    { url: BASE_URL + "/blog/", changeFrequency: "weekly", priority: 0.7 },
    { url: BASE_URL + "/law-firm-seo-cost/", changeFrequency: "monthly", priority: 0.8 },
    { url: BASE_URL + "/scorpion-legal-marketing-alternative/", changeFrequency: "monthly", priority: 0.7 },
    { url: BASE_URL + "/practice-areas/", changeFrequency: "monthly", priority: 0.8 },
    { url: BASE_URL + "/services/", changeFrequency: "monthly", priority: 0.8 },
    { url: BASE_URL + "/jurispage-now-backed-by-juris-digital/", changeFrequency: "yearly", priority: 0.6 },
    { url: BASE_URL + "/see-my-market-gap/", changeFrequency: "monthly", priority: 0.9 },
    { url: BASE_URL + "/ai-search-report/", changeFrequency: "monthly", priority: 0.7 },
    { url: BASE_URL + "/secret-shop/", changeFrequency: "monthly", priority: 0.6 },
    { url: BASE_URL + "/calculate-roi-law-firm-ppc-campaign/", changeFrequency: "monthly", priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: BASE_URL + "/" + s.slug + "/",
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const practiceAreaPages: MetadataRoute.Sitemap = practiceAreas.map((p) => ({
    url: BASE_URL + "/" + p.slug + "/",
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const intersectionPages: MetadataRoute.Sitemap = intersections.map((i) => ({
    url: BASE_URL + "/" + i.practiceAreaSlug + "/" + i.serviceSlug + "/",
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: BASE_URL + "/blog/" + post.slug + "/",
    lastModified: new Date(post.dateModified || post.datePublished),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const newsPages: MetadataRoute.Sitemap = getNewsSlugs().map((slug) => ({
    url: BASE_URL + "/news/" + slug + "/",
    lastModified: new Date("2026-02-27"),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const caseStudyPages: MetadataRoute.Sitemap = [
    { url: BASE_URL + "/case-studies/", changeFrequency: "monthly" as const, priority: 0.8 },
    ...caseStudies.map(({ slug }) => ({
      url: BASE_URL + "/case-studies/" + slug + "/",
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...servicePages, ...practiceAreaPages, ...intersectionPages, ...blogPosts, ...newsPages, ...caseStudyPages];
}
