import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Features() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Comprehensive Platform Features
            </h1>
            <p className="text-xl text-nexgray max-w-3xl mx-auto">
              Discover all the tools and capabilities that make NexFounders the most complete startup ecosystem platform
            </p>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI-Powered Intelligence</h2>
            <p className="text-xl text-nexgray">Cutting-edge artificial intelligence to supercharge your startup journey</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-brain text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Matching</h3>
              <p className="text-gray-700">AI algorithms that connect the right founders with the right investors and talents</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-chart-bar text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Predictive Analytics</h3>
              <p className="text-gray-700">Advanced analytics to predict startup success and investment opportunities</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Intelligent Insights</h3>
              <p className="text-gray-700">Actionable insights and recommendations based on market trends and data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Tools */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Toolkit</h2>
            <p className="text-xl text-nexgray">Everything you need to succeed in the startup ecosystem</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Tool items */}
            {[
              { icon: "fa-file-alt", title: "Pitch Deck Builder", desc: "Create compelling pitch decks with templates" },
              { icon: "fa-calculator", title: "Financial Models", desc: "Ready-to-use financial modeling tools" },
              { icon: "fa-users", title: "Team Builder", desc: "Find and connect with potential co-founders" },
              { icon: "fa-handshake", title: "Deal Tracker", desc: "Track investment opportunities and deals" },
              { icon: "fa-chart-line", title: "Analytics Dashboard", desc: "Monitor your startup's key metrics" },
              { icon: "fa-shield-alt", title: "Legal Templates", desc: "Access to startup legal documents" },
              { icon: "fa-video", title: "Video Pitching", desc: "Record and share video pitches" },
              { icon: "fa-globe", title: "Public Profile", desc: "Showcase your startup to the ecosystem" }
            ].map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="w-12 h-12 bg-nexblue rounded-xl flex items-center justify-center mb-4">
                  <i className={`fas ${tool.icon} text-white`}></i>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h4>
                <p className="text-gray-600 text-sm">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
