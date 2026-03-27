import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const categories = [
  {
    title: "Languages",
    skills: [
      { name: "C", level: 70 },
      { name: "JavaScript", level: 60 },
      { name: "Python", level: 50 },
      { name: "SQL", level: 55 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", level: 75 },
      { name: "CSS", level: 70 },
      { name: "REST APIs", level: 50 },
    ],
  },
  {
    title: "Tools & Systems",
    skills: [
      { name: "Linux", level: 70 },
      { name: "Git & GitHub", level: 60 },
      { name: "VS Code", level: 80 },
    ],
  },
  {
    title: "Hardware",
    skills: [
      { name: "Arduino", level: 75 },
      { name: "ESP32", level: 65 },
      { name: "Networking", level: 50 },
    ],
  },
];

function SkillBar({ level, delay }: { level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const isHighLevel = level >= 70;

  return (
    <motion.div
      ref={ref}
      className="w-full h-[2.5px] bg-white/8 overflow-hidden rounded-full transition-all duration-300 hover:h-[3.5px]"
      whileHover={{ boxShadow: isHighLevel ? "0 0 15px rgba(255, 184, 28, 0.5)" : "0 0 15px rgba(232, 28, 28, 0.5)" }}
    >
      <motion.div
        className={`h-full transition-colors duration-300 rounded-full ${isHighLevel ? "bg-gradient-to-r from-accent to-accent/80" : "bg-gradient-to-r from-primary to-primary/80"}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1.3, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-32 md:py-40 bg-black">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" distance={80} duration={0.9}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Technical<br />Stack
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed">
                My toolbox is filled with a diverse range of technologies, from low-level systems and hardware to modern web development.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-lg overflow-hidden"
          staggerDelay={0.12}
        >
          {categories.map((cat, ci) => (
            <StaggerItem key={cat.title} direction="up" distance={40}>
              <motion.div
                className="p-8 md:p-10 bg-black flex flex-col items-start hover:bg-white/[0.02] transition-colors duration-500 group h-full border border-transparent hover:border-accent/40"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.015)" }}
              >
                <h3 className="text-accent font-black uppercase tracking-[0.25em] text-[9px] md:text-[10px] mb-10 group-hover:text-white transition-colors duration-300 px-3 py-1 rounded-full bg-accent/10">{cat.title}</h3>
                <div className="flex flex-col gap-7 w-full">
                  {cat.skills.map((skill, si) => {
                    const isHighLevel = skill.level >= 70;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: si * 0.1 }}
                        className="flex flex-col gap-3"
                      >
                        <div className="flex justify-between items-end">
                          <span className={`text-lg md:text-xl font-black text-white uppercase tracking-tight transition-colors duration-300 group-hover:${isHighLevel ? "text-accent" : "text-primary"}`}>
                            {skill.name}
                          </span>
                          <span className={`text-[10px] md:text-xs font-black tracking-widest transition-colors duration-300 px-2 py-1 rounded-md ${isHighLevel ? "text-accent bg-accent/10" : "text-muted-foreground bg-white/5"}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <SkillBar level={skill.level} delay={0.3 + si * 0.1} />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
