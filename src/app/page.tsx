import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-700 to-purple-800 py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight animate-fade-in-up drop-shadow-lg">
            Revolutionize Outreach with <span className="text-cyan-300">Email Automation</span>
          </h1>
          <p className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto opacity-90 animate-fade-in-up delay-200">
            Step into the future of email scraping—fast, smart, and built for tomorrow’s professionals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up delay-400">
            <Link
              href="/dashboard"
              className="bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-500/50"
            >
              Launch Now
            </Link>
            <Link
              href="/features"
              className="border-2 border-cyan-300 text-cyan-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-300 hover:text-gray-900 transition duration-300 shadow-lg"
            >
              Discover More
            </Link>
          </div>
        </div>
        {/* Futuristic Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-400 rounded-full opacity-20 blur-2xl animate-spin-slow"></div>
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

      {/* Key Benefits Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Next-Level Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-700 transition duration-300 transform hover:-translate-y-3">
              <div className="text-cyan-400 text-5xl mb-6 group-hover:scale-110 transition duration-300">📧</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Laser-Focused Scraping</h3>
              <p className="text-gray-300">
                Pinpoint emails with cutting-edge precision across platforms.
              </p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-700 transition duration-300 transform hover:-translate-y-3">
              <div className="text-cyan-400 text-5xl mb-6 group-hover:scale-110 transition duration-300">⚙️</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Intelligent Automation</h3>
              <p className="text-gray-300">
                Automate outreach like never before with zero effort.
              </p>
            </div>
            <div className="group bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:bg-gray-700 transition duration-300 transform hover:-translate-y-3">
              <div className="text-cyan-400 text-5xl mb-6 group-hover:scale-110 transition duration-300">📊</div>
              <h3 className="text-2xl font-semibold text-white mb-4">Futuristic Analytics</h3>
              <p className="text-gray-300">
                Real-time insights to dominate your campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-white">
            Your Path to Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-cyan-500/50">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Capture Emails</h3>
              <p className="text-gray-400 max-w-xs mx-auto">
                Target and scrape emails with unmatched speed and accuracy.
              </p>
            </div>
            <div className="text-center bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-cyan-500/50">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Launch Campaigns</h3>
              <p className="text-gray-400 max-w-xs mx-auto">
                Send tailored emails effortlessly from one dashboard.
              </p>
            </div>
            <div className="text-center bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-cyan-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-cyan-500/50">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Master Results</h3>
              <p className="text-gray-400 max-w-xs mx-auto">
                Track every move with sleek, actionable analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-indigo-900 to-purple-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
            Step Into the Future of Outreach
          </h2>
          <p className="text-lg md:text-xl mt-6 max-w-2xl mx-auto opacity-90 animate-fade-in-up delay-200">
            Unleash your potential with a tool designed for the next generation of professionals.
          </p>
          <Link
            href="/dashboard"
            className="mt-10 inline-block bg-cyan-400 text-gray-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-400/50 animate-fade-in-up delay-400"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}