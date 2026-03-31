import { motion } from "motion/react";
import { EXPERIENCES } from "../constants";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-2 bg-orange-500/10 rounded-lg">
            <Briefcase className="w-6 h-6 text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-orange-500" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-orange-500 font-medium">{exp.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-white/60 font-mono text-sm">{exp.period}</p>
                  <p className="text-white/40 text-xs">{exp.location}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-white/60 text-sm flex gap-3">
                    <span className="text-orange-500/50 mt-1.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
