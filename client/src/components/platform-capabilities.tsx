export default function PlatformCapabilities() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-nexblue text-white px-6 py-3 rounded-full mb-6">
            <i className="fas fa-dollar-sign"></i>
            <span className="font-semibold">Discover Investment Opportunities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <i className="fas fa-brain text-pink-500 mr-4"></i>
            Bonus Features & Platform Capabilities
          </h2>
          <p className="text-xl text-nexgray max-w-3xl mx-auto">
            Discover additional tools and features that make NexFounders the complete startup ecosystem platform
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-globe text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Public Startup Discovery Wall</h3>
            <p className="text-nexgray leading-relaxed">
              Explore trending startups, success stories, and emerging opportunities in one central hub
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-comments text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration Tools</h3>
            <p className="text-nexgray leading-relaxed">
              Built-in messaging, video calls, and project management tools for seamless team collaboration
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
