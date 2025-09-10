import React from "react";
import { Cpu, ShieldCheck, Clock } from "lucide-react";

export default function CustomPCBuildPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const buildOptions = [
    "Gaming Rigs",
    "Workstations",
    "Budget Builds",
    "High-End PCs",
    "VR Ready PCs",
    "Streaming & Content Creation PCs",
  ];

  const whyChooseUs = [
    "Tailored PC Configurations",
    "High-Quality Components",
    "Expert Assembly & Testing",
    "Warranty on Parts & Build",
    "Performance Optimization",
  ];

  const processSteps = [
    { title: "Consultation", desc: "Discuss your requirements and budget with our experts." },
    { title: "Component Selection", desc: "We choose the best components for your performance needs." },
    { title: "Assembly & Testing", desc: "Our technicians assemble and test your custom PC for peak performance." },
    { title: "Delivery & Support", desc: "We deliver your PC and provide setup guidance and ongoing support." },
  ];

  const testimonials = [
    { text: "They built my gaming rig exactly as I wanted — flawless performance!", name: "Aditya Singh" },
    { text: "Professional assembly and top-notch components. Highly recommended!", name: "Neha Sharma" },
  ];

  const faqs = [
    { q: "Do you offer warranty on custom PC builds?", a: "Yes, all custom builds come with a warranty on both components and assembly." },
    { q: "Can you build a PC for gaming and streaming?", a: "Absolutely, we customize builds for gaming, streaming, content creation, or professional work." },
    { q: "Do you provide remote support after delivery?", a: "Yes, we provide guidance and troubleshooting support after delivery." },
    { q: "Can I choose specific brands or parts?", a: "Yes, you can specify brands or components you prefer, and we’ll assemble accordingly." },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#011549] via-[#01123B] to-[#011549] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Hero Section */}
        <section>
          <h1 className="text-5xl font-bold mb-4 text-cyan-400">Custom PC Build</h1>
          <p className="mb-6 text-lg text-blue-200">
            Build your dream PC with high-performance parts. Tailored configurations for gaming, design, and professional use.
          </p>
        </section>

        {/* Build Options */}
        <section>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Build Options</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {buildOptions.map((option, i) => (
              <li key={i} className="flex items-center bg-gradient-to-r from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-4 rounded-xl border border-teal-700/40 shadow-lg shadow-teal-900/30">
                <Cpu className="w-6 h-6 text-cyan-400 mr-3" />
                {option}
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Build Process</h2>
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Build Your Dream PC Today</h2>
          <p className="mb-6 text-blue-200">Let our experts assemble a custom PC that meets your exact needs and budget.</p>
          <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/30 transition-all duration-200">
            Contact Us Now
          </button>
        </section>

      </div>
    </main>
  );
}
