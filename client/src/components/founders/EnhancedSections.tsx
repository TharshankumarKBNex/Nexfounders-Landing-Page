import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Users, Globe, Zap, FileText, Building, TrendingUp, 
  Code, Shield, Database, BookOpen, BarChart3, Search,
  Rocket, Star, ArrowRight, MapPin, Calendar, DollarSign,
  Download, Eye, MessageCircle, Filter, Award, CheckCircle,
  Sparkles, Target, Briefcase, Brain, Lightbulb, Clock
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Enhanced Due Diligence Center (Priority Section)
export function EnhancedDueDiligence() {
  const [activeTab, setActiveTab] = useState(0);
  const [animatedCounter, setAnimatedCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedCounter(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const dueDiligenceFeatures = [
    {
      title: "AI-Powered Financial Analysis",
      description: "Advanced algorithms analyze revenue models, cash flow projections, and financial health with 95% accuracy",
      tools: "Revenue Analysis, Cash Flow Modeling, Burn Rate Calculator, Financial Health Score",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      metrics: "95% accuracy",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "Legal Compliance Dashboard",
      description: "Comprehensive IP checks, regulatory compliance verification, and legal structure analysis",
      tools: "IP Verification, Regulatory Check, Legal Structure Review, Compliance Score",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      metrics: "100% compliant",
      bgImage: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "Market Intelligence Engine",
      description: "Real-time TAM analysis, competitive landscape mapping, and product-market fit scoring",
      tools: "TAM Calculator, Competitor Analysis, PMF Score, Market Trends",
      icon: Target,
      color: "from-purple-500 to-pink-600",
      metrics: "Real-time data",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "Team Strength Assessment",
      description: "Deep-dive into founder backgrounds, team dynamics, advisory board strength, and leadership capabilities",
      tools: "Founder Analysis, Team Dynamics, Advisory Assessment, Leadership Score",
      icon: Users,
      color: "from-orange-500 to-red-600",
      metrics: "360° evaluation",
      bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "Risk Analysis Matrix",
      description: "Comprehensive risk assessment covering business, regulatory, market, and operational risks",
      tools: "Risk Matrix, Mitigation Plans, Probability Analysis, Impact Assessment",
      icon: Brain,
      color: "from-indigo-500 to-purple-600",
      metrics: "Multi-factor analysis",
      bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "Growth Trajectory Modeling",
      description: "Advanced KPI tracking, user acquisition analysis, and scaling potential predictions",
      tools: "KPI Dashboard, CAC/LTV Analysis, Growth Modeling, Scaling Score",
      icon: Rocket,
      color: "from-teal-500 to-cyan-600",
      metrics: "Predictive modeling",
      bgImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  const stats = [
    { label: "Due Diligence Reports", value: "2,500+", icon: FileText },
    { label: "Investment Decisions", value: "₹450Cr+", icon: DollarSign },
    { label: "Success Rate", value: "87%", icon: TrendingUp },
    { label: "Average Time Saved", value: "15 days", icon: Clock }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
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
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">Priority Platform Feature</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Due Diligence Center
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            India's most comprehensive startup evaluation platform. Powered by AI and used by 500+ investors 
            to make data-driven investment decisions worth ₹450Cr+.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
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

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dueDiligenceFeatures.map((feature, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/20 hover:border-white/40 transition-all"
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
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <ImageWithFallback
                  src={feature.bgImage}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-60`}></div>
              </div>

              <div className="relative z-10 p-8 bg-black/40 backdrop-blur-sm h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-blue-100 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="text-xs text-blue-200 uppercase tracking-wider">Tools Included:</div>
                  <div className="text-xs text-blue-100 leading-relaxed">
                    {feature.tools}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs bg-white/20 text-white px-3 py-1 rounded-full">
                    {feature.metrics}
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-blue-400 group-hover:text-white transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-left">
              <h3 className="text-2xl text-white mb-2">Ready for Professional Due Diligence?</h3>
              <p className="text-blue-100">Join 500+ investors using our platform</p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl"
            >
              Start Analysis
              <Rocket className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced Networking Hub
export function EnhancedNetworkingHub() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const networkFeatures = [
    { 
      icon: Users, 
      title: "1,000+ Active Startups", 
      desc: "Connect with verified founders across India and beyond",
      color: "from-blue-500 to-purple-600",
      stats: "98% response rate"
    },
    { 
      icon: Globe, 
      title: "Global Collaboration", 
      desc: "Work on real projects with international founders",
      color: "from-green-500 to-teal-600",
      stats: "50+ countries"
    },
    { 
      icon: Zap, 
      title: "Weekly Networking Events", 
      desc: "Exclusive online and offline networking opportunities",
      color: "from-orange-500 to-red-600",
      stats: "4+ events/week"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Floating network nodes animation */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-blue-500/20 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.line
              key={i}
              x1={`${20 + Math.random() * 60}%`}
              y1={`${20 + Math.random() * 60}%`}
              x2={`${20 + Math.random() * 60}%`}
              y2={`${20 + Math.random() * 60}%`}
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 rounded-full px-4 py-2 mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm">Global Network</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Startup Networking Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with 1,000+ verified startups, collaborate on real projects, and build lasting relationships 
            in India's most active founder community.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {networkFeatures.map((feature, i) => (
              <motion.div 
                key={i}
                className="group flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: i * 0.2 }
                }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredNode(i)}
                onHoverEnd={() => setHoveredNode(null)}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all`}
                  whileHover={{ scale: 1.1, rotate: 6 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{feature.desc}</p>
                  <motion.div
                    className="mt-3 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                  >
                    <span className="text-sm">Connect now</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="relative h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl border border-blue-200 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Startup networking"
              className="w-full h-full object-cover opacity-40"
            />
            
            {/* Interactive network nodes */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl border-2 border-blue-200 shadow-lg flex items-center justify-center cursor-pointer ${
                  hoveredNode === i % 3 ? 'border-blue-500 bg-blue-50' : ''
                }`}
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                }}
                animate={{ 
                  y: [0, -10, 0],
                  scale: hoveredNode === i % 3 ? 1.2 : 1
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.3,
                  scale: { duration: 0.3 }
                }}
                whileHover={{ scale: 1.3, rotate: 10 }}
              >
                <Users className="w-6 h-6 text-blue-600" />
              </motion.div>
            ))}

            {/* Floating stats */}
            <motion.div
              className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-blue-200"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl text-blue-600">1,000+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}