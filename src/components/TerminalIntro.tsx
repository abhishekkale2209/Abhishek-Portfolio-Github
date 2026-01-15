import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_SEQUENCE = [
  { text: "GRUB Loading abhishek.io kernel...", delay: 0 },
  { text: "", delay: 600 },
  { text: "[    0.001] Initializing Abhishek Kale v2.0...", delay: 1200 },
  { text: "[    0.124] Loading core modules:", delay: 2000 },
  { text: "            ├── software-engineering.ko .............. [OK]", delay: 2600 },
  { text: "            │   └── Linux, Azure, VMware, RedHat", delay: 3000 },
  { text: "            ├── data-analytics.ko .................... [OK]", delay: 3600 },
  { text: "            ├── business-strategy.ko ................. [OK]", delay: 4200 },
  { text: "            └── consulting.ko ........................ [OK]", delay: 4800 },
  { text: "", delay: 5400 },
  { text: "[    1.205] Mounting experience:", delay: 6000 },
  { text: "            ├── /avaya ($500M project) ............... [OK]", delay: 6600 },
  { text: "            ├── /footfallcam (500+ accounts) ......... [OK]", delay: 7200 },
  { text: "            │   └── Odoo, SQL, Python, Databricks", delay: 7600 },
  { text: "            ├── /lloyds-metals (Steel Analytics) ..... [OK]", delay: 8200 },
  { text: "            │   └── SQL, Python, Power BI", delay: 8600 },
  { text: "            └── /infinite (500+ Avaya customers) ..... [OK]", delay: 9200 },
  { text: "                └── KVM, Docker, K8s, Grafana, Spring", delay: 9600 },
  { text: "", delay: 10200 },
  { text: "[    2.500] Loading internships:", delay: 10800 },
  { text: "            ├── /cdac-india .......................... [OK]", delay: 11400 },
  { text: "            │   └── Unity3D, C#, ML, Android, AR, VR", delay: 11800 },
  { text: "            └── /makois .............................. [OK]", delay: 12400 },
  { text: "                └── NLP, BERT, GPT, ML, AI", delay: 12800 },
  { text: "", delay: 13400 },
  { text: "[    3.891] Fetching github.com/abhishekkale2209...", delay: 14000 },
  { text: "            ├── Portfolio Projects ................... [OK]", delay: 14600 },
  { text: "            └── Open Source Contributions ............ [OK]", delay: 15200 },
  { text: "", delay: 15800 },
  { text: "[    4.500] System ready. Welcome to abhishek.io 🚀", delay: 16400 },
];

interface Props {
  onComplete: () => void;
}

export default function TerminalIntro({ onComplete }: Props) {
  const [lines, setLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    BOOT_SEQUENCE.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, item.text]);
        
        if (index === BOOT_SEQUENCE.length - 1) {
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800);
          }, 1000);
        }
      }, item.delay);
      timeouts.push(timeout);
    });

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      timeouts.forEach(clearTimeout);
      clearInterval(cursorInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
          onClick={() => { setIsComplete(true); onComplete(); }}
        >
          <div className="w-full max-w-3xl">
            <div className="bg-zinc-900 rounded-lg border border-zinc-700 overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-zinc-400 font-mono">abhishek@portfolio ~ bash</span>
              </div>

              {/* Terminal Content */}
              <div className="p-4 font-mono text-xs sm:text-sm min-h-[450px] overflow-hidden">
                {lines.map((line, index) => (
                  <div
                    key={index}
                    className={`whitespace-pre ${
                      line.includes('[OK]') 
                        ? 'text-green-400' 
                        : line.includes('🚀') 
                          ? 'text-yellow-400 font-semibold'
                          : line.includes('└──') || line.includes('│')
                            ? 'text-zinc-500'
                            : 'text-zinc-300'
                    }`}
                  >
                    {line}
                  </div>
                ))}
                <span className={`inline-block w-2 h-4 bg-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            <p className="text-center text-zinc-500 text-sm mt-4 font-mono">
              tap anywhere to skip
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
