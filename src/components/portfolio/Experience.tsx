import { motion } from "framer-motion";
import { Flag, Briefcase } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" distance={80} duration={0.9}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                Leadership &<br />Experience
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium">
                Developing soft skills, teamwork, and leadership through community engagement and discipline.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto" staggerDelay={0.2}>
          <StaggerItem direction="left" distance={60}>
            <motion.div
              className="p-10 border border-white/10 bg-[#0a0a0a] hover:bg-white/5 transition-all group h-full"
              whileHover={{ scale: 1.02, x: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="flex flex-col gap-6">
                <motion.div
                  className="p-4 border border-white/10 group-hover:border-primary transition-colors bg-black w-fit"
                  whileHover={{ rotate: 8 }}
                >
                  <Flag className="w-8 h-8 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">Active Member – Nepal Scouts</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    Participated in leadership programs, community service, and outdoor adventure activities. Developed teamwork, discipline, and communication skills through various scouting projects.
                  </p>
                </div>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem direction="right" distance={60}>
            <motion.div
              className="p-10 border border-dashed border-white/10 bg-transparent flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-all h-full"
              whileHover={{ scale: 1.02, x: 6 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="p-4 border border-white/10 group-hover:border-primary transition-colors bg-black w-fit mb-6"
                whileHover={{ rotate: -8 }}
              >
                <Briefcase className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.div>
              <h3 className="text-2xl font-black text-white uppercase tracking-widest mb-4">Open for Internships</h3>
              <p className="text-muted-foreground font-medium text-lg leading-relaxed max-w-sm">
                Looking for opportunities to grow as a developer and contribute to impactful projects. Let's connect!
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
