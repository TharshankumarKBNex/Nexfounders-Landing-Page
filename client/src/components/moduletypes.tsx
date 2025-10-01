import { motion } from 'motion/react';
import { 
  Users, Globe, Zap, FileText, Building, TrendingUp, 
  Code, Shield, Database, BookOpen, BarChart3, Search,
  Rocket, Star, ArrowRight, MapPin, Calendar, DollarSign,
  Download, Eye, MessageCircle, Filter, Award, CheckCircle,
  GraduationCap, Brain, Target, Briefcase, Play, ExternalLink,
  Smartphone, Monitor, Palette, Server, Network, Layers,
  Coffee, Lightbulb, Clock, Plus, Crown, ChevronRight,
  Menu, X
} from 'lucide-react';
import { Button } from './ui/button';

export function ModulesShowcase() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Three Core Modules, One Unified Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nexfounders operates through specialized modules designed to address every aspect of the startup journey—from founding and funding to team building and career growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Entrepreneurs Module */}
          <motion.div
            className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border hover:shadow-xl transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0 } }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
            id="entrepreneurs"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl mb-4 text-gray-900">Entrepreneur Module</h3>
            <p className="text-muted-foreground mb-6">
              Helps startups showcase verified profiles, connect with investors, and access essential tools for building successful ventures.
            </p>
            
            <div className="space-y-3 mb-6">
              {[
                { icon: CheckCircle, text: "Showcase verified startup profiles" },
                { icon: Building, text: "Connect with 500+ verified investors" },
                { icon: FileText, text: "Access essential startup tools & templates" },
                { icon: Users, text: "Network with 10K+ entrepreneurs" },
                { icon: TrendingUp, text: "Market intelligence & analytics" },
                { icon: Shield, text: "Legal compliance support" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <item.icon className="w-4 h-4 text-blue-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-blue-50 rounded-lg p-3 mb-4">
              <div className="text-xs text-blue-800 font-medium mb-1">Success Metrics</div>
              <div className="text-sm text-blue-700">₹500Cr+ raised • 1,500+ startups • 85% funding success rate</div>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <Button className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Launch Your Startup
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm">
                View Demo
              </Button>
            </div>
          </motion.div>

          {/* Investors Module */}
          <motion.div
            className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border hover:shadow-xl transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
            id="investors"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Crown className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl mb-4 text-gray-900">Investor Module</h3>
            <p className="text-muted-foreground mb-6">
              Streamlines deal flow with due diligence-ready data, comprehensive portfolio management, and targeted startup discovery.
            </p>
            
            <div className="space-y-3 mb-6">
              {[
                { icon: Search, text: "Targeted startup discovery & screening" },
                { icon: Database, text: "Due diligence-ready data & analytics" },
                { icon: BarChart3, text: "Comprehensive portfolio management" },
                { icon: Shield, text: "Risk assessment frameworks" },
                { icon: Brain, text: "AI-powered investment insights" },
                { icon: TrendingUp, text: "Market trend analysis" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <item.icon className="w-4 h-4 text-green-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-green-50 rounded-lg p-3 mb-4">
              <div className="text-xs text-green-800 font-medium mb-1">Platform Metrics</div>
              <div className="text-sm text-green-700">₹300Cr+ facilitated • 200+ active investors • 92% deal accuracy</div>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <Button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Start Investing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm">
                View Pipeline
              </Button>
            </div>
          </motion.div>

          {/* Talent Module */}
          <motion.div
            className="group p-6 bg-white/80 backdrop-blur-sm rounded-2xl border hover:shadow-xl transition-all cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            whileHover={{ scale: 1.02, y: -5 }}
            viewport={{ once: true }}
            id="talent"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl mb-4 text-gray-900">Talent Module</h3>
            <p className="text-muted-foreground mb-6">
              Bridges the talent gap by enabling students, professionals, and co-founders to connect with startups, receive AI-driven career guidance, and support team building.
            </p>
            
            <div className="space-y-3 mb-6">
              {[
                { icon: Briefcase, text: "Connect students & professionals with startups" },
                { icon: Brain, text: "AI-driven career guidance & insights" },
                { icon: Network, text: "Co-founder matching & team building" },
                { icon: Target, text: "Skills market intelligence & demand" },
                { icon: BookOpen, text: "Free learning resources & upskilling" },
                { icon: TrendingUp, text: "Career progression tracking" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <item.icon className="w-4 h-4 text-purple-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-purple-50 rounded-lg p-3 mb-4">
              <div className="text-xs text-purple-800 font-medium mb-1">Career Impact</div>
              <div className="text-sm text-purple-700">25K+ talent placed • ₹15L avg salary jump • 87% career growth</div>
            </div>
            
            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Accelerate Career
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="sm">
                Take Assessment
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
