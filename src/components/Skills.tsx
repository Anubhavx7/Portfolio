import { motion } from "motion/react";
import { SKILLS, CERTIFICATIONS, POSITIONS } from "../constants";
import { Code2, Award, Users } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Skills Column */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <Code2 className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-bold">Skills</h2>
            </div>

            <div className="space-y-8">
              <SkillGroup title="Languages" skills={SKILLS.languages} />
              <SkillGroup title="Frontend" skills={SKILLS.frontend} />
              <SkillGroup title="Backend" skills={SKILLS.backend} />
              <SkillGroup title="Tools" skills={SKILLS.tools} />
            </div>
          </div>

          {/* Certs & Responsibility Column */}
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <p className="font-medium text-sm">{cert.name}</p>
                    <p className="text-white/40 text-xs mt-1">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-2 bg-orange-500/10 rounded-lg">
                  <Users className="w-6 h-6 text-orange-500" />
                </div>
                <h2 className="text-2xl font-bold">Responsibility</h2>
              </div>
              <div className="space-y-4">
                {POSITIONS.map((pos, i) => (
                  <div key={i} className="flex justify-between items-start text-sm">
                    <p className="text-white/80">{pos.role}</p>
                    <p className="text-white/40 text-xs text-right ml-4">{pos.organization}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-white/80">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
