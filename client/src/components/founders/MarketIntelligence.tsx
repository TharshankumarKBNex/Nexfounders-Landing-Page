import { motion } from 'motion/react';
import { useState } from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, Eye } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

interface SectorData {
  name: string;
  startups: number;
  funding: number;
  growth: number;
  color: string;
}

export function MarketIntelligence() {
  const [selectedSector, setSelectedSector] = useState<string | null>(null);

  const sectorData: SectorData[] = [
    { name: "FinTech", startups: 1247, funding: 145, growth: 34, color: "#3B82F6" },
    { name: "HealthTech", startups: 892, funding: 89, growth: 28, color: "#10B981" },
    { name: "EdTech", startups: 756, funding: 67, growth: 45, color: "#8B5CF6" },
    { name: "E-commerce", startups: 1456, funding: 234, growth: 12, color: "#F59E0B" },
    { name: "AI/ML", startups: 634, funding: 156, growth: 67, color: "#EF4444" },
    { name: "SaaS", startups: 923, funding: 178, growth: 23, color: "#06B6D4" },
  ];

  const monthlyData = [
    { month: 'Jan', funding: 45, startups: 23 },
    { month: 'Feb', funding: 67, startups: 34 },
    { month: 'Mar', funding: 89, startups: 45 },
    { month: 'Apr', funding: 123, startups: 56 },
    { month: 'May', funding: 156, startups: 67 },
    { month: 'Jun', funding: 234, startups: 89 },
  ];

  const cityData = [
    { name: "Bangalore", value: 35, color: "#3B82F6" },
    { name: "Mumbai", value: 28, color: "#10B981" },
    { name: "Delhi", value: 22, color: "#8B5CF6" },
    { name: "Hyderabad", value: 15, color: "#F59E0B" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue/5 to-indigo/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Market Intelligence Dashboard
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            See which startups are booming sector-wise across India with real-time analytics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Key Metrics */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl mb-6 flex items-center gap-2">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              Key Metrics
            </h3>

            {[
              { icon: Users, label: "Total Startups", value: "5,947", change: "+12%", color: "from-blue-500 to-indigo-600" },
              { icon: DollarSign, label: "Total Funding", value: "₹1,247Cr", change: "+34%", color: "from-green-500 to-emerald-600" },
              { icon: TrendingUp, label: "Avg Growth", value: "156%", change: "+8%", color: "from-purple-500 to-pink-600" },
              { icon: Eye, label: "Active This Month", value: "2,156", change: "+23%", color: "from-orange-500 to-red-600" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: index * 0.1 }
                }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-lg flex items-center justify-center`}>
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded">
                    {metric.change}
                  </span>
                </div>
                <div className="text-2xl mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Charts */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sector Bubbles */}
            <motion.div
              className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl mb-6">Sector Performance</h4>
              <div className="relative h-64 flex items-center justify-center">
                {sectorData.map((sector, index) => {
                  const size = 40 + (sector.funding / 10);
                  const angle = (index / sectorData.length) * 2 * Math.PI;
                  const radius = 80;
                  const x = 50 + (radius * Math.cos(angle)) / 3;
                  const y = 50 + (radius * Math.sin(angle)) / 3;

                  return (
                    <motion.div
                      key={sector.name}
                      className="absolute cursor-pointer"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      initial={{ scale: 0 }}
                      whileInView={{ 
                        scale: 1,
                        transition: { delay: index * 0.1 }
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        zIndex: 10,
                      }}
                      onHoverStart={() => setSelectedSector(sector.name)}
                      onHoverEnd={() => setSelectedSector(null)}
                      viewport={{ once: true }}
                    >
                      <div
                        className="rounded-full flex items-center justify-center text-white text-xs font-medium shadow-lg"
                        style={{
                          width: `${size}px`,
                          height: `${size}px`,
                          backgroundColor: sector.color,
                        }}
                      >
                        <div className="text-center">
                          <div className="text-xs opacity-90">{sector.startups}</div>
                        </div>
                      </div>

                      {/* Tooltip */}
                      {selectedSector === sector.name && (
                        <motion.div
                          className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg whitespace-nowrap"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <div className="text-sm font-medium">{sector.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {sector.startups} startups • ₹{sector.funding}Cr funding
                          </div>
                          <div className="text-xs text-green-600">+{sector.growth}% growth</div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Bar Chart */}
            <motion.div
              className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl mb-6">Monthly Funding Trends</h4>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={monthlyData}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Bar 
                      dataKey="funding" 
                      fill="url(#gradient1)"
                      radius={[4, 4, 0, 0]}
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.2}/>
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* City Distribution */}
            <motion.div
              className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl mb-6">Startup Distribution by City</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="h-48">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={cityData}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {cityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="space-y-3">
                  {cityData.map((city, index) => (
                    <motion.div
                      key={city.name}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: 0.6 + index * 0.1 }
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: city.color }}
                        />
                        <span className="text-sm">{city.name}</span>
                      </div>
                      <span className="text-sm font-medium">{city.value}%</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}