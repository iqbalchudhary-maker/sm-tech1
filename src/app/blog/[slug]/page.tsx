import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import TranslationButtons from "./TranslationButtons";
import { Metadata } from "next";
import * as cheerio from "cheerio"; // New: Cheerio for safe HTML parsing

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) return { title: "Post Not Found | SM Tech" };

  const plainTextContent = post.content ? post.content.replace(/<[^>]*>/g, '') : "";
  const domain = "https://www.smtechaisolutions.com";
  const ogImage = post.image 
    ? (post.image.startsWith('http') ? post.image : `${domain}${post.image}`)
    : `${domain}/logo.png`;

  return {
    title: `${post.title} | SM Tech AI Research`,
    description: plainTextContent.substring(0, 160),
    openGraph: {
      title: post.title,
      description: plainTextContent.substring(0, 160),
      url: `${domain}/blog/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      type: "article",
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });
  
  if (!post) notFound();

  // Cheerio use kar ke content ko safe load kiya
  const $ = cheerio.load(post.content);
  const cleanContent = $.html(); 

  const recommendations = await prisma.post.findMany({
    where: { NOT: { slug } },
    take: 3,
    orderBy: { createdAt: 'desc' }
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "image": post.image || "https://www.smtechaisolutions.com/logo.png",
    "author": { "@type": "Person", "name": "Abbas Bhatti" },
    "datePublished": post.createdAt.toISOString(),
  };

  return (
    <article className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="pt-24 pb-12 px-6 max-w-4xl mx-auto text-center border-b border-zinc-100">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic leading-[0.95] text-zinc-900 mb-8 tracking-tighter">{post.title}</h1>
      </header>

      {/* Image and Content Section */}
      <section className="max-w-3xl mx-auto mt-16 px-6 pb-24">
        <div 
          className="prose prose-zinc lg:prose-xl max-w-none text-zinc-800 leading-[1.8]"
          dangerouslySetInnerHTML={{ __html: cleanContent }} 
        />
        
        {/* Rest of your UI remains the same... */}
        <Link href="https://www.smtechaisolutions.com" target="_blank" className="block mt-10 p-8 bg-zinc-900 text-white text-center rounded-[2rem]">
          Visit Website
        </Link>
      </section>
    </article>
  );
}