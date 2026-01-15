import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Section from '../components/Section';
import { PROJECTS } from '../data/content';

const CATEGORIES = ['All', 'Software', 'Data', 'Consulting'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <Section id="projects" title="Projects" subtitle="Selected work and initiatives">
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === cat
                ? 'bg-blue-600 text-white'
                : 'bg-zinc-800 text-zinc-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-blue-500/50 transition-all group"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
                {project.category}
              </span>
              <div className="flex gap-2">
                <a
                  href={project.github}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <Github size={18} />
                </a>
                <a
                  href="#"
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-zinc-400 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
