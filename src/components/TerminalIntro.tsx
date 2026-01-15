import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOOT_SEQUENCE } from '../data/content';

interface TerminalIntroProps {
  onComplete: () => void;
}

export default function TerminalIntro({ onComplete }: TerminalIntroProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    BOOT_SEQUENCE.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, item.text]);
        
        if (index === BOOT_SEQUENCE.length - 1) {
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 800);
          }, 600);
        }
      }, item.delay);
      timeouts.push(timeout);
    });

    // Cursor blink
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
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#0a0a0a] flex items-center justify-center p-4 sm:p-8"
        >
          <div className="w-full max-w-3xl">
            {/* Terminal Window */}
            <div className="bg-[#1a1a1a] rounded-lg border border-zinc-800 shadow-2xl overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#252525] border-b border-zinc-800">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-zinc-400 font-mono">abhishek@portfolio ~ bash</span>
              </div>

              {/* Terminal Content */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm min-h-[400px] sm:min-h-[500px] overflow-hidden">
                {lines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.1 }}
                    className={`whitespace-pre ${
                      line.includes('[OK]') 
                        ? 'text-terminal-green' 
                        : line.includes('🚀') 
                          ? 'text-terminal-amber font-semibold'
                          : 'text-zinc-300'
                    }`}
                  >
                    {line}
                  </motion.div>
                ))}
                
                {/* Blinking Cursor */}
                <span className={`inline-block w-2 h-4 bg-terminal-green ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            {/* Skip hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ delay: 1 }}
              className="text-center text-zinc-500 text-sm mt-4 font-mono"
            >
              tap anywhere to skip
            </motion.p>
          </div>

          {/* Skip on click */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => {
              setIsComplete(true);
              onComplete();
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
