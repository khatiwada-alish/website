import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const education = [
  {
    degree: "BSc. CSIT",
    school: "Samriddhi College",
    location: "Lokanthali, Bhaktapur",
    period: "2025 – Present",
    status: "Running",
  },
  {
    degree: "+2 Science",
    school: "Triton Secondary School",
    location: "Kathmandu",
    period: "Completed",
    status: null,
  },
  {
    degree: "SEE",
    school: "Everest English School",
    location: "Bhaktapur",
    period: "Completed",
    status: null,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32 md:py-40 bg-black">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" distance={80} duration={0.9}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Academic<br />History
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed">
                Following the path of continuous learning and academic excellence in the field of Computer Science and Information Technology.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="max-w-4xl mx-auto relative" staggerDelay={0.18}>
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent via-primary to-transparent -translate-x-1/2 hidden md:block" />

          {education.map((edu, i) => (
            <StaggerItem key={edu.degree} direction={i % 2 === 0 ? "right" : "left"} distance={60}>
              <div
                className={`flex flex-col md:flex-row gap-10 mb-20 last:mb-0 relative ${i % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* Timeline indicator – animated */}
                <motion.div
                  className="absolute left-0 md:left-1/2 top-10 w-5 h-5 bg-gradient-to-br from-accent to-primary border-[3px] border-black -translate-x-1/2 z-10 hidden md:block rounded-full"
                  whileHover={{ scale: 2, boxShadow: "0 0 30px rgba(255, 184, 28, 0.6), 0 0 60px rgba(232, 28, 28, 0.3)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                />

                <div className={`flex-1 ${i % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <motion.div
                    className="p-10 md:p-12 border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent group hover:border-accent/50 transition-all duration-500 w-full rounded-lg shadow-xl hover:shadow-2xl"
                    whileHover={{ x: i % 2 === 0 ? -10 : 10, borderColor: "rgba(255, 184, 28, 0.4)" }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  >
                    <div className={`flex flex-col gap-5 ${i % 2 === 0 ? "items-start" : "items-start md:items-end text-left md:text-right"}`}>
                      <div className="flex items-center gap-4">
                        {edu.status && (
                          <motion.span
                            className="text-[9px] font-black uppercase tracking-widest text-white border border-primary bg-primary/15 px-4 py-2 rounded-full"
                            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(232, 28, 28, 0.4)" }}
                          >
                            {edu.status}
                          </motion.span>
                        )}
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/80 px-3 py-1 bg-white/5 rounded-md">{edu.period}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight group-hover:text-accent transition-colors duration-300">{edu.degree}</h3>
                      <div className="flex flex-col gap-2">
                        <p className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">{edu.school}</p>
                        <p className="text-sm font-medium text-muted-foreground/80 uppercase tracking-widest">{edu.location}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
