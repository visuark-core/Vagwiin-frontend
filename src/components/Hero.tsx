import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface HeroProps {
  onBookingOpen: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingOpen }) => {
  const handleCall = () => {
    window.open('tel:+919461991604', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919461991604', '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your IT Problem<br />
            <span className="text-blue-600">We Fix It Fast</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Professional IT support and repair services for businesses and individuals. 
            Fast, reliable, and affordable solutions for all your technology needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleCall}
              className="flex items-center space-x-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: </span>
            </button>
            
            <button
              onClick={handleWhatsApp}
              className="flex items-center space-x-3 bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Us</span>
            </button>
            
            <button
              onClick={onBookingOpen}
              className="flex items-center space-x-3 bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 w-full sm:w-auto justify-center"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Service</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Emergency Support</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">Happy Clients</div>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">99%</div>
              <div className="text-gray-700 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;