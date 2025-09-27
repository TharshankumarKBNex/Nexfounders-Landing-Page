import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Users, Briefcase, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface City {
  name: string;
  tier: number;
  x: number;
  y: number;
  talents: number;
  specialties: string[];
}

interface TalentProfile {
  id: number;
  name: string;
  role: string;
  city: string;
  tier: number;
  experience: string;
  skills: string[];
}

export function TalentDiscovery() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const cities: City[] = [
    { name: "Mumbai", tier: 1, x: 25, y: 45, talents: 15420, specialties: ["FinTech", "Media"] },
    { name: "Delhi", tier: 1, x: 35, y: 20, talents: 18750, specialties: ["GovTech", "Enterprise"] },
    { name: "Bangalore", tier: 1, x: 40, y: 70, talents: 22340, specialties: ["Tech", "AI/ML"] },
    { name: "Chennai", tier: 1, x: 45, y: 75, talents: 12890, specialties: ["Hardware", "Auto"] },
    { name: "Hyderabad", tier: 1, x: 45, y: 60, talents: 14560, specialties: ["Pharma", "Biotech"] },
    { name: "Pune", tier: 2, x: 28, y: 50, talents: 8940, specialties: ["IT Services", "Auto"] },
    { name: "Ahmedabad", tier: 2, x: 22, y: 35, talents: 6780, specialties: ["Chemicals", "Textiles"] },
    { name: "Kolkata", tier: 2, x: 60, y: 35, talents: 7890, specialties: ["Manufacturing", "Jute"] },
    { name: "Indore", tier: 3, x: 32, y: 35, talents: 3450, specialties: ["Education", "Food Processing"] },
    { name: "Bhopal", tier: 3, x: 38, y: 35, talents: 2890, specialties: ["Agriculture", "Heavy Industries"] },
    { name: "Coimbatore", tier: 3, x: 42, y: 78, talents: 4120, specialties: ["Textiles", "Engineering"] },
  ];

  const talentProfiles: TalentProfile[] = [
    { id: 1, name: "Ravi Kumar", role: "Full Stack Developer", city: "Bangalore", tier: 1, experience: "5 years", skills: ["React", "Node.js", "AWS"] },
    { id: 2, name: "Priya Singh", role: "UI/UX Designer", city: "Mumbai", tier: 1, experience: "3 years", skills: ["Figma", "Adobe XD", "Prototyping"] },
    { id: 3, name: "Amit Patel", role: "Data Scientist", city: "Pune", tier: 2, experience: "4 years", skills: ["Python", "ML", "SQL"] },
    { id: 4, name: "Sneha Reddy", role: "Product Manager", city: "Hyderabad", tier: 1, experience: "6 years", skills: ["Strategy", "Analytics", "Agile"] },
    { id: 5, name: "Vikram Gupta", role: "Backend Developer", city: "Indore", tier: 3, experience: "2 years", skills: ["Java", "Spring", "MongoDB"] },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green/5 to-teal/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Talent Discovery Across India
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hire talents from Tier-3 to Tier-1 cities, connect with co-founders, and build your dream team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* India Map */}
            <div className="relative h-96 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl overflow-hidden p-8">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741849409363-4365cd102438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGFsZW50JTIwaGlyaW5nJTIwcmVtb3RlfGVufDF8fHx8MTc1ODczMjQ2MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tech talent hiring remote"
                className="w-full h-full object-cover opacity-10 absolute inset-0"
              />

              {/* Cities on Map */}
              <div className="relative w-full h-full">
                {cities.map((city, index) => (
                  <motion.div
                    key={city.name}
                    className="absolute cursor-pointer"
                    style={{ left: `${city.x}%`, top: `${city.y}%` }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { delay: index * 0.1 }
                    }}
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => setSelectedCity(city.name)}
                    onHoverEnd={() => setSelectedCity(null)}
                    viewport={{ once: true }}
                  >
                    {/* Pulsing Dot */}
                    <motion.div
                      className={`w-4 h-4 rounded-full relative ${
                        city.tier === 1 ? 'bg-green-500' :
                        city.tier === 2 ? 'bg-yellow-500' : 'bg-orange-500'
                      }`}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    >
                      {/* Ripple Effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-full ${
                          city.tier === 1 ? 'bg-green-500' :
                          city.tier === 2 ? 'bg-yellow-500' : 'bg-orange-500'
                        }`}
                        animate={{
                          scale: [1, 3, 1],
                          opacity: [0.6, 0, 0.6],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    </motion.div>

                    {/* City Info Tooltip */}
                    {selectedCity === city.name && (
                      <motion.div
                        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg min-w-48"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                      >
                        <h4 className="font-medium">{city.name}</h4>
                        <p className="text-sm text-muted-foreground">Tier {city.tier} City</p>
                        <p className="text-sm text-green-600">{city.talents.toLocaleString()} talents</p>
                        <div className="flex gap-1 mt-2">
                          {city.specialties.slice(0, 2).map((specialty) => (
                            <span key={specialty} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Legend */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <h5 className="text-sm font-medium mb-2">City Tiers</h5>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Tier 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span>Tier 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Tier 3</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl">Featured Talent</h3>
            
            {/* Talent Profiles */}
            <div className="space-y-4">
              {talentProfiles.map((talent, index) => (
                <motion.div
                  key={talent.id}
                  className="p-4 border rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        talent.tier === 1 ? 'bg-green-100' :
                        talent.tier === 2 ? 'bg-yellow-100' : 'bg-orange-100'
                      }`}>
                        <Users className={`w-5 h-5 ${
                          talent.tier === 1 ? 'text-green-600' :
                          talent.tier === 2 ? 'text-yellow-600' : 'text-orange-600'
                        }`} />
                      </div>
                      <div>
                        <h4 className="font-medium">{talent.name}</h4>
                        <p className="text-sm text-muted-foreground">{talent.role}</p>
                        <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{talent.city} (T{talent.tier})</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" />
                            <span>{talent.experience}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-1 flex-wrap">
                    {talent.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg">
                <div className="text-2xl text-green-600">45,680</div>
                <div className="text-sm text-muted-foreground">Total Talents</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg">
                <div className="text-2xl text-teal-600">156</div>
                <div className="text-sm text-muted-foreground">Cities Covered</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}