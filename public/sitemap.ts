import { prisma } from "@/lib/prisma";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.smtechaisolutions.com";

  try {
    // 1. Blogs Fetching (SEO Traffic ke liye)
    const posts = await prisma.post.findMany({
      select: { slug: true, updatedAt: true },
    });

    // 2. Projects Fetching (Portfolio/Authority ke liye)
    const projects = await (prisma as any).project?.findMany({
      select: { slug: true, updatedAt: true },
    }) || [];

    const blogUrls = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.6, // Blogs ko thora kam rakha hai taake Main Page aur Services ko lift mile
    }));

    const projectUrls = projects.map((project: any) => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    // 3. CORE PAGES (Inhein sabse zyada priority di gayi hai boost ke liye)
    const corePages: MetadataRoute.Sitemap = [
      {
        url: baseUrl, // Home Page
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1.0, // Sabse zyada priority
      },
      {
        url: `${baseUrl}/services`, // Main Services Page
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0, // Full priority taake ye main page ke sath rank kare
      },
      {
        url: `${baseUrl}/contact`, // Conversion Page
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.9,
      },
      {
        url: `${baseUrl}/blog`, // Blog Home
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      },
    ];

    return [...corePages, ...blogUrls, ...projectUrls];

  } catch (error) {
    console.error("Sitemap generation error:", error);
    return [{ url: baseUrl, lastModified: new Date(), priority: 1.0 }];
  }
}