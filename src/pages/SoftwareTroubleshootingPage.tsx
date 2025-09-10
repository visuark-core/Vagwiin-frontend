import React from "react";
import { Cpu, ShieldCheck, Clock } from "lucide-react";

export default function SoftwareTroubleshootingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    "System Errors",
    "Driver Issues",
    "App Crashes",
    "System Updates",
    "Software Installation",
    "Virus & Malware Removal",
    "Performance Optimization",
  ];

  const whyChooseUs = [
    "Fast Issue Resolution",
    "Certified Software Experts",
    "Optimized System Performance",
    "Support Across Devices",
    "24/7 Technical Assistance",
  ];

  const processSteps = [
    { title: "Diagnosis", desc: "We analyze your system to identify the root cause of software issues." },
    { title: "Solution Design", desc: "We plan the best approach to fix errors and optimize performance." },
    { title: "Implementation", desc: "Our experts fix the issues, update drivers, and optimize your system." },
    { title: "Monitoring & Support", desc: "We monitor performance and provide ongoing support for smooth operation." },
  ];

  const testimonials = [
    { text: "My system was crashing frequently, but they resolved all issues quickly!", name: "Ananya Sharma" },
    { text: "Professional and fast service. My devices run so much smoother now.", name: "Rohit Verma" },
  ];

  const faqs = [
    { q: "Do you fix software issues for both Windows and Mac?", a: "Yes, our team supports both Windows and Mac devices." },
    { q: "Can you optimize slow systems?", a: "Absolutely, we provide performance tuning and optimization services." },
    { q: "Do you provide virus removal services?", a: "Yes, we remove viruses, malware, and other malicious software safely." },
    { q: "Is remote troubleshooting available?", a: "Yes, we can troubleshoot software issues remotely whenever possible." },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#011549] via-[#01123B] to-[#011549] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Hero Section */}
        <section>
          <h1 className="text-5xl font-bold mb-4 text-cyan-400">Software Troubleshooting</h1>
          <p className="mb-6 text-lg text-blue-200">
            Fix software issues, optimize performance, and ensure smooth operation across all your devices.
          </p>
        </section>

        {/* Services Offered */}
        <section>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <li key={i} className="flex items-center bg-gradient-to-r from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-4 rounded-xl border border-teal-700/40 shadow-lg shadow-teal-900/30">
                <Cpu className="w-6 h-6 text-cyan-400 mr-3" />
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Troubleshooting Process</h2>
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Get Expert Software Support</h2>
          <p className="mb-6 text-blue-200">Contact our experts to resolve software issues and optimize your systems efficiently.</p>
          <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/30 transition-all duration-200">
            Contact Us Now
          </button>
        </section>

      </div>
    </main>
  );
}
