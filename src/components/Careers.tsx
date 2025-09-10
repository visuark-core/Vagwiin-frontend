import React from 'react';
import { MapPin, Clock, DollarSign, Users, Briefcase, GraduationCap } from 'lucide-react';

const Careers: React.FC = () => {
  const positions = [
    {
      title: 'Senior IT Technician',
      location: 'On-site / Remote',
      type: 'Full-time',
      salary: '$45,000 - $60,000',
      description: 'Lead technician responsible for complex repairs, network installations, and mentoring junior staff.',
      requirements: [
        '3+ years IT support experience',
        'Hardware repair expertise',
        'Network troubleshooting skills',
        'Customer service excellence'
      ]
    },
    {
      title: 'Mobile Device Specialist',
      location: 'Workshop',
      type: 'Full-time',
      salary: '$35,000 - $45,000',
      description: 'Specialize in smartphone and tablet repairs including screen replacement, component repair, and software issues.',
      requirements: [
        'Mobile device repair experience',
        'Precision soldering skills',
        'Familiarity with repair tools',
        'Detail-oriented approach'
      ]
    },
    {
      title: 'Business IT Consultant',
      location: 'Field / Remote',
      type: 'Full-time',
      salary: '$50,000 - $70,000',
      description: 'Work directly with business clients to assess IT needs, recommend solutions, and implement systems.',
      requirements: [
        'Business IT experience',
        'Strong communication skills',
        'Project management abilities',
        'Sales experience preferred'
      ]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Competitive Salary',
      description: 'Market-rate compensation with performance bonuses'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Continuous Learning',
      description: 'Training budget for certifications and skill development'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Flexible Schedule',
      description: 'Work-life balance with flexible hours and remote options'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Great Team',
      description: 'Collaborative environment with supportive colleagues'
    }
  ];

  const workshops = [
    {
      title: 'Mobile Repair Fundamentals',
      duration: '2 weeks',
      schedule: 'Evenings & Weekends',
      description: 'Learn basic smartphone and tablet repair techniques including screen replacement and common fixes.'
    },
    {
      title: 'Network Administration Basics',
      duration: '3 weeks',
      schedule: 'Flexible Online',
      description: 'Introduction to network setup, troubleshooting, and security fundamentals for beginners.'
    },
    {
      title: 'Computer Hardware Diagnostics',
      duration: '2 weeks',
      schedule: 'Saturdays',
      description: 'Hands-on training in computer hardware troubleshooting and component replacement.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build your career in IT with a company that values expertise, growth, and customer service. 
            We're always looking for talented individuals to join our growing team.
          </p>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Current Openings</h3>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 mt-4 lg:mt-0">
                    Apply Now
                  </button>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {position.description}
                </p>
                
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Requirements:</h5>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Work With Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-blue-600 mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Workshops */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Skills Workshops</h3>
          <p className="text-center text-gray-600 mb-8">
            New to IT? Join our hands-on workshops to build foundational skills and explore career opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {workshops.map((workshop, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Briefcase className="w-5 h-5 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">
                    {workshop.title}
                  </h4>
                </div>
                
                <div className="flex justify-between text-sm text-gray-600 mb-3">
                  <span>Duration: {workshop.duration}</span>
                  <span>{workshop.schedule}</span>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {workshop.description}
                </p>
                
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700">
                  Register Interest
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Don't See the Right Position?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always interested in meeting talented IT professionals. Send us your resume and let us know how you'd like to contribute to our team.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Send Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;