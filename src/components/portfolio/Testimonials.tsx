import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "Alish is a fast learner and excellent problem solver. His robotics project stood out among the competition entries.",
    author: "Robotics Mentor",
    role: "Competition Judge",
  },
  {
    quote: "A dedicated student who consistently shows curiosity and initiative in learning new technologies.",
    author: "College Faculty",
    role: "Samriddhi College",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" distance={80} duration={0.9}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                What<br />People Say
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium">
                Feedback from mentors and fellow students on my journey through technology and innovation.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto" staggerDelay={0.2}>
          {testimonials.map((t) => (
            <StaggerItem key={t.author} direction="up" distance={40}>
              <motion.div
                className="p-12 border border-white/10 bg-[#0a0a0a] group hover:bg-white/5 transition-all text-left h-full"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div whileHover={{ rotate: 12 }}>
                  <Quote className="w-12 h-12 text-primary/20 mb-8 transition-colors group-hover:text-primary" />
                </motion.div>
                <p className="text-2xl font-bold text-white leading-relaxed mb-8 uppercase tracking-tight">"{t.quote}"</p>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-black text-primary uppercase tracking-[0.2em]">{t.author}</p>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
