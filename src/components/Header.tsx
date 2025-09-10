import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const location = useLocation();
  const navigationItems = [
    { path: '/', label: 'Home' },
    {
      label: 'Services',
      subItems: [
        { path: '/ServicesPage', label: 'All Services' },
        { path: '/computer-repair', label: 'Computer Repair' },
        { path: '/data-recovery', label: 'Data Recovery' },
        { path: '/hardware-replacement', label: 'Hardware Replacement' },
        { path: '/networking', label: 'Networking' },
        { path: '/software-troubleshooting', label: 'Software Troubleshooting' },
        { path: '/custom-pc-build', label: 'Custom PC Build' },
      ]
    },
    { path: '/AboutPage', label: 'About Us' },
    { path: '/TestimonialsPage', label: 'Testimonials' },
    { path: '/blogs', label: 'Blogs' },
  ];

  const handleCall = () => {
    window.open('tel:+919461991604', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919461991604', '_blank');
  };

  const [showMobileServices, setShowMobileServices] = useState(false);

  return (
    <header className="bg-gradient-to-b from-gray-900 to-black shadow-sm border-b border-gray-800 sticky top-0 z-50 w-full py-[1px]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <div className="flex items-center min-w-0">
            <a href="/">
              <img src="/logos/vagwiin.png" alt="Vagwiin Logo" className="h-10 w-auto md:h-12 cursor-pointer" />
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigationItems.map((item) => (
              item.subItems ? (
                <div className="relative group" key={item.label}>
                  <span className="cursor-pointer hover:text-blue-400 transition-colors text-base lg:text-lg text-gray-200 group-hover:text-blue-400">
                    {item.label}
                  </span>
                  <div className="absolute left-0 mt-2 w-56 bg-gray-900 border border-gray-800 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all z-50">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`block px-5 py-3 text-base text-gray-200 hover:text-blue-400 hover:bg-gray-800 rounded-lg transition-colors ${location.pathname === sub.path ? 'text-blue-400 bg-gray-800' : ''}`}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`hover:text-blue-400 transition-colors text-base lg:text-lg ${location.pathname === item.path ? 'text-blue-400' : 'text-gray-200'}`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </nav>
          {/* Contact Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded-full shadow transition-all duration-200 text-sm">
              Get in Touch
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none p-2 rounded bg-transparent">
              {isMobileMenuOpen ? <X size={28} color="#fff" /> : <Menu size={28} color="#fff" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-800 py-4 bg-gray-900 animate-slideDown">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                item.subItems ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setShowMobileServices((prev) => !prev)}
                      className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 focus:outline-none ${
                        showMobileServices ? 'text-blue-400 bg-gray-800' : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800'
                      }`}
                    >
                      {item.label}
                    </button>
                    {showMobileServices && (
                      <div className="pl-4 mt-1">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block px-3 py-2 text-base rounded-md transition-colors duration-200 ${
                              location.pathname === sub.path
                                ? 'text-blue-400 bg-gray-800'
                                : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800'
                            }`}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-blue-400 bg-gray-800'
                        : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>
            <div className="flex space-x-2 mt-4 px-1">
              <button
                onClick={handleCall}
                className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-lg font-medium flex-1 justify-center shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex items-center space-x-2 bg-green-500 text-white px-3 py-2 rounded-lg font-medium flex-1 justify-center shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
            </div>
            <Link to="/contact" className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow transition-all duration-200 text-base text-center">Get in Touch</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;