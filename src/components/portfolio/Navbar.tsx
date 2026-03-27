import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-black/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-8">
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-black text-white tracking-tighter uppercase hover:text-accent transition-colors duration-300"
        >
          ALISH<span className="text-primary">.</span>
        </motion.button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.href}
              onClick={() => handleClick(link.href)}
              active={activeSection === link.href.slice(1)}
              className="text-xs uppercase tracking-widest px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              {link.label}
            </NavLink>
          ))}
          <motion.div
            whileHover={{ scale: 1.08, boxShadow: "0 0 20px rgba(232, 28, 28, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="ml-4"
          >
            <Button
              size="sm"
              className="bg-white text-black font-black uppercase text-xs tracking-widest px-6 py-5 hover:bg-white/95 rounded-lg active:scale-95 transition-all duration-300 shadow-lg"
              onClick={() => handleClick("#contact")}
            >
              HIRE ME
            </Button>
          </motion.div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/[0.08]"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-4 items-center">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full"
                >
                  <NavLink
                    onClick={() => handleClick(link.href)}
                    active={activeSection === link.href.slice(1)}
                    className="w-full justify-center text-center text-lg uppercase tracking-[0.2em] py-4 rounded-lg transition-all duration-300 hover:bg-white/5"
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="w-full mt-4"
              >
                <Button
                  size="lg"
                  className="w-full bg-white text-black font-black uppercase tracking-widest rounded-lg mt-4 shadow-lg hover:bg-white/95 transition-all duration-300"
                  onClick={() => handleClick("#contact")}
                >
                  HIRE ME
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
