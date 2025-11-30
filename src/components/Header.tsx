import { Page } from '../App';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: Page) => void;
  currentPage?: Page;
}

export function Header({ onNavigate, currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 transition-all">
              <span className="text-white text-xl">💎</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-lg leading-none">HiddenGems</span>
              <span className="text-xs text-gray-500">Colleges</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <button 
              onClick={() => onNavigate('search')}
              className={`px-4 py-2 rounded-lg transition-all ${currentPage === 'search' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              Find Colleges
            </button>
            <a href="#how-it-works" className="px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all">
              How It Works
            </a>
            <button 
              onClick={() => onNavigate('for-colleges')}
              className={`px-4 py-2 rounded-lg transition-all ${currentPage === 'for-colleges' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              For Colleges
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className={`px-4 py-2 rounded-lg transition-all ${currentPage === 'contact' ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              Contact
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => onNavigate('search')}
            className="hidden md:block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 font-semibold"
          >
            Find Colleges
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => {
                  onNavigate('search');
                  setMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all text-left font-medium"
              >
                Find Colleges
              </button>
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all font-medium">
                How It Works
              </a>
              <button 
                onClick={() => {
                  onNavigate('for-colleges');
                  setMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all text-left font-medium"
              >
                For Colleges
              </button>
              <button 
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg transition-all text-left font-medium"
              >
                Contact
              </button>
              <button 
                onClick={() => {
                  onNavigate('search');
                  setMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-500/30 font-semibold"
              >
                Find Colleges
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}