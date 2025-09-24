export default function ProblemsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50  bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Barriers We're Breaking
          </h2>
          <p className="text-xl text-nexgray max-w-3xl mx-auto">
            India's startup ecosystem is growing fast, but it's fragmented. We're here to connect the missing dots and power the next wave of innovation.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Problem 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-dollar-sign text-red-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Entrepreneur's Struggles</h3>
            <p className="text-nexgray leading-relaxed mb-6">
              Raising funds, hiring talent, and finding the right partners is slow and costly, making it hard for founders to scale at the right time.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-red-500 mr-2"></i>
                <span>Unfair brokerage and delays</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-red-500 mr-2"></i>
                <span>Hard to source Talents</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-red-500 mr-2"></i>
                <span>Limited market visibility</span>
              </div>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-users text-amber-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Investor's Challenges</h3>
            <p className="text-nexgray leading-relaxed mb-6">
              Investors face scattered deal flow, poor startup data, and hidden opportunities in smaller cities, leading to slow and risky decisions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-amber-500 mr-2"></i>
                <span>No reliable startup insights</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-amber-500 mr-2"></i>
                <span>Missed Tier 2-3 founders</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-amber-500 mr-2"></i>
                <span>Long due diligence cycles</span>
              </div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-eye text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Talent's Roadblocks</h3>
            <p className="text-nexgray leading-relaxed mb-6">
              Students and early professionals struggle to access startups, learn required skills, and connect with the right opportunities to grow.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-purple-500 mr-2"></i>
                <span>No startup-ready career path</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-purple-500 mr-2"></i>
                <span>Lack of skill guidance</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-purple-500 mr-2"></i>
                <span>Limited founder connections</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
