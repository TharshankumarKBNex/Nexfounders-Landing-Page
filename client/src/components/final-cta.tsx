import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Users, DollarSign, Building, Rocket, ArrowRight } from "lucide-react";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [emailFocused, setEmailFocused] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyEzIbQb0SueblUg-8uA2_JobWE1cjORpbz9RpFUJG1tR4wKjdodAOAIHDAuzHekRBE/exec";

    try {
      console.log("Submitting email:", email);
      
      const formData = new FormData();
      formData.append("email", email);

      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);

      const result = await response.text();
      console.log("Response text:", result);

      if (result.includes("Success")) {
        setMessage("🎉 Thanks for joining! We’ll send you updates about our launch shortly.");
        setEmail("");
      } else {
        setMessage(`⚠️ Server response: ${result}`);
      }
    } catch (err) {
      console.error("Error!", err);
      setMessage("⚠️ Network error, try again later.");
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    { text: "Access 4,660+ network", icon: Users },
    { text: "Save ₹55L+ on tools", icon: DollarSign },
    { text: "Connect with 1,430+ investors", icon: Building },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br min-h-screen from-black via-gray-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -200, 0], opacity: [0.1, 0.8, 0.1], scale: [1, 2, 1] }}
            transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, delay: Math.random() * 4 }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <motion.div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8"
            initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
            <Rocket className="w-5 h-5 text-purple-400" />
            <span className="text-sm">Launching Soon</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Shape India's Startup Ecosystem?
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 1,000+ founders who are building, networking, and scaling faster with Nexfounders. Everything you need to take your startup to the next level.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div className="grid md:grid-cols-3 gap-4 mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }}>
          {benefits.map((benefit, i) => (
            <motion.div key={i} className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 + 0.5 }} viewport={{ once: true }} whileHover={{ scale: 1.02 }}>
              <benefit.icon className="w-6 h-6 text-green-400" />
              <span className="text-white">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Email Signup Form */}
        <motion.form onSubmit={handleSubmit} className="mb-12" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
          <div className={`max-w-md mx-auto p-4 bg-white/10 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${emailFocused ? "border-blue-400 shadow-2xl shadow-blue-500/25" : "border-white/20"}`}>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Unlock early access - Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 p-2 bg-transparent text-white placeholder-white/60 outline-none"
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
                required
              />
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-xl px-8 flex items-center justify-center gap-2"
              >
                {loading ? "Submitting..." : "Join Now"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
          {message && <p className="text-sm mt-3 text-gray-300">{message}</p>}
          <p className="text-sm text-gray-400 mt-3">
            Free to join • Quick access
          </p>
        </motion.form>

      </div>
    </section>
  );
}