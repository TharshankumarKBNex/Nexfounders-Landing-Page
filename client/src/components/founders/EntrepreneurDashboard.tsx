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
  Handshake, AlertCircle, TrendingDown, Rocket, Crown,
  Send, UserPlus, GitBranch, Package, Edit3, Heart
} from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const cyclingWords = ['Build', 'Scale', 'Fundraise', 'Grow'];
const floatingIcons = [Rocket, Users, Code, TrendingUp];

// Professional Entrepreneur Hero Section
export function EntrepreneurHero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [liveStartupCount, setLiveStartupCount] = useState(12547);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setLiveStartupCount(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(countInterval);
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
          Startup Platform to{' '}
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
          Your all-in-one growth platform for startup founders. Apply to investors, source talent, access resources, and scale your startup with confidence.
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
            Join {Math.floor(liveStartupCount / 1000)}K+ Founders
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10 px-8 py-3 text-lg"
          >
            Explore Platform
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
            { value: "₹450Cr+", label: "Funding Raised" },
            { value: "1.2K+", label: "Verified Investors" },
            { value: "15K+", label: "Active Founders" },
            { value: "95%", label: "Success Rate" }
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

// Investor Applications Module
export function InvestorApplications() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [liveApplications, setLiveApplications] = useState(2847);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveApplications(prev => prev + Math.floor(Math.random() * 4));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const investors = [
    {
      id: 1,
      name: "Sequoia Capital India",
      type: "VC Firm",
      focus: "Early to Growth Stage",
      ticketSize: "₹5Cr - ₹50Cr",
      sectors: ["Technology", "SaaS", "Fintech"],
      location: "Bangalore",
      portfolio: "150+ companies",
      status: "accepting",
      matchScore: 9.2
    },
    {
      id: 2,
      name: "Accel Partners",
      type: "VC Firm", 
      focus: "Seed to Series B",
      ticketSize: "₹2Cr - ₹25Cr",
      sectors: ["AI/ML", "Enterprise", "Consumer"],
      location: "Mumbai",
      portfolio: "80+ companies",
      status: "selective",
      matchScore: 8.7
    },
    {
      id: 3,
      name: "Matrix Partners",
      type: "VC Firm",
      focus: "Series A & B",
      ticketSize: "₹8Cr - ₹40Cr", 
      sectors: ["Healthcare", "Fintech", "B2B"],
      location: "Delhi",
      portfolio: "120+ companies",
      status: "accepting",
      matchScore: 8.9
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
            <Send className="w-4 h-4" />
            Investor Applications • 
            <span className="font-medium">{liveApplications.toLocaleString()}+ sent today</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Apply to Verified Investors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with 1,200+ verified investors using AI-powered matching. Get funded faster with personalized applications and real-time tracking.
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
            {['all', 'accepting', 'selective', 'closed'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-md transition-all capitalize text-sm font-medium ${
                  activeFilter === filter
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Investors Grid */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {investors.map((investor, i) => (
            <motion.div
              key={investor.id}
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{investor.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Building className="w-4 h-4" />
                        {investor.type}
                        <MapPin className="w-4 h-4 ml-2" />
                        {investor.location}
                      </div>
                      <div className="text-sm text-gray-600">
                        {investor.portfolio} • {investor.focus}
                      </div>
                    </div>
                    <Badge className={`${
                      investor.status === 'accepting' ? 'bg-green-100 text-green-800' :
                      investor.status === 'selective' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {investor.status}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {investor.sectors.map((sector, index) => (
                      <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600 mb-1">{investor.ticketSize}</div>
                  <div className="text-sm text-gray-600 mb-2">Investment Range</div>
                  <div className="text-sm text-gray-900 font-medium">{investor.focus}</div>
                  <div className="text-sm text-gray-600">Stage Focus</div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="text-2xl font-bold text-green-600">{investor.matchScore}</div>
                    <div className="text-sm text-gray-600 ml-1">/10</div>
                  </div>
                  <div className="text-sm text-gray-600 mb-4">Match Score</div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                      <Send className="w-4 h-4 mr-1" />
                      Apply
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
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

// Talent & Co-founder Sourcing Module
export function TalentSourcing() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [liveTalentCount, setLiveTalentCount] = useState(8640);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveTalentCount(prev => prev + Math.floor(Math.random() * 6));
      setActiveCategory(prev => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const talentCategories = [
    { 
      name: "Co-Founders", 
      count: "1,240+", 
      desc: "Technical and business co-founders ready to join", 
      icon: UserPlus, 
      color: "bg-blue-500"
    },
    { 
      name: "Tech Talent", 
      count: "3,200+", 
      desc: "Developers, engineers, and technical experts", 
      icon: Code, 
      color: "bg-green-500"
    },
    { 
      name: "Product & Design", 
      count: "890+", 
      desc: "Product managers, UX/UI designers, creators", 
      icon: Lightbulb, 
      color: "bg-purple-500"
    },
    { 
      name: "Growth & Sales", 
      count: "1,310+", 
      desc: "Marketing, sales, and business development pros", 
      icon: TrendingUp, 
      color: "bg-orange-500"
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
            <Users className="w-4 h-4" />
            Talent Network • 
            <span className="font-medium">{liveTalentCount.toLocaleString()}+ professionals</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Find Co-Founders & Talent
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with vetted co-founders and top talent from 150+ cities. Build your dream team with AI-powered matching and verified profiles.
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
          {talentCategories.map((category, i) => (
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
                className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <category.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{category.desc}</p>
              
              <div className="text-2xl font-bold text-gray-900">{category.count}</div>
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
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">AI-Powered Talent Matching</h3>
            <p className="text-gray-600">Find the perfect co-founder or team member for your startup</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { feature: "Skill Verification", desc: "100% verified profiles and portfolios", icon: CheckCircle },
              { feature: "Culture Fit", desc: "AI-powered personality matching", icon: Heart },
              { feature: "Global Reach", desc: "Talent from 150+ cities worldwide", icon: Globe }
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

// Resource Bank Module  
export function ResourceBank() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [downloadCount, setDownloadCount] = useState(45230);

  useEffect(() => {
    const interval = setInterval(() => {
      setDownloadCount(prev => prev + Math.floor(Math.random() * 8));
      setActiveCategory(prev => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const resourceCategories = [
    { 
      name: "Investor Database", 
      count: "1,200+", 
      desc: "Verified investor contacts and profiles", 
      icon: Database, 
      color: "bg-blue-500"
    },
    { 
      name: "Pitch Templates", 
      count: "50+", 
      desc: "Professional pitch decks and templates", 
      icon: FileText, 
      color: "bg-green-500"
    },
    { 
      name: "Market Research", 
      count: "200+", 
      desc: "Industry reports and market analysis", 
      icon: BarChart3, 
      color: "bg-purple-500"
    },
    { 
      name: "Startup Guides", 
      count: "80+", 
      desc: "Step-by-step startup building guides", 
      icon: BookOpen, 
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
            <Download className="w-4 h-4" />
            Resource Bank • 
            <span className="font-medium">{downloadCount.toLocaleString()}+ downloads</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Resource Library
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our comprehensive resource bank with investor data, templates, guides, and market research to accelerate your startup journey.
          </p>
        </motion.div>

        {/* Resource Categories */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {resourceCategories.map((category, i) => (
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
                className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <category.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{category.desc}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                <Button size="sm" variant="outline">
                  <Download className="w-4 h-4 mr-1" />
                  Access
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Resources */}
        <motion.div
          className="bg-gray-50 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Featured Resources</h3>
            <p className="text-gray-600">Most popular downloads this month</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Top 100 VCs in India", downloads: "2.1K", icon: Star },
              { title: "Pitch Deck Template 2024", downloads: "1.8K", icon: FileText },
              { title: "Startup Legal Checklist", downloads: "1.5K", icon: CheckCircle }
            ].map((resource, i) => (
              <motion.div 
                key={i} 
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">{resource.title}</div>
                    <div className="text-sm text-gray-600">{resource.downloads} downloads</div>
                  </div>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Download className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Legal Hub Module
export function LegalHub() {
  const [selectedCategory, setSelectedCategory] = useState('Popular');
  const [totalDownloads, setTotalDownloads] = useState(127450);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalDownloads(prev => prev + Math.floor(Math.random() * 5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const legalCategories = {
    'Popular': [
      { name: "Co-founder Agreement", downloads: "5.2K", category: "Founding" },
      { name: "Employee Offer Letter", downloads: "4.8K", category: "HR" },
      { name: "Non-Disclosure Agreement", downloads: "4.1K", category: "Legal" },
      { name: "Terms of Service", downloads: "3.7K", category: "Compliance" }
    ],
    'Founding': [
      { name: "Co-founder Agreement", downloads: "5.2K", category: "Founding" },
      { name: "Equity Split Calculator", downloads: "2.1K", category: "Founding" },
      { name: "Vesting Schedule Template", downloads: "1.8K", category: "Founding" },
      { name: "Advisory Agreement", downloads: "1.5K", category: "Founding" }
    ],
    'Funding': [
      { name: "Term Sheet Template", downloads: "2.8K", category: "Funding" },
      { name: "Investor Agreement", downloads: "2.2K", category: "Funding" },
      { name: "Shareholder Agreement", downloads: "1.9K", category: "Funding" },
      { name: "Board Resolution", downloads: "1.4K", category: "Funding" }
    ]
  };

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
            <Shield className="w-4 h-4" />
            Legal Hub • 
            <span className="font-medium">{totalDownloads.toLocaleString()}+ downloads</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            100+ Legal Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download essential startup legal agreements and templates. Lawyer-reviewed documents to protect your business and accelerate growth.
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
            {Object.keys(legalCategories).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md transition-all text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Legal Templates Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {legalCategories[selectedCategory as keyof typeof legalCategories].map((template, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{template.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Badge variant="outline">{template.category}</Badge>
                    <span>• {template.downloads} downloads</span>
                  </div>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legal Support CTA */}
        <motion.div
          className="bg-blue-600 rounded-xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Need Custom Legal Support?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Connect with our network of startup lawyers for personalized legal advice and custom document drafting.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Get Legal Help
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Open Source Tools Module
export function OpenSourceTools() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [savedAmount, setSavedAmount] = useState(4250000);

  useEffect(() => {
    const interval = setInterval(() => {
      setSavedAmount(prev => prev + Math.floor(Math.random() * 1000));
      setActiveCategory(prev => (prev + 1) % 4);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const toolCategories = [
    { 
      name: "Development Tools", 
      count: "50+", 
      desc: "Code libraries, frameworks, and dev tools", 
      icon: Code, 
      color: "bg-blue-500",
      savings: "₹85K avg saved"
    },
    { 
      name: "Design & UI", 
      count: "35+", 
      desc: "Design systems, icons, and UI components", 
      icon: Lightbulb, 
      color: "bg-purple-500",
      savings: "₹45K avg saved"
    },
    { 
      name: "Analytics & Monitoring", 
      count: "25+", 
      desc: "Analytics, monitoring, and tracking tools", 
      icon: BarChart3, 
      color: "bg-green-500",
      savings: "₹65K avg saved"
    },
    { 
      name: "Business Tools", 
      count: "40+", 
      desc: "Marketing, CRM, and business automation", 
      icon: Briefcase, 
      color: "bg-orange-500",
      savings: "₹95K avg saved"
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
            <Package className="w-4 h-4" />
            Open Source Toolkit • 
            <span className="font-medium">₹{(savedAmount / 100000).toFixed(1)}L+ saved</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Open Source Toolkit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save thousands on software costs with our curated collection of open-source tools. Everything you need to build and scale your startup.
          </p>
        </motion.div>

        {/* Tool Categories */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {toolCategories.map((category, i) => (
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
                className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <category.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{category.desc}</p>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                <div className="text-sm text-green-600 font-medium">{category.savings}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Tools */}
        <motion.div
          className="bg-gray-50 rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Featured Open Source Tools</h3>
            <p className="text-gray-600">Top picks that can save you ₹2L+ annually</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                name: "Supabase", 
                category: "Backend as a Service", 
                savings: "₹3.5L/year",
                description: "Alternative to Firebase",
                icon: Database 
              },
              { 
                name: "Plausible Analytics", 
                category: "Web Analytics", 
                savings: "₹1.2L/year",
                description: "Alternative to Google Analytics Pro",
                icon: BarChart3 
              },
              { 
                name: "Chatwoot", 
                category: "Customer Support", 
                savings: "₹2.8L/year",
                description: "Alternative to Intercom/Zendesk",
                icon: MessageCircle 
              }
            ].map((tool, i) => (
              <motion.div 
                key={i} 
                className="bg-white rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-all"
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-4">
                  <tool.icon className="w-8 h-8 text-blue-600" />
                  <div className="text-sm font-medium text-green-600">{tool.savings}</div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-1">{tool.name}</h4>
                <p className="text-sm text-blue-600 mb-2">{tool.category}</p>
                <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                <Button size="sm" variant="outline" className="w-full">
                  <GitBranch className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Startup Blogging Platform
export function StartupBlogging() {
  const [publishedPosts, setPublishedPosts] = useState(8942);

  useEffect(() => {
    const interval = setInterval(() => {
      setPublishedPosts(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const blogFeatures = [
    {
      title: "Share Your Journey",
      description: "Document your startup story, challenges, and victories",
      icon: Edit3,
      color: "bg-blue-500"
    },
    {
      title: "Build Your Brand",
      description: "Establish thought leadership in your industry",
      icon: Star,
      color: "bg-purple-500"
    },
    {
      title: "Connect with Community",
      description: "Engage with 15K+ founders and get feedback",
      icon: Users,
      color: "bg-green-500"
    },
    {
      title: "SEO Optimized",
      description: "Built-in SEO tools to maximize your reach",
      icon: TrendingUp,
      color: "bg-orange-500"
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
            <Edit3 className="w-4 h-4" />
            Startup Blog • 
            <span className="font-medium">{publishedPosts.toLocaleString()}+ stories published</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-semibold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Share Your Startup Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your personal brand, share insights, and connect with the startup community. Our blogging platform helps you reach thousands of founders and investors.
          </p>
        </motion.div>

        {/* Blog Features */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {blogFeatures.map((feature, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </motion.div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Blog CTA */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Ready to Share Your Story?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join 15,000+ founders sharing their journey. Get featured, build your audience, and inspire the next generation of entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3"
            >
              <Edit3 className="w-5 h-5 mr-2" />
              Start Writing
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
            >
              <Eye className="w-5 h-5 mr-2" />
              Read Stories
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA Section
export function EntrepreneurFinalCTA() {
  const [founderCount, setFounderCount] = useState(15247);

  useEffect(() => {
    const interval = setInterval(() => {
      setFounderCount(prev => prev + Math.floor(Math.random() * 4));
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
            Ready to Build Your
            <br />
            Dream Startup?
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            Join {founderCount.toLocaleString()}+ founders building the future. Access investors, talent, resources, and everything you need to succeed.
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
            Start Building Today
            <Rocket className="w-5 h-5 ml-2" />
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white/30 text-white hover:bg-white/10 px-12 py-6 text-lg font-semibold"
          >
            <Eye className="w-5 h-5 mr-2" />
            Explore Platform
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
            <div className="text-2xl font-bold">₹450Cr+</div>
            <div className="text-sm text-blue-100">Funding Raised</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">1,200+</div>
            <div className="text-sm text-blue-100">Verified Investors</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">15K+</div>
            <div className="text-sm text-blue-100">Active Founders</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">95%</div>
            <div className="text-sm text-blue-100">Success Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}