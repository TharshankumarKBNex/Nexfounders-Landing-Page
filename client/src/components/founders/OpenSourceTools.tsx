import { motion } from 'motion/react';
import { Code, Database, Shield, Cloud, Smartphone, BarChart3 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Tool {
  name: string;
  category: string;
  icon: React.ElementType;
  color: string;
  description: string;
  saved: string;
}

export function OpenSourceTools() {
  const tools: Tool[] = [
    { name: "React", category: "Frontend", icon: Code, color: "from-blue-500 to-cyan-500", description: "UI Library", saved: "₹2L/year" },
    { name: "PostgreSQL", category: "Database", icon: Database, color: "from-blue-600 to-indigo-600", description: "Database", saved: "₹5L/year" },
    { name: "Docker", category: "DevOps", icon: Cloud, color: "from-blue-400 to-blue-600", description: "Containerization", saved: "₹3L/year" },
    { name: "Supabase", category: "Backend", icon: Shield, color: "from-green-500 to-emerald-500", description: "BaaS Platform", saved: "₹4L/year" },
    { name: "Flutter", category: "Mobile", icon: Smartphone, color: "from-cyan-500 to-blue-500", description: "Cross-platform", saved: "₹6L/year" },
    { name: "Apache Superset", category: "Analytics", icon: BarChart3, color: "from-orange-500 to-red-500", description: "BI Tool", saved: "₹8L/year" },
  ];

  const orbitRadius = 120;
  const centerX = 50;
  const centerY = 50;

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-orange/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Open-Source Tools & Software
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Save money by accessing curated open-source tools and free resources to boost your product.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652111865960-15f4a46a7688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwc291cmNlJTIwY29kaW5nJTIwdG9vbHN8ZW58MXx8fHwxNzU4NzMyNDYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Open source coding tools"
                className="w-full h-full object-cover opacity-20"
              />
            </div>

            {/* Central Product Mockup */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity },
                }}
              >
                <Code className="w-16 h-16 text-white" />
              </motion.div>
            </div>

            {/* Orbiting Tools */}
            {tools.map((tool, index) => {
              const angle = (index / tools.length) * 2 * Math.PI;
              const x = centerX + (orbitRadius / 400) * 100 * Math.cos(angle);
              const y = centerY + (orbitRadius / 400) * 100 * Math.sin(angle);

              return (
                <motion.div
                  key={tool.name}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5,
                  }}
                >
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center shadow-lg cursor-pointer`}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 0,
                      zIndex: 10,
                    }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      y: {
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      },
                      hover: { duration: 0.2 }
                    }}
                  >
                    <tool.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Tooltip */}
                  <motion.div
                    className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg whitespace-nowrap opacity-0 pointer-events-none"
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="text-xs font-medium">{tool.name}</div>
                    <div className="text-xs text-muted-foreground">{tool.category}</div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6">Curated Tool Categories</h3>
            
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  className="p-4 border rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 bg-gradient-to-r ${tool.color} rounded-lg flex items-center justify-center`}>
                        <tool.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium">{tool.name}</h4>
                        <p className="text-sm text-muted-foreground">{tool.description} • {tool.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-600">{tool.saved}</div>
                      <div className="text-xs text-muted-foreground">saved</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Total Savings */}
            <motion.div
              className="p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl text-orange-600 mb-2">₹28 Lakhs+</div>
                <div className="text-muted-foreground">Total Potential Savings per Year</div>
                <div className="text-sm text-orange-600 mt-1">
                  Access 500+ curated open-source tools
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}