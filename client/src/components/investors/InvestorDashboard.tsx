import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Building, Users, Code, BarChart3, FileText, Database,
  DollarSign, TrendingUp, Star, Shield, BookOpen, Globe,
  ArrowRight, Sparkles, Target, Brain, Lightbulb, Clock,
  Eye, Download, MessageCircle, CheckCircle, Award, Zap,
  Search, Filter, Plus, PieChart, Activity, Briefcase,
  MapPin, Calendar, Mail, Phone, Linkedin, Settings,
  Bell, ChevronDown, Menu, Home, Folder, BarChart,
  Handshake, AlertCircle, TrendingDown, Rocket, Crown
} from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const cyclingWords = ['Discover', 'Analyze', 'Invest', 'Scale'];
const floatingIcons = [Briefcase, TrendingUp, Building, Users];

// Professional Investor Hero Section
export function InvestorHero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [livePortfolioValue, setLivePortfolioValue] = useState(247.8);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const valueInterval = setInterval(() => {
      setLivePortfolioValue(prev => prev + (Math.random() - 0.5) * 0.2);
    }, 3000);
    return () => clearInterval(valueInterval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/20 overflow-hidden flex items-center justify-center">
      {/* Subtle Floating Icons */}
      {floatingIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/15"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * 1.5,
          }}
        >
          <Icon size={28} />
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
          Investor Intelligence to{' '}
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
          Smarter
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your comprehensive platform for startup investment. Discover opportunities, manage portfolios, and scale returns with AI-powered insights.
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
            Start Investing
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10 px-8 py-3 text-lg"
          >
            Watch Demo
          </Button>
        </motion.div>

        {/* Stats with subtle animations */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: "₹250Cr+", label: "Portfolio AUM" },
            { value: "45", label: "Active Deals" },
            { value: "28.5%", label: "Avg IRR" },
            { value: "98%", label: "Due Diligence" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl text-primary font-semibold">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Investment Applications Module
export function InvestmentApplications() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [liveApplications, setLiveApplications] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveApplications(prev => prev + Math.floor(Math.random() * 3));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const applications = [
    {
      id: 1,
      startup: "TechFlow AI",
      sector: "AI/ML",
      stage: "Series A",
      asking: "₹15Cr",
      valuation: "₹120Cr",
      status: "reviewing",
      score: 8.7,
      location: "Bangalore",
      growth: "+340%"
    },
    {
      id: 2,
      startup: "GreenEnergy Solutions",
      sector: "CleanTech",
      stage: "Seed",
      asking: "₹5Cr",
      valuation: "₹25Cr",
      status: "shortlisted",
      score: 9.2,
      location: "Mumbai",
      growth: "+180%"
    },
    {
      id: 3,
      startup: "FinNext",
      sector: "FinTech",
      stage: "Pre-Series A",
      asking: "₹8Cr",
      valuation: "₹60Cr",
      status: "due_diligence",
      score: 8.9,
      location: "Delhi",
      growth: "+275%"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 text-sm mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <FileText className="w-4 h-4" />
            Investment Pipeline • 
            <span className="font-medium">{liveApplications.toLocaleString()}+ applications</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Deal Flow Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Review and manage startup funding applications with AI-powered insights and comprehensive due diligence tools.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
            {['all', 'reviewing', 'shortlisted', 'due_diligence'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md transition-all capitalize text-sm font-medium ${
                  activeFilter === filter
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {filter.replace('_', ' ')}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Applications Grid */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {applications.map((app, i) => (
            <motion.div
              key={app.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
            >
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{app.startup}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {app.location}
                        <TrendingUp className="w-4 h-4 ml-2 text-green-600" />
                        <span className="text-green-600 font-medium">{app.growth}</span>
                      </div>
                    </div>
                    <Badge className={`${
                      app.status === 'reviewing' ? 'bg-yellow-100 text-yellow-800' :
                      app.status === 'shortlisted' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {app.status.replace('_', ' ')}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">{app.sector}</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">{app.stage}</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">{app.asking}</div>
                  <div className="text-sm text-gray-600 mb-2">Funding Ask</div>
                  <div className="text-lg font-semibold text-gray-900">{app.valuation}</div>
                  <div className="text-sm text-gray-600">Valuation</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-2xl font-bold text-green-600">{app.score}</div>
                    <div className="text-sm text-gray-600 ml-1">/10</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">AI Score</div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      Review
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <FileText className="w-4 h-4 mr-1" />
                      Docs
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Startup Sourcing Module
export function StartupSourcing() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [liveStartupCount, setLiveStartupCount] = useState(2840);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStartupCount(prev => prev + Math.floor(Math.random() * 4));
      setActiveCategory(prev => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const sectors = [
    { 
      name: "AI/ML", 
      count: "890+", 
      desc: "Artificial intelligence and machine learning", 
      icon: Brain, 
      color: "bg-blue-500"
    },
    { 
      name: "FinTech", 
      count: "640+", 
      desc: "Financial technology solutions", 
      icon: DollarSign, 
      color: "bg-green-500"
    },
    { 
      name: "HealthTech", 
      count: "420+", 
      desc: "Healthcare and medical technology", 
      icon: Shield, 
      color: "bg-purple-500"
    },
    { 
      name: "CleanTech", 
      count: "380+", 
      desc: "Clean energy and sustainability", 
      icon: Globe, 
      color: "bg-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 text-sm mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Search className="w-4 h-4" />
            Startup Discovery • 
            <span className="font-medium">{liveStartupCount.toLocaleString()}+ startups</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Startup Sourcing Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover high-potential startups across sectors with AI-powered matching and comprehensive market intelligence.
          </p>
        </motion.div>

        {/* Sector Categories */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              className={`bg-white rounded-xl p-6 border border-gray-200 cursor-pointer transition-all duration-300 ${
                activeCategory === i ? 'border-blue-300 shadow-lg' : 'hover:border-gray-300 hover:shadow-md'
              }`}
              whileHover={{ y: -4 }}
              onHoverStart={() => setActiveCategory(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`w-12 h-12 ${sector.color} rounded-lg flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <sector.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{sector.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{sector.desc}</p>
              
              <div className="text-2xl font-bold text-gray-900">{sector.count}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search Interface */}
        <motion.div
          className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">AI-Powered Startup Discovery</h3>
            <p className="text-gray-600">Advanced filters and intelligent matching algorithms</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { feature: "AI Screening", desc: "Smart startup evaluation", icon: Brain },
              { feature: "Market Analysis", desc: "Real-time market data", icon: BarChart3 },
              { feature: "Due Diligence", desc: "Comprehensive reports", icon: Shield }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">{item.feature}</div>
                  <div className="text-sm text-gray-600">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Talent Sourcing Module  
export function InvestorTalentSourcing() {
  const [activeRole, setActiveRole] = useState(0);
  const [liveTalentCount, setLiveTalentCount] = useState(4680);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTalentCount(prev => prev + Math.floor(Math.random() * 5));
      setActiveRole(prev => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const talentRoles = [
    { 
      role: "Executive Team", 
      count: "1,200+", 
      desc: "CEOs, CTOs, and senior leadership", 
      icon: Crown, 
      color: "bg-blue-500"
    },
    { 
      role: "Tech Leaders", 
      count: "2,100+", 
      desc: "Engineering and technical expertise", 
      icon: Code, 
      color: "bg-purple-500"
    },
    { 
      role: "Growth Experts", 
      count: "980+", 
      desc: "Sales, marketing, and business development", 
      icon: TrendingUp, 
      color: "bg-green-500"
    },
    { 
      role: "Advisory Board", 
      count: "400+", 
      desc: "Industry veterans and domain experts", 
      icon: Star, 
      color: "bg-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 text-sm mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Users className="w-4 h-4" />
            Talent Network • 
            <span className="font-medium">{liveTalentCount.toLocaleString()}+ professionals</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Executive Talent Pipeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with top-tier executives and advisors for your portfolio companies. Vetted professionals ready to scale startups.
          </p>
        </motion.div>

        {/* Talent Categories */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {talentRoles.map((talent, i) => (
            <motion.div
              key={i}
              className={`bg-white rounded-xl p-6 border border-gray-200 cursor-pointer transition-all duration-300 ${
                activeRole === i ? 'border-blue-300 shadow-lg' : 'hover:border-gray-300 hover:shadow-md'
              }`}
              whileHover={{ y: -4 }}
              onHoverStart={() => setActiveRole(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`w-12 h-12 ${talent.color} rounded-lg flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <talent.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{talent.role}</h3>
              <p className="text-sm text-gray-600 mb-4">{talent.desc}</p>
              
              <div className="text-2xl font-bold text-gray-900">{talent.count}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Connect with Top Executives</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Access our exclusive network of vetted leaders for your portfolio companies
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
            >
              Browse Talent Network
              <Users className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Portfolio Management
export function PortfolioManagement() {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [portfolioGrowth, setPortfolioGrowth] = useState(28.5);

  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioGrowth(prev => prev + (Math.random() - 0.5) * 0.2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const portfolioCompanies = [
    {
      name: "TechFlow AI",
      sector: "AI/ML",
      investment: "₹5Cr",
      currentValue: "₹18Cr",
      growth: "+260%",
      status: "Growing"
    },
    {
      name: "GreenEnergy",
      sector: "CleanTech", 
      investment: "₹3Cr",
      currentValue: "₹8Cr",
      growth: "+167%",
      status: "Scaling"
    },
    {
      name: "FinNext",
      sector: "FinTech",
      investment: "₹4Cr", 
      currentValue: "₹12Cr",
      growth: "+200%",
      status: "Fundraising"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 text-sm mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Briefcase className="w-4 h-4" />
            Portfolio Overview • 
            <span className="font-medium">{portfolioGrowth.toFixed(1)}% IRR</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Portfolio Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track, analyze, and optimize your startup investments with real-time insights and performance metrics.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {portfolioCompanies.map((company, i) => (
            <motion.div
              key={i}
              className={`bg-white rounded-xl p-6 border border-gray-200 cursor-pointer transition-all duration-300 ${
                selectedCompany === i ? 'border-blue-300 shadow-lg' : 'hover:border-gray-300 hover:shadow-md'
              }`}
              onClick={() => setSelectedCompany(i)}
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{company.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{company.sector}</p>
              
              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <div className="text-green-600 font-semibold">{company.investment}</div>
                  <div className="text-gray-500">Invested</div>
                </div>
                <div>
                  <div className="text-blue-600 font-semibold">{company.currentValue}</div>
                  <div className="text-gray-500">Current</div>
                </div>
              </div>

              <div className="text-2xl font-bold text-green-600 mb-2">{company.growth}</div>
              <Badge className={`${
                company.status === 'Growing' ? 'bg-green-100 text-green-800' :
                company.status === 'Scaling' ? 'bg-blue-100 text-blue-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {company.status}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Stats */}
        <motion.div
          className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { label: "Total AUM", value: "₹247Cr", icon: Briefcase },
              { label: "Active Investments", value: "23", icon: Building },
              { label: "Average IRR", value: `${portfolioGrowth.toFixed(1)}%`, icon: TrendingUp },
              { label: "Successful Exits", value: "8", icon: Award }
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                className="p-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Market Intelligence
export function MarketIntelligence() {
  const [selectedSector, setSelectedSector] = useState('AI/ML');
  const [marketGrowth, setMarketGrowth] = useState(28);

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketGrowth(prev => prev + (Math.random() - 0.5) * 0.5);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const marketData = {
    'AI/ML': { size: '₹2,40,000Cr', growth: '+28%', deals: 145 },
    'FinTech': { size: '₹1,80,000Cr', growth: '+22%', deals: 189 },
    'HealthTech': { size: '₹95,000Cr', growth: '+35%', deals: 98 }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 rounded-full px-4 py-2 text-sm mb-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <BarChart3 className="w-4 h-4" />
            Market Intelligence • 
            <span className="font-medium">{marketGrowth.toFixed(1)}% growth</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Market Analytics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time market insights, sector analysis, and competitive intelligence to guide your investment decisions.
          </p>
        </motion.div>

        {/* Sector Selector */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
            {Object.keys(marketData).map((sector) => (
              <button
                key={sector}
                onClick={() => setSelectedSector(sector)}
                className={`px-4 py-2 rounded-md transition-all text-sm font-medium ${
                  selectedSector === sector
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Market Overview Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: 'Market Size', value: marketData[selectedSector as keyof typeof marketData].size, icon: Globe },
            { label: 'YoY Growth', value: marketData[selectedSector as keyof typeof marketData].growth, icon: TrendingUp },
            { label: 'Active Deals', value: marketData[selectedSector as keyof typeof marketData].deals.toString(), icon: Handshake }
          ].map((metric, i) => (
            <motion.div 
              key={i} 
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <metric.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
              <div className="text-sm text-gray-600">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Analytics Dashboard
export function InvestorAnalytics() {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            Investment Analytics
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive analytics dashboard with portfolio performance, deal flow metrics, and predictive insights.
          </p>
        </motion.div>

        {/* Analytics Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { title: 'Total AUM', value: '₹248Cr', change: '+15.2%', icon: Briefcase },
            { title: 'Portfolio IRR', value: '28.5%', change: '+3.1%', icon: TrendingUp },
            { title: 'Active Deals', value: '47', change: '+8', icon: Handshake },
            { title: 'Success Rate', value: '68%', change: '+5.2%', icon: Award }
          ].map((metric, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-start mb-4">
                <metric.icon className="w-8 h-8 text-blue-400" />
                <div className="text-sm text-green-400 font-medium">{metric.change}</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
              <div className="text-gray-400">{metric.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA Section
export function InvestorFinalCTA() {
  const [memberCount, setMemberCount] = useState(1247);

  useEffect(() => {
    const interval = setInterval(() => {
      setMemberCount(prev => prev + Math.floor(Math.random() * 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold mb-8">
            Ready to Scale Your
            <br />
            Investment Portfolio?
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join {memberCount.toLocaleString()}+ investors building the future. Access premium deal flow, 
            AI-powered insights, and connect with the next generation of unicorns.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-12 py-6 text-lg font-semibold"
          >
            Start Investing Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-lg font-semibold"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Demo
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold">₹500Cr+</div>
            <div className="text-sm text-blue-100">Total Investments</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">150+</div>
            <div className="text-sm text-blue-100">Portfolio Companies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">23</div>
            <div className="text-sm text-blue-100">Successful Exits</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">28.5%</div>
            <div className="text-sm text-blue-100">Average IRR</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}