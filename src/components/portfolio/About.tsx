import { motion } from "framer-motion";
import { Code, Cpu, Terminal, Users } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const traits = [
  { icon: Code, label: "Problem Solver" },
  { icon: Cpu, label: "Electronics Enthusiast" },
  { icon: Terminal, label: "Linux User" },
  { icon: Users, label: "Team Player" },
];

export default function About() {
  return (
    <section id="about" className="py-32 md:py-40 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_450px] gap-20 md:gap-32 max-w-6xl mx-auto items-start">
          <div>
            <ScrollReveal direction="left" distance={80} duration={0.9}>
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white uppercase tracking-tighter mb-14 leading-none">
                Who<br />I Am
              </h2>
            </ScrollReveal>

            <div className="space-y-10 text-muted-foreground text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              <ScrollReveal delay={0.15}>
                <p className="group">
                  I'm a CSIT student from <strong className="text-primary group-hover:text-accent transition-colors">Bhaktapur, Nepal</strong>.
                  My focus is on creating digital products that are functional, accessible, and high-performing.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="group">
                  I began exploring the digital world at a young age, leading me to experiment with
                  <strong className="text-accent group-hover:text-primary transition-colors"> software development, robotics, and linux administration</strong>.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.45}>
                <p className="group">
                  I'm currently looking for internship opportunities where I can apply my skills and grow
                  alongside experienced developers.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-12 lg:pt-0" staggerDelay={0.1}>
            {traits.map((trait) => (
              <StaggerItem key={trait.label} direction="left" distance={50}>
                <motion.div
                  className="p-8 md:p-10 border border-white/10 flex flex-col items-center text-center group bg-gradient-to-br from-white/[0.02] to-transparent shimmer transition-all duration-500 rounded-lg hover:border-accent/50"
                  whileHover={{
                    scale: 1.06,
                    borderColor: "rgba(255, 184, 28, 0.6)",
                    boxShadow: "0 0 25px rgba(255, 184, 28, 0.25), 0 0 50px rgba(232, 28, 28, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <trait.icon className="w-14 h-14 text-accent group-hover:text-white group-hover:scale-125 transition-all duration-300 mb-6" />
                  <p className="font-black text-white text-[11px] uppercase tracking-[0.25em] group-hover:text-accent transition-colors duration-300">{trait.label}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <ScrollReveal delay={0.5} className="flex flex-wrap gap-3 justify-center mt-24 opacity-70">
          {["Fast Learner", "Critical Thinker", "Adaptable", "Communicator", "Disciplined"].map((s, i) => (
            <ScrollReveal key={s} delay={0.6 + i * 0.08} distance={20}>
              <motion.span
                className="text-[9px] font-black uppercase tracking-[0.35em] text-muted-foreground border border-white/20 px-5 py-2 inline-block transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/10 rounded-full cursor-pointer"
                whileHover={{ scale: 1.08, y: -2 }}
              >
                {s}
              </motion.span>
            </ScrollReveal>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
