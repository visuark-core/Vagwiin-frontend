import React from "react";
import { CheckCircle, ShieldCheck, Clock } from "lucide-react";

export default function DataRecoveryPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const services = [
    "Deleted File Recovery",
    "Hard Disk Recovery",
    "RAID Recovery",
    "SSD & Flash Drive Recovery",
    "Backup Solutions",
    "Corrupted File Repair",
    "Formatted Disk Recovery",
  ];

  const whyChooseUs = [
    "Fast & Reliable Recovery",
    "Advanced Tools & Techniques",
    "Data Security & Privacy Guaranteed",
    "Supports All Storage Devices",
    "Certified Data Recovery Experts",
  ];

  const processSteps = [
    { title: "Assessment", desc: "We evaluate your storage device to determine recoverable data." },
    { title: "Recovery", desc: "Our experts recover your files safely using advanced tools." },
    { title: "Verification", desc: "All recovered data is verified for integrity and completeness." },
    { title: "Delivery", desc: "We return your data securely in your preferred format." },
  ];

  const faqs = [
    { q: "Can you recover data from physically damaged drives?", a: "Yes, our lab is equipped to handle physical damage recovery." },
    { q: "How long does recovery take?", a: "Recovery usually takes 24-72 hours depending on data size and device condition." },
    { q: "Is my data safe during recovery?", a: "Absolutely. We follow strict security protocols to protect your data." },
    { q: "Do you support all storage types?", a: "Yes, including HDD, SSD, USB drives, memory cards, and RAID systems." },
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#011549] via-[#01123B] to-[#011549] text-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Hero Section */}
        <section>
          <h1 className="text-5xl font-bold mb-4 text-cyan-400">Data Recovery Services</h1>
          <p className="mb-6 text-lg text-blue-200">
            Lost your valuable data? Our advanced recovery tools and expert technicians ensure that your files are restored safely and securely.
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-6">Our Recovery Process</h2>
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
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">Need Immediate Assistance?</h2>
          <p className="mb-6 text-blue-200">Contact our experts today for fast and reliable data recovery services.</p>
          <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-teal-500/30 transition-all duration-200">
            Contact Us Now
          </button>
        </section>
      </div>
    </main>
  );
}
