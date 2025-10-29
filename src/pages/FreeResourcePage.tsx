import { CheckCircle, Download, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function FreeResourcePage() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const benefits = [
    {
      title: 'Why Most AI Implementations Fail',
      description:
        'Learn the critical mistakes that cause 80% of businesses to waste money on AI tools that deliver no ROI.',
    },
    {
      title: 'The #1 Financial Mistake',
      description:
        'Discover the cash flow error that kills profitable businesses and how to avoid it from day one.',
    },
    {
      title: 'Scaling Without Systems',
      description:
        'Understand why trying to grow without proper systems leads to burnout and business failure.',
    },
    {
      title: 'Ignoring the Numbers',
      description:
        'Stop flying blind. Get clarity on the exact metrics you need to track for sustainable growth.',
    },
    {
      title: 'The Pricing Trap',
      description:
        'Avoid undercharging and leaving money on the table with proven pricing strategies.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !name) {
      setError('Please fill in all fields');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="pt-16">
      {!submitted ? (
        <>
          <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <AlertCircle className="h-4 w-4 mr-2" />
                  Free Guide - Limited Time
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Stop Losing Money:{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Download the Guide
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get instant access to "7 Mistakes New Entrepreneurs Make" and learn how
                  to avoid the costly errors that derail most businesses in their first
                  year.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Inside This Free Guide:
                  </h2>
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="font-bold text-gray-900 mb-3">Plus, you'll get:</h3>
                    <ul className="space-y-2">
                      {[
                        'Action checklist to implement immediately',
                        'Real-world case studies and examples',
                        'Resource links to tools I personally use',
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:sticky md:top-24">
                  <div className="bg-white rounded-2xl shadow-xl border-2 border-blue-200 p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Download className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Get Instant Access
                      </h3>
                      <p className="text-gray-600">
                        Enter your details below to receive the guide in your inbox
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="John"
                          required
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                          placeholder="john@example.com"
                          required
                        />
                      </div>

                      {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                          {error}
                        </div>
                      )}

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                      >
                        Download Free Guide
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        By submitting, you agree to receive emails from me. You can
                        unsubscribe at any time. Your privacy is important to us.
                      </p>
                    </form>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        No spam
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Instant delivery
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        100% free
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why I Created This Guide
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                After coaching hundreds of entrepreneurs, I noticed the same patterns
                repeated over and over. These 7 mistakes are responsible for more business
                failures than anything else. I created this guide to help you avoid them
                and fast-track your success.
              </p>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
                <p className="text-gray-700 italic text-lg">
                  "This guide could literally save you thousands of dollars and months of
                  wasted effort. The insights on AI implementation alone paid for itself
                  10x over."
                </p>
                <p className="text-gray-900 font-semibold mt-4">
                  - Jessica Martinez, SaaS Founder
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center py-20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Check Your Inbox!
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Your free guide "7 Mistakes New Entrepreneurs Make" has been sent to{' '}
                <span className="font-semibold text-blue-600">{email}</span>
              </p>
              <div className="bg-blue-50 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-gray-900 mb-3">What happens next:</h3>
                <ul className="text-left space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Mail className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    Check your email for the download link (check spam if needed)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    Read through the guide and implement the insights
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                    Watch for bonus content in upcoming emails
                  </li>
                </ul>
              </div>
              <div className="border-t pt-8">
                <p className="text-gray-700 mb-6">
                  Ready to take your business to the next level? Let's talk about how I
                  can help you implement these strategies.
                </p>
                <button
                  onClick={() => window.open('https://calendly.com/your-link', '_blank')}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                >
                  Book a Free Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
