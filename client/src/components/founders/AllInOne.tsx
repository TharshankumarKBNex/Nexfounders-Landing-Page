import { motion } from 'motion/react';
import { Users, Building, Code, FileText, Database, BarChart3, ArrowRight, Star } from 'lucide-react';
import { Button } from './ui/button';

const features = [
  { icon: Users, title: "Network Hub", desc: "Connect with 1,000+ startups" },
  { icon: Building, title: "Verified Investors", desc: "Apply to 500+ active investors" },
  { icon: FileText, title: "Legal Templates", desc: "150+ ready-made agreements" },
  { icon: Code, title: "Open Source Tools", desc: "Save ₹28L+ with free tools" },
  { icon: Database, title: "Resource Bank", desc: "10,000+ verified contacts" },
  { icon: BarChart3, title: "Market Intel", desc: "Real-time sector analytics" }
];

const testimonials = [
  { name: "Rajesh Kumar", company: "TechFlow AI", text: "Closed seed round in 3 months", avatar: "R" },
  { name: "Priya Sharma", company: "GreenTech", text: "Found co-founder and 5 team members", avatar: "P" },
  { name: "Arjun Gupta", company: "FinanceBot", text: "Saved ₹15L in first year", avatar: "A" }
];

export function AllInOne() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Features Grid */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Everything You Need to Scale
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One platform. All the tools, network, and resources to build faster.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border hover:shadow-lg transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.1 }
              }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl mb-8">Trusted by Founders</h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/50 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-muted-foreground italic mb-2">"{testimonial.text}"</p>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{testimonial.name}</span>
                      <span className="text-sm text-muted-foreground">• {testimonial.company}</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats + CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: "10,000+", label: "Active Founders", color: "from-blue-500 to-cyan-500" },
                { value: "₹500Cr+", label: "Funding Raised", color: "from-green-500 to-emerald-500" },
                { value: "1,500+", label: "Startups Launched", color: "from-purple-500 to-pink-500" },
                { value: "98%", label: "Success Rate", color: "from-orange-500 to-red-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-white/80 rounded-xl border"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-2xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="space-y-4"
              whileHover={{ scale: 1.02 }}
            >
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                Start Building Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground">
                Free to join • No credit card required
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          className="text-center py-16 px-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-6"
          >
            🚀
          </motion.div>
          <h3 className="text-3xl md:text-4xl mb-4">Ready to Scale Your Startup?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of founders building the next generation of Indian startups.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-600 hover:bg-white/90 px-12 py-4 text-lg"
          >
            Join Nexfounders Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}