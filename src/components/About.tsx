import React from 'react';
import { Award, Clock, DollarSign, Users, CheckCircle, Star } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Certified Experts',
      description: 'Our team consists of certified IT professionals with years of experience in the industry. We stay updated with the latest technologies and best practices.'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Transparent Pricing',
      description: 'No hidden fees, no surprises. We provide clear, upfront pricing for all our services with detailed estimates before any work begins.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client-First Policy',
      description: 'Your satisfaction is our priority. We listen to your needs, provide honest advice, and deliver solutions that work best for you.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Support',
      description: 'Technology problems don\'t wait for business hours. Our emergency support team is available around the clock to help when you need it most.'
    }
  ];

  const achievements = [
    { number: '5+', label: 'Years Experience' },
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Vagwiin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner for all IT needs. We combine technical expertise with exceptional 
            customer service to deliver solutions that keep your technology running smoothly.
          </p>
        </div>

        {/* Company Vision */}
        <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Vagwiin, we envision a world where technology enhances productivity rather than 
              causing frustration. We strive to be the most reliable and customer-focused IT service provider, 
              making technology accessible and manageable for everyone.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to provide fast, reliable, and affordable IT solutions that help individuals 
              and businesses maximize their technology investments while minimizing downtime and stress.
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-blue-600 mr-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-blue-600 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Our Track Record</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {achievement.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Vagwiin?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Free initial consultation and diagnosis',
              'Same-day service for urgent repairs',
              'Warranty on all repairs and installations',
              'Competitive pricing with no hidden costs',
              'Certified technicians and engineers',
              'Customer satisfaction guarantee'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;