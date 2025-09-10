import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Newsletter subscription:', email);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated with IT Tips
          </h2>
          <p className="text-xl text-blue-100">
            Get weekly tech tips, security updates, and exclusive offers delivered to your inbox.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {isSubscribed ? (
            <div className="flex items-center justify-center space-x-2 bg-green-500 text-white px-6 py-4 rounded-lg">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">Successfully subscribed!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 text-gray-900"
              />
              <button
                type="submit"
                className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
              >
                <Mail className="w-5 h-5" />
                <span>Subscribe</span>
              </button>
            </form>
          )}
        </div>

        <div className="mt-8 text-blue-100">
          <p className="text-sm">
            Join 500+ subscribers • No spam, unsubscribe anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;