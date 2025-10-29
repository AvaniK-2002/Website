import {
  CheckCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Clock,
  Users,
  Award,
  BookOpen,
  Video,
  FileText,
  Zap,
  DollarSign,
} from 'lucide-react';
import { useState } from 'react';

interface CourseModule {
  title: string;
  lessons: string[];
}

interface Course {
  title: string;
  subtitle: string;
  price: string;
  duration: string;
  students: string;
  level: string;
  icon: typeof Zap;
  benefits: string[];
  modules: CourseModule[];
  bonuses: string[];
}

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [expandedModule, setExpandedModule] = useState<{ [key: string]: boolean }>({});

  const courses: Course[] = [
    {
      title: 'AI Automation Masterclass for Founders',
      subtitle: 'Build AI-powered systems that scale your business without scaling your team',
      price: '$997',
      duration: '8 weeks',
      students: '500+',
      level: 'Intermediate',
      icon: Zap,
      benefits: [
        'Master ChatGPT, Claude, and cutting-edge AI tools for business',
        'Automate repetitive tasks and free up 15+ hours per week',
        'Build AI workflows for marketing, sales, and operations',
        'Create custom AI assistants for your specific business needs',
        'Implement AI-driven customer service and support systems',
        'Develop data analysis and reporting automation',
      ],
      modules: [
        {
          title: 'Module 1: AI Foundations for Business',
          lessons: [
            'Understanding AI capabilities and limitations',
            'Choosing the right AI tools for your business',
            'AI ethics and responsible implementation',
            'Creating your AI transformation roadmap',
          ],
        },
        {
          title: 'Module 2: Marketing Automation with AI',
          lessons: [
            'AI-powered content creation and copywriting',
            'Automated social media management',
            'Email marketing with AI personalization',
            'SEO and content optimization using AI',
          ],
        },
        {
          title: 'Module 3: Sales & Customer Service Automation',
          lessons: [
            'Building AI chatbots for lead qualification',
            'Automating follow-up sequences',
            'AI-powered CRM management',
            'Customer support automation strategies',
          ],
        },
        {
          title: 'Module 4: Operations & Workflow Automation',
          lessons: [
            'Document processing and data extraction',
            'Automated reporting and analytics',
            'Project management automation',
            'Integration strategies and tool stacking',
          ],
        },
        {
          title: 'Module 5: Advanced AI Implementation',
          lessons: [
            'Building custom GPT assistants',
            'API integration and automation',
            'AI for product development and innovation',
            'Scaling your AI systems',
          ],
        },
      ],
      bonuses: [
        'AI Tools Directory ($297 value)',
        'Done-for-You Prompt Library ($197 value)',
        'Private Community Access (Priceless)',
        'Monthly Live Q&A Sessions',
      ],
    },
    {
      title: 'Financial Freedom for Entrepreneurs',
      subtitle:
        'Master cash flow, profit optimization, and wealth-building strategies for business owners',
      price: '$697',
      duration: '6 weeks',
      students: '350+',
      level: 'All Levels',
      icon: DollarSign,
      benefits: [
        'Understand and optimize your business financials',
        'Implement the Profit First system for sustainable growth',
        'Create tax-efficient strategies to keep more money',
        'Build personal wealth through smart investing',
        'Develop financial forecasting and planning skills',
        'Master pricing strategies for maximum profitability',
      ],
      modules: [
        {
          title: 'Module 1: Financial Foundations',
          lessons: [
            'Reading and understanding financial statements',
            'Key metrics every entrepreneur must track',
            'Building a financial dashboard',
            'Cash flow management fundamentals',
          ],
        },
        {
          title: 'Module 2: The Profit First System',
          lessons: [
            'Setting up your Profit First accounts',
            'Determining optimal allocation percentages',
            'Implementing the rhythm of Profit First',
            'Troubleshooting common challenges',
          ],
        },
        {
          title: 'Module 3: Pricing & Profitability',
          lessons: [
            'Value-based pricing strategies',
            'Cost analysis and margin optimization',
            'Productized services and scalable offerings',
            'Upsells, downsells, and pricing psychology',
          ],
        },
        {
          title: 'Module 4: Tax Strategy & Optimization',
          lessons: [
            'Business structure optimization',
            'Tax deductions and write-offs',
            'Quarterly tax planning',
            'Working with accountants and advisors',
          ],
        },
        {
          title: 'Module 5: Wealth Building for Business Owners',
          lessons: [
            'Personal vs. business finances',
            'Investment strategies for entrepreneurs',
            'Retirement planning when self-employed',
            'Building generational wealth',
          ],
        },
        {
          title: 'Module 6: Financial Planning & Forecasting',
          lessons: [
            'Creating realistic financial projections',
            'Scenario planning and stress testing',
            'Setting and tracking financial goals',
            'Preparing for exits and acquisitions',
          ],
        },
      ],
      bonuses: [
        'Financial Dashboard Templates ($197 value)',
        'Profit First Implementation Guide ($97 value)',
        'Tax Deduction Checklist ($47 value)',
        'Lifetime Access to All Updates',
      ],
    },
  ];

  const toggleModule = (courseIndex: number, moduleIndex: number) => {
    const key = `${courseIndex}-${moduleIndex}`;
    setExpandedModule((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Master Entrepreneurship{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                on Your Own Schedule
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Self-paced courses designed to give you the skills and systems you need to
              build a profitable, scalable business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {courses.map((course, courseIndex) => (
              <div
                key={courseIndex}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-cyan-500 p-8 md:p-10 text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-6">
                      <course.icon className="h-9 w-9 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold mb-3">{course.title}</h2>
                    <p className="text-blue-50 mb-6">{course.subtitle}</p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 mr-3" />
                        <span>{course.duration} program</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-3" />
                        <span>{course.students} students enrolled</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-5 w-5 mr-3" />
                        <span>{course.level} level</span>
                      </div>
                    </div>

                    <div className="border-t border-white/20 pt-6 mb-6">
                      <div className="text-5xl font-bold mb-2">{course.price}</div>
                      <p className="text-blue-50">One-time payment, lifetime access</p>
                    </div>

                    <button
                      onClick={() =>
                        window.open('https://buy.stripe.com/your-link', '_blank')
                      }
                      className="w-full bg-white text-blue-600 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      Enroll Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </div>

                  <div className="md:col-span-3 p-8 md:p-10">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                        What You'll Learn
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {course.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                          <Video className="h-6 w-6 mr-3 text-blue-600" />
                          Course Curriculum
                        </h3>
                        <button
                          onClick={() =>
                            setExpandedCourse(
                              expandedCourse === courseIndex ? null : courseIndex
                            )
                          }
                          className="text-blue-600 text-sm font-medium flex items-center hover:text-blue-700"
                        >
                          {expandedCourse === courseIndex ? 'Collapse All' : 'Expand All'}
                          {expandedCourse === courseIndex ? (
                            <ChevronUp className="h-4 w-4 ml-1" />
                          ) : (
                            <ChevronDown className="h-4 w-4 ml-1" />
                          )}
                        </button>
                      </div>
                      <div className="space-y-3">
                        {course.modules.map((module, moduleIndex) => {
                          const isExpanded =
                            expandedCourse === courseIndex ||
                            expandedModule[`${courseIndex}-${moduleIndex}`];
                          return (
                            <div
                              key={moduleIndex}
                              className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
                            >
                              <button
                                onClick={() => toggleModule(courseIndex, moduleIndex)}
                                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                              >
                                <span className="font-semibold text-gray-900 text-left">
                                  {module.title}
                                </span>
                                {isExpanded ? (
                                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                                )}
                              </button>
                              {isExpanded && (
                                <div className="p-4 bg-white">
                                  <ul className="space-y-2">
                                    {module.lessons.map((lesson, lessonIndex) => (
                                      <li
                                        key={lessonIndex}
                                        className="flex items-start text-gray-600"
                                      >
                                        <span className="text-blue-600 mr-3">
                                          {lessonIndex + 1}.
                                        </span>
                                        {lesson}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <FileText className="h-6 w-6 mr-3 text-blue-600" />
                        Bonus Content Included
                      </h3>
                      <div className="space-y-2">
                        {course.bonuses.map((bonus, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 font-medium">{bonus}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Not Sure Which Course is Right for You?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free discovery call and I'll help you choose the best path forward for
            your business goals.
          </p>
          <button
            onClick={() => window.open('https://calendly.com/your-link', '_blank')}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
          >
            Book a Free Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
