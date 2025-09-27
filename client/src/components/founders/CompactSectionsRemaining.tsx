import { motion } from 'motion/react';
import { 
  Database, BookOpen, BarChart3, Search, Filter, 
  Award, Star, MessageCircle, TrendingUp, Calendar,
  Users, Eye, Download, ArrowRight, CheckCircle,
  FileText, Shield, DollarSign
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Legal Templates Section
export function CompactLegalTemplates() {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-blue/5 to-cyan/10">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Legal Templates & Documents
          </h2>
          <p className="text-base text-muted-foreground">Ready-made legal agreements and templates. Download instantly and save on legal costs.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { name: "Co-founder Agreements", downloads: "1.2k", price: "Free", icon: Shield },
            { name: "Employee Contracts", downloads: "890", price: "Free", icon: FileText },
            { name: "Investor Term Sheets", downloads: "650", price: "Free", icon: DollarSign },
            { name: "Privacy Policies", downloads: "2.1k", price: "Free", icon: Eye },
            { name: "Terms of Service", downloads: "1.8k", price: "Free", icon: CheckCircle },
            { name: "NDA Templates", downloads: "3.2k", price: "Free", icon: Shield }
          ].map((template, i) => (
            <motion.div
              key={i}
              className="p-3 bg-white/80 backdrop-blur-sm rounded-lg border hover:shadow-md transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-2">
                <template.icon className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{template.price}</span>
              </div>
              <h3 className="text-sm mb-1">{template.name}</h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Download className="w-3 h-3" />
                <span>{template.downloads} downloads</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Resource Bank Section
export function CompactResourceBank() {
  return (
    <section className="py-8 px-4 bg-gradient-to-br from-background to-teal/5">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Resource Bank & Lead Generation
          </h2>
          <p className="text-base text-muted-foreground">Access 10,000+ verified contacts of investors and founders with lead-gen credits.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { icon: Database, title: "10,000+ Verified Contacts", desc: "Investors, founders, and industry experts", count: "10k+" },
              { icon: Search, title: "Advanced Search & Filters", desc: "Find exactly who you need", count: "Smart" },
              { icon: Download, title: "Export & Lead Credits", desc: "Download contact lists with credits", count: "500 Credits/month" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-3 p-3 bg-white/50 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: i * 0.1 } }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base">{item.title}</h3>
                    <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">{item.count}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg mb-3">Top Categories</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { category: "Angel Investors", count: "2,400" },
                { category: "VC Firms", count: "800" },
                { category: "Startup Founders", count: "4,200" },
                { category: "Industry Experts", count: "2,600" }
              ].map((cat, i) => (
                <div key={i} className="p-2 bg-white/80 rounded text-center">
                  <div className="text-lg text-teal-600">{cat.count}</div>
                  <div className="text-xs text-muted-foreground">{cat.category}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Blogging Space Section
export function CompactBloggingSpace() {
  return (
    <section className="py-8 px-4 bg-gradient-to-br from-purple/5 to-indigo/10">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Founder Blogging Space
          </h2>
          <p className="text-base text-muted-foreground">Share your startup journey, learnings, and connect with the community through stories.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              title: "From Idea to ₹10Cr ARR",
              author: "Rahul Sharma",
              company: "TechFlow",
              views: "2.3k",
              image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            },
            {
              title: "Raising Series A in India",
              author: "Priya Gupta", 
              company: "HealthTech",
              views: "1.8k",
              image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            },
            {
              title: "Building Remote Teams",
              author: "Arjun Patel",
              company: "EduPlatform",
              views: "1.2k", 
              image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            }
          ].map((blog, i) => (
            <motion.div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-xl border hover:shadow-lg transition-all group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className="h-32 overflow-hidden">
                <ImageWithFallback
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm mb-2">{blog.title}</h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div>
                    <div>{blog.author}</div>
                    <div>{blog.company}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{blog.views}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="sm">
            View All Stories
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Market Intelligence Section
export function CompactMarketIntelligence() {
  return (
    <section className="py-8 px-4 bg-gradient-to-br from-background to-indigo/5">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Market Intelligence Dashboard
          </h2>
          <p className="text-base text-muted-foreground">Real-time analytics on which startups are booming sector-wise across India.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg mb-3">Trending Sectors</h3>
            {[
              { sector: "FinTech", growth: "+45%", startups: "1,200+", color: "from-green-500 to-emerald-600" },
              { sector: "HealthTech", growth: "+38%", startups: "800+", color: "from-blue-500 to-cyan-600" },
              { sector: "EdTech", growth: "+32%", startups: "950+", color: "from-purple-500 to-pink-600" },
              { sector: "E-commerce", growth: "+28%", startups: "1,500+", color: "from-orange-500 to-red-600" }
            ].map((sector, i) => (
              <motion.div
                key={i}
                className="flex items-center justify-between p-3 bg-white/50 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: i * 0.1 } }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 bg-gradient-to-r ${sector.color} rounded`}></div>
                  <div>
                    <div className="text-sm">{sector.sector}</div>
                    <div className="text-xs text-muted-foreground">{sector.startups} startups</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-green-600">{sector.growth}</div>
                  <div className="text-xs text-muted-foreground">growth</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg mb-3">Live Metrics</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { metric: "Active Startups", value: "8,400+", change: "+12%" },
                { metric: "Funding This Month", value: "₹240Cr", change: "+8%" },
                { metric: "New Launches", value: "156", change: "+15%" },
                { metric: "Success Rate", value: "94%", change: "+3%" }
              ].map((metric, i) => (
                <motion.div
                  key={i}
                  className="p-3 bg-white/80 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-lg text-indigo-600">{metric.value}</div>
                  <div className="text-xs text-muted-foreground">{metric.metric}</div>
                  <div className="text-xs text-green-600">{metric.change}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}