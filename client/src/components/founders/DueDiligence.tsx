import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { CheckCircle, Clock, FileText, Shield, Users, BarChart3, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

interface ChecklistItem {
  id: number;
  category: string;
  item: string;
  status: 'pending' | 'checking' | 'completed' | 'attention';
  description: string;
  icon: React.ElementType;
}

export function DueDiligence() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const checklistItems: ChecklistItem[] = [
    {
      id: 1,
      category: "Legal Documents",
      item: "Company Registration",
      status: 'completed',
      description: "Certificate of incorporation verified",
      icon: FileText
    },
    {
      id: 2,
      category: "Legal Documents",
      item: "Trademark & IP",
      status: 'completed',
      description: "Intellectual property rights documented",
      icon: Shield
    },
    {
      id: 3,
      category: "Financial Records",
      item: "Financial Statements",
      status: 'checking',
      description: "Last 3 years P&L, Balance Sheet",
      icon: BarChart3
    },
    {
      id: 4,
      category: "Financial Records",
      item: "Tax Compliance",
      status: 'pending',
      description: "GST returns and income tax filings",
      icon: FileText
    },
    {
      id: 5,
      category: "Team & Operations",
      item: "Key Personnel",
      status: 'completed',
      description: "Founder backgrounds and team structure",
      icon: Users
    },
    {
      id: 6,
      category: "Team & Operations",
      item: "Employee Agreements",
      status: 'attention',
      description: "Review employee contracts and agreements",
      icon: FileText
    },
    {
      id: 7,
      category: "Business Model",
      item: "Revenue Model",
      status: 'completed',
      description: "Clear monetization strategy documented",
      icon: BarChart3
    },
    {
      id: 8,
      category: "Business Model",
      item: "Market Analysis",
      status: 'checking',
      description: "TAM, SAM, SOM analysis in progress",
      icon: BarChart3
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % checklistItems.length;
        
        // Update progress based on completed items
        const completedItems = checklistItems.filter(item => 
          item.status === 'completed' || checklistItems.indexOf(item) < nextStep
        ).length;
        setProgress((completedItems / checklistItems.length) * 100);
        
        return nextStep;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [checklistItems.length]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'checking':
        return <Clock className="w-5 h-5 text-blue-600 animate-spin" />;
      case 'attention':
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
      default:
        return <div className="w-5 h-5 border-2 border-gray-300 rounded-full" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'border-green-200 bg-green-50';
      case 'checking': return 'border-blue-200 bg-blue-50';
      case 'attention': return 'border-yellow-200 bg-yellow-50';
      default: return 'border-gray-200 bg-white';
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green/5 to-emerald/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Automated Due Diligence Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Automate the first stage of due diligence. Let investors review your structured data instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border">
              <h3 className="text-2xl mb-6 flex items-center gap-2">
                <Shield className="w-8 h-8 text-green-600" />
                Due Diligence Progress
              </h3>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Overall Completion</span>
                  <span className="text-sm font-medium">{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>

              <div className="space-y-4">
                {['Legal Documents', 'Financial Records', 'Team & Operations', 'Business Model'].map((category, index) => {
                  const categoryItems = checklistItems.filter(item => item.category === category);
                  const completedItems = categoryItems.filter(item => item.status === 'completed').length;
                  const categoryProgress = (completedItems / categoryItems.length) * 100;

                  return (
                    <motion.div
                      key={category}
                      className="p-4 border rounded-lg bg-white/50"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: index * 0.1 }
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{category}</h4>
                        <span className="text-sm text-muted-foreground">
                          {completedItems}/{categoryItems.length}
                        </span>
                      </div>
                      <Progress value={categoryProgress} className="h-2" />
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-green-600" />
                Investment Readiness Score
              </h4>
              <div className="text-center">
                <div className="text-3xl text-green-600 mb-2">8.7/10</div>
                <div className="text-sm text-muted-foreground">Ready for investor review</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6">Checklist Items</h3>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {checklistItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`p-4 border rounded-lg transition-all duration-300 ${getStatusColor(item.status)} ${
                    currentStep === index ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: index * 0.05 }
                  }}
                  animate={{
                    scale: currentStep === index ? 1.02 : 1,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      item.status === 'completed' ? 'bg-green-100' :
                      item.status === 'checking' ? 'bg-blue-100' :
                      item.status === 'attention' ? 'bg-yellow-100' : 'bg-gray-100'
                    }`}>
                      <item.icon className={`w-5 h-5 ${
                        item.status === 'completed' ? 'text-green-600' :
                        item.status === 'checking' ? 'text-blue-600' :
                        item.status === 'attention' ? 'text-yellow-600' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium">{item.item}</h4>
                        {getStatusIcon(item.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Auto-checking animation */}
                  {currentStep === index && item.status === 'checking' && (
                    <motion.div
                      className="mt-3 h-1 bg-blue-200 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="h-full bg-blue-600 rounded-full"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Investor Review Panel */}
            <motion.div
              className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border mt-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4">Investor Review Panel</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Data Completeness</span>
                  <span className="text-green-600">94%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Document Verification</span>
                  <span className="text-blue-600">In Progress</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Risk Assessment</span>
                  <span className="text-green-600">Low Risk</span>
                </div>
              </div>
              
              <Button className="w-full mt-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                Share with Investors
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}