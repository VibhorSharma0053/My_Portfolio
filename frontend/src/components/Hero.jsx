import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -200]);

  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Problem Solver",
    "AI Enthusiast",
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <ParticleBackground />

      <motion.div className="absolute inset-0" style={{ y: y1 }}>
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse top-20 -left-20"></div>
      </motion.div>
      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse bottom-20 -right-20"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          className="mb-8 inline-block"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            delay: 0.2,
          }}
        >
          <motion.div
            className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-1"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
              <motion.span
                className="text-5xl font-bold text-purple-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                VS
              </motion.span>
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Vibhor Sharma
        </motion.h1>

        <motion.div
          className="text-2xl md:text-4xl text-gray-300 mb-8 h-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-light">I'm a </span>
          <span className="font-bold text-purple-400">{text}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.div>

        <motion.p
          className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Passionate about building scalable systems and user-focused
          applications with modern technologies
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <motion.a
            href="mailto:vibhorsharma0053@gmail.com"
            className="group px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold flex items-center gap-2"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(168, 85, 247, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {[
            { icon: Github, href: "https://github.com/VibhorSharma0053" },
            {
              icon: Linkedin,
              href: "https://linkedin.com/in/vibhor-sharma-701ab0259/",
            },
            { icon: Mail, href: "mailto:vibhorsharma0053@gmail.com" },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-purple-400" />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
