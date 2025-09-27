import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  BookOpen, MessageCircle, TrendingUp, Eye, Star, Heart,
  BarChart3, Globe, Calendar, Users, Award, Sparkles,
  ArrowRight, Clock, Target, Brain, Lightbulb, Zap,
  Filter, Search, Download, Share, ThumbsUp, ChevronRight
} from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Premium Blogging Space Section
export function PremiumBloggingSpace() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const categories = ["All", "Fundraising", "Growth", "Technology", "Culture"];
  
  const featuredBlogs = [
    {
      title: "From Idea to ₹50Cr ARR: Our Complete Journey",
      author: "Rahul Sharma",
      company: "TechFlow AI",
      views: "12.3k",
      likes: "1.2k",
      comments: "348",
      readTime: "8 min",
      publishedDate: "2 days ago",
      category: "Growth",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      excerpt: "The complete story of how we built TechFlow from a weekend project to ₹50Cr ARR, including all the mistakes we made and lessons learned.",
      tags: ["Startup", "Growth", "ARR", "Scaling"],
      featured: true
    },
    {
      title: "Raising ₹25Cr Series A: Inside Story and Pitch Deck",
      author: "Priya Gupta", 
      company: "HealthTech Pro",
      views: "8.7k",
      likes: "892",
      comments: "234",
      readTime: "12 min",
      publishedDate: "5 days ago",
      category: "Fundraising",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      excerpt: "Everything about our Series A journey - from finding the right investors to negotiating terms and closing the deal.",
      tags: ["Fundraising", "Series A", "Investors", "Pitch Deck"],
      featured: true
    },
    {
      title: "Building a Remote-First Startup Team of 150+ People",
      author: "Arjun Patel",
      company: "EduPlatform",
      views: "6.2k",
      likes: "567",
      comments: "128",
      readTime: "6 min",
      publishedDate: "1 week ago",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      excerpt: "Our framework for building and managing a fully remote team across 15 cities, including tools, processes, and culture.",
      tags: ["Remote Work", "Team Building", "Culture", "Management"],
      featured: false
    },
    {
      title: "The Technology Stack That Scaled Us to 10M Users",
      author: "Neha Singh",
      company: "SocialApp",
      views: "9.1k",
      likes: "743",
      comments: "187",
      readTime: "10 min",
      publishedDate: "3 days ago",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      excerpt: "Deep dive into our tech architecture, the challenges we faced scaling to 10M users, and the solutions that worked.",
      tags: ["Technology", "Scaling", "Architecture", "Performance"],
      featured: false
    },
    {
      title: "How We Achieved 40% Month-over-Month Growth for 8 Months",
      author: "Vikram Reddy",
      company: "GrowthHack",
      views: "7.8k",
      likes: "654",
      comments: "156",
      readTime: "7 min",
      publishedDate: "4 days ago",
      category: "Growth",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      excerpt: "The exact playbook we used to achieve consistent 40% MoM growth, including metrics, experiments, and growth channels.",
      tags: ["Growth Hacking", "Metrics", "User Acquisition", "Experiments"],
      featured: false
    },
    {
      title: "Bootstrapped to ₹100Cr Valuation: No VC Required",
      author: "Kavya Menon",
      company: "BootstrapWin",
      views: "15.2k",
      likes: "1.8k",
      comments: "423",
      readTime: "14 min",
      publishedDate: "6 days ago",
      category: "Fundraising",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      excerpt: "How we built a ₹100Cr company without raising external funding, focusing on profitability and sustainable growth.",
      tags: ["Bootstrapping", "Profitability", "Self-funded", "Sustainable Growth"],
      featured: false
    }
  ];

  const handleLike = (index: number) => {
    setLikedPosts(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -120, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}

        {/* Floating content icons */}
        {[BookOpen, MessageCircle, Star, TrendingUp].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-purple-300/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -80, 0],
              rotate: [0, 180, 360],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 2.5,
            }}
          >
            <Icon size={52} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-5 h-5 text-purple-400" />
            <span className="text-sm">Founder Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Founder Blogging Space
          </h2>
          <p className="text-xl text-purple-100 max-w-4xl mx-auto leading-relaxed">
            Real stories from real founders. Learn from their successes, failures, and everything in between. 
            Share your own journey and inspire the next generation of entrepreneurs.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
            {categories.map((category, i) => (
              <button
                key={i}
                onClick={() => setActiveCategory(i)}
                className={`px-6 py-3 rounded-xl transition-all ${
                  activeCategory === i
                    ? 'bg-white/20 text-white shadow-lg'
                    : 'text-purple-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Blogs Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredBlogs.filter(blog => blog.featured).map((blog, i) => (
            <motion.article
              key={i}
              className="group relative overflow-hidden rounded-3xl border border-white/20 hover:border-white/40 transition-all cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6, 
                  delay: i * 0.2 
                }
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              {/* Hero Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {blog.category}
                  </span>
                </div>

                {/* Featured Badge */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    className="bg-yellow-500/80 backdrop-blur-sm text-black px-3 py-1 rounded-full text-sm flex items-center gap-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Star className="w-3 h-3 fill-current" />
                    Featured
                  </motion.div>
                </div>

                {/* Author Info Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{blog.author}</div>
                    <div className="text-white/80 text-xs">{blog.company}</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 bg-black/40 backdrop-blur-sm">
                <h3 className="text-2xl text-white mb-4 leading-tight group-hover:text-purple-300 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-purple-100 mb-6 leading-relaxed">
                  {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag, tagI) => (
                    <span 
                      key={tagI}
                      className="text-xs bg-white/20 text-white px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 text-sm text-purple-200">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{blog.views}</span>
                    </div>
                    <button 
                      onClick={() => handleLike(i)}
                      className="flex items-center gap-1 hover:text-red-400 transition-colors"
                    >
                      <Heart className={`w-4 h-4 ${likedPosts.includes(i) ? 'fill-red-400 text-red-400' : ''}`} />
                      <span>{blog.likes}</span>
                    </button>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>{blog.comments}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-purple-200">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Regular Blogs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {featuredBlogs.filter(blog => !blog.featured).map((blog, i) => (
            <motion.article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/20 hover:border-white/40 transition-all cursor-pointer bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6, 
                  delay: i * 0.1 
                }
              }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category */}
                <div className="absolute top-3 left-3">
                  <span className="bg-purple-500/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                    {blog.category}
                  </span>
                </div>

                {/* Read Time */}
                <div className="absolute top-3 right-3">
                  <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs">
                    {blog.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg text-white mb-3 leading-tight group-hover:text-purple-300 transition-colors">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 bg-purple-500/50 rounded-full flex items-center justify-center">
                    <Users className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <div className="text-white text-xs">{blog.author}</div>
                    <div className="text-purple-200 text-xs">{blog.company}</div>
                  </div>
                </div>

                <p className="text-purple-100 text-sm mb-4 leading-relaxed line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs text-purple-200">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      <span>{blog.views}</span>
                    </div>
                    <button 
                      onClick={() => handleLike(i + 10)}
                      className="flex items-center gap-1 hover:text-red-400 transition-colors"
                    >
                      <Heart className={`w-3 h-3 ${likedPosts.includes(i + 10) ? 'fill-red-400 text-red-400' : ''}`} />
                      <span>{blog.likes}</span>
                    </button>
                  </div>
                  <span>{blog.publishedDate}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Community Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Published Stories", value: "2,500+", icon: BookOpen },
            { label: "Active Writers", value: "850+", icon: Users },
            { label: "Monthly Readers", value: "45k+", icon: Eye },
            { label: "Community Engagement", value: "92%", icon: TrendingUp }
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-2xl text-white mb-1">{stat.value}</div>
              <div className="text-sm text-purple-200">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 border border-white/20"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-left">
              <h3 className="text-2xl text-white mb-2">Ready to Share Your Story?</h3>
              <p className="text-purple-100">Join 850+ founders sharing their journey</p>
            </div>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl"
            >
              Start Writing
              <BookOpen className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}