import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const handleCall = () => {
    window.open('tel:+919461991604', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919461991604', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:info@vagwiin.com', '_self');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Vagwiin</h3>
            <p className="text-gray-300 mb-6">
              Your trusted IT solutions partner. Fast, reliable, and affordable technology services 
              for businesses and individuals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="#careers" className="hover:text-blue-400">Careers</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400">Computer Repair</a></li>
              <li><a href="#" className="hover:text-blue-400">Mobile Device Repair</a></li>
              <li><a href="#" className="hover:text-blue-400">Data Recovery</a></li>
              <li><a href="#" className="hover:text-blue-400">Network Setup</a></li>
              <li><a href="#" className="hover:text-blue-400">Virus Removal</a></li>
              <li><a href="#" className="hover:text-blue-400">Business IT Support</a></li>
              <li><a href="#" className="hover:text-blue-400">Emergency Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <button
                  onClick={handleCall}
                  className="hover:text-blue-400"
                >
                  +91 9461991604
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4 text-green-400" />
                <button
                  onClick={handleWhatsApp}
                  className="hover:text-green-400"
                >
                  WhatsApp Support
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <button
                  onClick={handleEmail}
                  className="hover:text-purple-400"
                >
                  info@vagwiin.com
                </button>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-red-400 mt-1" />
                <div>
                  <p>Jodhpur</p>
                  <p>Rajasthan, IND 342005</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-orange-400 mt-1" />
                <div>
                  <p>Mon-Fri: 8AM-6PM</p>
                  <p>Sat: 9AM-4PM</p>
                  <p className="text-blue-400">24/7 Emergency</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Vagwiin. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
            <a href="#" className="hover:text-blue-400">Cookie Policy</a>
          </div>
          <div className="mt-2">
            <a
              href="https://www.instagram.com/visuarkofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 font-bold text-base"
            >
              Made By Visuark With ❤️
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;