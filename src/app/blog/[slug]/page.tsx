import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import TranslationButtons from "./TranslationButtons";
import { Metadata } from "next";
import DOMPurify from "isomorphic-dompurify";

// 1. DYNAMIC SEO METADATA
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });

  if (!post) return { title: "Post Not Found | SM Tech" };

  const plainTextContent = post.content ? post.content.replace(/<[^>]*>/g, '') : "";

  return {
    title: `${post.title} | SM Tech AI Research`,
    description: plainTextContent.substring(0, 160),
    openGraph: {
      title: post.title,
      description: plainTextContent.substring(0, 160),
      url: `https://www.smtechaisolutions.com/blog/${slug}`,
      images: [{ url: post.image || "/hero.png" }],
      type: "article",
      authors: ["Abbas Bhatti"],
      publishedTime: post.createdAt.toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: plainTextContent.substring(0, 160),
      images: [post.image || "/hero.png"],
    },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });
  
  const recommendations = await prisma.post.findMany({
    where: { NOT: { slug } },
    take: 3,
    orderBy: { createdAt: 'desc' }
  });

  if (!post) notFound();

  const cleanContent = DOMPurify.sanitize(post.content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": post.title,
    "image": post.image || "https://www.smtechaisolutions.com/hero.png",
    "author": {
      "@type": "Person",
      "name": "Abbas Bhatti",
      "url": "https://www.smtechaisolutions.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SM Tech AI Solutions",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.smtechaisolutions.com/logo.png"
      }
    },
    "datePublished": post.createdAt.toISOString(),
    "description": post.content.replace(/<[^>]*>/g, '').substring(0, 200),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.smtechaisolutions.com/blog/${slug}`
    }
  };

  return (
    <article className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div id="google_translate_element" className="hidden opacity-0 invisible absolute -z-50 h-0 w-0"></div>
      <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="afterInteractive" />
      <Script id="google-translate-config" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'ur,hi,ar,fa,en',
              autoDisplay: false,
            }, 'google_translate_element');
          }
        `}
      </Script>

      <header className="pt-24 pb-12 px-6 max-w-4xl mx-auto text-center border-b border-zinc-100">
        <nav className="mb-6 flex justify-center items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          <Link href="/blog" className="hover:text-zinc-900 transition">Repository</Link>
          <span>/</span>
          <span className="text-zinc-900">{post.category || "Research"}</span>
        </nav>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase italic leading-[0.95] text-zinc-900 mb-8 tracking-tighter notranslate">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-[10px] font-black text-white border border-zinc-300">AB</div>
            <span className="text-zinc-900">Abbas Bhatti</span>
          </div>
          <span className="text-zinc-300">|</span>
          <time dateTime={post.createdAt.toISOString()}>
            {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </time>
        </div>
      </header>

      {post.image && (
        <div className="max-w-5xl mx-auto mt-10 px-6">
          <div className="relative h-87.5 md:h-137.5 w-full overflow-hidden rounded-[3rem] shadow-2xl border border-zinc-100">
            {/* Optimized sizes for the Main Image */}
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover" 
              priority 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px" 
            />
          </div>
        </div>
      )}

      <div className="sticky top-6 z-50 flex justify-center mt-8">
        <TranslationButtons />
      </div>

      <section className="max-w-3xl mx-auto mt-16 px-6 pb-24">
        <div 
          className="prose prose-zinc lg:prose-xl max-w-none text-zinc-800 leading-[1.8] font-medium translation-content
          prose-img:rounded-[2rem] prose-img:shadow-lg prose-img:my-10
          prose-strong:text-zinc-900 prose-headings:font-black prose-headings:italic"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
        
        <div className="mt-20 p-8 rounded-4xl bg-zinc-50 border border-zinc-100 flex flex-col md:flex-row items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-zinc-900 shrink-0 flex items-center justify-center text-white font-black text-2xl">AB</div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-600 mb-1">Author</p>
            <h4 className="text-xl font-bold text-zinc-900">Abbas Bhatti</h4>
            <p className="text-sm text-zinc-500 mt-2">Full-Stack Developer & AI Automation Expert specializing in Agentic Systems and Reasoning Engines at SM Tech AI Solutions.</p>
          </div>
        </div>
      </section>

      <footer className="bg-zinc-900 py-24 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {recommendations.map((rec) => (
              <Link href={`/blog/${rec.slug}`} key={rec.id} className="group block">
                <div className="relative h-64 w-full bg-zinc-800 rounded-4xl overflow-hidden mb-6">
                  {rec.image && (
                    <Image 
                      src={rec.image} 
                      alt={rec.title} 
                      fill 
                      className="object-cover opacity-60 group-hover:opacity-100 transition" 
                      /* Optimized sizes for recommendation cards */
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  )}
                </div>
                <h4 className="text-xl font-bold group-hover:text-blue-400 transition">{rec.title}</h4>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </article>
  );
}