import React from "react";
import { Wifi, ShieldCheck, Clock } from "lucide-react";

export default function NetworkingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    "LAN/WAN Setup",
    "WiFi Optimization",
    "Firewall Setup",
    "Network Security",
    "Router & Switch Configuration",
    "VPN Setup",
    "Network Troubleshooting",
  ];

  const whyChooseUs = [
    "Fast & Reliable Connections",
    "Secure & Encrypted Networks",
    "Certified Networking Experts",
    "Support for Homes & Businesses",
    "24/7 Technical Assistance",
  ];

  const processSteps = [
    { title: "Assessment", desc: "We evaluate your existing network to identify gaps and requirements." },
    { title: "Design & Planning", desc: "We design a customized network solution tailored to your needs." },
    { title: "Installation", desc: "Our experts install and configure all devices and security protocols." },
    { title: "Monitoring & Support", desc: "We provide continuous monitoring and maintenance for optimal performance." },
  ];

  const testimonials = [
    { text: "Our office network was set up flawlessly, and the WiFi coverage is perfect!", name: "Rahul Mehta" },
    { text: "Fast, secure, and reliable networking service. Highly recommended!", name: "Sneha Kapoor" },
  ];

  const faqs = [
    { q: "Do you provide WiFi optimization for large offices?", a: "Yes, we optimize WiFi for both small and large spaces, ensuring strong coverage everywhere." },
    { q: "Can you secure my network against hacking?", a: "Absolutely, we implement firewall setups, encryption, and other security measures." },
    { q: "Do you support remote VPN setups?", a: "Yes, we provide VPN configuration for secure remote access." },
    { q: "Do you handle troubleshooting for existing networks?", a: "Yes, we diagnose and resolve network issues efficiently." },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#011549] via-[#01123B] to-[#011549] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Hero Section */}
        <section>
          <h1 className="text-5xl font-bold mb-4 text-cyan-400">Networking Services</h1>
          <p className="mb-6 text-lg text-blue-200">
            Set up fast and secure networks for homes or offices. We ensure optimal connectivity and seamless performance.
          </p>
        </section>

        {/* Services Offered */}
        <section>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <li key={i} className="flex items-center bg-gradient-to-r from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-4 rounded-xl border border-teal-700/40 shadow-lg shadow-teal-900/30">
                <Wifi className="w-6 h-6 text-cyan-400 mr-3" />
                {service}
              </li>
            ))}
          </ul>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Why Choose Us</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseUs.map((item, i) => (
              <li key={i} className="flex items-center bg-gradient-to-r from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-4 rounded-xl border border-teal-700/40 shadow-lg shadow-teal-900/30">
                <ShieldCheck className="w-6 h-6 text-teal-400 mr-3" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Networking Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center bg-gradient-to-r from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-6 rounded-2xl border border-teal-700/40 shadow-lg shadow-teal-900/30">
                <Clock className="w-10 h-10 text-cyan-400 mb-3" />
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-200 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Client Testimonials</h2>
          <div className="space-y-4">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="bg-gradient-to-br from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-6 rounded-2xl border border-teal-700/40 shadow-lg shadow-teal-900/30">
                <p className="text-blue-100 mb-2">"{testimonial.text}"</p>
                <p className="text-teal-400 font-bold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-gradient-to-br from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-4 rounded-xl border border-teal-700/40 shadow-lg shadow-teal-900/30">
                <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                <p className="mt-2 text-gray-200">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Set Up Your Network Today</h2>
          <p className="mb-6 text-blue-200">Contact our networking experts to get fast, secure, and reliable connectivity for your home or office.</p>
          <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/30 transition-all duration-200">
            Contact Us Now
          </button>
        </section>
      </div>
    </main>
  );
}
