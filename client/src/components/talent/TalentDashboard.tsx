import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { 
  Users, Globe, Zap, FileText, Building, TrendingUp, 
  Code, Shield, Database, BookOpen, BarChart3, Search,
  Rocket, Star, ArrowRight, MapPin, Calendar, DollarSign,
  Download, Eye, MessageCircle, Filter, Award, CheckCircle,
  GraduationCap, Brain, Target, Briefcase, Play, ExternalLink,
  Smartphone, Monitor, Palette, Server, Network, Layers,
  Coffee, Lightbulb, Clock, Plus
} from 'lucide-react';
import { Button } from '../ui/button';

const cyclingWords = ['Learn', 'Connect', 'Build', 'Grow'];
const floatingIcons = [GraduationCap, Code, Users, Rocket];

// Compact Talent Hero
export function TalentHero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/20 overflow-hidden flex items-center justify-center">
      {/* Floating Icons */}
      {floatingIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/20"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="text-center max-w-4xl mx-auto px-4 z-10">
        <motion.h1
          className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering Talent to{' '}
          <motion.span
            key={currentWordIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          >
            {cyclingWords[currentWordIndex]}
          </motion.span>{' '}
          Faster
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your career acceleration platform. Find startup opportunities, master skills, and connect with co-founders.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-3 text-lg transform hover:scale-105 transition-all duration-200"
          >
            Join 25,000+ Talent
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:bg-primary/10 px-8 py-3 text-lg"
          >
            Take Skill Assessment
          </Button>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: "25K+", label: "Active Talent" },
            { value: "1.2K+", label: "Opportunities" },
            { value: "500+", label: "Startups" },
            { value: "95%", label: "Success Rate" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Startup Opportunities Section
export function StartupOpportunities() {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const opportunities = [
    { role: "Full Stack Developer", company: "TechFlow AI", salary: "₹8-15L", equity: "0.1-0.5%", location: "Bangalore", remote: true, skills: ["React", "Node.js", "AI/ML"] },
    { role: "Product Manager", company: "GreenEnergy", salary: "₹12-20L", equity: "0.2-0.8%", location: "Mumbai", remote: false, skills: ["Strategy", "Analytics", "User Research"] },
    { role: "UI/UX Designer", company: "FinNext", salary: "₹6-12L", equity: "0.05-0.3%", location: "Delhi", remote: true, skills: ["Figma", "Design Systems", "User Testing"] }
  ];

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
            Startup Opportunities Hub
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Discover high-growth startup roles with equity participation and competitive salaries.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2">
            {['all', 'engineering', 'product', 'design'].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="capitalize"
              >
                {filter}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-4">
          {opportunities.map((opp, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border hover:shadow-lg transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
              whileHover={{ scale: 1.01 }}
              viewport={{ once: true }}
            >
              <div className="grid md:grid-cols-4 gap-4 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg mb-1">{opp.role}</h3>
                      <p className="text-blue-600 font-medium">{opp.company}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {opp.location}
                        </div>
                        {opp.remote && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Remote</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {opp.skills.map((skill, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-lg font-semibold text-green-600">{opp.salary}</div>
                  <div className="text-sm text-muted-foreground">+ {opp.equity} equity</div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ArrowRight className="w-4 h-4 mr-1" />
                    Apply
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Skills Market Intelligence
export function SkillsMarketplace() {
  const [selectedCategory, setSelectedCategory] = useState('development');
  
  const skillsData = {
    development: [
      { skill: "React.js", demand: 95, salary: "₹8-25L", growth: "+18%", jobs: 1247 },
      { skill: "Python", demand: 92, salary: "₹6-22L", growth: "+15%", jobs: 1156 },
      { skill: "Node.js", demand: 88, salary: "₹7-20L", growth: "+12%", jobs: 987 },
      { skill: "AI/ML", demand: 97, salary: "₹12-35L", growth: "+35%", jobs: 756 }
    ],
    design: [
      { skill: "Figma", demand: 89, salary: "₹5-18L", growth: "+22%", jobs: 654 },
      { skill: "UI/UX Design", demand: 86, salary: "₹6-20L", growth: "+19%", jobs: 789 },
      { skill: "Product Design", demand: 84, salary: "₹8-25L", growth: "+16%", jobs: 432 },
      { skill: "Design Systems", demand: 78, salary: "₹10-28L", growth: "+25%", jobs: 234 }
    ]
  };

  return (
    <section className="py-8 px-4 bg-gradient-to-br from-green/5 to-teal/10">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Skills Market Intelligence
          </h2>
          <p className="text-base text-muted-foreground">Real-time demand, salary insights, and learning recommendations for trending skills.</p>
        </motion.div>

        {/* Category Selector */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2">
            {[
              { key: 'development', label: 'Development' },
              { key: 'design', label: 'Design' }
            ].map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.key)}
                size="sm"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillsData[selectedCategory as keyof typeof skillsData].map((skill, i) => (
            <motion.div
              key={skill.skill}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-lg border hover:shadow-md transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5 text-white" />
                </div>
                
                <h3 className="text-base mb-3">{skill.skill}</h3>
                
                <div className="space-y-3">
                  {/* Demand Score */}
                  <div>
                    <div className="flex justify-between mb-1 text-xs">
                      <span className="text-muted-foreground">Demand</span>
                      <span className="text-green-600">{skill.demand}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-teal-500 h-1.5 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.demand}%` }}
                      />
                    </div>
                  </div>

                  {/* Salary & Growth */}
                  <div className="bg-green-50 rounded-lg p-2">
                    <div className="text-lg font-semibold text-green-600">{skill.salary}</div>
                    <div className="text-xs text-muted-foreground">Salary Range</div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs text-center">
                    <div>
                      <div className="font-semibold text-blue-600">{skill.growth}</div>
                      <div className="text-muted-foreground">Growth</div>
                    </div>
                    <div>
                      <div className="font-semibold text-purple-600">{skill.jobs}</div>
                      <div className="text-muted-foreground">Jobs</div>
                    </div>
                  </div>

                  <Button size="sm" className="w-full bg-gradient-to-r from-green-600 to-teal-600">
                    <Play className="w-3 h-3 mr-1" />
                    Learn
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Co-founder Matching
export function CofounderMatching() {
  const profiles = [
    {
      name: "Alex Chen",
      role: "Tech Co-founder",
      experience: "8+ years",
      expertise: ["Full-stack", "AI/ML", "Blockchain"],
      industry: "FinTech",
      location: "Bangalore",
      lookingFor: "Business Co-founder",
      idea: "AI-powered personal finance",
      equity: "30-40%"
    },
    {
      name: "Priya Sharma",
      role: "Business Co-founder", 
      experience: "6+ years",
      expertise: ["Strategy", "Marketing", "Sales"],
      industry: "HealthTech",
      location: "Mumbai",
      lookingFor: "Tech Co-founder",
      idea: "Telemedicine platform",
      equity: "25-35%"
    },
    {
      name: "Raj Patel",
      role: "Product Co-founder",
      experience: "5+ years", 
      expertise: ["Product Design", "UX Research", "Growth"],
      industry: "EdTech",
      location: "Delhi",
      lookingFor: "Tech Co-founder",
      idea: "Skill-based learning platform",
      equity: "20-30%"
    }
  ];

  return (
    <section className="py-8 px-4 bg-gradient-to-br from-purple/5 to-pink/10">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Co-founder Matching Platform
          </h2>
          <p className="text-base text-muted-foreground">Find your perfect startup partner with complementary skills and shared vision.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {profiles.map((profile, i) => (
            <motion.div
              key={i}
              className="p-4 bg-white/80 backdrop-blur-sm rounded-xl border hover:shadow-lg transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.1 } }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                {/* Profile Avatar */}
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white font-semibold group-hover:scale-110 transition-transform">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-lg mb-1">{profile.name}</h3>
                <div className="text-sm text-purple-600 font-medium mb-2">{profile.role}</div>
                
                {/* Experience & Location */}
                <div className="flex justify-center gap-3 mb-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {profile.experience}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {profile.location}
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  {profile.expertise.slice(0, 2).map((skill, idx) => (
                    <span key={idx} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Startup Details */}
                <div className="bg-gray-50 rounded-lg p-3 mb-3 text-left text-xs">
                  <div className="mb-1">Industry: <span className="font-medium">{profile.industry}</span></div>
                  <div className="mb-1">Idea: <span className="font-medium">{profile.idea}</span></div>
                  <div>Equity: <span className="font-medium text-green-600">{profile.equity}</span></div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600">
                    <MessageCircle className="w-3 h-3 mr-1" />
                    Connect
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Free Learning Resources
export function LearningResources() {
  const [selectedTrack, setSelectedTrack] = useState('fullstack');

  const learningTracks = {
    fullstack: {
      title: "Full-Stack Development",
      duration: "6 months",
      resources: [
        { name: "React Fundamentals", provider: "freeCodeCamp", type: "Course", duration: "40h", rating: 4.8 },
        { name: "Node.js Complete Guide", provider: "YouTube", type: "Playlist", duration: "30h", rating: 4.6 },
        { name: "Database Design", provider: "Coursera", type: "Course", duration: "25h", rating: 4.7 },
        { name: "API Development", provider: "edX", type: "Course", duration: "20h", rating: 4.5 }
      ]
    },
    design: {
      title: "UI/UX Design",
      duration: "4 months", 
      resources: [
        { name: "Design Thinking", provider: "Stanford Online", type: "Course", duration: "15h", rating: 4.9 },
        { name: "Figma Masterclass", provider: "YouTube", type: "Tutorial", duration: "12h", rating: 4.7 },
        { name: "User Research", provider: "Google UX", type: "Course", duration: "20h", rating: 4.8 },
        { name: "Design Systems", provider: "Designcode", type: "Course", duration: "18h", rating: 4.6 }
      ]
    }
  };

  return (
    <section className="py-8 px-4 bg-gradient-to-br from-background to-blue/5">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl md:text-3xl mb-3 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Free Learning Resources Hub
          </h2>
          <p className="text-base text-muted-foreground">Curated learning paths and expert-recommended resources for career progression.</p>
        </motion.div>

        {/* Learning Track Selector */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2">
            {[
              { key: 'fullstack', label: 'Full-Stack' },
              { key: 'design', label: 'UI/UX Design' }
            ].map((track) => (
              <Button
                key={track.key}
                variant={selectedTrack === track.key ? "default" : "outline"}
                onClick={() => setSelectedTrack(track.key)}
                size="sm"
              >
                {track.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Selected Learning Track */}
        <motion.div
          className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border mb-6"
          key={selectedTrack}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-6">
            <h3 className="text-xl mb-2">
              {learningTracks[selectedTrack as keyof typeof learningTracks].title}
            </h3>
            <p className="text-blue-600">
              Complete in {learningTracks[selectedTrack as keyof typeof learningTracks].duration} • 100% Free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningTracks[selectedTrack as keyof typeof learningTracks].resources.map((resource, i) => (
              <motion.div
                key={resource.name}
                className="p-3 bg-blue-50 rounded-lg border hover:shadow-md transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-2">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                    {resource.rating}★
                  </span>
                </div>
                
                <h4 className="text-sm mb-1">{resource.name}</h4>
                <p className="text-blue-600 text-xs mb-2">{resource.provider}</p>
                
                <div className="flex justify-between text-xs text-muted-foreground mb-3">
                  <span>{resource.type}</span>
                  <span>{resource.duration}</span>
                </div>
                
                <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Start
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Final CTA
export function TalentFinalCTA() {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-primary/5 to-blue/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 25,000+ professionals building their careers in the startup ecosystem. 
            Access opportunities, master skills, and connect with co-founders.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg"
          >
            Join Talent Network
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-3 text-lg"
          >
            <Play className="w-4 h-4 mr-2" />
            Take Skill Assessment
          </Button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto opacity-60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.6 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-xl text-primary">5,000+</div>
            <div className="text-sm text-muted-foreground">Placements</div>
          </div>
          <div className="text-center">
            <div className="text-xl text-primary">₹15L</div>
            <div className="text-sm text-muted-foreground">Avg Salary Jump</div>
          </div>
          <div className="text-center">
            <div className="text-xl text-primary">87%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-xl text-primary">200+</div>
            <div className="text-sm text-muted-foreground">Partner Startups</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}