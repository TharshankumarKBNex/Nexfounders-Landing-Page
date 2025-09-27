import { motion } from 'motion/react';
import { FileText, Download, Clock, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';

interface Template {
  id: number;
  name: string;
  category: string;
  downloads: number;
  timeToComplete: string;
  description: string;
  color: string;
}

export function LegalTemplates() {
  const templates: Template[] = [
    {
      id: 1,
      name: "Investor Agreement",
      category: "Funding",
      downloads: 1247,
      timeToComplete: "15 minutes",
      description: "Comprehensive investor agreement template",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      name: "Employee Offer Letter",
      category: "HR",
      downloads: 2156,
      timeToComplete: "5 minutes",
      description: "Standard employee offer letter format",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      name: "Co-founder Agreement",
      category: "Founding",
      downloads: 892,
      timeToComplete: "20 minutes",
      description: "Equity and responsibility agreement",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      name: "NDA Template",
      category: "Legal",
      downloads: 3421,
      timeToComplete: "3 minutes",
      description: "Non-disclosure agreement template",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      name: "Service Agreement",
      category: "Business",
      downloads: 1678,
      timeToComplete: "10 minutes",
      description: "Client service agreement template",
      color: "from-teal-500 to-cyan-600"
    },
    {
      id: 6,
      name: "Privacy Policy",
      category: "Compliance",
      downloads: 2890,
      timeToComplete: "8 minutes",
      description: "GDPR compliant privacy policy",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-indigo/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Ready-Made Legal Templates
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Download investor agreements, employee offers, onboarding docs, and co-founder agreements in minutes.
          </p>
        </motion.div>

        <div className="mb-12">
          {/* Falling Files Animation */}
          <motion.div
            className="relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-8 gap-4 h-full p-4">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className="bg-indigo-300 rounded opacity-20"></div>
                ))}
              </div>
            </div>

            {/* Falling File Cards */}
            {templates.map((template, index) => (
              <motion.div
                key={template.id}
                className={`absolute bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-shadow`}
                style={{
                  width: '200px',
                  left: `${10 + (index * 15)}%`,
                  top: '-100px',
                }}
                animate={{
                  y: [0, 350, 0],
                  rotate: [0, 10, -5, 0],
                }}
                transition={{
                  duration: 4,
                  delay: index * 0.3,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                whileHover={{ scale: 1.05, y: 0, rotate: 0 }}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 bg-gradient-to-r ${template.color} rounded flex items-center justify-center flex-shrink-0`}>
                    <FileText className="w-4 h-4 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-medium truncate">{template.name}</h4>
                    <p className="text-xs text-muted-foreground">{template.category}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Download className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{template.downloads}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Folder Animation */}
            <motion.div
              className="absolute bottom-8 right-8 w-24 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <div className="w-16 h-12 bg-yellow-300 rounded-sm relative">
                <div className="absolute -top-2 left-0 w-6 h-3 bg-yellow-300 rounded-t-sm"></div>
                <motion.div
                  className="absolute inset-1 bg-white/20 rounded-sm"
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Template Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.id}
              className="p-6 border rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: index * 0.1 }
              }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${template.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{template.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{template.description}</p>
                  <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                    {template.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{template.timeToComplete}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Download className="w-4 h-4" />
                  <span>{template.downloads}</span>
                </div>
              </div>

              <Button 
                className="w-full group-hover:bg-indigo-600 group-hover:text-white transition-colors"
                variant="outline"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Template
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Templates Available", value: "150+", icon: FileText },
            { label: "Total Downloads", value: "45,890", icon: Download },
            { label: "Average Save Time", value: "85%", icon: CheckCircle }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl text-indigo-600 mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}