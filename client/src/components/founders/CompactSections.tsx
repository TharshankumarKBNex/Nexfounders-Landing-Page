import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  Users, Globe, Zap, FileText, Building, TrendingUp, 
  Code, Shield, Database, BookOpen, BarChart3, Search,
  Rocket, Star, ArrowRight, MapPin, Calendar, DollarSign,
  Download, Eye, MessageCircle, Filter, Award, CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Networking Hub Section
export function CompactNetworkingHub() {
  return (
    <section className="py-8 px-4 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Startup Networking Hub
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Connect with 1,000+ startups, collaborate on projects, and grow together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            {[
              { icon: Users, title: "1,000+ Active Startups", desc: "Connect with founders across India", color: "from-blue-500 to-purple-600" },
              { icon: Globe, title: "Global Collaboration", desc: "Work on real projects together", color: "from-green-500 to-teal-600" },
              { icon: Zap, title: "Weekly Events", desc: "Online networking events every week", color: "from-orange-500 to-red-600" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: i * 0.1 } }}
                viewport={{ once: true }}
              >
                <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-base mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Startup networking"
              className="w-full h-full object-cover opacity-30"
            />
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 bg-white/90 rounded-lg border shadow-sm flex items-center justify-center"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              >
                <Users className="w-3 h-3 text-blue-600" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Pitch Deck Sharing Section  
export function CompactPitchDeckSharing() {
  const pitchDecks = [
    { title: "FinTech Startup", company: "PayEasy", funding: "₹5Cr Series A", views: "2.3k", color: "from-green-500 to-emerald-600" },
    { title: "HealthTech Platform", company: "MediCare+", funding: "₹12Cr Series B", views: "1.8k", color: "from-blue-500 to-cyan-600" },
    { title: "EdTech Solution", company: "LearnPro", funding: "₹3Cr Seed", views: "1.2k", color: "from-purple-500 to-pink-600" }
  ];

  return (
    <section className="py-8 px-4 bg-gradient-to-br from-primary/5 to-blue/10">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Pitch Deck Sharing
          </h2>
          <p className="text-base text-muted-foreground">Access real pitch decks from successful startups and learn winning strategies.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {pitchDecks.map((deck, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border hover:shadow-lg transition-all group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className={`h-24 bg-gradient-to-r ${deck.color} rounded-lg mb-3 flex items-center justify-center group-hover:scale-105 transition-transform`}>
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base mb-1">{deck.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{deck.company}</p>
              <div className="flex items-center justify-between text-xs">
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded">{deck.funding}</span>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Eye className="w-3 h-3" />
                  <span>{deck.views}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Investor Access Section
export function CompactInvestorAccess() {
  return (
    <section className="py-8 px-4 bg-gradient-to-br from-background to-green/5">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Verified Investor Access
          </h2>
          <p className="text-base text-muted-foreground">Apply to government-verified investors like job postings and pitch instantly.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {[
              { icon: Building, title: "500+ Active Investors", desc: "Government verified angel investors and VCs", badge: "Verified" },
              { icon: TrendingUp, title: "Easy Application", desc: "Apply like job postings with one-click", badge: "Simple" },
              { icon: Calendar, title: "Quick Response", desc: "Get responses within 48 hours", badge: "Fast" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-start gap-3 p-3 bg-white/50 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0, transition: { delay: i * 0.1 } }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base">{item.title}</h3>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded">{item.badge}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg mb-3">Recent Success Stories</h3>
            <div className="space-y-3">
              {[
                { company: "TechFlow", amount: "₹5Cr", investor: "Matrix Partners" },
                { company: "HealthBot", amount: "₹12Cr", investor: "Sequoia Capital" },
                { company: "EduTech", amount: "₹3Cr", investor: "Blume Ventures" }
              ].map((story, i) => (
                <div key={i} className="flex items-center justify-between text-sm p-2 bg-white/80 rounded">
                  <span>{story.company}</span>
                  <span className="text-green-600">{story.amount}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Talent Discovery Section
export function CompactTalentDiscovery() {
  return (
    <section className="py-8 px-4 bg-gradient-to-br from-purple/5 to-pink/10">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Talent Discovery Platform
          </h2>
          <p className="text-base text-muted-foreground">Find co-founders, developers, designers, and marketers from our verified talent pool.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { role: "Co-Founders", count: "250+", skills: "Business, Strategy", color: "from-purple-500 to-pink-600", icon: Users },
            { role: "Developers", count: "800+", skills: "Full-stack, Mobile", color: "from-blue-500 to-cyan-600", icon: Code },
            { role: "Designers", count: "300+", skills: "UI/UX, Product", color: "from-green-500 to-teal-600", icon: Star }
          ].map((talent, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border hover:shadow-lg transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${talent.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <talent.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base mb-1">{talent.role}</h3>
              <p className="text-lg text-primary mb-1">{talent.count}</p>
              <p className="text-sm text-muted-foreground">{talent.skills}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Open Source Tools Section
export function CompactOpenSourceTools() {
  return (
    <section className="py-8 px-4 bg-gradient-to-br from-background to-orange/5">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Open-Source Tools Library
          </h2>
          <p className="text-base text-muted-foreground">Save money with curated open-source alternatives. Save ₹28L+ per year on software costs.</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4">
          {[
            { category: "Analytics", tools: "Google Analytics, Mixpanel", savings: "₹2L/year", icon: BarChart3 },
            { category: "Design", tools: "Figma, Canva", savings: "₹1.5L/year", icon: Star },
            { category: "Development", tools: "VS Code, GitHub", savings: "₹5L/year", icon: Code },
            { category: "Marketing", tools: "Mailchimp, Buffer", savings: "₹3L/year", icon: TrendingUp }
          ].map((tool, i) => (
            <motion.div
              key={i}
              className="p-3 bg-white/80 backdrop-blur-sm rounded-lg border hover:shadow-md transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <tool.icon className="w-6 h-6 text-orange-600 mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-sm mb-1">{tool.category}</h3>
              <p className="text-xs text-muted-foreground mb-2">{tool.tools}</p>
              <span className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded">{tool.savings}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Legal Templates Section
export function CompactLegalTemplates() {
  return (
    <section className="py-8 px-4 bg-gradient-to-br from-blue/5 to-cyan/10">
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

// Continue with remaining sections...