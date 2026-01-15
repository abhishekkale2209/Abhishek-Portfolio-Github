import Section from '../components/Section';
import { ABOUT } from '../data/content';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid lg:grid-cols-3 gap-10">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <p className="text-xl text-zinc-300 font-medium leading-relaxed">
            {ABOUT.intro}
          </p>
          <div className="text-zinc-400 leading-relaxed whitespace-pre-line">
            {ABOUT.body}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          {ABOUT.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center lg:text-left"
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
