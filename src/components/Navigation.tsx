
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#certificates', label: 'Certificates' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass-card' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold text-gradient">
              Al-Tofail
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-sunset-orange px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/in/al-tofail-al-hiary-3268a798"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-sunset-orange transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/tofailhiary"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-sunset-orange transition-colors duration-200"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-sunset-orange p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-card">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-sunset-orange block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <a
                href="https://www.linkedin.com/in/al-tofail-al-hiary-3268a798"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sunset-orange transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/tofailhiary"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-sunset-orange transition-colors duration-200"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
