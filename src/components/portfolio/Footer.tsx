import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-20 md:py-28">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal direction="up" distance={40} duration={0.8}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <motion.div
              className="text-center md:text-left group"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 group-hover:text-accent transition-colors duration-300">
                ALISH<span className="text-primary">.</span>
              </h2>
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-muted-foreground/80 group-hover:text-accent transition-colors duration-300">
                Software Engineer & Developer
              </p>
            </motion.div>

            <div className="flex flex-col items-center md:items-end gap-8 text-center md:text-right">
              <div className="flex gap-8">
                <motion.a
                  href="https://github.com/alish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-300 p-3 rounded-lg bg-white/5 hover:bg-primary/10"
                  whileHover={{ scale: 1.35, y: -6 }}
                  whileTap={{ scale: 0.85 }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/alish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent transition-colors duration-300 p-3 rounded-lg bg-white/5 hover:bg-accent/10"
                  whileHover={{ scale: 1.35, y: -6 }}
                  whileTap={{ scale: 0.85 }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="mailto:khatiwadaalish0@gmail.com"
                  className="text-white hover:text-primary transition-colors duration-300 p-3 rounded-lg bg-white/5 hover:bg-primary/10"
                  whileHover={{ scale: 1.35, y: -6 }}
                  whileTap={{ scale: 0.85 }}
                >
                  <Mail size={24} />
                </motion.a>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground/70">
                  Built with <span className="text-accent">React</span>, <span className="text-primary">Framer Motion</span> & <span className="text-accent">Tailwind</span>
                </p>
                <motion.p
                  className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground/60"
                  whileHover={{ color: "rgba(255, 184, 28, 0.8)" }}
                >
                  © {new Date().getFullYear()} Alish Khatiwada. All rights reserved.
                </motion.p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
