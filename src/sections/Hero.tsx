import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { PROFILE } from '../data/content';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-4 pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-blue-400 text-sm mb-4"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-bold text-white mb-6"
        >
          {PROFILE.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl sm:text-2xl text-zinc-300 mb-4"
        >
          {PROFILE.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base text-zinc-400 mb-10 max-w-2xl mx-auto"
        >
          {PROFILE.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#experience" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center gap-2">
            View My Work <ArrowDown size={18} />
          </a>
          <a href="/Abhishek_Kale_Resume.pdf" className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-white rounded-lg flex items-center gap-2">
            <Download size={18} /> Resume
          </a>
          <a href="#contact" className="px-6 py-3 text-zinc-400 hover:text-white flex items-center gap-2">
            <Mail size={18} /> Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="text-zinc-500" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
