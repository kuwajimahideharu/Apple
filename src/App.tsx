/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { Rocket, Palette, Smartphone, Cpu, Layers, Zap, ChevronRight, Menu, X } from "lucide-react";
import { useState, useRef } from "react";

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: { icon: any, title: string, description: string, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 flex flex-col items-start gap-4 hover:bg-zinc-900/80 transition-colors group"
    >
      <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ProjectCard = ({ title, description, link, image, delay = 0 }: { title: string, description: string, link: string, image: string, delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.45, 0.32, 0.9] }}
      className="group relative overflow-hidden rounded-[2.5rem] bg-zinc-900 border border-white/5"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
        >
          View Project <ChevronRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const worksRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToWorks = () => {
    worksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-12 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-semibold tracking-tight cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Hideharu
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-400">
            <button onClick={scrollToWorks} className="hover:text-white transition-colors">Works</button>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed inset-0 z-40 bg-black pt-20 px-10 flex flex-col gap-6 text-2xl font-semibold"
        >
          <button onClick={() => { setIsMenuOpen(false); scrollToWorks(); }}>Works</button>
          <a href="#" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </motion.div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center pt-12 overflow-hidden">
        <motion.div 
          style={{ opacity, scale }}
          className="relative z-10 text-center px-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 relative"
          >
            {/* Chip/Logo Area */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-indigo-500/30 blur-3xl rounded-full" />
              <div className="relative bg-zinc-900 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
                <Cpu className="w-24 h-24 text-indigo-400" />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap tracking-widest uppercase">
                  ANTIGRAVITY AGENT
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
          >
            Ultimate Portfolio 2.0
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto mb-10"
          >
            The new standard in performance. <br className="hidden md:block" />
            Built for the future of web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={scrollToWorks}
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              Explore Now <ChevronRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-3 bg-transparent text-white border border-white/20 rounded-full font-semibold hover:bg-white/5 transition-colors">
              Watch the Film
            </button>
          </motion.div>
        </motion.div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      </section>

      {/* Works Section */}
      <section ref={worksRef} className="py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Featured Projects.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            A selection of my recent work, built with passion and precision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Cafe Aroma"
            description="A modern coffee shop landing page with a focus on elegant typography and smooth animations."
            link="https://cafe-aroma.example.com"
            image="https://picsum.photos/seed/cafe/1200/800"
            delay={0.1}
          />
          <ProjectCard 
            title="Tech Insight"
            description="A clean, data-driven dashboard for monitoring real-time server performance and analytics."
            link="https://tech-insight.example.com"
            image="https://picsum.photos/seed/tech/1200/800"
            delay={0.2}
          />
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Pro by design.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            Every detail meticulously crafted to deliver an unparalleled user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={Rocket}
            title="Next.js 16 Pro 対応"
            description="Leveraging the latest features of Next.js for blazing fast performance and SEO optimization."
            delay={0.1}
          />
          <FeatureCard 
            icon={Palette}
            title="Vaporwave & Modern"
            description="A unique aesthetic that blends nostalgic vaporwave vibes with clean, modern design principles."
            delay={0.2}
          />
          <FeatureCard 
            icon={Smartphone}
            title="Fully Responsive"
            description="Optimized for every screen size, from the smallest mobile devices to the largest desktop monitors."
            delay={0.3}
          />
          <FeatureCard 
            icon={Zap}
            title="Instant Loading"
            description="Zero-latency transitions and optimized asset delivery for a seamless browsing experience."
            delay={0.4}
          />
          <FeatureCard 
            icon={Layers}
            title="Modular Architecture"
            description="Built with scalability in mind, using a clean and maintainable component-based structure."
            delay={0.5}
          />
          <FeatureCard 
            icon={Layers}
            title="Framer Motion"
            description="Fluid, hardware-accelerated animations that bring your content to life with every scroll."
            delay={0.6}
          />
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-32 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
                A18 PRO. <br />
                The heart of it all.
              </h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-8">
                The ANTIGRAVITY AGENT chip delivers unprecedented power and efficiency. 
                With advanced neural processing, it handles complex tasks with ease while 
                maintaining incredible battery life.
              </p>
              <ul className="space-y-4">
                {["6-Core CPU", "6-Core GPU", "16-Core Neural Engine"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full" />
              <div className="relative w-full h-full bg-zinc-900 rounded-[3rem] border border-white/10 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
                <Cpu className="w-48 h-48 text-indigo-400 relative z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto">
          <p className="mb-4">© 2026 Hideharu. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
