import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="text-center py-8 px-4 bg-slate-900 border-t border-purple-500/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.p className="text-gray-400 mb-2" whileHover={{ scale: 1.05 }}>
        © 2025 Vibhor Sharma. Built with React & Tailwind CSS
      </motion.p>
      <motion.p
        className="text-gray-500 text-sm"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Designed & Developed with 💜
      </motion.p>
    </motion.footer>
  );
};
export default Footer;
