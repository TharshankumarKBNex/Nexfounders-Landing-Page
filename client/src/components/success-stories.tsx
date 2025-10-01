import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SuccessStories() {
  const stories = [
    {
      name: "TechFlow AI",
      category: "Entrepreneur Module",
      achievement: "₹15Cr Series A in 6 months",
      description: "Used verified profile showcase to connect with 3 VCs, leveraged due diligence tools, and accessed market intelligence for successful fundraising",
      metrics: "100+ employees hired through talent module",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      name: "Matrix Ventures India",
      category: "Investor Module", 
      achievement: "40% portfolio IRR improvement",
      description: "Streamlined deal flow with AI-powered startup discovery, reduced due diligence time by 60%, and improved investment decision accuracy",
      metrics: "₹80Cr deployed across 15 startups",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      name: "Priya Sharma",
      category: "Talent Module",
      achievement: "CTO at ₹45L package",
      description: "Received AI-driven career guidance, upskilled through free resources, connected as co-founder, and landed C-suite role at funded startup",
      metrics: "300% salary increase in 18 months",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    }
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-background to-green/5">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-10" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-base text-muted-foreground">Real results from our community members</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, i) => (
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
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold">{story.name}</h3>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{story.category}</span>
                </div>
                <div className="text-sm text-green-600 font-medium mb-2">{story.achievement}</div>
                <p className="text-sm text-muted-foreground mb-3">{story.description}</p>
                <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                  {story.metrics}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}