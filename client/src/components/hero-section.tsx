import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

type HeroSectionProps = {
  onVisibilityChange: (visible: boolean) => void;
};

export default function HeroSection({ onVisibilityChange }: HeroSectionProps) {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement | null>(null);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        onVisibilityChange(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [onVisibilityChange]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-nexdark via-gray-900 to-black flex items-center justify-center overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&h=1080"
          alt="Innovation"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-nexdark/90 via-nexdark/70 to-nexdark/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Your Platform to Excel the{" "}
            <span className="gradient-text">Future Innovation</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          The AI-powered ecosystem connecting{" "}
          <strong className="text-white">visionary founders</strong>,
          <strong className="text-white"> smart investors</strong>, and
          <strong className="text-white"> brilliant talents</strong> to build
          India's next unicorns
        </p>

        {/* CTA Buttons */}
        <div className="max-w-md mx-auto mb-16 px-2">
          <div className="flex justify-center items-center gap-4 mb-4">
            <button
              onClick={handleStartJourney}
              className="border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center"
            >
              <i className="fas fa-rocket mr-2"></i>
              Founders
            </button>
            <button
              onClick={handleExploreAI}
              className="border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center"
            >
              <i className="fas fa-brain mr-2"></i>
              Investors
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleStartJourney}
              className="border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center"
            >
              <i className="fas fa-rocket mr-2"></i>
              Talents
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-gray-400 text-sm">
            Trusted by thousands of founders, investors, and talents
          </p>
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
