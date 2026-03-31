import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-orange-500 selection:text-black">
      {/* Background decoration */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </motion.main>

      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <p className="text-white/20 text-xs font-mono uppercase tracking-widest">
          Designed & Built by Anubhav Kumar • 2026
        </p>
      </footer>
    </div>
  );
}
