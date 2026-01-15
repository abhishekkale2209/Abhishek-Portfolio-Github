import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import Section from '../components/Section';
import { EDUCATION, CERTIFICATIONS } from '../data/content';

export default function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
            <GraduationCap className="text-blue-400" size={24} />
            Education
          </h3>
          <div className="space-y-4">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                  <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-sm rounded">
                    {edu.result}
                  </span>
                </div>
                <p className="text-zinc-400 mb-2">{edu.institution}</p>
                <p className="text-sm text-zinc-500">{edu.focus}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="flex items-center gap-2 text-xl font-semibold text-white mb-6">
            <Award className="text-blue-400" size={24} />
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 hover:border-blue-500/50 transition-all"
              >
                <p className="text-sm text-zinc-300">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
