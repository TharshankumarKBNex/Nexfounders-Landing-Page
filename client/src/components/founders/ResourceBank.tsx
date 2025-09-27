import { motion } from 'motion/react';
import { useState } from 'react';
import { Database, Unlock, Eye, Mail, Phone, Building } from 'lucide-react';
import { Button } from './ui/button';

interface Lead {
  id: number;
  name: string;
  company: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  verified: boolean;
}

export function ResourceBank() {
  const [unlocked, setUnlocked] = useState(false);

  // Generate sample leads
  const generateLeads = (count: number): Lead[] => {
    const sampleData = [
      { name: "Rajesh Kumar", company: "TechFlow AI", role: "Founder & CEO", location: "Bangalore" },
      { name: "Priya Sharma", company: "GreenTech Solutions", role: "Co-founder", location: "Mumbai" },
      { name: "Arjun Gupta", company: "FinanceBot", role: "CTO", location: "Delhi" },
      { name: "Kavya Reddy", company: "HealthAI", role: "Founder", location: "Hyderabad" },
      { name: "Vikram Singh", company: "EduTech Pro", role: "CEO", location: "Pune" },
      { name: "Sneha Patel", company: "RetailNext", role: "Co-founder", location: "Ahmedabad" },
      { name: "Aditya Jain", company: "LogiFlow", role: "Founder", location: "Chennai" },
      { name: "Meera Kapoor", company: "AgriTech Hub", role: "CEO", location: "Jaipur" },
    ];

    return Array.from({ length: count }, (_, i) => {
      const sample = sampleData[i % sampleData.length];
      return {
        id: i + 1,
        ...sample,
        email: unlocked ? `${sample.name.toLowerCase().replace(' ', '.')}@${sample.company.toLowerCase().replace(' ', '')}.com` : "•••••@••••••.com",
        phone: unlocked ? `+91 ${Math.floor(Math.random() * 90000) + 10000} ${Math.floor(Math.random() * 90000) + 10000}` : "+91 •••••• ••••••",
        verified: Math.random() > 0.3
      };
    });
  };

  const leads = generateLeads(50);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple/5 to-pink/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Resource Bank (10,000+ Leads)
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get free access to investors' and founders' verified contact database with lead-gen credits.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <h3 className="text-2xl mb-6 flex items-center gap-3">
                <Database className="w-8 h-8 text-purple-600" />
                Contact Database
              </h3>

              {/* Data Table Header */}
              <div className="bg-white/80 backdrop-blur-sm rounded-t-xl p-4 border-b">
                <div className="grid grid-cols-6 gap-4 text-sm font-medium text-muted-foreground">
                  <div>Name</div>
                  <div>Company</div>
                  <div>Role</div>
                  <div>Location</div>
                  <div>Email</div>
                  <div>Phone</div>
                </div>
              </div>

              {/* Scrolling Data Rows */}
              <div className="relative h-96 bg-white/50 backdrop-blur-sm rounded-b-xl overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  animate={{ y: unlocked ? 0 : [0, -20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {leads.map((lead, index) => (
                    <motion.div
                      key={lead.id}
                      className={`grid grid-cols-6 gap-4 p-4 border-b text-sm hover:bg-white/60 transition-colors ${
                        !unlocked ? 'blur-sm' : ''
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.02 }
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs">
                          {lead.name.charAt(0)}
                        </div>
                        <span className="truncate">{lead.name}</span>
                      </div>
                      <div className="truncate">{lead.company}</div>
                      <div className="truncate text-muted-foreground">{lead.role}</div>
                      <div className="truncate">{lead.location}</div>
                      <div className="flex items-center gap-1 truncate">
                        <Mail className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs">{lead.email}</span>
                      </div>
                      <div className="flex items-center gap-1 truncate">
                        <Phone className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs">{lead.phone}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Unlock Overlay */}
                {!unlocked && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-xl border shadow-lg"
                      animate={{
                        scale: [1, 1.02, 1],
                        boxShadow: [
                          "0 10px 40px rgba(147, 51, 234, 0.1)",
                          "0 10px 40px rgba(147, 51, 234, 0.3)",
                          "0 10px 40px rgba(147, 51, 234, 0.1)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Unlock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <h4 className="text-xl mb-2">Unlock Full Database</h4>
                      <p className="text-muted-foreground mb-4">
                        Get access to 10,000+ verified contacts
                      </p>
                      <Button
                        onClick={() => setUnlocked(true)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      >
                        <Unlock className="w-4 h-4 mr-2" />
                        Unlock Data
                      </Button>
                    </motion.div>
                  </motion.div>
                )}
              </div>

              {/* Infinite Scroll Indicator */}
              <motion.div
                className="flex items-center justify-center py-4 text-sm text-muted-foreground"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                  <span>Showing 50 of 10,247 contacts</span>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl">Database Features</h3>

            <div className="space-y-4">
              {[
                {
                  icon: Database,
                  title: "10,000+ Contacts",
                  description: "Verified investors and founders database",
                  color: "from-purple-500 to-indigo-600"
                },
                {
                  icon: Eye,
                  title: "Real-time Updates",
                  description: "Live tracking of investor activity",
                  color: "from-blue-500 to-cyan-600"
                },
                {
                  icon: Building,
                  title: "Company Insights",
                  description: "Detailed company and funding information",
                  color: "from-green-500 to-emerald-600"
                },
                {
                  icon: Unlock,
                  title: "Lead-gen Credits",
                  description: "Free monthly credits for contact exports",
                  color: "from-orange-500 to-red-600"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-4 border rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Usage Stats */}
            <motion.div
              className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-2xl text-purple-600 mb-2">₹28 Lakhs</div>
                <div className="text-sm text-muted-foreground mb-3">Average lead generation cost saved</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-lg text-purple-600">2,156</div>
                    <div className="text-muted-foreground">Successful Connections</div>
                  </div>
                  <div>
                    <div className="text-lg text-pink-600">97%</div>
                    <div className="text-muted-foreground">Data Accuracy</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}