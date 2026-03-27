import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" distance={80} duration={0.9}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                Certifications
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl font-medium">
                Professional development and validated expertise in technical domains.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} direction="up" distance={40} className="max-w-4xl mx-auto">
          <motion.div
            className="p-10 border border-white/10 bg-[#0a0a0a] hover:bg-white/5 transition-all group shimmer"
            whileHover={{ scale: 1.02, borderColor: "rgba(232,28,28,0.4)" }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
              <motion.div
                className="p-6 border border-white/10 group-hover:border-primary transition-colors bg-black"
                whileHover={{ rotate: 8, scale: 1.1 }}
              >
                <ShieldCheck className="w-12 h-12 text-primary" />
              </motion.div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-2 font-mono">Red Hat Certified</p>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">RH104 – Red Hat System Administration</h3>
                <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                  Linux system administration fundamentals including user management, file permissions, networking, and service configuration. Proven skills in managing enterprise-grade Linux systems.
                </p>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
