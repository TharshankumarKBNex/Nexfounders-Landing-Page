import { motion } from 'motion/react';
import { useState } from 'react';
import { Users, Globe, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NetworkNode {
  id: number;
  x: number;
  y: number;
  size: number;
  active: boolean;
}

export function NetworkingHub() {
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const networkNodes: NetworkNode[] = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 4 + Math.random() * 8,
    active: Math.random() > 0.7,
  }));

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Startup Networking Hub
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Connect with 1,000+ startups, collaborate on projects, share learnings, and grow together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-1">1,000+ Active Startups</h3>
                <p className="text-sm text-muted-foreground">Connect with founders across India and beyond</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2">Global Reach</h3>
                <p className="text-muted-foreground">Network across Tier-1 to Tier-3 cities</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl mb-2">Real-time Collaboration</h3>
                <p className="text-muted-foreground">Instant messaging and project sharing</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 bg-gradient-to-br from-primary/5 to-blue-100/50 rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1690192224976-6e66e888807e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwbmV0d29ya2luZyUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU4NzMyNDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Startup networking collaboration"
              className="w-full h-full object-cover opacity-20"
            />
            
            {/* Interactive Network Graph Overlay */}
            <div className="absolute inset-0">
              <svg className="w-full h-full">
                {/* Connections */}
                {networkNodes.map((node, i) => 
                  networkNodes.slice(i + 1).map((otherNode, j) => {
                    const distance = Math.sqrt(
                      Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
                    );
                    if (distance < 25) {
                      return (
                        <motion.line
                          key={`${i}-${j}`}
                          x1={`${node.x}%`}
                          y1={`${node.y}%`}
                          x2={`${otherNode.x}%`}
                          y2={`${otherNode.y}%`}
                          stroke="rgb(59 130 246 / 0.3)"
                          strokeWidth="1"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, delay: Math.random() }}
                        />
                      );
                    }
                    return null;
                  })
                )}

                {/* Nodes */}
                {networkNodes.map((node) => (
                  <motion.circle
                    key={node.id}
                    cx={`${node.x}%`}
                    cy={`${node.y}%`}
                    r={node.size}
                    fill={node.active ? 'rgb(34 197 94)' : 'rgb(59 130 246)'}
                    className="cursor-pointer"
                    onHoverStart={() => setHoveredNode(node.id)}
                    onHoverEnd={() => setHoveredNode(null)}
                    animate={{
                      scale: hoveredNode === node.id ? 1.5 : 1,
                      opacity: node.active ? [0.7, 1, 0.7] : 0.6,
                    }}
                    transition={{
                      scale: { duration: 0.2 },
                      opacity: { duration: 2, repeat: Infinity },
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Stats Overlay */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <div className="text-sm">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Online: 234</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Total: 1,247</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}