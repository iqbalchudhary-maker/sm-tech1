import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import TranslationButtons from "./TranslationButtons";
import { Metadata } from "next";
import * as cheerio from "cheerio";

// 1. DYNAMIC SEO METADATA
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
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Translation Scripts */}
      <div id="google_translate_element" className="hidden opacity-0 invisible absolute -z-50 h-0 w-0"></div>
      <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
      <Script id="google-translate-config" strategy="afterInteractive">
        {`function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'ur,hi,ar,fa,en', autoDisplay: false }, 'google_translate_element'); }`}
      </Script>

      <header className="pt-24 pb-12 px-6 max-w-4xl mx-auto text-center border-b border-zinc-100">
        <h1 className="text-3xl md:text-5xl font-extrabold uppercase italic leading-tight text-blue-950 mb-8 tracking-tight transition-colors duration-300 hover:text-blue-700 cursor-default notranslate">
          {post.title}
        </h1>
      </header>

      {/* Hero Image with Hover Effect */}
      {post.image && (
        <div className="max-w-5xl mx-auto mt-10 px-6">
          <div className="relative h-80 md:h-[450px] w-full overflow-hidden rounded-[2rem] shadow-xl border border-zinc-100 group">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
              priority 
              sizes="100vw" 
            />
          </div>
        </div>
      )}

      {/* Translation Buttons */}
      <div className="sticky top-6 z-50 flex justify-center mt-8">
        <TranslationButtons />
      </div>

      {/* Content Section with Image Styling */}
      <section className="max-w-3xl mx-auto mt-16 px-6 pb-24">
        <div 
          className="prose prose-zinc lg:prose-lg max-w-none text-zinc-700 leading-[1.9] translation-content 
          prose-headings:text-blue-950 prose-headings:font-bold 
          prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800
          prose-img:rounded-[2rem] prose-img:border prose-img:border-zinc-100 prose-img:shadow-lg 
          prose-img:transition-all prose-img:duration-500 hover:prose-img:scale-[1.02] hover:prose-img:shadow-2xl"
          dangerouslySetInnerHTML={{ __html: cleanContent }} 
        />
        
        {/* Visit Website Button with Gradient Hover */}
        <Link 
          href="https://www.smtechaisolutions.com" 
          target="_blank" 
          className="group block mt-16 p-8 bg-zinc-900 text-white text-center rounded-[2rem] transition-all hover:bg-blue-700 hover:shadow-2xl"
        >
          <span className="text-xl font-bold uppercase tracking-widest group-hover:tracking-[0.2em] transition-all">
            Visit My Website
          </span>
        </Link>
      </section>
    </article>
  );
}