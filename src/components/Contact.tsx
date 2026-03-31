import React from "react";
import { motion } from "motion/react";
import { PERSONAL_INFO } from "../constants";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-3xl bg-orange-500 text-black"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            Let's work together.
          </h2>
          <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto">
            I'm currently looking for internship opportunities and collaborative projects. 
            Feel free to reach out!
          </p>
          
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="inline-block bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Get in touch
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-black/10 text-left">
            <div className="space-y-4">
              <ContactItem icon={<Mail className="w-4 h-4" />} label="Email" value={PERSONAL_INFO.email} />
              <ContactItem icon={<Phone className="w-4 h-4" />} label="Phone" value={PERSONAL_INFO.phone} />
              <ContactItem icon={<MapPin className="w-4 h-4" />} label="Location" value="Ranchi, India" />
            </div>
            <div className="flex flex-col justify-center items-end gap-4">
              <div className="flex gap-4">
                <a 
                  href={PERSONAL_INFO.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-3 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-black/40">
                © 2026 Anubhav Kumar
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-black/40">{icon}</div>
      <div>
        <p className="text-[10px] uppercase font-bold tracking-widest text-black/40 leading-none mb-1">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
