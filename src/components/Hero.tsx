import React from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants";
import { Github, Linkedin, Mail, Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-orange-500 font-mono text-sm tracking-widest uppercase mb-4 block">
            Full-Stack Developer & ECE Student
          </span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            {PERSONAL_INFO.name.split(' ')[0]} <br />
            <span className="text-white/40">{PERSONAL_INFO.name.split(' ')[1]}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            I'm a passionate developer currently pursuing B.Tech in Electronics and Communication Engineering at {PERSONAL_INFO.education.institute}. 
            Specializing in building responsive web applications and exploring the intersection of hardware and software.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <div className="flex gap-4">
              <SocialLink href={PERSONAL_INFO.github} icon={<Github className="w-5 h-5" />} />
              <SocialLink href={PERSONAL_INFO.linkedin} icon={<Linkedin className="w-5 h-5" />} />
              <SocialLink href={`mailto:${PERSONAL_INFO.email}`} icon={<Mail className="w-5 h-5" />} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Background decorative element */}
            <div className="absolute inset-0 bg-orange-500 rounded-3xl rotate-6 -z-10 opacity-20 blur-xl group-hover:rotate-12 transition-transform" />
            
            {/* Image container */}
            <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative group">
              <img 
                src="https://i.ibb.co/sdx1n9JH/profile.jpg" 
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if the link doesn't work directly
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${PERSONAL_INFO.name}/800/800`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-12"
        >
          <div>
            <h3 className="text-white/40 uppercase text-xs font-bold tracking-widest mb-4">Education</h3>
            <p className="font-medium">{PERSONAL_INFO.education.degree}</p>
            <p className="text-white/60 text-sm">{PERSONAL_INFO.education.institute}</p>
            <p className="text-white/40 text-xs mt-1">{PERSONAL_INFO.education.period}</p>
          </div>
          <div>
            <h3 className="text-white/40 uppercase text-xs font-bold tracking-widest mb-4">Current Focus</h3>
            <p className="font-medium">Web Technologies</p>
            <p className="text-white/60 text-sm">React, Node.js, REST APIs</p>
          </div>
          <div>
            <h3 className="text-white/40 uppercase text-xs font-bold tracking-widest mb-4">Location</h3>
            <p className="font-medium">Ranchi, India</p>
            <p className="text-white/60 text-sm">BIT Mesra Campus</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2, color: '#f97316' }}
      className="p-3 rounded-full border border-white/10 text-white/60 hover:border-orange-500/50 transition-colors"
    >
      {icon}
    </motion.a>
  );
}
