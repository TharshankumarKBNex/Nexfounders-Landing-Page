export default function ProblemsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Problems We're Solving
          </h2>
          <p className="text-xl text-nexgray max-w-3xl mx-auto">
            Traditional startup ecosystems are broken. We're building the future of entrepreneurship in India.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Problem 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-dollar-sign text-red-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Unfair Fundraising</h3>
            <p className="text-nexgray leading-relaxed mb-6">
              High brokerage fees, limited access to investors, and opaque processes make fundraising a nightmare for early-stage startups.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-red-500 mr-2"></i>
                <span>15-20% brokerage fees</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-red-500 mr-2"></i>
                <span>Limited investor network</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-red-500 mr-2"></i>
                <span>Months of waiting</span>
              </div>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-users text-amber-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Weak Team Building</h3>
            <p className="text-nexgray leading-relaxed mb-6">
              Difficulty finding skilled talent and co-founders for early-stage startups hampers growth and innovation potential.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-amber-500 mr-2"></i>
                <span>Skill-founder mismatch</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-amber-500 mr-2"></i>
                <span>High hiring costs</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-amber-500 mr-2"></i>
                <span>No co-founder discovery</span>
              </div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <i className="fas fa-eye text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Limited Exposure</h3>
            <p className="text-nexgray leading-relaxed mb-6">
              Lack of visibility and networking opportunities in the startup ecosystem limits growth and collaboration potential.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-purple-500 mr-2"></i>
                <span>Hidden from investors</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-purple-500 mr-2"></i>
                <span>No networking platform</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <i className="fas fa-times-circle text-purple-500 mr-2"></i>
                <span>Missed opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
