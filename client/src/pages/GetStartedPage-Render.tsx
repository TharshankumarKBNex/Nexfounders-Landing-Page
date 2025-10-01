import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import { useLocation } from "wouter";

type HomeProps = {
  showNavLinks: boolean;
  setShowNavLinks: (val: boolean) => void;
};

export default function renderGetStartedPage({ showNavLinks, setShowNavLinks }: HomeProps) {
  
  const handleTalentModuleRedirecturl = () => {
    location.href = 'https://nexfounders-talent-module.pages.dev/'; //redirect to external webpage (Talent Module)
}

const handleInvestorModuleRedirecturl = () => {
    location.href = 'https://nexfounders-investor-module.pages.dev/'; //redirect to external webpage (Investor Module)
}

const handleEntrepreneurModuleRedirecturl = () => {
    location.href = 'https://nexfounders-entrepreneur-module.pages.dev/'; //redirect to external webpage (entrepreneur)
}
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
        <Navigation showTargetLinks={!showNavLinks} />
        
      

      <main className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold">Choose Your Path</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select your role to access personalized features and connect with the right community
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl">
            {/* Founders Card */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer group">
              <div className="text-4xl mb-4">👨‍💼</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Founders</h3>
              <p className="text-gray-400 mb-6">
                Connect with investors, find co-founders, and access resources to build your startup
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleEntrepreneurModuleRedirecturl}>
                Join as Founder
              </Button>
            </div>

            {/* Investors Card */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer group">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Investors</h3>
              <p className="text-gray-400 mb-6">
                Discover promising startups, evaluate opportunities, and make strategic investments
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleInvestorModuleRedirecturl}>
                Join as Investor
              </Button>
            </div>

            {/* Talents Card */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer group">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">Talents</h3>
              <p className="text-gray-400 mb-6">
                Find exciting opportunities at innovative startups and grow your career
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleTalentModuleRedirecturl}>
                Join as Talent
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}