import { Page } from '../App';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-xl">💎</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">HiddenGems</span>
                <span className="text-xs text-gray-400">Colleges</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover affordable private colleges that believe in you, not just your rank.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6 font-semibold">Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => onNavigate('home')}
                className="block text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transition-transform"
              >
                Home
              </button>
              <button 
                onClick={() => onNavigate('search')}
                className="block text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transition-transform"
              >
                Find Colleges
              </button>
              <button 
                onClick={() => onNavigate('for-colleges')}
                className="block text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transition-transform"
              >
                For Colleges
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="block text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transition-transform"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* For Students */}
          <div>
            <h3 className="text-white mb-6 font-semibold">For Students</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transition-transform">
                How It Works
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transition-transform">
                Why Underrated Colleges
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transition-transform">
                Success Stories
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-6 font-semibold">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <Mail size={18} className="text-blue-400 mt-1 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">hello@hiddengemscolleges.in</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <Phone size={18} className="text-blue-400 mt-1 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3 group">
                <MapPin size={18} className="text-blue-400 mt-1 group-hover:text-blue-300 transition-colors" />
                <span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} HiddenGems Colleges. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Helping students discover quality education.
          </p>
        </div>
      </div>
    </footer>
  );
}