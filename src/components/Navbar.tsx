import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-black/20 border-b border-white/5"
    >
      <div className="text-xl font-bold tracking-tighter text-orange-500">
        AK.
      </div>
      <div className="flex gap-8 text-sm font-medium text-white/60">
        <a href="#about" className="hover:text-orange-500 transition-colors">About</a>
        <a href="#experience" className="hover:text-orange-500 transition-colors">Experience</a>
        <a href="#projects" className="hover:text-orange-500 transition-colors">Projects</a>
        <a href="#skills" className="hover:text-orange-500 transition-colors">Skills</a>
        <a href="#contact" className="hover:text-orange-500 transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
}
