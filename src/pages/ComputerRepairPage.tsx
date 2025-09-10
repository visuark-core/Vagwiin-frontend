import React from "react";
import { CheckCircle, Clock, ShieldCheck, Star } from "lucide-react";

export default function ComputerRepairPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    "Hardware Fixes",
    "OS Repair",
    "Virus Removal",
    "Performance Optimization",
    "Data Recovery",
    "Network & Internet Setup",
    "Custom PC Builds",
    "Peripheral Installation",
  ];

  const whyChooseUs = [
    "Certified Technicians",
    "Fast & Reliable Service",
    "Affordable Pricing",
    "All Brands & Models Supported",
    "Customer Satisfaction Guarantee",
  ];

  const processSteps = [
    { title: "Diagnosis", desc: "We analyze your device to identify all issues." },
    { title: "Repair", desc: "Our experts fix hardware and software problems efficiently." },
    { title: "Testing", desc: "We test your computer to ensure smooth performance." },
    { title: "Delivery", desc: "Your device is returned fully optimized and ready to use." },
  ];

  const faqs = [
    { q: "How long does a typical repair take?", a: "Most repairs are completed within 24-48 hours depending on complexity." },
    { q: "Do you offer warranty on repairs?", a: "Yes, all repairs come with a 3-month warranty on parts and service." },
    { q: "Can you recover data from damaged computers?", a: "Absolutely, we specialize in professional data recovery solutions." },
    { q: "Do you support all computer brands?", a: "Yes, we handle all major brands including custom PCs." },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#011549] via-[#01123B] to-[#011549] text-white py-16 px-4">
      
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <section>
          <h1 className="text-5xl font-bold mb-4 text-cyan-400">Computer Repair Services</h1>
          <p className="mb-6 text-lg text-blue-200">
            From hardware fixes to software troubleshooting, our expert technicians handle all brands and models with precision and care.
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Repair Process</h2>
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">What Our Clients Say</h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-6 rounded-2xl border border-teal-700/40 shadow-lg shadow-teal-900/30">
              <p className="text-blue-100 mb-2">
                "The team fixed my laptop faster than expected and recovered my lost data. Excellent service!"
              </p>
              <p className="text-teal-400 font-bold">- Rajesh Kumar</p>
            </div>
            <div className="bg-gradient-to-br from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-6 rounded-2xl border border-teal-700/40 shadow-lg shadow-teal-900/30">
              <p className="text-blue-100 mb-2">
                "Professional, friendly, and knowledgeable technicians. Highly recommended."
              </p>
              <p className="text-teal-400 font-bold">- Meena Singh</p>
            </div>
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Need Immediate Help?</h2>
          <p className="mb-6 text-blue-200">Contact our technicians and get your computer repaired quickly.</p>
          <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/30 transition-all duration-200">
            Contact Us Now
          </button>
        </section>
      </div>
    </main>
  );
}
