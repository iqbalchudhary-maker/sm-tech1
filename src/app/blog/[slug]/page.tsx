import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import TranslationButtons from "./TranslationButtons"; // Reference connect kiya

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await prisma.post.findUnique({ where: { slug } });
  
  const recommendations = await prisma.post.findMany({
    where: { NOT: { slug } },
    take: 3,
    orderBy: { createdAt: 'desc' }
  });

  if (!post) notFound();

  return (
    <article className="min-h-screen bg-white">
      {/* 1. Google Translate Core Logic (Hidden) */}
      <div id="google_translate_element" className="hidden opacity-0 invisible absolute -z-50 h-0 w-0"></div>
      
      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
      
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

      {/* --- SM TECH BANNER KILLER SCRIPT --- */}
      <Script id="google-banner-remover" strategy="afterInteractive">
        {`
          (function() {
            const removeBanner = () => {
              const banner = document.querySelector(".goog-te-banner-frame");
              if (banner) {
                banner.style.setProperty('display', 'none', 'important');
              }
              if (document.body.style.top !== "0px") {
                document.body.style.setProperty('top', '0px', 'important');
                document.body.style.setProperty('position', 'static', 'important');
              }
            };

            // Monitor changes in the body and DOM
            const observer = new MutationObserver(removeBanner);
            observer.observe(document.body, { attributes: true, childList: true, subtree: true });
            
            // Fallback interval
            setInterval(removeBanner, 500);
          })();
        `}
      </Script>

      <header className="pt-24 pb-12 px-6 max-w-4xl mx-auto text-center border-b border-zinc-100">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="px-3 py-1 bg-zinc-900 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
            {post.category || "AI Research"}
          </span>
          {post.isTraining && (
            <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
              Training
            </span>
          )}
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase italic leading-[1.1] text-zinc-900 mb-8 tracking-tighter notranslate">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-zinc-200 flex items-center justify-center text-[8px] text-zinc-600 border border-zinc-300">AB</div>
            <span>Abbas Bhatti</span>
          </div>
          <span className="text-zinc-300">/</span>
          <span>Published: {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
        </div>
      </header>

      {post.image && (
        <div className="max-w-4xl mx-auto mt-10 px-6">
          <div className="relative h-[300px] md:h-[450px] w-full overflow-hidden rounded-3xl shadow-xl border border-zinc-100">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>
        </div>
      )}

      {/* --- Yahan TranslationButtons.tsx ka reference call ho raha hai --- */}
      <TranslationButtons />

      <section className="max-w-2xl mx-auto mt-12 px-6 pb-20">
        <div className="text-zinc-700 leading-[1.8] whitespace-pre-wrap font-medium text-lg md:text-xl translation-content">
          {post.content}
        </div>
      </section>

      {/* Recommendations Section */}
      <footer className="bg-zinc-50 border-t border-zinc-200 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-2">Up Next</h3>
              <p className="text-2xl font-black uppercase italic text-zinc-900">Related Research</p>
            </div>
            <Link href="/blog" className="text-[10px] font-black uppercase border-b-2 border-zinc-900 pb-1">View All</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recommendations.map((rec) => (
              <Link href={`/blog/${rec.slug}`} key={rec.id} className="group block">
                <div className="relative h-48 w-full bg-zinc-200 rounded-2xl overflow-hidden mb-4">
                  {rec.image ? (
                    <Image src={rec.image} alt={rec.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-400 font-bold">SM TECH</div>
                  )}
                </div>
                <h4 className="text-sm font-black uppercase leading-tight text-zinc-900 group-hover:text-blue-600 transition-colors">
                  {rec.title}
                </h4>
                <p className="text-[9px] font-bold text-zinc-400 uppercase mt-2">{rec.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </article>
  );
}