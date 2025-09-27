import { motion } from 'motion/react';
import { Users, FileText, Building, Code, Database, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';

const features = [
  {
    icon: Users,
    title: "Startup Networking Hub",
    description: "Connect with 1,000+ startups, collaborate on projects, and grow together.",
    color: "from-blue-500 to-cyan-500",
    stats: "1,247+ Active Founders"
  },
  {
    icon: Building,
    title: "Verified Investors",
    description: "Apply to government-verified investors like job postings and pitch instantly.",
    color: "from-green-500 to-emerald-500",
    stats: "500+ Active Investors"
  },
  {
    icon: FileText,
    title: "Pitch Decks & Legal Templates",
    description: "Access real pitch decks and download ready-made legal agreements in minutes.",
    color: "from-purple-500 to-pink-500",
    stats: "150+ Templates"
  },
  {
    icon: Code,
    title: "Open-Source Tools",
    description: "Save money with curated open-source tools and free resources for your product.",
    color: "from-orange-500 to-red-500",
    stats: "₹28L+ Saved/Year"
  },
  {
    icon: Database,
    title: "Resource Bank",
    description: "Access 10,000+ verified contacts of investors and founders with lead-gen credits.",
    color: "from-teal-500 to-cyan-500",
    stats: "10,000+ Contacts"
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    description: "Real-time analytics on which startups are booming sector-wise across India.",
    color: "from-indigo-500 to-purple-500",
    stats: "Live Market Data"
  }
];

export function FeaturesGrid() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Everything You Need to Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your all-in-one growth platform with the tools, network, and resources to build faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-white/80 backdrop-blur-sm rounded-2xl border hover:shadow-2xl transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.1 }
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
              }}
              viewport={{ once: true }}
            >
              {/* Animated Icon */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Stats Badge */}
              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 bg-gradient-to-r ${feature.color} bg-opacity-10 text-sm rounded-full border`}>
                  {feature.stats}
                </span>
                <motion.div
                  className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2 }}
                >
                  <span className="text-primary">→</span>
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 text-lg transform hover:scale-105 transition-all duration-200"
          >
            Explore All Features
          </Button>
        </motion.div>
      </div>
    </section>
  );
}