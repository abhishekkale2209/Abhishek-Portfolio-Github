import { motion } from 'framer-motion';
import Section from '../components/Section';
import { SKILLS } from '../data/content';

const ICONS: Record<string, string> = {
  "Programming & Data": "💻",
  "Cloud & Systems": "☁️",
  "Analytics & BI": "📊",
  "Consulting & Strategy": "🎯",
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technical and professional competencies">
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([category, skills], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">{ICONS[category]}</span>
              <h3 className="text-lg font-semibold text-white">{category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 + index * 0.03 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
