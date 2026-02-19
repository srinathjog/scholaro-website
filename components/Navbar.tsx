
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="hover:opacity-90 transition-opacity">
            <Logo />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="https://app.scholaro.co"
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Login
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-slate-100`}>
        <div className="px-4 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg text-slate-600 hover:text-blue-600 font-medium"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://app.scholaro.co"
            className="block w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all text-center"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
