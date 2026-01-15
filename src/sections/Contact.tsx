import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Mail } from 'lucide-react';
import Section from '../components/Section';
import { PROFILE } from '../data/content';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For static site, open mailto
    window.location.href = `mailto:${PROFILE.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's build something impactful together">
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
              placeholder="your@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
              placeholder="Your message..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Send Message
            <Send size={18} />
          </button>
        </motion.form>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <p className="text-zinc-400 mb-8">
            Prefer to connect directly? Reach out through any of these platforms.
          </p>

          <div className="space-y-4">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all group"
            >
              <Github className="text-zinc-400 group-hover:text-white transition-colors" size={24} />
              <div>
                <p className="text-white font-medium">GitHub</p>
                <p className="text-sm text-zinc-500">@abhishekkale2209</p>
              </div>
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all group"
            >
              <Linkedin className="text-zinc-400 group-hover:text-white transition-colors" size={24} />
              <div>
                <p className="text-white font-medium">LinkedIn</p>
                <p className="text-sm text-zinc-500">Abhishek Kale</p>
              </div>
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all group"
            >
              <Mail className="text-zinc-400 group-hover:text-white transition-colors" size={24} />
              <div>
                <p className="text-white font-medium">Email</p>
                <p className="text-sm text-zinc-500">{PROFILE.email}</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-zinc-800 text-center">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Abhishek Kale. Built with React & Tailwind CSS.
        </p>
      </div>
    </Section>
  );
}
