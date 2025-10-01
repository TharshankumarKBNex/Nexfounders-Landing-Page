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


export function UnifiedEcosystem() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-indigo/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            How Our Unified Ecosystem Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Three specialized modules working in harmony to create seamless connections across the entire startup journey—from ideation to exit.
          </p>
        </motion.div>

        {/* Ecosystem Flow */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0 } }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl mb-3">Entrepreneurs Launch</h3>
            <p className="text-sm text-muted-foreground">
              Startups create verified profiles, showcase their vision, and access essential tools for growth
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.1 } }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl mb-3">Investors Discover</h3>
            <p className="text-sm text-muted-foreground">
              Access curated deal flow with comprehensive due diligence data and AI-powered matching
            </p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1, transition: { delay: 0.2 } }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl mb-3">Talent Connects</h3>
            <p className="text-sm text-muted-foreground">
              Professionals find opportunities, receive career guidance, and connect as co-founders
            </p>
          </motion.div>
        </div>

        {/* Ecosystem Benefits */}
        <motion.div
          className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl text-center mb-8 text-gray-900">Ecosystem Synergies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cross-Module Networking",
                description: "Entrepreneurs connect with investors while accessing top talent for their teams",
                icon: Network
              },
              {
                title: "Data-Driven Insights",
                description: "Shared intelligence across modules provides better decision-making for all participants",
                icon: Brain
              },
              {
                title: "Streamlined Processes",
                description: "Integrated workflows reduce friction in funding, hiring, and partnership processes",
                icon: Zap
              },
              {
                title: "Quality Assurance",
                description: "Verified profiles and due diligence ensure trust across all module interactions",
                icon: Shield
              },
              {
                title: "Growth Acceleration",
                description: "Combined resources and connections enable faster startup scaling and career growth",
                icon: TrendingUp
              },
              {
                title: "Market Intelligence",
                description: "Real-time market data benefits entrepreneurs, investors, and talent planning decisions",
                icon: BarChart3
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3 p-4 bg-white/80 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}