import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Building, Zap, Calendar, DollarSign, TrendingUp, Users, Code, Star,
  ArrowRight, Sparkles, Target, Brain, Lightbulb, Clock, Shield,
  Eye, Download, MessageCircle, Filter, Award, CheckCircle,
  BarChart3, Globe, FileText, Search, Database, RefreshCw
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Due Diligence Style - Direct Investor Access
export function DueDiligenceInvestorAccess() {
  const [activeInvestor, setActiveInvestor] = useState(0);
  const [animatedFunding, setAnimatedFunding] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedFunding(prev => (prev + 1) % 100);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const investorCategories = [
    {
      title: "Angel Investors Network",
      count: "500+",
      description: "High-net-worth individuals investing in early-stage startups with proven track records",
      responseRate: "95%",
      avgTicket: "₹25L - ₹2Cr",
      icon: Users,
      color: "from-blue-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      features: ["Verified Accreditation", "Investment History", "Sector Preferences", "Direct Contact"]
    },
    {
      title: "Venture Capital Firms",
      count: "180+",
      description: "Top-tier VC firms with dedicated India funds and international presence",
      responseRate: "87%",
      avgTicket: "₹5Cr - ₹50Cr",
      icon: Building,
      color: "from-green-500 to-emerald-600",
      bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      features: ["Fund Size Data", "Portfolio Analysis", "Investment Thesis", "Partnership Track Record"]
    },
    {
      title: "Corporate Venture Arms",
      count: "120+",
      description: "Strategic investors from Fortune 500 companies seeking innovation partnerships",
      responseRate: "78%",
      avgTicket: "₹10Cr - ₹100Cr",
      icon: Target,
      color: "from-purple-500 to-pink-600",
      bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      features: ["Strategic Value", "Market Access", "Technology Integration", "Global Reach"]
    },
    {
      title: "Family Offices & HNIs",
      count: "300+",
      description: "Ultra-high-net-worth families and individuals with dedicated investment teams",
      responseRate: "92%",
      avgTicket: "₹1Cr - ₹25Cr",
      icon: Shield,
      color: "from-orange-500 to-red-600",
      bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      features: ["Long-term Capital", "Patient Money", "Network Access", "Mentorship Support"]
    },
    {
      title: "Government & Institutional",
      count: "80+",
      description: "Government funds, development banks, and institutional investors supporting startups",
      responseRate: "85%",
      avgTicket: "₹2Cr - ₹20Cr",
      icon: Award,
      color: "from-indigo-500 to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      features: ["Regulatory Support", "Policy Advocacy", "Market Validation", "Credibility Boost"]
    },
    {
      title: "Sector-Specific Funds",
      count: "250+",
      description: "Specialized funds focusing on specific sectors like FinTech, HealthTech, and CleanTech",
      responseRate: "91%",
      avgTicket: "₹3Cr - ₹30Cr",
      icon: Zap,
      color: "from-teal-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      features: ["Domain Expertise", "Industry Connections", "Operational Support", "Technical Guidance"]
    }
  ];

  const recentDeals = [
    { company: "FinTech Pro", amount: "₹25Cr", investor: "Sequoia Capital", stage: "Series B", success: "Closed" },
    { company: "HealthAI Labs", amount: "₹18Cr", investor: "Matrix Partners", stage: "Series A", success: "Closed" },
    { company: "EduTech Plus", amount: "₹12Cr", investor: "Blume Ventures", stage: "Series A", success: "Closed" },
    { company: "CleanEnergy Co", amount: "₹35Cr", investor: "Lightspeed India", stage: "Series B", success: "Closed" },
    { company: "AgriTech Solutions", amount: "₹8Cr", investor: "Accel Partners", stage: "Seed", success: "Closed" }
  ];

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

        {/* Floating investment icons */}
        {[Building, DollarSign, TrendingUp, Users].map((Icon, i) => (
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
            <Building className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Direct Investor Network</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Direct Investor Access
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Connect directly with 1,430+ verified investors across India and internationally. 
            Skip the middlemen, apply like job applications, and get responses within 48 hours.
          </p>
        </motion.div>

        {/* Live Funding Tracker */}
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
                className="text-5xl text-blue-400 mb-2"
                key={animatedFunding}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                ₹{(850 + animatedFunding * 2).toLocaleString()}Cr+
              </motion.div>
              <div className="text-blue-200">Total Funding Facilitated</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl text-white mb-2">48hrs</div>
              <div className="text-blue-200">Average Response Time</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl text-green-400 mb-2">87%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Investor Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {investorCategories.map((category, i) => (
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
              onHoverStart={() => setActiveInvestor(i)}
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
                  <div className="text-right">
                    <div className="text-2xl text-white">{category.count}</div>
                    <div className="text-sm text-blue-200">Investors</div>
                  </div>
                </div>

                <h3 className="text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>

                <p className="text-sm text-blue-100 mb-6 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Response Rate:</span>
                    <span className="text-green-400">{category.responseRate}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Avg Ticket:</span>
                    <span className="text-white">{category.avgTicket}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-xs text-blue-200 uppercase tracking-wider">Key Features:</div>
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
                  <Building className="w-4 h-4 mr-2" />
                  Connect Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Recent Success Stories */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-white mb-8 text-center">Recent Success Stories</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {recentDeals.map((deal, i) => (
              <motion.div
                key={i}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 + 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-center">
                  <div className="text-lg text-white mb-1">{deal.company}</div>
                  <div className="text-2xl text-green-400 mb-2">{deal.amount}</div>
                  <div className="text-xs text-blue-200 mb-1">{deal.investor}</div>
                  <div className="text-xs text-blue-200">{deal.stage}</div>
                  <div className="mt-3">
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                      ✓ {deal.success}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
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
            className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-left">
              <h3 className="text-2xl text-white mb-2">Ready to Raise Funding?</h3>
              <p className="text-blue-100">Apply to investors like job applications</p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl"
            >
              Start Applying
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Due Diligence Style - Talent Discovery
export function DueDiligenceTalentDiscovery() {
  const [activeRole, setActiveRole] = useState(0);
  const [talentCounter, setTalentCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTalentCounter(prev => (prev + 1) % 200);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const talentCategories = [
    {
      role: "Technical Co-Founders",
      count: "420+",
      description: "Senior engineers and tech leaders ready to co-found with business expertise",
      skills: "Full-Stack Development, AI/ML, Cloud Architecture, Product Engineering",
      avgExp: "10+ years",
      successRate: "94%",
      icon: Brain,
      color: "from-purple-500 to-pink-600",
      bgImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      expertise: ["Startup Experience", "Technical Leadership", "Product Vision", "Team Building"]
    },
    {
      role: "Senior Developers",
      count: "1,200+",
      description: "Full-stack and specialized developers from top tech companies and startups",
      skills: "React, Node.js, Python, DevOps, Mobile Development, Blockchain",
      avgExp: "6+ years",
      successRate: "97%",
      icon: Code,
      color: "from-blue-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      expertise: ["Scalable Systems", "Modern Frameworks", "Code Quality", "Mentorship"]
    },
    {
      role: "Product Designers",
      count: "380+",
      description: "UX/UI experts who understand startup product needs and user psychology",
      skills: "Product Design, User Research, Design Systems, Prototyping",
      avgExp: "5+ years",
      successRate: "92%",
      icon: Star,
      color: "from-green-500 to-teal-600",
      bgImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      expertise: ["User-Centric Design", "Conversion Optimization", "Brand Identity", "Design Strategy"]
    },
    {
      role: "Growth Marketers",
      count: "290+",
      description: "Data-driven marketers with proven track records in startup growth",
      skills: "Growth Hacking, Performance Marketing, Analytics, Content Strategy",
      avgExp: "4+ years",
      successRate: "89%",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600",
      bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      expertise: ["User Acquisition", "Retention Strategies", "A/B Testing", "ROI Optimization"]
    },
    {
      role: "Sales Leaders",
      count: "180+",
      description: "Enterprise and startup sales professionals who can build revenue engines",
      skills: "B2B Sales, Enterprise Deals, Sales Operations, Revenue Strategy",
      avgExp: "7+ years",
      successRate: "91%",
      icon: Target,
      color: "from-indigo-500 to-purple-600",
      bgImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      expertise: ["Pipeline Management", "Deal Closing", "Team Scaling", "Revenue Growth"]
    },
    {
      role: "Operations Experts",
      count: "150+",
      description: "Operations and finance professionals who can scale business operations",
      skills: "Business Operations, Financial Planning, Process Optimization, Strategy",
      avgExp: "8+ years",
      successRate: "95%",
      icon: Award,
      color: "from-teal-500 to-cyan-600",
      bgImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      expertise: ["Operational Excellence", "Financial Modeling", "Strategic Planning", "Compliance"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
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

        {/* Floating talent icons */}
        {[Users, Code, Star, TrendingUp].map((Icon, i) => (
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
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Elite Talent Network</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Find Your Dream Team
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Connect with 2,620+ pre-vetted professionals from top companies. Find co-founders, senior developers, 
            designers, and specialists ready to join your startup journey.
          </p>
        </motion.div>

        {/* Live Talent Counter */}
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
                className="text-5xl text-blue-400 mb-2"
                key={talentCounter}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {(2620 + talentCounter).toLocaleString()}+
              </motion.div>
              <div className="text-blue-200">Vetted Professionals</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl text-white mb-2">12 days</div>
              <div className="text-blue-200">Avg Time to Hire</div>
            </div>
            <div className="w-px h-16 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl text-green-400 mb-2">96%</div>
              <div className="text-blue-200">Retention Rate</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Talent Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {talentCategories.map((category, i) => (
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
              onHoverStart={() => setActiveRole(i)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
                <ImageWithFallback
                  src={category.bgImage}
                  alt={category.role}
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
                    <div className="text-2xl text-white">{category.count}</div>
                    <div className="text-sm text-blue-200">Available</div>
                  </div>
                </div>

                <h3 className="text-xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {category.role}
                </h3>

                <p className="text-sm text-blue-100 mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Avg Experience:</span>
                    <span className="text-white">{category.avgExp}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-200">Success Rate:</span>
                    <span className="text-green-400">{category.successRate}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-xs text-blue-200 uppercase tracking-wider">Core Skills:</div>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    {category.skills}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-xs text-blue-200 uppercase tracking-wider">Expertise:</div>
                  <div className="flex flex-wrap gap-2">
                    {category.expertise.slice(0, 2).map((expertise, expI) => (
                      <span 
                        key={expI}
                        className="text-xs bg-white/20 text-white px-2 py-1 rounded-full"
                      >
                        {expertise}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  size="sm"
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl backdrop-blur-sm"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Browse Talent
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Successful Hires", value: "3,500+", icon: CheckCircle },
            { label: "Top Companies", value: "150+", icon: Building },
            { label: "Avg Salary Saved", value: "40%", icon: DollarSign },
            { label: "Time to Hire", value: "12 days", icon: Clock }
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
              <h3 className="text-2xl text-white mb-2">Ready to Build Your Team?</h3>
              <p className="text-blue-100">Connect with elite professionals today</p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl"
            >
              Start Hiring
              <Users className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}