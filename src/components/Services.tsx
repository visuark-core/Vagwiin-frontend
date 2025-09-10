import React from 'react';
import { 
  Monitor, 
  Smartphone, 
  HardDrive, 
  Wifi, 
  Shield, 
  Database, 
  Laptop, 
  Settings,
  Server,
  Cloud,
  Lock,
  Zap
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Computer Repair',
      description: 'From hardware fixes to software troubleshooting, our expert technicians handle all brands and models with precision and care.',
      cta: 'Learn More →'
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: 'Data Recovery',
      description: 'Lost your valuable data? Don’t worry. Our advanced recovery tools and techniques ensure that your data is restored safely and securely.',
      cta: 'Learn More →'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Hardware Replacement',
      description: 'Replace faulty components to restore your device’s full functionality. Genuine parts with warranty included.',
      cta: 'Learn More →'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Networking',
      description: 'Set up fast and secure networks for homes or offices. We ensure optimal connectivity and seamless performance.',
      cta: 'Learn More →'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Software Troubleshooting',
      description: 'Fix software issues, optimize performance, and ensure smooth operation across all your devices.',
      cta: 'Learn More →'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Custom PC Build',
      description: 'Build your dream PC with high-performance parts. Tailored configurations for gaming, design, and professional use.',
      cta: 'Learn More →'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-[#0a183d] via-[#101e3c] to-[#1a223f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our IT Services
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive technology solutions for all your IT needs. From repairs to installations, 
            we've got you covered with professional, reliable service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#1a254d] border border-blue-900/40 rounded-lg p-6 hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                </div>
                <p className="text-blue-100 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              <button className="mt-auto text-blue-400 hover:text-blue-200 font-semibold transition-colors text-left">
                {service.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-blue-100 mb-6">
              We provide tailored IT solutions for unique requirements. Get in touch to discuss your specific needs.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Contact Our Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;