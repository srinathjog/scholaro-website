
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Logo />
            <p className="text-slate-600 leading-relaxed">
              Empowering schools with smart, cloud-based ERP solutions to streamline administration and foster better educational outcomes.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-600 hover:text-blue-600 transition-colors">{link.label}</a>
                </li>
              ))}
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">Features</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Student Management</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Fee Management</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Attendance Tracking</a></li>
              <li><a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">Exams & Results</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wider">Newsletter</h4>
            <p className="text-slate-600 mb-6">Subscribe for the latest updates in school management technology.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Scholaro Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
