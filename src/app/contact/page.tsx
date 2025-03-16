"use client"; // Required for client-side interactivity

import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("Sending...");
    setTimeout(() => {
      setFormStatus("Message sent successfully!");
    }, 1000); // Simulated submission delay
  };

  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 to-purple-800 py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in-up drop-shadow-lg">
            Get in <span className="text-cyan-300">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-200">
            We’re here to help—reach out for support, inquiries, or just to say hello.
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

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-8 animate-fade-in-up">
              Send Us a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg shadow-cyan-500/20 transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-200"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-200"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-300 font-medium mb-2">Message</label>
                <textarea
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition duration-200"
                  rows={5}
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-400 text-gray-900 p-3 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:scale-105 transition duration-300 shadow-lg shadow-cyan-400/50 transform"
              >
                Send Message
              </button>
              {formStatus && (
                <p className="mt-4 text-center text-gray-300 animate-fade-in-up">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 md:py-24 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Other Ways to Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="text-cyan-400 text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">
                <a href="mailto:support@emailscraper.com" className="hover:text-cyan-300 transition">
                  support@emailscraper.com
                </a>
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="text-cyan-400 text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">
                <a href="tel:+1234567890" className="hover:text-cyan-300 transition">
                  +1 234 567 890
                </a>
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
              <div className="text-cyan-400 text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-400">123 Tech Lane, Digital City</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}