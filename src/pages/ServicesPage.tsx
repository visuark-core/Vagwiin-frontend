import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Monitor,
  HardDrive,
  Wifi,
  Shield,
  Database,
  Server,
  CheckCircle,
  ArrowRight,
  Users,
} from "lucide-react";

export default function VagwiinServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Computer Repair",
      description:
        "From hardware fixes to software troubleshooting, our expert technicians handle all brands and models with precision and care.",
      features: ["Hardware Fixes", "OS Repair", "Virus Removal", "Performance Optimization"],
      link: "/computer-repair"
    },
    {
      icon: <HardDrive className="w-8 h-8" />,
      title: "Data Recovery",
      description:
        "Lost your valuable data? Don’t worry. Our advanced recovery tools and techniques ensure that your data is restored safely and securely.",
      features: ["Deleted File Recovery", "Hard Disk Recovery", "RAID Recovery", "Backup Solutions"],
      link: "/data-recovery"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Hardware Replacement",
      description:
        "Replace faulty components to restore your device’s full functionality. Genuine parts with warranty included.",
      features: ["RAM & Storage Upgrade", "Motherboard Replacement", "Power Supply", "GPU/CPU Replacement"],
      link: "/hardware-replacement"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Networking",
      description:
        "Set up fast and secure networks for homes or offices. We ensure optimal connectivity and seamless performance.",
      features: ["LAN/WAN Setup", "WiFi Optimization", "Firewall Setup", "Network Security"],
      link: "/networking"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Software Troubleshooting",
      description:
        "Fix software issues, optimize performance, and ensure smooth operation across all your devices.",
      features: ["System Errors", "Driver Issues", "App Crashes", "System Updates"],
      link: "/software-troubleshooting"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Custom PC Build",
      description:
        "Build your dream PC with high-performance parts. Tailored configurations for gaming, design, and professional use.",
      features: ["Gaming Rigs", "Workstations", "Budget Builds", "High-End PCs"],
      link: "/custom-pc-build"
    },
  ];

  const whyChooseUs = [
    "Expert technicians with years of experience",
    "24/7 technical support",
    "Affordable and transparent pricing",
    "Genuine replacement parts with warranty",
    "On-time project delivery",
    "Post-service support",
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#011549] via-[#01123B] to-[#011549] text-white">
      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-5xl font-bold mb-6">
          Reliable
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
            IT Services & Solutions
          </span>
        </h1>
        <p className="text-xl mb-8 text-blue-200 max-w-3xl mx-auto">
          From repairs to installations, we provide comprehensive IT solutions
          that ensure smooth operations and long-term reliability.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
            View Our Services
          </button>
          <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-[#01123B] transition-colors">
            Contact Us
          </button>
        </div>
      </div>

      {/* SERVICES GRID */}
      <section className="py-20 bg-[#01123B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet your needs with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#011549] rounded-xl p-8 hover:shadow-lg hover:shadow-cyan-500/20 transition border border-[#022060]"
              >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-blue-200 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={service.link} className="mt-6 text-cyan-400 font-semibold flex items-center hover:text-cyan-300 transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#011549]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
              <p className="text-lg text-blue-200 mb-8">
                We combine technical expertise with reliable service to deliver
                IT solutions that empower individuals and businesses alike.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-200">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats card */}
            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Users className="w-8 h-8 mr-3" />
                  <span className="text-2xl font-bold">1,000+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Happy Clients</h3>
                <p className="text-blue-100">
                  Trusted by individuals and businesses for reliable IT services and long-lasting solutions.
                </p>
                <div className="mt-8 pt-6 border-t border-blue-400/50">
                  <div className="flex justify-between text-center">
                    <div>
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-sm text-blue-200">Client Satisfaction</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm text-blue-200">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">10+</div>
                      <div className="text-sm text-blue-200">Years Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need IT Support Today?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us help you with expert IT solutions tailored to your needs. Fast, reliable, and affordable.
          </p>
          <button className="bg-white text-[#011549] px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
