import { motion } from 'framer-motion';
import Section from '../components/Section';
import { SKILLS } from '../data/content';

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technical and professional competencies">
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([category, skills], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm rounded-lg hover:bg-blue-500/20 hover:text-blue-400 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
