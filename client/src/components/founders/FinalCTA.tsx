import { motion } from 'motion/react';
import { Rocket, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function FinalCTA() {
  const stars = Array.from({ length: 100 }, (_, i) => i);

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-primary via-blue-900 to-purple-900 overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Rocket Animation */}
        <motion.div
          className="mb-8"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto relative"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Rocket className="w-12 h-12 text-white" />
            
            {/* Rocket Trail */}
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              animate={{
                height: [20, 40, 20],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <div className="w-3 bg-gradient-to-b from-orange-400 to-transparent rounded-full"></div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl mb-6 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join Nexfounders.
          <br />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Build Smarter, Scale Faster.
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Join thousands of founders building the next generation of Indian startups.
          Everything you need to succeed, all in one platform.
        </motion.p>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black border-0 px-12 py-4 text-xl relative overflow-hidden group"
            >
              {/* Glowing Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-0 group-hover:opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
              
              <span className="relative z-10 flex items-center gap-2">
                Sign Up Free
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { value: "10,000+", label: "Active Founders" },
            { value: "₹500Cr+", label: "Funding Raised" },
            { value: "1,500+", label: "Startups Launched" },
            { value: "98%", label: "Success Rate" }
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl md:text-3xl text-yellow-400 mb-2">{metric.value}</div>
              <div className="text-blue-200 text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Launch Sequence */}
        <motion.div
          className="mt-16 text-blue-200 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀 Launching dreams, one startup at a time
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}