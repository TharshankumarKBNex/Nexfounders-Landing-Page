import { useToast } from "@/hooks/use-toast";

export default function FinalCTA() {
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "Ready to Begin!",
      description: "Welcome to the future of startup ecosystem. Let's get started!",
    });
  };

  const handleBookDemo = () => {
    toast({
      title: "Demo Requested",
      description: "Our team will reach out to you within 24 hours to schedule your personalized demo.",
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-nexblue to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Shape India's Startup Future?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Join thousands of founders, investors, and talents who are already building the next generation of unicorns
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={handleGetStarted}
            className="bg-white text-nexblue px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
          >
            <i className="fas fa-rocket mr-3"></i>
            Get Started Free
          </button>
          <button 
            onClick={handleBookDemo}
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all"
          >
            <i className="fas fa-calendar mr-3"></i>
            Book a Demo
          </button>
        </div>

        {/* Trust Elements */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100">
          <div className="flex items-center">
            <i className="fas fa-check-circle text-green-400 mr-2"></i>
            <span>Free to start</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-check-circle text-green-400 mr-2"></i>
            <span>No setup fees</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-check-circle text-green-400 mr-2"></i>
            <span>24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
