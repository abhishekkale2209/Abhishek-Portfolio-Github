import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import { EXPERIENCE, INTERNSHIPS } from '../data/content';

export default function Experience() {
  const [selected, setSelected] = useState<typeof EXPERIENCE[0] | null>(null);

  return (
    <Section id="experience" title="Experience" subtitle="My professional journey">
      <div className="space-y-6">
        {EXPERIENCE.map((exp) => (
          <motion.div
            key={exp.id}
            whileHover={{ scale: 1.01 }}
            onClick={() => setSelected(exp)}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 cursor-pointer hover:border-blue-500/50 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                <p className="text-blue-400">{exp.role}</p>
              </div>
              <div className="flex gap-4 text-sm text-zinc-500 mt-2 sm:mt-0">
                <span className="flex items-center gap-1"><Calendar size={14} /> {exp.duration}</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {exp.tech.slice(0, 5).map((t) => (
                <span key={t} className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">{t}</span>
              ))}
              {exp.tech.length > 5 && <span className="text-zinc-500 text-xs">+{exp.tech.length - 5}</span>}
            </div>
          </motion.div>
        ))}

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Internships & Research</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {INTERNSHIPS.map((intern) => (
            <motion.div 
              key={intern.id} 
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-blue-500/50 transition-all"
            >
              <h4 className="font-semibold text-white">{intern.company}</h4>
              <p className="text-blue-400 text-sm mb-2">{intern.role}</p>
              <p className="text-zinc-400 text-sm mb-3">{intern.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {intern.tech.map((t) => (
                  <span key={t} className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded">{t}</span>
                ))}
              </div>
              {intern.publication && (
                <a
                  href={intern.publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-500/10 text-blue-400 text-sm rounded-lg border border-blue-500/20 hover:bg-blue-500/20 transition-all"
                >
                  <ExternalLink size={14} />
                  {intern.publication.title} ({intern.publication.publisher})
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

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
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selected.company}</h3>
                  <p className="text-blue-400">{selected.role}</p>
                </div>
                <button onClick={() => setSelected(null)} className="text-zinc-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase mb-2">Challenge</h4>
                  <p className="text-zinc-300">{selected.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase mb-2">Approach</h4>
                  <p className="text-zinc-300">{selected.approach}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase mb-2">Outcome</h4>
                  <p className="text-zinc-300">{selected.outcome}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-zinc-500 uppercase mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-lg border border-blue-500/20">{t}</span>
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
