import {
  Sparkles,
  
  CheckCircle,
  ArrowRight,
  Brain,
  DollarSign,
  Zap,
  LineChart,
  Award,
} from 'lucide-react';

type Page = 'home' | 'work-with-me' | 'courses' | 'free-resource';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const problems = [
    'Struggling to scale your business without burning out',
    'Overwhelmed by technology and unsure how to leverage AI',
    'Making great revenue but unclear on financial strategy',
    'Wearing too many hats and need systems that work',
  ];

  const pillars = [
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Automate and scale your operations with cutting-edge AI tools',
    },
    {
      icon: DollarSign,
      title: 'Financial Strategy',
      description: 'Build wealth through smart cash flow and investment principles',
    },
    {
      icon: Zap,
      title: 'Business Systems',
      description: 'Create repeatable processes that drive consistent growth',
    },
    {
      icon: LineChart,
      title: 'Growth Marketing',
      description: 'Attract ideal clients with data-driven marketing strategies',
    },
    {
      icon: Award,
      title: 'Mindset Mastery',
      description: 'Develop the resilience and leadership for sustainable success',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'SaaS Founder',
      content: 'Revenue increased 300% in 6 months using the AI automation frameworks',
    },
    {
      name: 'Marcus Johnson',
      role: 'E-commerce CEO',
      content: 'Finally have financial clarity and a roadmap to scale profitably',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Tech Consultant',
      content: 'The systems and strategies transformed how I run my business',
    },
  ];

  return (
    <div className="pt-16">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 mr-2" />
              AI Strategist & Financial Coach
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-slide-up">
              Build Profitable, Future-Proof Businesses with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                AI & Smart Financial Strategy
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-up-delay">
              I help tech-savvy entrepreneurs scale their businesses using AI-driven systems
              and proven financial principles that create lasting wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
              <button
                onClick={() => window.open('https://calendly.com/your-link', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Book a Free Discovery Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => onNavigate('free-resource')}
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Resource
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-medium mb-6">
            TRUSTED BY FOUNDERS FROM
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              'Tech Startups',
              'E-commerce Brands',
              'SaaS Companies',
              'Consulting Firms',
            ].map((company) => (
              <div key={company} className="text-center text-gray-400 font-semibold">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Are You Facing These Challenges?
            </h2>
            <p className="text-xl text-gray-600">
              You're not alone. Here's what entrepreneurs struggle with most:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
                <p className="text-gray-700 font-medium">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The 5 Pillars of Entrepreneurial Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven framework that combines AI innovation with financial wisdom to build
              businesses that scale and last.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <pillar.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('work-with-me')}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              See How It Works
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Free Download: "7 Mistakes New Entrepreneurs Make"
          </h2>
          <p className="text-xl text-blue-50 mb-4">
            Stop losing money and start building smarter. Get instant access to the guide
            that has helped hundreds of founders avoid costly mistakes.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8 inline-block">
            <ul className="text-left text-white space-y-3">
              {[
                'Why most AI implementations fail (and how to succeed)',
                'The #1 financial mistake that kills profitable businesses',
                'How to avoid burnout while scaling rapidly',
              ].map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 text-cyan-300" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => onNavigate('free-resource')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Download Free Guide
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real Entrepreneurs
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
