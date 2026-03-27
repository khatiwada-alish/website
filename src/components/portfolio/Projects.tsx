import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Arduino Robotics Project",
    description: "Built and programmed a robotics system using Arduino and ESP32. Implemented sensors and microcontroller logic to complete competition tasks.",
    tech: ["Arduino", "ESP32", "C", "Sensors"],
    category: "hardware",
    github: "#",
    live: null,
    year: "2024",
    highlight: true,
  },
  {
    title: "Solana Devnet Wallet",
    description: "A browser-based wallet built for educational purposes to interact with the Solana blockchain. Generate wallets, view balance, and send transactions.",
    tech: ["HTML", "CSS", "JavaScript", "Solana Web3.js"],
    category: "web",
    github: "#",
    live: "#",
    year: "2024",
    highlight: false,
  },
  {
    title: "Linux Server Setup",
    description: "Configured a Linux server with Nginx, SSH, and deployment automation. Practiced system administration skills from RH104 certification.",
    tech: ["Linux", "Nginx", "SSH", "Bash"],
    category: "systems",
    github: "#",
    live: null,
    year: "2023",
    highlight: false,
  },
  {
    title: "Personal Automation Scripts",
    description: "Collection of automation scripts and small projects exploring Linux system operations, file management, and task scheduling.",
    tech: ["Python", "Bash", "Linux", "Git"],
    category: "systems",
    github: "#",
    live: null,
    year: "2023",
    highlight: false,
  },
];

const filters = ["all", "web", "hardware", "systems"];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
};

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [filter, setFilter] = useState("all");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-32 md:py-40 bg-black border-t border-white/5">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Selected<br />Works
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed">
                A collection of projects showcasing my journey through software development, hardware engineering, and systems administration.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              {filters.map((f) => (
                <motion.button
                  key={f}
                  onClick={() => setFilter(f)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-5 md:px-6 py-2 text-xs font-black uppercase tracking-widest transition-all border-b-2 rounded-lg duration-300 ${filter === f
                    ? "text-accent border-accent bg-accent/5"
                    : "text-muted-foreground border-transparent hover:text-white hover:border-primary hover:bg-white/5"
                    }`}
                >
                  {f}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Project List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
            className="divide-y divide-white/10"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title}
                  variants={rowVariants}
                  layout
                  exit={{ opacity: 0, y: -15, transition: { duration: 0.25 } }}
                  onHoverStart={() => setHovered(project.title)}
                  onHoverEnd={() => setHovered(null)}
                  className="group relative py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12 cursor-pointer overflow-hidden transition-all duration-300"
                >
                  {/* Hover BG sweep */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/[0.02] to-transparent pointer-events-none"
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: hovered === project.title ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  />

                  {/* Number */}
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/60 w-12 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Category pill */}
                  <motion.span
                    className="hidden md:block text-[9px] font-black uppercase tracking-widest text-accent w-20 flex-shrink-0 transition-all duration-300 px-3 py-1 rounded-full bg-accent/10"
                    whileHover={{ color: "#FFFFFF", backgroundColor: "rgba(232, 28, 28, 0.2)", textShadow: "0 0 15px rgba(255, 184, 28, 0.6)" }}
                  >
                    {project.category}
                  </motion.span>

                  {/* Title & description */}
                  <div className="flex-1 min-w-0 relative z-10">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.highlight && (
                        <motion.span
                          whileHover={{ scale: 1.12, boxShadow: "0 0 15px rgba(255, 184, 28, 0.5)" }}
                          className="hidden md:block text-[8px] font-black uppercase tracking-widest text-accent border border-accent px-3 py-1 rounded-full transition-all duration-300 bg-accent/5"
                        >
                          Featured
                        </motion.span>
                      )}
                    </div>

                    {/* Collapse/expand description on hover */}
                    <AnimatePresence>
                      {hovered === project.title && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="text-muted-foreground text-sm font-medium leading-relaxed overflow-hidden mb-3"
                        >
                          {project.description}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/70 px-2 py-1 bg-white/[0.03] rounded-md transition-all duration-300 group-hover:bg-white/[0.06] group-hover:text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Year */}
                  <span className="hidden md:block text-[11px] font-bold text-muted-foreground tracking-widest uppercase w-12 flex-shrink-0 text-right">
                    {project.year}
                  </span>

                  {/* Links */}
                  <div className="flex items-center gap-5 flex-shrink-0 relative z-10">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.2, rotate: 8, color: "#E81C1C" }}
                      whileTap={{ scale: 0.85 }}
                      className="text-white/40 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </motion.a>
                    {project.live ? (
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.2, rotate: -8, color: "#FFB81C" }}
                        whileTap={{ scale: 0.85 }}
                        className="text-white/40 hover:text-accent transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    ) : (
                      <span className="w-[20px]" />
                    )}
                    <motion.div
                      animate={{ x: hovered === project.title ? 0 : -10, opacity: hovered === project.title ? 1 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ArrowUpRight size={22} className="text-accent" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA */}
          <div className="flex justify-center mt-24">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="group px-12 md:px-16 py-7 md:py-8 text-base md:text-lg font-black uppercase tracking-widest border-2 border-white/30 rounded-lg hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
                asChild
              >
                <a href="https://github.com/alish" target="_blank" rel="noopener noreferrer">
                  More on GitHub{" "}
                  <motion.span
                    className="ml-3 inline-block"
                    animate={{ x: 0 }}
                    whileHover={{ x: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
