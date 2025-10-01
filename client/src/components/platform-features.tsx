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

export function PlatformFeatures() {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-blue/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Why Choose NexFounders?
          </h2>
          <p className="text-base text-muted-foreground">
            Everything you need to succeed in the startup ecosystem, all in one platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: Network,
              title: "Extensive Network",
              desc: "35K+ entrepreneurs, investors, and talent",
              color: "from-blue-500 to-cyan-600"
            },
            {
              icon: Shield,
              title: "Verified Community",
              desc: "Government-verified investors and backgrounds",
              color: "from-green-500 to-emerald-600"
            },
            {
              icon: Zap,
              title: "AI-Powered Matching",
              desc: "Smart algorithms for perfect connections",
              color: "from-purple-500 to-pink-600"
            },
            {
              icon: Award,
              title: "Proven Success",
              desc: "₹800Cr+ funding raised through our platform",
              color: "from-orange-500 to-red-600"
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border hover:shadow-lg transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-base mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}