import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/ScrollReveal";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "DgglJSu7nnSLnQb-f";

export default function Contact() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast({
        title: "Email setup missing",
        description: "Set your EmailJS service, template, and public key in environment variables.",
      });
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
          from_name: name,
          from_email: email,
          reply_to: email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon." });
      form.reset();
    } catch {
      toast({
        title: "Failed to send",
        description: "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 md:py-40 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <ScrollReveal direction="up" distance={80} duration={0.9}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
              <h2 className="text-6xl sm:text-7xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Get In<br />Touch
              </h2>
              <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-[1fr_550px] gap-20 md:gap-32 max-w-6xl mx-auto">
          {/* Info */}
          <StaggerContainer className="space-y-16" staggerDelay={0.12}>
            <StaggerItem direction="left" distance={50}>
              <div className="space-y-16">
                <motion.div className="space-y-5" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
                  <p className="text-primary font-black uppercase tracking-[0.25em] text-[9px] px-3 py-1 bg-primary/10 rounded-full inline-block">Email</p>
                  <a href="mailto:khatiwadaalish0@gmail.com" className="text-2xl md:text-3xl font-black text-white hover:text-accent transition-colors duration-300 block break-all underline-draw">
                    khatiwadaalish0@gmail.com
                  </a>
                </motion.div>
                <div className="grid sm:grid-cols-2 gap-16">
                  <motion.div className="space-y-5" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
                    <p className="text-primary font-black uppercase tracking-[0.25em] text-[9px] px-3 py-1 bg-primary/10 rounded-full inline-block">Location</p>
                    <p className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">Bhaktapur, Nepal</p>
                  </motion.div>
                  <motion.div className="space-y-5" whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}>
                    <p className="text-accent font-black uppercase tracking-[0.25em] text-[9px] px-3 py-1 bg-accent/10 rounded-full inline-block">Social</p>
                    <div className="flex gap-6">
                      <motion.a href="https://github.com/khatiwada-alish" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors" whileHover={{ scale: 1.25, rotate: 12 }} whileTap={{ scale: 0.9 }}>
                        <Github size={28} />
                      </motion.a>
                      <motion.a href="https://www.linkedin.com/in/alish-khatiwada/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent transition-colors" whileHover={{ scale: 1.25, rotate: -12 }} whileTap={{ scale: 0.9 }}>
                        <Linkedin size={28} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Form */}
          <ScrollReveal direction="right" distance={60} delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-8 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 md:p-12 border border-white/10 shimmer rounded-lg shadow-2xl">
              <div className="space-y-4">
                <Label htmlFor="name" className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground">Full Name</Label>
                <Input id="name" name="name" placeholder="YOUR NAME" required className="bg-transparent border-white/20 rounded-lg h-14 text-white font-bold placeholder:text-white/15 focus:border-accent/50 transition-all duration-300 focus:shadow-lg focus:shadow-accent/20" />
              </div>
              <div className="space-y-4">
                <Label htmlFor="email" className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground">Email Address</Label>
                <Input id="email" name="email" type="email" placeholder="YOUR@EMAIL.COM" required className="bg-transparent border-white/20 rounded-lg h-14 text-white font-bold placeholder:text-white/15 focus:border-accent/50 transition-all duration-300 focus:shadow-lg focus:shadow-accent/20" />
              </div>
              <div className="space-y-4">
                <Label htmlFor="message" className="text-[9px] font-black uppercase tracking-[0.25em] text-muted-foreground">Message</Label>
                <Textarea id="message" name="message" placeholder="YOUR MESSAGE..." rows={6} required className="bg-transparent border-white/20 rounded-lg text-white font-bold placeholder:text-white/15 focus:border-accent/50 transition-all duration-300 focus:shadow-lg focus:shadow-accent/20 resize-none" />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }}>
                <Button type="submit" className="w-full h-16 bg-gradient-to-r from-primary to-primary/80 text-white font-black uppercase tracking-[0.15em] rounded-lg hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group shadow-xl hover:shadow-2xl disabled:opacity-50 flex items-center justify-center gap-2" disabled={sending}>
                  {sending ? "SENDING..." : (
                    <>
                      SEND MESSAGE <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
