import { Star, Quote, Building2, Briefcase } from 'lucide-react';

export default function Testimonials() {
  const feedbacks = [
    {
      name: "Ahsan R.",
      role: "COO",
      company: "RETAIL GROUP",
      text: "SM Technology shipped our AI funnel in record time. Their automation logic is flawless and has significantly boosted our ROI.",
      tag: "E-commerce"
    },
    {
      name: "Sarah J.",
      role: "DIRECTOR OPERATIONS",
      company: "GLOBAL OUTREACH",
      text: "The Lead-Precision AI Hunter has transformed our B2B sales. We are now reaching 5x more prospects with double the accuracy.",
      tag: "Lead Generation"
    },
    {
      name: "Dr. Farooq",
      role: "PRINCIPAL",
      company: "EDUCATIONAL HUB",
      text: "The RAG-based assistant built for our institution is exceptionally smart. It handles complex student queries with human-like precision.",
      tag: "EdTech"
    },
    {
      name: "Michael K.",
      role: "CEO",
      company: "TECHLAUNCH SOLUTIONS",
      text: "Their Nexus AI Auto-Marketer is a game changer. We've cut our social media management costs by 70% while increasing engagement.",
      tag: "Automation"
    },
    {
      name: "Zubair Khan",
      role: "FOUNDER",
      company: "LuxeStore COMMERCE",
      text: "Expert team with 20 years of experience indeed. They built a full-stack AI dashboard that tracks every single conversion perfectly.",
      tag: "Full-Stack"
    },
    {
      name: "James L.",
      role: "TECH LEAD",
      company: "INNOVA SYSTEMS",
      text: "The custom API integrations provided by SM Tech are robust. Our system efficiency has improved by 40% since deployment.",
      tag: "Software"
    }
  ];

  // --- REVIEW & RATING SCHEMA (SEO) ---
  const testimonialSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Automation & Full-Stack Development",
    "provider": {
      "@type": "Organization",
      "name": "SM Tech"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": feedbacks.length.toString()
    },
    "review": feedbacks.map((f) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": f.name
      },
      "reviewBody": f.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      }
    }))
  };

  return (
    <section 
      id="testimonials" 
      className="py-10 px-4 bg-[#01040f] relative overflow-hidden scroll-mt-24"
    >
      {/* Structured Data for Search Result Stars */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(testimonialSchema) }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">
            SM TECH <span className="text-blue-600">FEEDBACK</span>
          </h2>
          <p className="text-slate-400 text-xs md:text-sm tracking-widest uppercase mt-2">
            20 Years of Excellence in Business Transformation
          </p>
        </div>

        {/* Feedback Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {feedbacks.map((f, i) => (
            <div 
              key={i} 
              className="p-8 bg-slate-900/30 border-2 border-green-500/50 rounded-[40px] shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] hover:border-green-400 transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex gap-1 text-amber-400" aria-label="5 star rating">
                    {[...Array(5)].map((_, star) => (
                      <Star key={star} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <Quote className="text-green-500/20 group-hover:text-green-500/40 transition-colors" size={40} />
                </div>
                
                <p className="text-slate-300 text-[15px] leading-relaxed italic mb-8">
                  "{f.text}"
                </p>
              </div>

              {/* Company & Designation Info */}
              <div className="pt-6 border-t border-white/5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-xl bg-green-600/10 flex items-center justify-center text-green-500 border border-green-500/20 group-hover:bg-green-600 group-hover:text-white transition-all">
                      <Building2 size={18} />
                   </div>
                   <div>
                     <h4 className="text-white font-black text-sm uppercase tracking-wider">{f.name}</h4>
                     <p className="text-green-500 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                       <Briefcase size={10} /> {f.role}, {f.company}
                     </p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}