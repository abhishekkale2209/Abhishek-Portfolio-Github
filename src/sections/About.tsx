import Section from '../components/Section';
import { ABOUT } from '../data/content';

export default function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          <p className="text-xl text-zinc-300 font-medium">{ABOUT.intro}</p>
          <p className="text-zinc-400 whitespace-pre-line">{ABOUT.body}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
          {ABOUT.stats.map((stat, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center lg:text-left">
              <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
