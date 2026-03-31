import { motion } from "motion/react";
import { PROJECTS } from "../constants";
import { ExternalLink, Github, Folder } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-2 bg-orange-500/10 rounded-lg">
            <Folder className="w-6 h-6 text-orange-500" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-orange-500/30 transition-all hover:bg-white/[0.05]"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-500">
                  <Folder className="w-6 h-6" />
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                {project.title}
              </h3>
              
              <div className="space-y-2 mb-6">
                {project.description.map((desc, i) => (
                  <p key={i} className="text-white/60 text-sm leading-relaxed">
                    {desc}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-white/40">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
