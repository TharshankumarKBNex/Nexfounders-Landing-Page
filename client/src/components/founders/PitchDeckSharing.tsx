import { motion } from 'motion/react';
import { useState } from 'react';
import { FileText, Eye, Download, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Button } from './ui/button';

interface PitchDeck {
  id: number;
  title: string;
  company: string;
  industry: string;
  rating: number;
  views: number;
  downloads: number;
}

export function PitchDeckSharing() {
  const [currentDeck, setCurrentDeck] = useState(0);

  const pitchDecks: PitchDeck[] = [
    {
      id: 1,
      title: "Series A Pitch Deck",
      company: "TechFlow AI",
      industry: "Artificial Intelligence",
      rating: 4.8,
      views: 1247,
      downloads: 234
    },
    {
      id: 2,
      title: "Seed Round Presentation",
      company: "GreenTech Solutions",
      industry: "CleanTech",
      rating: 4.6,
      views: 892,
      downloads: 156
    },
    {
      id: 3,
      title: "Product Launch Deck",
      company: "FinanceBot",
      industry: "FinTech",
      rating: 4.9,
      views: 2103,
      downloads: 445
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-purple/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Pitch Deck Sharing & Access
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover real pitch decks, benchmark your own, and share securely with peers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1590098563686-06ab8778a6a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXRjaCUyMGRlY2slMjBwcmVzZW50YXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTg3MzI0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pitch deck presentation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Floating Cards */}
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="absolute bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                  style={{
                    top: `${20 + index * 25}%`,
                    right: `${10 + index * 15}%`,
                    width: '200px',
                  }}
                  initial={{ opacity: 0, y: 50, rotateY: -90 }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0, 
                    rotateY: 0,
                    transition: { delay: index * 0.2 }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                    z: 50
                  }}
                  viewport={{ once: true }}
                  className="cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm truncate">Deck {index + 1}</h4>
                      <p className="text-xs text-muted-foreground">Company {index + 1}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs">4.{8 - index}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl">Browse Real Pitch Decks</h3>
              
              {/* Carousel */}
              <div className="space-y-4">
                {pitchDecks.map((deck, index) => (
                  <motion.div
                    key={deck.id}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      currentDeck === index 
                        ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200' 
                        : 'bg-white/50 border-gray-200 hover:border-purple-200'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setCurrentDeck(index)}
                    animate={{
                      opacity: currentDeck === index ? 1 : 0.7,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">{deck.title}</h4>
                        <p className="text-sm text-muted-foreground">{deck.company} • {deck.industry}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            <span>{deck.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{deck.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            <span>{deck.downloads}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant={currentDeck === index ? "default" : "outline"}
                        className="shrink-0"
                      >
                        {currentDeck === index ? "Viewing" : "View"}
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                {pitchDecks.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentDeck === index ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentDeck(index)}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}