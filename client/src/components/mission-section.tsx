export default function MissionSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-20 h-20 bg-nexblue rounded-3xl flex items-center justify-center mx-auto mb-8">
          <i className="fas fa-bullseye text-white text-3xl"></i>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Mission</h2>
        <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 italic">
          "Empowering startup journeys, from spark to scale."
        </blockquote>
        <p className="text-xl text-nexgray leading-relaxed max-w-3xl mx-auto">
          We're democratizing access to capital, talent, and opportunities through AI-powered matching, transparent processes, and a thriving community ecosystem.
        </p>
      </div>
    </section>
  );
}
