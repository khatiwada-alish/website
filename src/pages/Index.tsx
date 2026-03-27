import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import WelcomeScreen from "@/components/WelcomeScreen";
import StarBackground from "@/components/StarBackground";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <>
      {/* Welcome Screen - only shown on first load */}
      {showWelcome && <WelcomeScreen onWelcomeComplete={handleWelcomeComplete} />}

      {/* Cosmic background */}
      <StarBackground />

      {/* Main content */}
      <motion.div
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Experience />
        <Contact />
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
