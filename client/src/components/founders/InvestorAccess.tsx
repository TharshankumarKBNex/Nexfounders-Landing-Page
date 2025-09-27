import { motion } from 'motion/react';
import { useState } from 'react';
import { Badge, Building, Clock, Eye, TrendingUp, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface Investor {
  id: number;
  name: string;
  firm: string;
  focus: string[];
  status: 'Active' | 'Reviewing' | 'Investing';
  lastActivity: string;
  portfolioSize: number;
  avgTicket: string;
  verified: boolean;
}

export function InvestorAccess() {
  const [hoveredInvestor, setHoveredInvestor] = useState<number | null>(null);

  const investors: Investor[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      firm: "Delhi Angels",
      focus: ["FinTech", "SaaS", "AI"],
      status: "Active",
      lastActivity: "2 hours ago",
      portfolioSize: 47,
      avgTicket: "₹50L - ₹2Cr",
      verified: true
    },
    {
      id: 2,
      name: "Priya Sharma",
      firm: "Mumbai Ventures",
      focus: ["HealthTech", "EdTech"],
      status: "Reviewing",
      lastActivity: "1 day ago",
      portfolioSize: 23,
      avgTicket: "₹25L - ₹1Cr",
      verified: true
    },
    {
      id: 3,
      name: "Arjun Gupta",
      firm: "Bangalore Capital",
      focus: ["Enterprise", "B2B"],
      status: "Investing",
      lastActivity: "3 hours ago",
      portfolioSize: 35,
      avgTicket: "₹1Cr - ₹5Cr",
      verified: true
    },
    {
      id: 4,
      name: "Kavya Reddy",
      firm: "Hyderabad Fund",
      focus: ["Consumer", "D2C"],
      status: "Active",
      lastActivity: "30 min ago",
      portfolioSize: 29,
      avgTicket: "₹15L - ₹75L",
      verified: true
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'from-green-500 to-emerald-600';
      case 'Reviewing': return 'from-yellow-500 to-orange-600';
      case 'Investing': return 'from-blue-500 to-purple-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800 border-green-200';
      case 'Reviewing': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Investing': return 'bg-blue-100 text-blue-800 border-blue-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-blue/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Government-Verified Investor Access
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Apply to verified investors like job postings, see their activity, and pitch instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1681505531034-8d67054e07f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlc3RvciUyMG1lZXRpbmclMjBoYW5kc2hha2V8ZW58MXx8fHwxNzU4NzMyNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Investor meeting handshake"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Verified Investors", value: "1,247" },
                    { label: "Active This Week", value: "89" },
                    { label: "Funding This Month", value: "₹45Cr" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      className="bg-white/90 backdrop-blur-sm rounded-lg p-3 text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-lg text-primary">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6">Browse Active Investors</h3>
            
            {/* Job Board Style Grid */}
            <div className="space-y-4">
              {investors.map((investor, index) => (
                <motion.div
                  key={investor.id}
                  className="p-6 border rounded-xl bg-white/50 hover:bg-white/80 cursor-pointer transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
                  }}
                  onHoverStart={() => setHoveredInvestor(investor.id)}
                  onHoverEnd={() => setHoveredInvestor(null)}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${getStatusColor(investor.status)} rounded-lg flex items-center justify-center relative`}
                        animate={{
                          scale: hoveredInvestor === investor.id ? 1.1 : 1,
                        }}
                      >
                        <Building className="w-6 h-6 text-white" />
                        {investor.verified && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </motion.div>
                      
                      <div>
                        <h4 className="font-medium flex items-center gap-2">
                          {investor.name}
                          {investor.verified && (
                            <Badge variant="secondary" className="text-xs">
                              Verified
                            </Badge>
                          )}
                        </h4>
                        <p className="text-sm text-muted-foreground">{investor.firm}</p>
                        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{investor.lastActivity}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`px-3 py-1 rounded-full text-xs border ${getStatusBadgeColor(investor.status)}`}>
                      {investor.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Portfolio:</span>
                      <span className="ml-2">{investor.portfolioSize} startups</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Ticket Size:</span>
                      <span className="ml-2">{investor.avgTicket}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                      {investor.focus.map((area, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                        >
                          {area}
                        </span>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="sm" variant="outline">
                        Apply Now
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="text-center pt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Button 
                variant="outline" 
                className="hover:bg-primary hover:text-primary-foreground"
              >
                <Eye className="w-4 h-4 mr-2" />
                View All 1,247 Investors
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}