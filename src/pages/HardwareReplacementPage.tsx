import React from "react";
import { CheckCircle, ShieldCheck, Clock } from "lucide-react";

export default function HardwareReplacementPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    "RAM & Storage Upgrade",
    "Motherboard Replacement",
    "Power Supply Replacement",
    "GPU/CPU Replacement",
    "Cooling System Upgrade",
    "Peripheral Installation",
  ];

  const whyChooseUs = [
    "Genuine Parts with Warranty",
    "Certified Technicians",
    "Fast & Reliable Service",
    "Supports All Brands & Models",
    "Customer Satisfaction Guarantee",
  ];

  const processSteps = [
    { title: "Assessment", desc: "We analyze your device to determine faulty components." },
    { title: "Replacement", desc: "We replace faulty hardware with genuine, high-quality parts." },
    { title: "Testing", desc: "All replaced components are tested for optimal performance." },
    { title: "Delivery", desc: "Your device is returned fully functional and upgraded." },
  ];

  const testimonials = [
    { text: "Replaced my motherboard and RAM quickly. Excellent service and genuine parts!", name: "Amit Verma" },
    { text: "Professional team, my GPU replacement was seamless and efficient.", name: "Priya Sharma" },
  ];

  const faqs = [
    { q: "Do you provide warranty on replaced parts?", a: "Yes, all hardware replacements come with a standard warranty." },
    { q: "Can you upgrade my PC components?", a: "Absolutely, we handle upgrades for RAM, storage, GPU, CPU, and more." },
    { q: "Do you support all brands?", a: "Yes, we support all major brands and custom-built PCs." },
    { q: "How long does a replacement take?", a: "Most replacements are completed within 24-48 hours depending on the component." },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#011549] via-[#01123B] to-[#011549] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <section>
          <h1 className="text-5xl font-bold mb-4 text-cyan-400">Hardware Replacement Services</h1>
          <p className="mb-6 text-lg text-blue-200">
            Replace faulty components to restore your device’s full functionality. We use genuine parts with warranty included.
          </p>
        </section>

        {/* Services Offered */}
        <section>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <li key={i} className="flex items-center bg-gradient-to-r from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-4 rounded-xl border border-teal-700/40 shadow-lg shadow-teal-900/30">
                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3" />
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Replacement Process</h2>
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Upgrade or Repair Your Hardware Today</h2>
          <p className="mb-6 text-blue-200">Book a replacement service with our certified technicians and get your device running like new.</p>
          <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/30 transition-all duration-200">
            Contact Us Now
          </button>
        </section>
      </div>
    </main>
  );
}
