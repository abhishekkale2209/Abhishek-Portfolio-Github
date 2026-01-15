import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Section from '../components/Section';
import { PROFILE } from '../data/content';

export default function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's build something impactful together">
      <div className="max-w-xl mx-auto">
        <div className="space-y-4">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all group"
          >
            <Github className="text-zinc-400 group-hover:text-white" size={24} />
            <div>
              <p className="text-white font-medium">GitHub</p>
              <p className="text-sm text-zinc-500">@abhishekkale2209</p>
            </div>
          </a>

          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all group"
          >
            <Linkedin className="text-zinc-400 group-hover:text-white" size={24} />
            <div>
              <p className="text-white font-medium">LinkedIn</p>
              <p className="text-sm text-zinc-500">Abhishek Kale</p>
            </div>
          </a>

          <a
            href={`mailto:${PROFILE.email}`}
            className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-blue-500/50 transition-all group"
          >
            <Mail className="text-zinc-400 group-hover:text-white" size={24} />
            <div>
              <p className="text-white font-medium">Email</p>
              <p className="text-sm text-zinc-500">{PROFILE.email}</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 bg-zinc-900 border border-zinc-800 rounded-xl">
            <Phone className="text-zinc-400" size={24} />
            <div>
              <p className="text-white font-medium">Phone</p>
              <p className="text-sm text-zinc-500">{PROFILE.phone.join(' | ')}</p>
            </div>
          </div>
        </div>

        <p className="text-center text-zinc-500 text-sm mt-12">
          © {new Date().getFullYear()} Abhishek Kale. Built with React & Tailwind CSS.
        </p>
      </div>
    </Section>
  );
}
