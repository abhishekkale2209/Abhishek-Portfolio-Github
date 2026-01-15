import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, ChevronRight } from 'lucide-react';
import Section from '../components/Section';
import { EXPERIENCE } from '../data/content';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  problem: string;
  approach: string;
  outcome: string;
  tech: string[];
}

export default function Experience() {
  const [selected, setSelected] = useState<ExperienceItem | null>(null);

  return (
    <Section id="experience" title="Experience" subtitle="My professional journey">
      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-zinc-800 -translate-x-1/2" />

        {EXPERIENCE.map((exp, index) => (
          <div
            key={exp.id}
            className={`relative flex items-start gap-6 mb-12 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-zinc-900 -translate-x-1/2 z-10" />

            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelected(exp)}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 cursor-pointer hover:border-blue-500/50 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                    <p className="text-blue-400">{exp.role}</p>
                  </div>
                  <ChevronRight className="text-zinc-500" size={20} />
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-zinc-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded"
                    >
                      {t}
                    </span>
                  ))}
                  {exp.tech.length > 4 && (
                    <span className="px-2 py-1 text-zinc-500 text-xs">
                      +{exp.tech.length - 4} more
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selected.company}</h3>
                  <p className="text-blue-400 text-lg">{selected.role}</p>
                  <div className="flex gap-4 text-sm text-zinc-400 mt-2">
                    <span>{selected.duration}</span>
                    <span>{selected.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    The Challenge
                  </h4>
                  <p className="text-zinc-300">{selected.problem}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    My Approach
                  </h4>
                  <p className="text-zinc-300">{selected.approach}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    Outcome & Impact
                  </h4>
                  <p className="text-zinc-300">{selected.outcome}</p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 bg-blue-500/10 text-blue-400 text-sm rounded-lg border border-blue-500/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
