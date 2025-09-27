import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Rocket, Users, Building, Code } from 'lucide-react';
import { Button } from './ui/button';

const cyclingWords = ['Network', 'Fundraise', 'Hire', 'Scale'];
const floatingIcons = [Rocket, Users, Building, Code];

export function CompactHero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/20 overflow-hidden flex items-center justify-center">
      {/* Floating Icons */}
      {floatingIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto px-4 z-10">
        <motion.h1
          className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Powering Founders to{' '}
          <motion.span
            key={currentWordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            {cyclingWords[currentWordIndex]}
          </motion.span>{' '}
          Faster
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your all-in-one growth platform for startup founders. Network, fundraise, hire, and scale.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200"
          >
            Join 10,000+ Founders
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10 px-8 py-3 text-lg"
          >
            Watch Demo
          </Button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: "10K+", label: "Founders" },
            { value: "₹500Cr+", label: "Funding" },
            { value: "1.5K+", label: "Startups" },
            { value: "98%", label: "Success" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}