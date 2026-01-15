import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import Section from '../components/Section';
import { VISION } from '../data/content';

export default function Vision() {
  return (
    <Section id="vision">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-500/20 rounded-2xl p-8 sm:p-12 text-center"
      >
        <Rocket className="mx-auto text-blue-400 mb-4" size={40} />
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          {VISION.headline}
        </h2>
        <p className="text-zinc-300 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
          {VISION.text}
        </p>
      </motion.div>
    </Section>
  );
}
