import Link from "next/link"; // Added the missing import

export default function FeaturesPage() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 to-purple-800 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up drop-shadow-lg">
            Explore the <span className="text-cyan-300">Power</span> of Email Automation
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
            Unlock cutting-edge tools designed to revolutionize your outreach game.
          </p>
        </div>
        {/* Animated Wave Transition */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16 md:h-24 text-gray-900 animate-wave"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="currentColor"
            >
              <animate
                attributeName="d"
                dur="6s"
                repeatCount="indefinite"
                values="
                  M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z;
                  M0,0V60c50,10,100,40,160,35,80-10,150-40,220-45,70-5,140,20,210,35,70,15,140,10,210,-5,40-10,80-25,120-35,80-20,160-40,240-10,80,30,160,60,240,20V0Z;
                  M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              />
            </path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Core Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-700 transition duration-300 transform hover:-translate-y-3">
              <div className="text-cyan-400 text-5xl mb-6 group-hover:scale-110 transition duration-300">📧</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Email Scraping</h3>
              <p className="text-gray-300">
                Harness advanced algorithms to scrape emails with pinpoint accuracy from any platform.
              </p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-700 transition duration-300 transform hover:-translate-y-3">
              <div className="text-cyan-400 text-5xl mb-6 group-hover:scale-110 transition duration-300">⚙️</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Automation</h3>
              <p className="text-gray-300">
                Streamline your workflow with intelligent automation that saves time and maximizes reach.
              </p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-700 transition duration-300 transform hover:-translate-y-3">
              <div className="text-cyan-400 text-5xl mb-6 group-hover:scale-110 transition duration-300">📊</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Dashboard</h3>
              <p className="text-gray-300">
                Get real-time insights with a sleek dashboard to track scraping and outreach effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white">
            Beyond the Basics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-start space-x-4">
              <div className="text-cyan-500 text-4xl">🚀</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Speed</h3>
                <p className="text-gray-400">
                  Process thousands of emails in seconds with optimized performance.
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-start space-x-4">
              <div className="text-cyan-500 text-4xl">🔒</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Secure & Private</h3>
                <p className="text-gray-400">
                  Your data stays safe with top-tier encryption and privacy standards.
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-start space-x-4">
              <div className="text-cyan-500 text-4xl">🌐</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Multi-Platform Support</h3>
                <p className="text-gray-400">
                  Scrape from LinkedIn, Twitter, and more with seamless integration.
                </p>
              </div>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex items-start space-x-4">
              <div className="text-cyan-500 text-4xl">📈</div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Scalable Growth</h3>
                <p className="text-gray-400">
                  Built to handle small startups or massive enterprises with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-900 to-purple-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
            Ready to Experience the Future?
          </h2>
          <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto opacity-90 animate-fade-in-up delay-200">
            Take control of your outreach with tools that redefine efficiency.
          </p>
          <Link
            href="/dashboard"
            className="mt-10 inline-block bg-cyan-400 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-400/50 animate-fade-in-up delay-400 transform"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}