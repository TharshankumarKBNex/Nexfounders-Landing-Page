import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Code, BarChart3, Star, TrendingUp, DollarSign, Download,
  ArrowRight, Sparkles, Target, Brain, Lightbulb, Clock,
  Shield, Eye, MessageCircle, Filter, Award, CheckCircle,
  Database, Search, RefreshCw, Zap, Globe, Building
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Due Diligence Style - Open Source Tools Library
export function DueDiligenceOpenSourceTools() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [savingsCounter, setSavingsCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSavingsCounter(prev => (prev + 1) % 50);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const toolCategories = [
    {
      category: "Development & Infrastructure",
      toolCount: "150+",
      totalSavings: "₹12L/year",
      description: "Complete development stack from IDEs to deployment platforms",
      icon: Code,
      color: "from-green-500 to-emerald-600",
      bgImage: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      topTools: [
        { name: "VS Code", description: "Free IDE with extensions", saving: "₹80k/year", users: "50M+" },
        { name: "Docker", description: "Containerization platform", saving: "₹2L/year", users: "13M+" },
        { name: "GitHub", description: "Version control & collaboration", saving: "₹1.5L/year", users: "100M+" },
        { name: "PostgreSQL", description: "Open-source database", saving: "₹3L/year", users: "1M+" }
      ],
      features: ["Full Development Stack", "Cloud-Native Tools", "CI/CD Pipelines", "Database Solutions"]
    },
    {
      category: "Analytics & Business Intelligence",
      toolCount: "80+",
      totalSavings: "₹8L/year",
      description: "Data analytics, visualization, and business intelligence tools",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      topTools: [
        { name: "Google Analytics", description: "Web analytics platform", saving: "₹2L/year", users: "29M+" },
        { name: "Metabase", description: "Open-source BI tool", saving: "₹3L/year", users: "40k+" },
        { name: "Apache Superset", description: "Data visualization platform", saving: "₹2.5L/year", users: "100k+" },
        { name: "Plausible", description: "Privacy-focused analytics", saving: "₹0.5L/year", users: "10k+" }
      ],
      features: ["Real-time Analytics", "Custom Dashboards", "Data Visualization", "Privacy Compliant"]
    },
    {
      category: "Design & Creative",
      toolCount: "120+",
      totalSavings: "₹6L/year",
      description: "Design tools for UI/UX, branding, and creative content",
      icon: Star,
      color: "from-purple-500 to-pink-600",
      bgImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      topTools: [
        { name: "Figma", description: "Collaborative design platform", saving: "₹1.5L/year", users: "4M+" },
        { name: "GIMP", description: "Image editing software", saving: "₹2L/year", users: "2M+" },
        { name: "Canva", description: "Graphic design platform", saving: "₹1L/year", users: "135M+" },
        { name: "Blender", description: "3D creation suite", saving: "₹1.5L/year", users: "1M+" }
      ],
      features: ["UI/UX Design", "Brand Identity", "3D Modeling", "Image Processing"]
    },
    {
      category: "Marketing & Growth",
      toolCount: "100+",
      totalSavings: "₹10L/year",
      description: "Marketing automation, social media, and growth hacking tools",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      topTools: [
        { name: "Mailchimp", description: "Email marketing platform", saving: "₹3L/year", users: "12M+" },
        { name: "Buffer", description: "Social media management", saving: "₹2L/year", users: "140k+" },
        { name: "Ghost", description: "Publishing platform", saving: "₹1.5L/year", users: "3M+" },
        { name: "Matomo", description: "Web analytics alternative", saving: "₹3.5L/year", users: "1.4M+" }
      ],
      features: ["Email Campaigns", "Social Media Automation", "Content Management", "SEO Tools"]
    },
    {
      category: "Project Management",
      toolCount: "70+",
      totalSavings: "₹4L/year",
      description: "Team collaboration, project tracking, and workflow management",
      icon: Target,
      color: "from-indigo-500 to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      topTools: [
        { name: "Notion", description: "All-in-one workspace", saving: "₹1.5L/year", users: "20M+" },
        { name: "Trello", description: "Kanban board tool", saving: "₹1L/year", users: "50M+" },
        { name: "OpenProject", description: "Project management suite", saving: "₹1L/year", users: "5M+" },
        { name: "Mattermost", description: "Team communication", saving: "₹0.5L/year", users: "25k+" }
      ],
      features: ["Task Management", "Team Collaboration", "Time Tracking", "Resource Planning"]
    },
    {
      category: "Security & DevOps",
      toolCount: "90+",
      totalSavings: "₹15L/year",
      description: "Security tools, monitoring, and DevOps automation",
      icon: Shield,
      color: "from-teal-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      topTools: [
        { name: "Jenkins", description: "CI/CD automation server", saving: "₹4L/year", users: "200k+" },
        { name: "Grafana", description: "Monitoring & observability", saving: "₹3L/year", users: "20M+" },
        { name: "Vault", description: "Secrets management", saving: "₹5L/year", users: "100k+" },
        { name: "OWASP ZAP", description: "Security testing tool", saving: "₹3L/year", users: "200k+" }
      ],
      features: ["Security Scanning", "Infrastructure Monitoring", "Automated Deployment", "Secrets Management"]
    }
  ];

  const totalSavings = toolCategories.reduce((sum, cat) => {
    return sum + parseInt(cat.totalSavings.replace('₹', '').replace('L/year', ''));
  }, 0);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 35 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Floating tech icons */}
        {[Code, BarChart3, Star, Shield].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-300/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          >
            <Icon size={48} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Open Source Arsenal</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Open Source Tools Library
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Access 610+ curated open-source tools and alternatives. Build your entire tech stack without breaking the bank. 
            Save up to ₹55L+ per year on software costs.
          </p>
        </motion.div>

        {/* Live Savings Counter */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <motion.div
                className="text-5xl text-green-400 mb-2"
                key={savingsCounter}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                ₹{(totalSavings + savingsCounter).toLocaleString()}L+
              </motion.div>
              <div className="text-blue-200">Annual Savings Potential</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl text-white mb-2">610+</div>
              <div className="text-blue-200">Curated Tools</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl text-blue-400 mb-2">100%</div>
              <div className="text-blue-200">Free & Verified</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tool Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {toolCategories.map((category, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/20 hover:border-white/40 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6, 
                  delay: i * 0.1 
                }
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveCategory(i)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <ImageWithFallback
                  src={category.bgImage}
                  alt={category.category}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60`}></div>
              </div>

              <div className="relative z-10 p-8 bg-black/40 backdrop-blur-sm h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl text-green-400">{category.totalSavings}</div>
                    <div className="text-sm text-blue-200">Savings</div>
                  </div>
                </div>

                <h3 className="text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {category.category}
                </h3>

                <p className="text-sm text-blue-100 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Available Tools:</span>
                    <span className="text-white">{category.toolCount}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-xs text-blue-200 uppercase tracking-wider">Top Tools:</div>
                  <div className="space-y-1">
                    {category.topTools.slice(0, 2).map((tool, toolI) => (
                      <div key={toolI} className="flex items-center justify-between text-xs">
                        <span className="text-blue-100">{tool.name}</span>
                        <span className="text-green-400">{tool.saving}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-xs text-blue-200 uppercase tracking-wider">Categories:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.features.slice(0, 2).map((feature, featureI) => (
                      <span 
                        key={featureI}
                        className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl backdrop-blur-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Browse Tools
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Tools Showcase */}
        {activeCategory < toolCategories.length && (
          <motion.div
            className="mb-16 p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            key={activeCategory}
          >
            <h3 className="text-2xl text-white mb-8 text-center flex items-center justify-center gap-3">
              {(() => {
                const IconComponent = toolCategories[activeCategory].icon;
                return <IconComponent className="w-8 h-8 text-blue-400" />;
              })()}
              Featured {toolCategories[activeCategory].category} Tools
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {toolCategories[activeCategory].topTools.map((tool, i) => (
                <motion.div
                  key={i}
                  className="p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-black/60 transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-lg text-white mb-2">{tool.name}</h4>
                  <p className="text-sm text-blue-100 mb-3">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-green-400">{tool.saving}</span>
                    <span className="text-xs text-blue-200">{tool.users} users</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Success Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Tools Catalogued", value: "610+", icon: Database },
            { label: "Startups Helped", value: "8,500+", icon: Building },
            { label: "Total Savings", value: "₹420Cr+", icon: DollarSign },
            { label: "Success Rate", value: "99%", icon: CheckCircle }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl text-white mb-1">{stat.value}</div>
              <div className="text-sm text-blue-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-left">
              <h3 className="text-2xl text-white mb-2">Ready to Save on Software Costs?</h3>
              <p className="text-blue-100">Access the complete library of 610+ tools</p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl"
            >
              Explore Library
              <Code className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}