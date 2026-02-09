'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center max-w-3xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Source Serif 4' }}>
            The modern tool for risk management
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Bowtie360 allows you to analyze and visualize risks in a systematic way - a key component of bow tie analysis.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Start a free trial!
          </button>
        </div>
      </section>

      {/* Three Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1: Collaboration */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.856-1.487M15 10a3 3 0 11-6 0 3 3 0 016 0zM6 20a9 9 0 0118 0v2h-2.75a4 4 0 00-3.882-2.746A4.175 4.175 0 0015.25 16H6z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black" style={{ fontFamily: 'Source Serif 4' }}>
                Puts Collaboration First
              </h3>
              <p className="text-gray-600">
                Since the tool is web-based, you can easily share your bow tie diagrams and risk analysis with colleagues without the need for them to install any software.
              </p>
            </div>

            {/* Feature 2: Security */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black" style={{ fontFamily: 'Source Serif 4' }}>
                Safe Storage
              </h3>
              <p className="text-gray-600">
                Your data is encrypted with 256-bit encryption at transfer and at rest. BowTie360 is hosted in Microsoft's data centers for high reliability and availability.
              </p>
            </div>

            {/* Feature 3: Cloud */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-black" style={{ fontFamily: 'Source Serif 4' }}>
                Works Everywhere
              </h3>
              <p className="text-gray-600">
                Works well on PC and Mac, Android and iPhone. Built on the latest HTML5 technology - all you need is a web browser!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customers Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black" style={{ fontFamily: 'Source Serif 4' }}>
            Trusted by Leading Companies
          </h2>
          <div className="flex justify-center gap-8 overflow-x-auto pb-4">
            {['Client 1', 'Client 2', 'Client 3', 'Client 4', 'Client 5'].map((client, i) => (
              <div key={i} className="flex-shrink-0 w-40 h-20 bg-white rounded border border-gray-300 flex items-center justify-center text-gray-500 font-semibold">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Quotes Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black" style={{ fontFamily: 'Source Serif 4' }}>
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "BowTie360 has transformed how we manage risk analysis.", author: "John Smith, CEO TechCorp" },
              { quote: "The collaboration features are unmatched in the industry.", author: "Sarah Jones, Risk Manager" },
              { quote: "Security and ease of use combined perfectly.", author: "Michael Brown, Director" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-4 italic">"{item.quote}"</p>
                <p className="font-semibold text-gray-900">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black" style={{ fontFamily: 'Source Serif 4' }}>
            Powerful Features
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-black" style={{ fontFamily: 'Source Serif 4' }}>Advanced Analytics</h3>
              <p className="text-gray-600 text-lg">
                Get detailed insights into your risk analysis with our powerful analytics engine. Track trends and make data-driven decisions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-64 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Feature Image</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-100 to-green-50 h-64 rounded-lg flex items-center justify-center order-2 md:order-1">
              <span className="text-gray-400">Feature Image</span>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-black" style={{ fontFamily: 'Source Serif 4' }}>Real-time Collaboration</h3>
              <p className="text-gray-600 text-lg">
                Work together with your team in real-time. See updates instantly and keep everyone on the same page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black" style={{ fontFamily: 'Source Serif 4' }}>
            Simple, Transparent Pricing
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Evaluation */}
            <div className="border border-gray-300 rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-black" style={{ fontFamily: 'Source Serif 4' }}>Evaluation</h3>
              <p className="text-3xl font-bold mb-6">Free</p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ Up to 3 projects</li>
                <li>✓ Basic features</li>
                <li>✓ Community support</li>
              </ul>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50">
                Start Free
              </button>
            </div>

            {/* Basic */}
            <div className="border-2 border-blue-600 rounded-lg p-8 shadow-lg bg-blue-50">
              <h3 className="text-xl font-bold mb-2 text-black" style={{ fontFamily: 'Source Serif 4' }}>Basic</h3>
              <p className="text-3xl font-bold mb-2">$36</p>
              <p className="text-gray-600 mb-6">/month</p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ Unlimited projects</li>
                <li>✓ All features</li>
                <li>✓ Email support</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Get Started
              </button>
            </div>

            {/* Plus */}
            <div className="border border-gray-300 rounded-lg p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2 text-black" style={{ fontFamily: 'Source Serif 4' }}>Plus</h3>
              <p className="text-3xl font-bold mb-2">$45</p>
              <p className="text-gray-600 mb-6">/month</p>
              <ul className="space-y-3 mb-8 text-gray-600">
                <li>✓ Everything in Basic</li>
                <li>✓ Priority support</li>
                <li>✓ Advanced analytics</li>
              </ul>
              <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded hover:bg-blue-50">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-8">
          <span className="font-semibold text-gray-700">We accept:</span>
          <div className="flex gap-6 flex-wrap justify-center">
            {/* Stripe */}
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#635BFF">
              <rect width="24" height="24" rx="4" fill="#635BFF"/>
            </svg>
            {/* Visa */}
            <svg className="w-12 h-12" viewBox="0 0 48 32" fill="#1434CB">
              <rect width="48" height="32" rx="4" fill="#1434CB"/>
            </svg>
            {/* Mastercard */}
            <svg className="w-12 h-12" viewBox="0 0 48 32" fill="#EB001B">
              <rect width="48" height="32" rx="4" fill="#EB001B"/>
            </svg>
            {/* Amex */}
            <svg className="w-12 h-12" viewBox="0 0 48 32" fill="#006FCF">
              <rect width="48" height="32" rx="4" fill="#006FCF"/>
            </svg>
            {/* UnionPay */}
            <svg className="w-12 h-12" viewBox="0 0 48 32" fill="#E60012">
              <rect width="48" height="32" rx="4" fill="#E60012"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8 text-black" style={{ fontFamily: 'Source Serif 4' }}>
            Get in Touch
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Have questions? Our team is ready to help.
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <textarea 
              placeholder="Message" 
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}