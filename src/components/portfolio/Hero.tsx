import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.25 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
};

const lineDraw = {
  hidden: { scaleY: 0, opacity: 0 },
  show: { scaleY: 1, opacity: 1, transition: { duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "I build beautiful & functional digital experiences";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.substring(0, i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 25);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pt-20 md:pt-24">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center max-w-6xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="w-full"
        >
          {/* Tag line */}
          <motion.p
            variants={fadeUp}
            className="text-primary font-black uppercase tracking-[0.35em] text-xs md:text-sm mb-8 md:mb-10"
          >
            Software Engineer & Developer
          </motion.p>

          {/* Name – massive type with clip reveal */}
          <motion.h1
            variants={fadeScale}
            className="text-5xl sm:text-7xl md:text-[10vw] lg:text-[80px] font-black leading-[0.95] md:leading-[0.95] uppercase tracking-tighter mb-10 md:mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70"
          >
            Alish<br />Khatiwada
          </motion.h1>

          {/* Animated description with typing effect */}
          <motion.div
            variants={fadeUp}
            className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-14 md:mb-16 font-medium leading-relaxed h-auto md:min-h-12"
          >
            <span className="inline-block">
              {typedText}
              <motion.span
                className="ml-1 inline-block"
                animate={{ opacity: [0, 1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span className="text-accent">|</span>
              </motion.span>
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-sm md:text-base max-w-3xl mx-auto mb-14 md:mb-16 text-muted-foreground/80 leading-relaxed"
          >
            Creating digital products that blend design excellence with cutting-edge technology
          </motion.p>

          {/* Buttons with enhanced hover effects */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 md:gap-8 justify-center items-center mb-16">
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(232, 28, 28, 0.5)" }}
              whileTap={{ scale: 0.92 }}
            >
              <Button
                size="lg"
                className="px-10 md:px-12 py-6 md:py-7 text-base md:text-lg font-black bg-primary text-white hover:bg-primary/90 transition-all rounded-lg shadow-xl red-glow"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                VIEW PROJECTS
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.06, boxShadow: "0 0 30px rgba(255, 184, 28, 0.5)" }}
              whileTap={{ scale: 0.92 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="px-10 md:px-12 py-6 md:py-7 text-base md:text-lg font-black border-2 border-accent text-accent hover:bg-accent/10 transition-all rounded-lg shadow-lg"
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                GET IN TOUCH
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator with animated line */}
          <motion.div
            className="flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.span
              className="text-[9px] uppercase tracking-widest text-muted-foreground font-black"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              Explore My Work
            </motion.span>
            <motion.div
              className="w-[1px] h-10 bg-gradient-to-b from-accent via-accent to-transparent origin-top"
              variants={lineDraw}
              initial="hidden"
              animate="show"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
