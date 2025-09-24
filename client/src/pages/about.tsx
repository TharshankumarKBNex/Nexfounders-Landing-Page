import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-nexdark to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About NexFounders
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to democratize access to capital, talent, and opportunities in India's startup ecosystem
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="space-y-6 text-lg text-nexgray text-left">
              <p>
                NexFounders was born out of frustration with the traditional startup ecosystem. Our founders experienced firsthand the challenges of raising capital, finding the right talent, and navigating the complex world of entrepreneurship.
              </p>
              <p>
                After witnessing countless brilliant ideas fail not due to lack of potential, but due to lack of access to the right resources and connections, we decided to build the platform we wished existed when we started our entrepreneurial journeys.
              </p>
              <p>
                Today, NexFounders represents the future of startup ecosystems - transparent, AI-powered, and designed to empower every stakeholder in the entrepreneurial journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-nexblue rounded-3xl flex items-center justify-center mx-auto mb-8">
                <i className="fas fa-bullseye text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-nexgray">
                To democratize access to capital, talent, and opportunities by building India's most transparent and efficient startup ecosystem platform.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <i className="fas fa-eye text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-nexgray">
                A world where every brilliant idea has access to the resources and connections needed to become the next unicorn, regardless of background or location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-nexgray">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-heart text-green-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Transparency</h4>
              <p className="text-nexgray">We believe in open, honest communication and transparent processes at every step.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-rocket text-blue-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Innovation</h4>
              <p className="text-nexgray">We continuously push the boundaries of what's possible with technology and AI.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-users text-purple-600 text-2xl"></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">Community</h4>
              <p className="text-nexgray">We foster a supportive community where everyone can learn, grow, and succeed together.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
