import { motion } from 'motion/react';
import { PenTool, Heart, MessageCircle, Share2, Calendar } from 'lucide-react';
import { Button } from './ui/button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  company: string;
  date: string;
  readTime: string;
  likes: number;
  comments: number;
  category: string;
  image: string;
}

export function BloggingSpace() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "From Idea to MVP: Our 90-Day Journey",
      excerpt: "How we built our first product with zero funding and a team of 3 passionate developers...",
      author: "Rajesh Kumar",
      company: "TechFlow AI",
      date: "2 days ago",
      readTime: "5 min read",
      likes: 234,
      comments: 45,
      category: "Product",
      image: "https://images.unsplash.com/photo-1590098563686-06ab8778a6a7?w=400&h=200&fit=crop"
    },
    {
      id: 2,
      title: "Raising Our Seed Round: Lessons Learned",
      excerpt: "The ups and downs of our fundraising journey and what we wish we knew before starting...",
      author: "Priya Sharma",
      company: "GreenTech Solutions",
      date: "5 days ago",
      readTime: "8 min read",
      likes: 156,
      comments: 32,
      category: "Funding",
      image: "https://images.unsplash.com/photo-1681505531034-8d67054e07f6?w=400&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Building a Remote Team in Tier-3 Cities",
      excerpt: "Why we chose to hire from smaller cities and how it's transforming our company culture...",
      author: "Arjun Gupta",
      company: "FinanceBot",
      date: "1 week ago",
      readTime: "6 min read",
      likes: 189,
      comments: 28,
      category: "Hiring",
      image: "https://images.unsplash.com/photo-1741849409363-4365cd102438?w=400&h=200&fit=crop"
    },
    {
      id: 4,
      title: "The Power of Open Source in Startups",
      excerpt: "How leveraging open-source tools saved us ₹15 lakhs in our first year of operation...",
      author: "Kavya Reddy",
      company: "HealthAI",
      date: "1 week ago",
      readTime: "4 min read",
      likes: 278,
      comments: 67,
      category: "Technology",
      image: "https://images.unsplash.com/photo-1652111865960-15f4a46a7688?w=400&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Customer Discovery: What We Got Wrong",
      excerpt: "Three major mistakes we made during customer interviews and how to avoid them...",
      author: "Vikram Singh",
      company: "EduTech Pro",
      date: "2 weeks ago",
      readTime: "7 min read",
      likes: 203,
      comments: 41,
      category: "Strategy",
      image: "https://images.unsplash.com/photo-1690192224976-6e66e888807e?w=400&h=200&fit=crop"
    },
    {
      id: 6,
      title: "Scaling Operations with Limited Resources",
      excerpt: "Creative solutions we implemented to handle 10x growth without breaking the bank...",
      author: "Sneha Patel",
      company: "RetailNext",
      date: "3 weeks ago",
      readTime: "9 min read",
      likes: 312,
      comments: 89,
      category: "Operations",
      image: "https://images.unsplash.com/photo-1590098563686-06ab8778a6a7?w=400&h=200&fit=crop"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Product: "from-blue-500 to-indigo-600",
      Funding: "from-green-500 to-emerald-600",
      Hiring: "from-purple-500 to-pink-600",
      Technology: "from-orange-500 to-red-600",
      Strategy: "from-teal-500 to-cyan-600",
      Operations: "from-violet-500 to-purple-600"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal/5 to-cyan/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Founder Blogging Space
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Promote your startup with a personal blog space. Share your journey with the world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="sticky top-8 space-y-6">
              <div className="p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl border border-teal-200">
                <h3 className="text-xl mb-4 flex items-center gap-2">
                  <PenTool className="w-6 h-6 text-teal-600" />
                  Start Writing
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Share your startup journey, insights, and lessons learned with the community.
                </p>
                <Button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700">
                  <PenTool className="w-4 h-4 mr-2" />
                  Write Your Story
                </Button>
              </div>

              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border">
                <h4 className="font-medium mb-4">Popular Categories</h4>
                <div className="space-y-2">
                  {['Product', 'Funding', 'Hiring', 'Technology', 'Strategy', 'Operations'].map((category) => (
                    <div key={category} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{category}</span>
                      <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">
                        {Math.floor(Math.random() * 50) + 10}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border">
                <h4 className="font-medium mb-4">Blog Stats</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Posts</span>
                    <span className="text-teal-600">2,456</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Writers</span>
                    <span className="text-cyan-600">847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monthly Reads</span>
                    <span className="text-teal-600">125K</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                      <div className="text-4xl opacity-20">📝</div>
                    </div>
                    <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${getCategoryColor(post.category)} rounded-full text-white text-xs`}>
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-sm">
                          {post.author.charAt(0)}
                        </div>
                        <div>
                          <div className="text-sm font-medium">{post.author}</div>
                          <div className="text-xs text-muted-foreground">{post.company}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-4 border-t">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <motion.button
                          className="flex items-center gap-1 hover:text-red-500 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Heart className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </motion.button>
                        <motion.button
                          className="flex items-center gap-1 hover:text-blue-500 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>{post.comments}</span>
                        </motion.button>
                      </div>
                      <motion.button
                        className="text-muted-foreground hover:text-teal-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="hover:bg-teal-50 hover:border-teal-300 hover:text-teal-700"
          >
            View All Blog Posts
          </Button>
        </motion.div>
      </div>
    </section>
  );
}