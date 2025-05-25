
import { Heart, Coffee, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Al-Tofail Al-Hiary</h3>
            <p className="text-gray-400 mb-4">
              QA & QC Team Lead passionate about quality, automation, and leadership excellence.
            </p>
            <p className="text-sm text-gray-500">
              Quality ∙ Velocity ∙ Reliability
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { href: '#about', label: 'About' },
                { href: '#experience', label: 'Experience' },
                { href: '#skills', label: 'Skills' },
                { href: '#projects', label: 'Projects' },
                { href: '#blog', label: 'Blog' },
                { href: '#certificates', label: 'Certificates' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-sunset-orange transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <p className="text-gray-400">
                <Mail className="inline w-4 h-4 mr-2" />
                tofailhiary@gmail.com
              </p>
              <p className="text-gray-400">
                +962 777 894 429
              </p>
              <p className="text-gray-400">
                Amman, Jordan (UTC +03)
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/al-tofail-al-hiary-3268a798"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sunset-orange transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/tofailhiary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sunset-orange transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:tofailhiary@gmail.com"
                className="text-gray-400 hover:text-sunset-orange transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and <Coffee className="w-4 h-4 mx-1 text-sunset-orange" /> by Al-Tofail Al-Hiary
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
