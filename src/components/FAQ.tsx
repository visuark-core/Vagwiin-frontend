import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: 'How long do repairs typically take?',
      answer: 'Most repairs are completed within 24-48 hours. Simple software issues can often be resolved the same day, while hardware repairs requiring parts may take 2-5 business days. We always provide a time estimate upfront.'
    },
    {
      question: 'Do you use genuine or aftermarket parts?',
      answer: 'We primarily use genuine OEM parts when available. For older devices where OEM parts are discontinued, we use high-quality compatible parts with the same warranty coverage. We always inform you of part options before proceeding.'
    },
    {
      question: 'How do I book a service appointment?',
      answer: 'You can book a service in three ways: call us directly at +91 9461991604, use our WhatsApp booking system, or fill out our online booking form. We offer both on-site and drop-off service options.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We provide on-site service within a 25-mile radius of our main office. For clients outside this area, we offer remote support and accept mail-in repairs for laptops and small devices.'
    },
    {
      question: 'Do you offer emergency or after-hours service?',
      answer: 'Yes! We provide 24/7 emergency support for critical business systems. Emergency service rates apply for after-hours calls, but we\'re always available when you need us most.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, all major credit cards, PayPal, bank transfers, and business checks. Payment is due upon completion of service unless other arrangements are made in advance.'
    },
    {
      question: 'Do you provide warranties on your work?',
      answer: 'Absolutely! All repairs come with a 90-day warranty on labor and parts. Software installations and configurations are covered for 30 days. We stand behind our work 100%.'
    },
    {
      question: 'Can you help with business IT setup?',
      answer: 'Yes, we specialize in small to medium business IT solutions including network setup, server installation, cloud migration, security systems, and ongoing IT support contracts.'
    },
    {
      question: 'What if my data is lost or corrupted?',
      answer: 'We offer comprehensive data recovery services for all storage types. Our success rate is over 90% for recoverable data. We also provide backup solutions to prevent future data loss.'
    },
    {
      question: 'Do you offer remote support?',
      answer: 'Yes, many issues can be resolved remotely, which saves you time and money. We use secure remote access tools with your permission to diagnose and fix software problems quickly.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Quick answers to common questions about our IT services and repair process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our friendly support team is here to help. Don't hesitate to reach out with any questions about your specific IT needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                Contact Support
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;