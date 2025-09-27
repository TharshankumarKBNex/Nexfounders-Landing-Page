import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  FileText, Building, TrendingUp, Code, Shield, Database,
  Users, Eye, Download, ArrowRight, CheckCircle, Star,
  Zap, Calendar, DollarSign, Award, Target, Briefcase,
  Lightbulb, MessageCircle, Filter, BarChart3, Sparkles
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Enhanced Pitch Deck Sharing
export function EnhancedPitchDeckSharing() {
  const [hoveredDeck, setHoveredDeck] = useState<number | null>(null);

  const pitchDecks = [
    { 
      title: "FinTech Revolution", 
      company: "PayEasy", 
      funding: "₹5Cr Series A", 
      views: "2.3k",
      downloads: "450",
      rating: 4.8,
      color: "from-green-500 to-emerald-600",
      category: "FinTech",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    { 
      title: "HealthTech Platform", 
      company: "MediCare+", 
      funding: "₹12Cr Series B", 
      views: "1.8k",
      downloads: "320",
      rating: 4.9,
      color: "from-blue-500 to-cyan-600",
      category: "HealthTech",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    { 
      title: "EdTech Innovation", 
      company: "LearnPro", 
      funding: "₹3Cr Seed", 
      views: "1.2k",
      downloads: "280",
      rating: 4.7,
      color: "from-purple-500 to-pink-600",
      category: "EdTech",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FileText className="w-4 h-4" />
            <span className="text-sm">Learn from Success</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Real Pitch Decks Library
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access actual pitch decks from successful startups. Learn winning strategies, 
            download templates, and understand what investors are looking for.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pitchDecks.map((deck, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-green-200 hover:border-green-400 hover:shadow-2xl transition-all bg-white/80 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: i * 0.2 }
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredDeck(i)}
              onHoverEnd={() => setHoveredDeck(null)}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={deck.image}
                  alt={deck.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${deck.color} opacity-70`}></div>
                
                {/* Floating badge */}
                <motion.div
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm"
                  initial={{ scale: 0, rotate: -10 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: i * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                >
                  {deck.category}
                </motion.div>

                {/* Rating stars */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                  {Array.from({ length: 5 }).map((_, starI) => (
                    <Star 
                      key={starI} 
                      className={`w-3 h-3 ${starI < Math.floor(deck.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-xs ml-1">{deck.rating}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-2 group-hover:text-green-600 transition-colors">
                  {deck.title}
                </h3>
                <p className="text-muted-foreground mb-4">{deck.company}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {deck.funding}
                    </span>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        <span>{deck.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{deck.downloads}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="flex items-center justify-between"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.8 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    size="sm" 
                    className="bg-green-600 hover:bg-green-700 text-white rounded-xl"
                  >
                    View Deck
                  </Button>
                  <motion.div
                    className="text-green-600"
                    animate={{ x: hoveredDeck === i ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Success Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-green-100 to-emerald-100 rounded-3xl border border-green-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Pitch Decks", value: "250+", icon: FileText },
            { label: "Total Funding", value: "₹850Cr", icon: DollarSign },
            { label: "Success Rate", value: "78%", icon: TrendingUp },
            { label: "Downloads", value: "15k+", icon: Download }
          ].map((metric, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 + 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <metric.icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl text-green-800">{metric.value}</div>
              <div className="text-sm text-green-600">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced Investor Access
export function EnhancedInvestorAccess() {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => (prev + 1) % 500);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const investorFeatures = [
    { 
      icon: Building, 
      title: "500+ Verified Investors", 
      desc: "Government-verified angel investors, VCs, and institutions", 
      badge: "Verified",
      metric: "95% response rate",
      color: "from-blue-500 to-cyan-600"
    },
    { 
      icon: Zap, 
      title: "One-Click Applications", 
      desc: "Apply to multiple investors with our streamlined process", 
      badge: "Instant",
      metric: "3x faster applications",
      color: "from-green-500 to-emerald-600"
    },
    { 
      icon: Calendar, 
      title: "48-Hour Response", 
      desc: "Get feedback and responses within 48 hours guaranteed", 
      badge: "Fast Track",
      metric: "Average 24hr response",
      color: "from-purple-500 to-pink-600"
    }
  ];

  const recentDeals = [
    { company: "TechFlow AI", amount: "₹5Cr", investor: "Matrix Partners", stage: "Series A", logo: "🚀" },
    { company: "HealthBot Pro", amount: "₹12Cr", investor: "Sequoia Capital", stage: "Series B", logo: "🏥" },
    { company: "EduTech Plus", amount: "₹3Cr", investor: "Blume Ventures", stage: "Seed", logo: "📚" },
    { company: "FinanceAI", amount: "₹8Cr", investor: "Accel Partners", stage: "Series A", logo: "💰" },
    { company: "GreenTech", amount: "₹6Cr", investor: "Lightspeed India", stage: "Series A", logo: "🌱" }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 relative overflow-hidden">
      {/* Animated money/investment symbols */}
      <div className="absolute inset-0">
        {['₹', '$', '€', '£', '¥'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl text-blue-200/20 font-bold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              rotate: [0, 360, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          >
            {symbol}
          </motion.div>
        ))}
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
            <Building className="w-4 h-4" />
            <span className="text-sm">Verified Investors</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Direct Investor Access
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect directly with India's top investors. Apply like job postings, 
            get quick responses, and raise funding faster than ever.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {investorFeatures.map((feature, i) => (
              <motion.div 
                key={i}
                className="group flex items-start gap-6 p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-blue-200 hover:border-blue-400 hover:shadow-2xl transition-all"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0,
                  transition: { delay: i * 0.2 }
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all`}
                  whileHover={{ scale: 1.1, rotate: 6 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.desc}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium">
                      {feature.metric}
                    </span>
                    <motion.div
                      className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Live funding tracker */}
            <div className="p-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl border border-blue-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl text-blue-800">Live Funding Tracker</h3>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full"
                />
              </div>
              
              <div className="text-center mb-6">
                <motion.div
                  className="text-4xl text-blue-600 mb-2"
                  key={animatedValue}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  ₹{(450 + animatedValue).toLocaleString()}Cr+
                </motion.div>
                <div className="text-sm text-blue-600">Raised this month</div>
              </div>

              <div className="space-y-3">
                {recentDeals.slice(0, 3).map((deal, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center justify-between p-3 bg-white/80 rounded-xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 + 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{deal.logo}</span>
                      <div>
                        <div className="text-sm font-medium">{deal.company}</div>
                        <div className="text-xs text-muted-foreground">{deal.stage}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-green-600 font-medium">{deal.amount}</div>
                      <div className="text-xs text-muted-foreground">{deal.investor}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              className="p-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl mb-4">Ready to Raise Funding?</h3>
              <p className="mb-6 text-blue-100">Join 1,500+ startups that have successfully raised funding through our platform.</p>
              <Button
                size="lg"
                className="w-full bg-white text-blue-600 hover:bg-blue-50 rounded-xl"
              >
                Apply to Investors
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}