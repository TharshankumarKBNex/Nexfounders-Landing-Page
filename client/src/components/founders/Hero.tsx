import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Rocket, Laptop, Handshake, TrendingUp, Users, Code } from 'lucide-react';
import { Button } from './ui/button';

const floatingIcons = [
  { Icon: Laptop, delay: 0 },
  { Icon: Rocket, delay: 0.5 },
  { Icon: Handshake, delay: 1 },
  { Icon: TrendingUp, delay: 1.5 },
  { Icon: Users, delay: 2 },
  { Icon: Code, delay: 2.5 },
];

const cyclingWords = ['Network', 'Fundraise', 'Hire', 'Scale'];

export function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/20 overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay }, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/30"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay,
          }}
        >
          <Icon size={48} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Powering Founders to Build,{' '}
            <span className="inline-block">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              >
                {cyclingWords[currentWordIndex]}
              </motion.span>
            </span>{' '}
            & Scale Faster
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your all-in-one growth platform for startup founders.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200"
            >
              Join Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/30 hover:bg-primary/10 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200"
            >
              Explore Features
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}