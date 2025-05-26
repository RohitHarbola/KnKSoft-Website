import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';

export function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div

          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch with our AWS experts and start your cloud journey today.
              We&apos;re here to help you succeed.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3" />
                <span>contact@awsexperts.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="w-6 h-6 mr-3" />
                <span>Live Chat Available 24/7</span>
              </div>
            </div>
          </div>

          <div

            className="bg-white/10 backdrop-blur-lg rounded-xl p-8"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-white/20 focus:outline-none h-32"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              <button

                className="w-full bg-white text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-semibold"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}