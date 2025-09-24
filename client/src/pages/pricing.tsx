import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { useToast } from "@/hooks/use-toast";

export default function Pricing() {
  const { toast } = useToast();

  const handleGetStarted = (plan: string) => {
    toast({
      title: `${plan} Plan Selected!`,
      description: "Welcome to NexFounders! Let's get you started.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-nexgray max-w-3xl mx-auto mb-8">
            Choose the plan that best fits your needs. All plans include our core features with no hidden fees.
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <i className="fas fa-gift"></i>
            <span className="font-medium">Start free • EMI support available</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-nexgray">Perfect for early-stage founders</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">Free</span>
                  <span className="text-nexgray ml-2">forever</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Basic startup profile</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Access to investor discovery</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Community networking</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Basic analytics</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Email support</span>
                </li>
              </ul>
              
              <button 
                onClick={() => handleGetStarted("Starter")}
                className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Get Started Free
              </button>
            </div>

            {/* Growth Plan */}
            <div className="bg-white rounded-2xl p-8 border-2 border-nexblue relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-nexblue text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Growth</h3>
                <p className="text-nexgray">For scaling startups and investors</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">₹2,999</span>
                  <span className="text-nexgray ml-2">/month</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>AI-powered matching</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Advanced analytics dashboard</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Pitch deck analyzer</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Direct investor messaging</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Priority support</span>
                </li>
              </ul>
              
              <button 
                onClick={() => handleGetStarted("Growth")}
                className="w-full bg-nexblue text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Growth Plan
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-nexgray">For VCs and large organizations</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                  <span className="text-nexgray ml-2">pricing</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Everything in Growth</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>White-label solutions</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>Advanced reporting</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-nexgreen mr-3"></i>
                  <span>24/7 phone support</span>
                </li>
              </ul>
              
              <button 
                onClick={() => handleGetStarted("Enterprise")}
                className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-nexgray">Everything you need to know about our pricing</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Is there really no setup fee?</h4>
              <p className="text-nexgray">Absolutely! We believe in transparent pricing with no hidden costs. You only pay for the plan you choose.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Do you offer EMI options?</h4>
              <p className="text-nexgray">Yes! We partner with leading financial institutions to offer flexible EMI options for our Growth and Enterprise plans.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Can I switch plans anytime?</h4>
              <p className="text-nexgray">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900 mb-3">What kind of support do you provide?</h4>
              <p className="text-nexgray">We offer email support for all plans, priority support for Growth users, and dedicated phone support for Enterprise customers.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
