"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';
import Hero from '@/components/Hero';
import Management from '@/components/Management';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyChooseUs from '@/components/WhyChooseUs'; 
import Testimonials from '@/components/Testimonials'; 
import ChatAgent from '@/components/ChatAgent';

export default function Home() {
  return (
    <main className="bg-[#020617] text-white min-h-screen selection:bg-green-500/30">
      <Navbar />

      {/* --- About Section: Ab Sabse Pehle --- */}
      <div id="about" className="pt-24"> 
        <About />
      </div>

      <div className="flex flex-col">
        {/* --- Hero Section: About ke niche move kar diya gaya hai --- */}
        <section id="home">
          <Hero />
        </section>

        <Management />

        <div id="services">
          <Services />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="why-us">
          <WhyChooseUs />
        </div>
      </div>

      <Footer />
      <ChatAgent />
    </main>
  );
}