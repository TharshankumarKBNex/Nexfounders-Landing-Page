import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import logo from "../assets/NEXFOUNDERS WHITE LOGO.svg";

export default function Navigation({ showTargetLinks }: { showTargetLinks: boolean }) {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-nexdark shadow-lg backdrop-blur-md" : "bg-nexdark/90 backdrop-blur-md"
      } border-b border-gray-800`}
    >
      <div className="max-w-10xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3 w-40 h-30 justify-center">
            <img src={logo} alt="NexFounders" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {showTargetLinks && (
              <>
                <a href="/founders" className="text-gray-300 hover:text-white transition-colors">For Founders</a>
                <a href="/investors" className="text-gray-300 hover:text-white transition-colors">For Investors</a>
                <a href="/talents" className="text-gray-300 hover:text-white transition-colors">For Talents</a>
              </>
            )}
            {/* <Link href="/features" className={`transition-colors ${isActive("/features") ? "text-white" : "text-gray-300 hover:text-white"}`}>
              Features
            </Link>
            <Link href="/about" className={`transition-colors ${isActive("/about") ? "text-white" : "text-gray-300 hover:text-white"}`}>
              About
            </Link> */}
            <Link href="/pricing" className={`transition-colors ${isActive("/pricing") ? "text-white" : "text-gray-300 hover:text-white"}`}>
              Pricing
            </Link>
            {/* <a href="#" className="text-gray-300 hover:text-white transition-colors">Sign In</a> */}
            <button className="bg-white text-nexdark px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
              <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-nexdark border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4 px-4">
              {showTargetLinks && (
                <>
                  <a href="#founders" className="text-gray-300 hover:text-white transition-colors">For Founders</a>
                  <a href="#investors" className="text-gray-300 hover:text-white transition-colors">For Investors</a>
                  <a href="#talents" className="text-gray-300 hover:text-white transition-colors">For Talents</a>
                </>
              )}
              <Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Sign In</a>
              <button className="bg-white text-nexdark px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-left">
                Get Started
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
