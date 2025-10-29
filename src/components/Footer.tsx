import { Mail, Linkedin, Twitter, Youtube, Github, Instagram,  } from 'lucide-react';

type Page = 'home' | 'work-with-me' | 'courses' | 'free-resource';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavigate = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Hrishikesh Mohite
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Helping tech-savvy entrepreneurs build profitable, future-proof businesses
              using AI and smart financial principles.
            </p>

            {/* ✅ Social Links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:info@hrishikeshmohite.com"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/in/hrishikeshmohite"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="https://www.youtube.com/@kontentcreate"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>

              {/* 🐙 GitHub */}
              <a
                href="https://github.com/Lucifer88484"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>

              {/* 📸 Instagram */}
              <a
                href="https://www.instagram.com/hrishikesh_mohite_/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>

              
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNavigate('home')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('work-with-me')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Work With Me
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('courses')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Courses
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigate('free-resource')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Free Resource
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="info@hrishikeshmohite.com"
                  className="hover:text-blue-400 transition-colors"
                >
                  info@hrishikeshmohite.com
                </a>
              </li>
              <li>
                <button
                  onClick={() => window.open('https://calendly.com/your-link', '_blank')}
                  className="hover:text-blue-400 transition-colors"
                >
                  Book a Discovery Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Hrishikesh Mohite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
