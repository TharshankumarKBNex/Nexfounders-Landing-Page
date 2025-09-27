import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  FileText, Shield, DollarSign, Eye, Download, CheckCircle,
  Database, Search, Filter, Award, Users, MapPin, TrendingUp,
  BookOpen, MessageCircle, Calendar, Star, BarChart3,
  ArrowRight, Sparkles, Target, Brain, Lightbulb, Clock,
  Zap, Globe, Code, Building
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Premium Legal Templates Section
export function PremiumLegalTemplates() {
  const [hoveredTemplate, setHoveredTemplate] = useState<number | null>(null);

  const legalTemplates = [
    { 
      name: "Co-founder Agreement", 
      downloads: "1.2k", 
      price: "Free", 
      icon: Shield,
      description: "Comprehensive equity split and responsibility agreements",
      pages: "12 pages",
      lastUpdated: "Dec 2024",
      color: "from-blue-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    { 
      name: "Employee Contracts", 
      downloads: "890", 
      price: "Free", 
      icon: FileText,
      description: "Employment agreements with equity and benefits clauses",
      pages: "8 pages",
      lastUpdated: "Nov 2024",
      color: "from-green-500 to-emerald-600",
      bgImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    { 
      name: "Investor Term Sheets", 
      downloads: "650", 
      price: "Free", 
      icon: DollarSign,
      description: "Series A/B term sheet templates with market standards",
      pages: "6 pages",
      lastUpdated: "Dec 2024",
      color: "from-purple-500 to-pink-600",
      bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    { 
      name: "Privacy Policies", 
      downloads: "2.1k", 
      price: "Free", 
      icon: Eye,
      description: "GDPR-compliant privacy policies for SaaS platforms",
      pages: "15 pages",
      lastUpdated: "Jan 2025",
      color: "from-orange-500 to-red-600",
      bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    { 
      name: "Terms of Service", 
      downloads: "1.8k", 
      price: "Free", 
      icon: CheckCircle,
      description: "Comprehensive ToS covering liability and usage rights",
      pages: "18 pages",
      lastUpdated: "Dec 2024",
      color: "from-indigo-500 to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    { 
      name: "NDA Templates", 
      downloads: "3.2k", 
      price: "Free", 
      icon: Shield,
      description: "Mutual and one-way NDAs for investor meetings",
      pages: "4 pages",
      lastUpdated: "Nov 2024",
      color: "from-teal-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Floating legal icons */}
        {[Shield, FileText, DollarSign, Eye].map((Icon, i) => (
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
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Legal Protection Library</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Legal Templates & Documents
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Professional-grade legal templates created by top startup lawyers. Download instantly, 
            customize for your needs, and save thousands on legal fees.
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
          {[
            { label: "Templates Available", value: "50+", icon: FileText },
            { label: "Total Downloads", value: "25k+", icon: Download },
            { label: "Legal Cost Saved", value: "₹15L+", icon: DollarSign },
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

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legalTemplates.map((template, i) => (
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
              onHoverStart={() => setHoveredTemplate(i)}
              onHoverEnd={() => setHoveredTemplate(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <ImageWithFallback
                  src={template.bgImage}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${template.color} opacity-60`}></div>
              </div>

              <div className="relative z-10 p-8 bg-black/40 backdrop-blur-sm h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${template.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <template.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-sm">
                    {template.price}
                  </span>
                </div>

                <h3 className="text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {template.name}
                </h3>

                <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                  {template.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Pages:</span>
                    <span className="text-white">{template.pages}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Updated:</span>
                    <span className="text-white">{template.lastUpdated}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Downloads:</span>
                    <span className="text-white">{template.downloads}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    size="sm"
                    className="bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl backdrop-blur-sm"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <motion.div
                    className="text-blue-400 group-hover:text-white transition-colors"
                    animate={{ x: hoveredTemplate === i ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
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
              <h3 className="text-2xl text-white mb-2">Need Custom Legal Documents?</h3>
              <p className="text-blue-100">Connect with our network of startup lawyers</p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl"
            >
              Get Legal Help
              <Shield className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Premium Resource Bank Section
export function PremiumResourceBank() {
  const [searchQuery, setSearchQuery] = useState("");
  const [animatedCount, setAnimatedCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedCount(prev => (prev + 1) % 1000);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const resourceCategories = [
    {
      title: "Angel Investors Database",
      count: "2,400+",
      description: "Verified angel investors with investment preferences and contact details",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      features: ["Investment Range", "Sector Preferences", "Direct Contact", "Response Rate"],
      bgImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "VC Firms Directory",
      count: "800+",
      description: "Comprehensive database of venture capital firms across India and globally",
      icon: Building,
      color: "from-blue-500 to-cyan-600",
      features: ["Fund Size", "Portfolio Companies", "Investment Thesis", "Partner Details"],
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "Startup Founders Network",
      count: "4,200+",
      description: "Connect with successful founders and learn from their experiences",
      icon: Target,
      color: "from-purple-500 to-pink-600",
      features: ["Company Stage", "Funding History", "Mentorship", "Collaboration"],
      bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      title: "Industry Experts",
      count: "2,600+",
      description: "Domain experts, advisors, and consultants for specialized guidance",
      icon: Brain,
      color: "from-orange-500 to-red-600",
      features: ["Domain Expertise", "Advisory Experience", "Hourly Rates", "Availability"],
      bgImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white relative overflow-hidden">
      {/* Animated data particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Floating database icons */}
        {[Database, Search, Users, Building].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-teal-300/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -70, 0],
              rotate: [0, 360, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: i * 2,
            }}
          >
            <Icon size={56} />
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Database className="w-5 h-5 text-teal-400" />
            <span className="text-sm">Verified Database</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Resource Bank & Lead Generation
          </h2>
          <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
            Access the most comprehensive database of verified contacts in the Indian startup ecosystem. 
            Generate qualified leads and accelerate your growth.
          </p>
        </motion.div>

        {/* Live Counter */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-center">
              <motion.div
                className="text-5xl text-teal-400 mb-2"
                key={animatedCount}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {(10000 + animatedCount).toLocaleString()}+
              </motion.div>
              <div className="text-teal-200">Verified Contacts</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl text-white mb-2">500</div>
              <div className="text-teal-200">Lead Credits/Month</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Resource Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resourceCategories.map((category, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/20 hover:border-white/40 transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6, 
                  delay: i * 0.15 
                }
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <ImageWithFallback
                  src={category.bgImage}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60`}></div>
              </div>

              <div className="relative z-10 p-8 bg-black/40 backdrop-blur-sm h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="bg-teal-500/20 text-teal-400 border border-teal-500/30 px-4 py-2 rounded-full text-lg font-medium">
                    {category.count}
                  </span>
                </div>

                <h3 className="text-2xl text-white mb-4 group-hover:text-teal-300 transition-colors">
                  {category.title}
                </h3>

                <p className="text-teal-100 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="text-sm text-teal-200 uppercase tracking-wider">Features Include:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, featureI) => (
                      <span 
                        key={featureI}
                        className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl backdrop-blur-sm group-hover:bg-teal-500/30 transition-all"
                >
                  <Search className="w-4 h-4 mr-2" />
                  Browse Database
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advanced Search Demo */}
        <motion.div
          className="p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-white mb-6 text-center">Advanced Search & Filtering</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <label className="text-sm text-teal-200">Search by Industry</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g., FinTech, HealthTech..."
                  className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 backdrop-blur-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-3 w-5 h-5 text-white/60" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-sm text-teal-200">Investment Range</label>
              <select className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white backdrop-blur-sm">
                <option>$50K - $500K</option>
                <option>$500K - $2M</option>
                <option>$2M - $10M</option>
                <option>$10M+</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-sm text-teal-200">Location</label>
              <select className="w-full p-3 bg-white/20 border border-white/30 rounded-xl text-white backdrop-blur-sm">
                <option>Bangalore</option>
                <option>Mumbai</option>
                <option>Delhi NCR</option>
                <option>Global</option>
              </select>
            </div>
          </div>
          <Button
            size="lg"
            className="w-full mt-6 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-xl"
          >
            <Filter className="w-5 h-5 mr-2" />
            Search Database
          </Button>
        </motion.div>
      </div>
    </section>
  );
}