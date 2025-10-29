import {
  CheckCircle,
  ArrowRight,
  Users,
  Rocket,
  Award,
  TrendingUp,
  Clock,
  Target,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

export default function WorkWithMePage() {
  const [selectedTier, setSelectedTier] = useState<number | null>(null);

  const tiers = [
    {
      name: '1:1 Elite Coaching',
      price: '₹5,000/month',
      duration: '6-month minimum',
      icon: Award,
      ideal: 'Founders ready to scale to 7-figures and beyond',
      features: [
        'Weekly 1:1 strategy sessions',
        'Custom AI automation implementation',
        'Personal financial planning and wealth strategy',
        'Direct access via Slack/Voxer',
        'Quarterly business reviews',
        'Priority support and resources',
      ],
      cta: 'Apply Now',
    },
    {
      name: 'Group Mastermind',
      price: '₹1,500/month',
      duration: '3-month commitment',
      icon: Users,
      ideal: 'Growth-stage entrepreneurs building sustainable businesses',
      features: [
        'Bi-weekly group coaching calls',
        'Monthly 1:1 check-ins',
        'Private community access',
        'AI tools and templates library',
        'Financial frameworks and worksheets',
        'Peer accountability and support',
      ],
      cta: 'Join Waitlist',
    },
    {
      name: 'Intensive Workshop',
      price: '₹3,500',
      duration: '2-day immersive',
      icon: Rocket,
      ideal: 'Entrepreneurs needing breakthrough momentum',
      features: [
        'Two full days of intensive work',
        'Complete business audit and analysis',
        'Custom 90-day action plan',
        'AI implementation roadmap',
        'Financial strategy blueprint',
        '30 days of post-workshop support',
      ],
      cta: 'Book Workshop',
    },
  ];

  const processSteps = [
    {
      title: 'Assessment',
      description:
        'Deep dive into your business, goals, challenges, and current systems to identify opportunities',
      icon: Target,
    },
    {
      title: 'Strategize',
      description:
        'Develop a custom roadmap combining AI automation, financial strategy, and growth tactics',
      icon: Zap,
    },
    {
      title: 'Implement',
      description:
        'Execute the plan together with hands-on support, tools, and accountability',
      icon: Rocket,
    },
    {
      title: 'Scale',
      description:
        'Optimize and refine systems as you grow, ensuring sustainable and profitable expansion',
      icon: TrendingUp,
    },
  ];

  const caseStudies = [
    {
      client: 'Tech Startup Founder',
      challenge: 'Drowning in operations with no time to focus on growth',
      solution: 'Implemented AI workflow automation and hired virtual team',
      result: 'Freed up 20 hours/week, increased revenue by 180% in 8 months',
      metric: '180%',
      metricLabel: 'Revenue Growth',
    },
    {
      client: 'E-commerce Entrepreneur',
      challenge: 'Profitable but cash-poor with no financial clarity',
      solution: 'Created financial dashboard and profit-first system',
      result: 'Built $100K cash reserve and started investing for wealth building',
      metric: '$100K',
      metricLabel: 'Cash Reserve',
    },
    {
      client: 'Consulting Agency Owner',
      challenge: 'Inconsistent lead flow and manual client onboarding',
      solution: 'Built AI-powered lead generation and automated systems',
      result: 'Doubled client acquisition while reducing workload by 40%',
      metric: '2x',
      metricLabel: 'Client Growth',
    },
  ];

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Proven Systems & Strategy
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're just starting out or scaling to 8-figures, I have a solution
              tailored to your stage of growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Coaching Path
            </h2>
            <p className="text-xl text-gray-600">
              Each program is designed to accelerate your success
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                  selectedTier === index
                    ? 'border-blue-600 shadow-xl'
                    : 'border-gray-200'
                }`}
                onClick={() => setSelectedTier(index)}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                  <tier.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-blue-600">{tier.price}</span>
                  <p className="text-sm text-gray-500 mt-1">{tier.duration}</p>
                </div>
                <p className="text-gray-600 mb-6 pb-6 border-b border-gray-200">
                  <span className="font-semibold">Ideal for:</span> {tier.ideal}
                </p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => window.open('https://calendly.com/your-link', '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                >
                  {tier.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The 1:1 Coaching Journey
            </h2>
            <p className="text-xl text-gray-600">
              A proven 4-step framework to scale your business profitably
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real transformations from entrepreneurs like you
            </p>
          </div>
          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-10 border border-blue-100"
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {study.client}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      <span className="font-semibold">Challenge:</span> {study.challenge}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Solution:</span> {study.solution}
                    </p>
                  </div>
                  <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                      <div className="text-5xl font-bold text-blue-600 mb-2">
                        {study.metric}
                      </div>
                      <p className="text-gray-600 font-medium">{study.metricLabel}</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 flex items-center shadow-sm">
                      <CheckCircle className="h-8 w-8 text-green-500 mr-4 flex-shrink-0" />
                      <p className="text-gray-700">{study.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              My Results Guarantee
            </h2>
            <div className="bg-white rounded-xl p-6 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                If you implement the systems and strategies we develop together and don't
                see measurable improvement in your business within 90 days, I'll work with
                you for free until you do. That's how confident I am in this process.
              </p>
            </div>
            <div className="flex items-center justify-center text-white mb-8">
              <Clock className="h-6 w-6 mr-3" />
              <span className="text-lg">Risk-free 90-day commitment</span>
            </div>
            <button
              onClick={() => window.open('https://calendly.com/your-link', '_blank')}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Apply for Coaching
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
