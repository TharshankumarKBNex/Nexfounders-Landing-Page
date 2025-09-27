import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Users, Code, Star, BarChart3, FileText, Database,
  Shield, DollarSign, Eye, Download, MessageCircle,
  BookOpen, TrendingUp, Search, Filter, Award,
  Calendar, CheckCircle, ArrowRight, Sparkles,
  Target, Brain, Lightbulb, Clock, Zap
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Enhanced Talent Discovery
export function EnhancedTalentDiscovery() {
  const [activeRole, setActiveRole] = useState(0);

  const talentCategories = [
    { 
      role: "Co-Founders", 
      count: "250+", 
      skills: "Business Strategy, Product Vision, Market Analysis",
      color: "from-purple-500 to-pink-600", 
      icon: Users,
      description: "Experienced entrepreneurs and domain experts ready to co-found",
      avgExp: "8+ years",
      successRate: "92%",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    { 
      role: "Full-Stack Developers", 
      count: "800+", 
      skills: "React, Node.js, Python, Cloud Architecture",
      color: "from-blue-500 to-cyan-600", 
      icon: Code,
      description: "Senior developers from top tech companies and startups",
      avgExp: "5+ years",
      successRate: "95%",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    { 
      role: "Product Designers", 
      count: "300+", 
      skills: "UI/UX Design, Product Strategy, User Research",
      color: "from-green-500 to-teal-600", 
      icon: Star,
      description: "Creative professionals who understand startup product needs",
      avgExp: "4+ years",
      successRate: "88%",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Founder, TechFlow AI",
      text: "Found my technical co-founder within 2 weeks. The vetting process is incredible.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "CEO, HealthTech Pro",
      text: "Hired 3 amazing developers who became core team members. Game changer!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100",
      rating: 5
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Floating skill tags */}
      <div className="absolute inset-0">
        {['React', 'Python', 'Design', 'Strategy', 'AI/ML', 'Blockchain'].map((skill, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-purple-600 border border-purple-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          >
            {skill}
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
            className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 rounded-full px-4 py-2 mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Users className="w-4 h-4" />
            <span className="text-sm">Vetted Talent Pool</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Find Your Dream Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with pre-vetted co-founders, developers, designers, and specialists. 
            Our talent pool includes professionals from top companies ready to join startups.
          </p>
        </motion.div>

        {/* Talent Categories with Interactive Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {talentCategories.map((talent, i) => (
            <motion.div
              key={i}
              className={`group relative overflow-hidden rounded-3xl border-2 transition-all cursor-pointer ${
                activeRole === i ? 'border-purple-400 shadow-2xl' : 'border-purple-200 hover:border-purple-300'
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: i * 0.2 }
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              onClick={() => setActiveRole(i)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-20">
                <ImageWithFallback
                  src={talent.image}
                  alt={talent.role}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${talent.color} opacity-60`}></div>
              </div>

              <div className="relative z-10 p-8 bg-white/90 backdrop-blur-sm h-full">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${talent.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}
                  whileHover={{ scale: 1.1, rotate: 6 }}
                >
                  <talent.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                  {talent.role}
                </h3>
                <p className="text-2xl text-purple-600 mb-2">{talent.count}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {talent.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="text-xs text-purple-600 uppercase tracking-wider">Key Skills:</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {talent.skills}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">Avg Experience</div>
                    <div className="text-purple-600 font-medium">{talent.avgExp}</div>
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                    <div className="text-green-600 font-medium">{talent.successRate}</div>
                  </div>
                </div>

                {activeRole === i && (
                  <motion.div
                    className="mt-4 pt-4 border-t border-purple-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-xl">
                      Browse {talent.role}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-purple-200 hover:shadow-xl transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="flex gap-1 mt-1">
                    {Array.from({ length: testimonial.rating }).map((_, starI) => (
                      <Star key={starI} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats and CTA */}
        <motion.div
          className="text-center p-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-3xl mb-4">Ready to Build Your Team?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join 500+ startups that have successfully built their core teams through our platform.
          </p>
          
          <div className="grid grid-cols-3 gap-8 mb-8">
            {[
              { label: "Successful Hires", value: "2,500+" },
              { label: "Average Time to Hire", value: "12 days" },
              { label: "Retention Rate", value: "94%" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.8 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl mb-1">{stat.value}</div>
                <div className="text-sm text-purple-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-purple-50 px-12 py-4 rounded-xl text-lg"
          >
            Start Hiring
            <Sparkles className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Enhanced Open Source Tools
export function EnhancedOpenSourceTools() {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  const toolCategories = [
    { 
      category: "Analytics & Tracking", 
      tools: ["Google Analytics", "Mixpanel", "Hotjar", "Plausible"], 
      savings: "₹2.5L/year",
      icon: BarChart3,
      color: "from-blue-500 to-cyan-600",
      description: "Track user behavior and analytics",
      popularTool: "Google Analytics"
    },
    { 
      category: "Design & Creative", 
      tools: ["Figma", "Canva", "GIMP", "Inkscape"], 
      savings: "₹1.8L/year",
      icon: Star,
      color: "from-purple-500 to-pink-600",
      description: "Design tools for branding and UI",
      popularTool: "Figma"
    },
    { 
      category: "Development Tools", 
      tools: ["VS Code", "GitHub", "Docker", "Postman"], 
      savings: "₹5.2L/year",
      icon: Code,
      color: "from-green-500 to-teal-600",
      description: "Complete development stack",
      popularTool: "VS Code"
    },
    { 
      category: "Marketing & Sales", 
      tools: ["Mailchimp", "Buffer", "HubSpot", "Canva"], 
      savings: "₹3.1L/year",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600",
      description: "Growth and marketing automation",
      popularTool: "Mailchimp"
    },
    { 
      category: "Project Management", 
      tools: ["Trello", "Asana", "Notion", "Monday"], 
      savings: "₹1.5L/year",
      icon: Target,
      color: "from-indigo-500 to-purple-600",
      description: "Team collaboration and workflow",
      popularTool: "Notion"
    },
    { 
      category: "Communication", 
      tools: ["Slack", "Discord", "Zoom", "Jitsi"], 
      savings: "₹1.2L/year",
      icon: MessageCircle,
      color: "from-teal-500 to-cyan-600",
      description: "Team communication and meetings",
      popularTool: "Slack"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Floating tool icons */}
      <div className="absolute inset-0">
        {[Code, BarChart3, Star, TrendingUp, Target, MessageCircle].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-orange-300/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 1.2,
            }}
          >
            <Icon size={48} />
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
            className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 mb-6"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Code className="w-4 h-4" />
            <span className="text-sm">Open Source Library</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Free Tools Library
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Curated collection of the best open-source and free tools for startups. 
            Save ₹28L+ per year on software costs with our verified alternatives.
          </p>

          {/* Total Savings Counter */}
          <motion.div
            className="inline-flex items-center gap-4 mt-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl border border-green-200"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <DollarSign className="w-8 h-8 text-green-600" />
            <div className="text-left">
              <div className="text-3xl text-green-800 font-bold">₹28L+ Saved</div>
              <div className="text-sm text-green-600">Per startup per year</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category, i) => (
            <motion.div
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-orange-200 hover:border-orange-400 hover:shadow-2xl transition-all bg-white/90 backdrop-blur-sm"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: i * 0.15 }
              }}
              whileHover={{ 
                scale: 1.03, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredTool(i)}
              onHoverEnd={() => setHoveredTool(null)}
            >
              <div className="p-8">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all`}
                  whileHover={{ scale: 1.1, rotate: 6 }}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl mb-3 group-hover:text-orange-600 transition-colors">
                  {category.category}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="text-xs text-orange-600 uppercase tracking-wider">
                    Popular Tools:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.slice(0, 3).map((tool, toolI) => (
                      <span 
                        key={toolI}
                        className="text-xs bg-orange-100 text-orange-800 px-2 py-1 rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                    {category.tools.length > 3 && (
                      <span className="text-xs text-orange-600">
                        +{category.tools.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl text-green-600 font-bold">{category.savings}</div>
                    <div className="text-xs text-muted-foreground">Potential savings</div>
                  </div>
                  <motion.div
                    className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: hoveredTool === i ? 5 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-6 h-6" />
                  </motion.div>
                </div>

                {hoveredTool === i && (
                  <motion.div
                    className="mt-4 pt-4 border-t border-orange-200"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <Button size="sm" className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-xl">
                      View All Tools
                      <Download className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center p-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-3xl mb-4">Start Saving on Software Costs</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Access our complete library of 500+ verified open-source tools and alternatives.
          </p>
          <Button
            size="lg"
            className="bg-white text-orange-600 hover:bg-orange-50 px-12 py-4 rounded-xl text-lg"
          >
            Browse All Tools
            <Code className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}