import { useState } from "react";

interface FeatureCardProps {
  bgColor: string;
  iconBg: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  checkColor: string;
  specialContent?: React.ReactNode;
}

function FeatureCard({ bgColor, iconBg, icon, title, description, features, checkColor, specialContent }: FeatureCardProps) {
  return (
    <div className={`${bgColor} rounded-2xl p-6 border border-opacity-20`}>
      <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center mb-4`}>
        <i className={`fas ${icon} text-white`}></i>
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-700 mb-4">{description}</p>
      {specialContent || (
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-green-700">
              <i className={`fas fa-check ${checkColor} mr-2`}></i>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function UserTypesSection() {
  const [activeTab, setActiveTab] = useState("investors");

  const tabs = [
    { id: "founders", label: "Founders", icon: "fa-rocket" },
    { id: "investors", label: "Investors", icon: "fa-chart-line" },
    { id: "talents", label: "Early Talents", icon: "fa-users" }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "founders":
        return (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">For Visionary Founders</h3>
              <p className="text-xl text-nexgray max-w-2xl mx-auto">
                Everything you need to build, fund, and scale your startup from idea to IPO
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                bgColor="bg-gradient-to-br from-green-50 to-green-100"
                iconBg="bg-green-600"
                icon="fa-lightbulb"
                title="AI Pitch Analyzer"
                description="Get instant feedback on your pitch deck with AI-powered analysis and scoring"
                features={["Pitch deck scoring", "Content optimization", "Investor readiness"]}
                checkColor="text-nexgreen"
              />
              <FeatureCard
                bgColor="bg-gradient-to-br from-blue-50 to-blue-100"
                iconBg="bg-blue-600"
                icon="fa-chart-pie"
                title="Startup Scorecard"
                description="Comprehensive evaluation of your startup across all key metrics"
                features={["Market analysis", "Team assessment", "Financial health"]}
                checkColor="text-nexgreen"
              />
              <FeatureCard
                bgColor="bg-gradient-to-br from-purple-50 to-purple-100"
                iconBg="bg-purple-600"
                icon="fa-handshake"
                title="Fundraising Tools"
                description="Complete toolkit for raising capital from angel to Series A"
                features={["Investor matching", "Deal tracking", "Legal templates"]}
                checkColor="text-nexgreen"
              />
              <FeatureCard
                bgColor="bg-gradient-to-br from-orange-50 to-orange-100"
                iconBg="bg-orange-600"
                icon="fa-toolbox"
                title="Founder Toolkit"
                description="Essential tools and resources for every stage of your startup journey"
                features={["Business plan templates", "Financial models", "Growth strategies"]}
                checkColor="text-nexgreen"
              />
            </div>
          </div>
        );

      case "investors":
        return (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">For Smart Investors</h3>
              <p className="text-xl text-nexgray max-w-2xl mx-auto">
                Discover, evaluate, and invest in the next generation of startups with AI-powered insights
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                bgColor="bg-gradient-to-br from-blue-50 to-blue-100"
                iconBg="bg-blue-600"
                icon="fa-filter"
                title="AI-Filtered Startup Pipeline"
                description="Intelligent filtering system that matches startups to your investment thesis and preferences"
                features={["Sector-specific filtering", "Stage-based matching", "Risk assessment scoring"]}
                checkColor="text-nexgreen"
              />
              <FeatureCard
                bgColor="bg-gradient-to-br from-purple-50 to-purple-100"
                iconBg="bg-purple-600"
                icon="fa-star"
                title="Startup Score & Real Metrics"
                description="Comprehensive scoring system based on verified traction, team quality, and market potential"
                features={[]}
                checkColor="text-nexgreen"
                specialContent={
                  <div className="bg-white rounded-xl p-4 mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Overall Score</span>
                      <span className="text-2xl font-bold">92/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-purple-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex justify-between">
                        <span>Traction</span>
                        <span className="font-medium text-green-600">Verified</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Team Quality</span>
                        <span className="font-medium text-blue-600">Exceptional</span>
                      </div>
                    </div>
                  </div>
                }
              />
              <FeatureCard
                bgColor="bg-gradient-to-br from-green-50 to-green-100"
                iconBg="bg-green-600"
                icon="fa-user-check"
                title="Access to Verified Founders"
                description="Connect directly with pre-screened and verified founders in your investment focus areas"
                features={["Identity verification", "Background checks", "Track record analysis"]}
                checkColor="text-nexgreen"
              />
              <FeatureCard
                bgColor="bg-gradient-to-br from-orange-50 to-orange-100"
                iconBg="bg-orange-600"
                icon="fa-database"
                title="Data Room Access"
                description="Secure access to startup data rooms with pitch decks, financials, team info, and cap tables"
                features={["Pitch deck analysis", "Financial statements", "Cap table insights"]}
                checkColor="text-nexgreen"
              />
            </div>
          </div>
        );

      case "talents":
        return (
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">For Brilliant Talents</h3>
              <p className="text-xl text-nexgray max-w-2xl mx-auto">
                Discover career opportunities, upskill, and connect with innovative startups
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                bgColor="bg-gradient-to-br from-indigo-50 to-indigo-100"
                iconBg="bg-indigo-600"
                icon="fa-search"
                title="Career Matching"
                description="AI-powered matching system that connects you with the perfect startup opportunities"
                features={["Skill-based matching", "Culture fit analysis", "Growth potential assessment"]}
                checkColor="text-nexgreen"
              />
              <FeatureCard
                bgColor="bg-gradient-to-br from-pink-50 to-pink-100"
                iconBg="bg-pink-600"
                icon="fa-chart-line"
                title="Equity Opportunities"
                description="Access to early-stage equity opportunities and co-founder positions"
                features={["Equity calculator", "Vesting schedules", "Co-founder matching"]}
                checkColor="text-nexgreen"
              />
              <FeatureCard
                bgColor="bg-gradient-to-br from-teal-50 to-teal-100"
                iconBg="bg-teal-600"
                icon="fa-graduation-cap"
                title="Skill Development"
                description="Continuous learning platform with courses tailored for startup environments"
                features={["Startup skills courses", "Mentorship programs", "Certification tracking"]}
                checkColor="text-nexgreen"
              />
              <FeatureCard
                bgColor="bg-gradient-to-br from-yellow-50 to-yellow-100"
                iconBg="bg-yellow-600"
                icon="fa-trophy"
                title="Growth Tracking"
                description="Monitor your professional growth and achievements in the startup ecosystem"
                features={["Achievement badges", "Progress tracking", "Portfolio building"]}
                checkColor="text-nexgreen"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for Every Player in the Ecosystem
          </h2>
          <p className="text-xl text-nexgray max-w-3xl mx-auto">
            Whether you're building, investing, or joining the next big thing, NexFounders has the tools you need to succeed.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-2xl p-2 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'tab-btn active bg-white text-primary shadow-lg'
                    : 'tab-btn text-gray-600 hover:text-gray-900'
                }`}
              >
                <i className={`fas ${tab.icon} mr-2`}></i>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
}
