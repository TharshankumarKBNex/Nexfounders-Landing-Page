import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  BarChart3, TrendingUp, Globe, Target, DollarSign,
  Users, Calendar, Award, Zap, Brain, Lightbulb,
  ArrowRight, Sparkles, Clock, Building, Star,
  ChevronUp, ChevronDown, Activity, PieChart,
  LineChart, Map, Filter, Search, Download,
  RefreshCw, AlertCircle, CheckCircle, Eye
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Premium Market Intelligence Section
export function PremiumMarketIntelligence() {
  const [activeTab, setActiveTab] = useState(0);
  const [liveData, setLiveData] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => (prev + 1) % 100);
    }, 150);
    return () => clearInterval(interval);
  }, []);

  const tabs = ["Sector Trends", "Funding Patterns", "Geographic Data", "Success Metrics"];

  const sectorData = [
    { 
      sector: "FinTech", 
      growth: "+52%", 
      startups: "1,420+", 
      funding: "₹840Cr",
      color: "from-green-500 to-emerald-600",
      trend: "up",
      prediction: "Bullish",
      marketSize: "₹12,500Cr",
      topCompanies: ["PayEasy", "FinFlow", "CreditAI"],
      keyMetrics: { cac: "₹450", ltv: "₹2,800", churn: "3.2%" }
    },
    { 
      sector: "HealthTech", 
      growth: "+41%", 
      startups: "980+", 
      funding: "₹520Cr",
      color: "from-blue-500 to-cyan-600",
      trend: "up",
      prediction: "Strong",
      marketSize: "₹8,900Cr",
      topCompanies: ["MediCare+", "HealthAI", "DocBot"],
      keyMetrics: { cac: "₹380", ltv: "₹1,900", churn: "2.8%" }
    },
    { 
      sector: "EdTech", 
      growth: "+38%", 
      startups: "1,150+", 
      funding: "₹680Cr",
      color: "from-purple-500 to-pink-600",
      trend: "up",
      prediction: "Stable",
      marketSize: "₹15,200Cr",
      topCompanies: ["LearnPro", "EduAI", "SkillUp"],
      keyMetrics: { cac: "₹320", ltv: "₹1,200", churn: "4.1%" }
    },
    { 
      sector: "E-commerce", 
      growth: "+28%", 
      startups: "2,100+", 
      funding: "₹1,200Cr",
      color: "from-orange-500 to-red-600",
      trend: "steady",
      prediction: "Moderate",
      marketSize: "₹45,600Cr",
      topCompanies: ["ShopFast", "QuickBuy", "MarketX"],
      keyMetrics: { cac: "₹280", ltv: "₹850", churn: "6.5%" }
    },
    { 
      sector: "AgriTech", 
      growth: "+35%", 
      startups: "650+", 
      funding: "₹290Cr",
      color: "from-emerald-500 to-teal-600",
      trend: "up",
      prediction: "Emerging",
      marketSize: "₹8,200Cr",
      topCompanies: ["FarmTech", "CropAI", "AgriFlow"],
      keyMetrics: { cac: "₹520", ltv: "₹3,200", churn: "2.1%" }
    },
    { 
      sector: "CleanTech", 
      growth: "+45%", 
      startups: "420+", 
      funding: "₹380Cr",
      color: "from-green-600 to-blue-600",
      trend: "up",
      prediction: "Hot",
      marketSize: "₹6,800Cr",
      topCompanies: ["SolarPro", "WindTech", "CleanEnergy"],
      keyMetrics: { cac: "₹680", ltv: "₹4,500", churn: "1.8%" }
    }
  ];

  const liveMetrics = [
    { label: "Active Startups", value: 8400 + liveData, change: "+2.3%", icon: Building },
    { label: "Total Funding (This Month)", value: `₹${240 + Math.floor(liveData/10)}Cr`, change: "+15.7%", icon: DollarSign },
    { label: "New Launches (Today)", value: 12 + Math.floor(liveData/20), change: "+8.1%", icon: Zap },
    { label: "Success Rate", value: `${94 + Math.floor(liveData/50)}%`, change: "+1.2%", icon: TrendingUp }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 35 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

        {/* Floating chart icons */}
        {[BarChart3, PieChart, LineChart, TrendingUp].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-indigo-300/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -90, 0],
              rotate: [0, 360, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 15 + Math.random() * 8,
              repeat: Infinity,
              delay: i * 3,
            }}
          >
            <Icon size={60} />
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Activity className="w-5 h-5 text-indigo-400" />
            <span className="text-sm">Real-Time Intelligence</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Market Intelligence Dashboard
          </h2>
          <p className="text-xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
            Get real-time insights into startup trends, funding patterns, and market dynamics. 
            Make data-driven decisions with our comprehensive analytics platform.
          </p>
        </motion.div>

        {/* Live Metrics Dashboard */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {liveMetrics.map((metric, i) => (
            <motion.div
              key={i}
              className="relative p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all group overflow-hidden"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Live indicator */}
              <div className="absolute top-3 right-3 flex items-center gap-1">
                <motion.div
                  className="w-2 h-2 bg-green-400 rounded-full"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-xs text-green-400">LIVE</span>
              </div>

              <metric.icon className="w-8 h-8 text-indigo-400 mb-3 group-hover:scale-110 transition-transform" />
              
              <motion.div
                className="text-2xl text-white mb-1"
                key={`${i}-${metric.value}`}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {metric.value}
              </motion.div>
              
              <div className="text-sm text-indigo-200 mb-2">{metric.label}</div>
              
              <div className="flex items-center gap-1">
                <ChevronUp className="w-3 h-3 text-green-400" />
                <span className="text-xs text-green-400">{metric.change}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-6 py-3 rounded-xl transition-all ${
                  activeTab === i
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-indigo-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Sector Analysis Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sectorData.map((sector, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/20 hover:border-white/40 transition-all cursor-pointer"
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
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>

              <div className="relative z-10 p-8 bg-black/40 backdrop-blur-sm h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {sector.sector}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`bg-gradient-to-r ${sector.color} bg-clip-text text-transparent text-lg font-bold`}>
                        {sector.growth}
                      </span>
                      <ChevronUp className="w-4 h-4 text-green-400" />
                    </div>
                  </div>
                  <div className={`px-3 py-1 bg-gradient-to-r ${sector.color} rounded-full text-white text-xs font-medium`}>
                    {sector.prediction}
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <div className="text-sm text-indigo-200">Startups</div>
                      <div className="text-lg text-white">{sector.startups}</div>
                    </div>
                    <div className="p-3 bg-white/10 rounded-xl">
                      <div className="text-sm text-indigo-200">Funding</div>
                      <div className="text-lg text-white">{sector.funding}</div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-white/10 rounded-xl">
                    <div className="text-sm text-indigo-200">Market Size</div>
                    <div className="text-lg text-white">{sector.marketSize}</div>
                  </div>
                </div>

                {/* Top Companies */}
                <div className="mb-6">
                  <div className="text-sm text-indigo-200 mb-2">Leading Companies:</div>
                  <div className="flex flex-wrap gap-2">
                    {sector.topCompanies.map((company, companyI) => (
                      <span 
                        key={companyI}
                        className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="space-y-2 mb-6">
                  <div className="text-sm text-indigo-200">Key Performance:</div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <div className="text-indigo-300">CAC</div>
                      <div className="text-white">{sector.keyMetrics.cac}</div>
                    </div>
                    <div>
                      <div className="text-indigo-300">LTV</div>
                      <div className="text-white">{sector.keyMetrics.ltv}</div>
                    </div>
                    <div>
                      <div className="text-indigo-300">Churn</div>
                      <div className="text-white">{sector.keyMetrics.churn}</div>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button
                  size="sm"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl backdrop-blur-sm"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Deep Dive Analysis
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Market Insights Section */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Trending Insights */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
            <h3 className="text-2xl text-white mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-indigo-400" />
              Trending Insights
            </h3>
            <div className="space-y-4">
              {[
                { insight: "AI/ML startups seeing 68% higher funding success", impact: "High", color: "green" },
                { insight: "SaaS businesses with 40%+ annual growth get premium valuations", impact: "High", color: "green" },
                { insight: "B2B marketplaces trending upward in Q4", impact: "Medium", color: "yellow" },
                { insight: "Consumer apps facing 15% higher customer acquisition costs", impact: "Medium", color: "orange" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    item.color === 'green' ? 'bg-green-400' :
                    item.color === 'yellow' ? 'bg-yellow-400' : 'bg-orange-400'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{item.insight}</p>
                    <span className={`text-xs px-2 py-1 rounded-full mt-1 inline-block ${
                      item.color === 'green' ? 'bg-green-500/20 text-green-400' :
                      item.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {item.impact} Impact
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Geographic Distribution */}
          <div className="p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
            <h3 className="text-2xl text-white mb-6 flex items-center gap-2">
              <Map className="w-6 h-6 text-indigo-400" />
              Geographic Distribution
            </h3>
            <div className="space-y-4">
              {[
                { city: "Bangalore", percentage: "32%", startups: "2,688", color: "from-blue-500 to-cyan-500" },
                { city: "Mumbai", percentage: "24%", startups: "2,016", color: "from-purple-500 to-pink-500" },
                { city: "Delhi NCR", percentage: "18%", startups: "1,512", color: "from-green-500 to-emerald-500" },
                { city: "Pune", percentage: "12%", startups: "1,008", color: "from-orange-500 to-red-500" },
                { city: "Others", percentage: "14%", startups: "1,176", color: "from-indigo-500 to-purple-500" }
              ].map((location, i) => (
                <motion.div
                  key={i}
                  className="space-y-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white">{location.city}</span>
                    <div className="text-right">
                      <span className="text-indigo-300 text-sm">{location.percentage}</span>
                      <div className="text-xs text-indigo-200">{location.startups} startups</div>
                    </div>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className={`h-2 bg-gradient-to-r ${location.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: location.percentage }}
                      transition={{ duration: 1, delay: i * 0.1 + 1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
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
            className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-left">
              <h3 className="text-2xl text-white mb-2">Get Advanced Market Reports</h3>
              <p className="text-indigo-100">Detailed sector analysis and custom insights for your startup</p>
            </div>
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-xl"
            >
              Access Pro Reports
              <BarChart3 className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Premium Final CTA Section
export function PremiumFinalCTA() {
  const [emailFocused, setEmailFocused] = useState(false);

  const benefits = [
    { text: "Access all 11 platform features", icon: CheckCircle },
    { text: "Join 10,000+ verified startup community", icon: Users },
    { text: "Get ₹28L+ worth of free tools", icon: DollarSign },
    { text: "Connect with 500+ active investors", icon: Building },
    { text: "Download 50+ legal templates", icon: Download },
    { text: "24/7 expert support", icon: Clock }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -200, 0],
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">Join the Revolution</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Scale Faster?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 10,000+ founders who are building, networking, and scaling faster with Nexfounders. 
            Everything you need to take your startup to the next level.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <benefit.icon className="w-6 h-6 text-green-400" />
              <span className="text-white">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Email Signup */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={`max-w-md mx-auto p-2 bg-white/10 backdrop-blur-sm rounded-2xl border transition-all ${
            emailFocused ? 'border-blue-400 shadow-2xl shadow-blue-500/25' : 'border-white/20'
          }`}>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email to get started"
                className="flex-1 p-4 bg-transparent text-white placeholder-white/60 outline-none"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl px-8"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            Free to join • No credit card required • Instant access
          </p>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="flex items-center justify-center gap-8 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>4.9/5 rating</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span>10,000+ founders</span>
          </div>
          <div className="w-px h-4 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Trusted platform</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}