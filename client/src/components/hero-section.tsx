import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const { toast } = useToast();

  const handleStartJourney = () => {
    toast({
      title: "Welcome to NexFounders!",
      description: "Let's start building your startup journey together.",
    });
  };

  const handleExploreAI = () => {
    toast({
      title: "AI Tools Coming Soon",
      description: "Our AI-powered tools are being fine-tuned for the best experience.",
    });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-nexdark via-gray-900 to-black flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Modern city skyline representing innovation and growth" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-nexdark/90 via-nexdark/70 to-nexdark/50"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8">
          <i className="fas fa-sparkles text-nexgreen"></i>
          <span className="text-white font-medium">Revolutionizing India's Startup Ecosystem</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
          <span>NexFounders</span>
          <br />
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Where Dreams
          </span>
          <br />
          <span className="gradient-text">
            Meet Capital
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          The AI-powered ecosystem connecting <strong className="text-white">visionary founders</strong>, <strong className="text-white">smart investors</strong>, and <strong className="text-white">brilliant talents</strong> to build India's next unicorns
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={handleStartJourney}
            className="bg-white text-nexdark px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
          >
            <i className="fas fa-rocket mr-3"></i>
            Start Your Journey
          </button>
          <button 
            onClick={handleExploreAI}
            className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            <i className="fas fa-brain mr-3"></i>
            Explore AI Tools
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-400 text-sm">Trusted by thousands of founders, investors, and talents</p>
          <div className="flex items-center space-x-8 opacity-60">
            <div className="text-white text-center">
              <i className="fas fa-users text-2xl mb-2 block"></i>
              <p className="text-sm">10,000+ Users</p>
            </div>
            <div className="text-white text-center">
              <i className="fas fa-handshake text-2xl mb-2 block"></i>
              <p className="text-sm">500+ Matches</p>
            </div>
            <div className="text-white text-center">
              <i className="fas fa-chart-line text-2xl mb-2 block"></i>
              <p className="text-sm">₹100Cr+ Funded</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-white text-2xl"></i>
      </div>
    </section>
  );
}
