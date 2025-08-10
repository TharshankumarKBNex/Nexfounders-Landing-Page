import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-nexdark text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-nexblue to-purple-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-rocket text-white"></i>
              </div>
              <div>
                <span className="text-white font-bold text-xl">NexFounders</span>
                <p className="text-gray-400 text-xs -mt-1">Next-Gen Startup Ecosystem</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering startup journeys, from spark to scale. Building India's next unicorns through AI-powered connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>

          {/* For Founders */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Founders</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">AI Pitch Analyzer</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Startup Scorecard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fundraising Tools</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Founder Toolkit</a></li>
            </ul>
          </div>

          {/* For Investors */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Investors</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Deal Pipeline</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Due Diligence</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portfolio Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investment Calculators</a></li>
            </ul>
          </div>

          {/* For Talents */}
          <div>
            <h4 className="text-white font-semibold mb-4">For Talents</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Career Matching</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Equity Opportunities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skill Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Growth Tracking</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 NexFounders. All rights reserved. Building India's startup future.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
