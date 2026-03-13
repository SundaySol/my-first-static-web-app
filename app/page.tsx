'use client';

import Image from 'next/image';
import { Users, Lock, Cloud, CreditCard, Bank, Article, ChatCircle, CurrencyDollar, Envelope, Stripe, Visa, Mastercard, AmericanExpress, UnionPay } from '@phosphor-icons/react';

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
            Risk Analysis Made Simple
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Collaborate with your team securely using the latest HTML5 technology
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg">
            Start Free Trial
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
                <Users size={64} color="#2563eb" weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Source Serif 4' }}>
                Puts Collaboration First
              </h3>
              <p className="text-gray-600">
                Since the tool is web-based, you can easily share your bow tie diagrams and risk analysis with colleagues without the need for them to install any software.
              </p>
            </div>

            {/* Feature 2: Security */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Lock size={64} color="#2563eb" weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Source Serif 4' }}>
                Safe Storage
              </h3>
              <p className="text-gray-600">
                Your data is encrypted with 256-bit encryption at transfer and at rest. BowTie360 is hosted in Microsoft's data centers for high reliability and availability.
              </p>
            </div>

            {/* Feature 3: Cloud */}
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Cloud size={64} color="#2563eb" weight="duotone" />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Source Serif 4' }}>
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

          <div className="relative overflow-hidden">
            <div className="flex items-center gap-8 marquee">
              {[
                'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon',
                'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa'
              ].concat([
                'Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon',
                'Zeta', 'Eta', 'Theta', 'Iota', 'Kappa'
              ]).map((client, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-40 h-20 bg-white rounded border border-gray-300 flex items-center justify-center text-gray-500 font-semibold"
                >
                  {client}
                </div>
              ))}
            </div>
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
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Source Serif 4' }}>Advanced Analytics</h3>
              <p className="text-gray-600 text-lg">
                Get detailed insights into your risk analysis with our powerful analytics engine. Track trends and make data-driven decisions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 h-64 rounded-lg flex items-center justify-center">
              <Article size={48} color="#6b7280" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-100 to-green-50 h-64 rounded-lg flex items-center justify-center order-2 md:order-1">
              <ChatCircle size={48} color="#6b7280" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Source Serif 4' }}>Real-time Collaboration</h3>
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
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Source Serif 4' }}>Evaluation</h3>
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
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Source Serif 4' }}>Basic</h3>
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
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Source Serif 4' }}>Plus</h3>
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
            <Stripe size={48} color="#635bff" />
            <Visa size={48} color="#1434cb" />
            <Mastercard size={48} color="#eb001b" />
            <AmericanExpress size={48} color="#006fcf" />
            <UnionPay size={48} color="#e60012" />
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
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center gap-2"
            >
              <Envelope size={20} />
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}