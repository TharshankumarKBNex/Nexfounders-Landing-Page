import { motion } from 'motion/react';
import { useState } from 'react';
import { Users, MapPin, TrendingUp, MessageCircle, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { label: "Active Founders", value: "10,000+", color: "from-blue-500 to-cyan-500" },
  { label: "Funding Raised", value: "₹500Cr+", color: "from-green-500 to-emerald-500" },
  { label: "Startups Launched", value: "1,500+", color: "from-purple-500 to-pink-500" },
  { label: "Success Rate", value: "98%", color: "from-orange-500 to-red-500" }
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechFlow AI",
    location: "Bangalore",
    text: "Nexfounders helped us connect with the right investors and close our seed round in just 3 months.",
    avatar: "R"
  },
  {
    name: "Priya Sharma", 
    company: "GreenTech Solutions",
    location: "Mumbai",
    text: "The networking opportunities here are incredible. Found my co-founder and 5 key team members.",
    avatar: "P"
  },
  {
    name: "Arjun Gupta",
    company: "FinanceBot", 
    location: "Delhi",
    text: "Access to legal templates and open-source tools saved us over ₹15 lakhs in our first year.",
    avatar: "A"
  }
];

export function CommunityShowcase() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-blue/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Join India's Fastest Growing
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Startup Community
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect, collaborate, and scale with like-minded founders across India.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border text-center group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.1 }
              }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              viewport={{ once: true }}
            >
              <motion.div
                className={`text-3xl md:text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                animate={{
                  scale: hoveredStat === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
              
              {/* Animated Underline */}
              <motion.div
                className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-3 mx-auto`}
                initial={{ width: 0 }}
                animate={{ width: hoveredStat === index ? "100%" : "30%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map/Network Visual */}
          <motion.div
            className="relative h-96 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1690192224976-6e66e888807e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwbmV0d29ya2luZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU4NzMyNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Startup networking collaboration"
              className="w-full h-full object-cover opacity-20"
            />
            
            {/* Floating Network Nodes */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl border shadow-lg flex items-center justify-center"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <Users className="w-6 h-6 text-blue-600" />
              </motion.div>
            ))}

            {/* Live Activity Indicator */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-3 border">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">Live Activity</span>
              </div>
              <div className="text-xs text-muted-foreground">234 founders online</div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl mb-8">What Founders Say</h3>
            
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <span>{testimonial.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                
                <div className="flex items-center gap-1 mt-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Community Growth Indicator */}
            <motion.div
              className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
                <h4 className="font-medium text-green-800">Growing Fast</h4>
              </div>
              <p className="text-sm text-green-700">
                +156 new founders joined this week. Be part of India's most active startup community.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}