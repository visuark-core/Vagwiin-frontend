import React, { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Outstanding service quality and innovative solutions. The team's expertise in modern technology is truly impressive.",
      name: "Michael Chen",
      company: "Digital Dynamics",
    },
    {
      text: "Vagwiin recovered my lost data and fixed my laptop in a day. Professional, fast, and friendly!",
      name: "Sarah J.",
      company: "Acme Corp",
    },
    {
      text: "The networking setup was seamless and efficient. My office runs smoother than ever before!",
      name: "Rajiv Mehta",
      company: "Tech Horizons",
    },
    {
      text: "Reliable, fast, and affordable IT solutions. Truly a great partner for growing businesses.",
      name: "Emily R.",
      company: "NextGen Solutions",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 4000); // Change slide every 4 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { text, name, company } = testimonials[index];

  return (
    /* Client Testimonials Section */
    <section className="py-20 bg-gradient-to-b from-dark-blue-secondary via-dark-blue-primary to-dark-blue-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-teal-800/30 to-cyan-900/20 animate-pulse-slow"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-extrabold text-white mb-2 drop-shadow-lg">
          Client Testimonials
        </h2>
        <p className="text-lg text-teal-200 mb-10">
          What our clients say about our IT solutions
        </p>
        <div className="flex justify-center">
          <div className="rounded-2xl shadow-2xl shadow-teal-900/30 p-12 w-full max-w-2xl mx-auto flex flex-col items-center backdrop-blur-xl bg-gradient-to-br from-dark-blue-secondary/80 via-dark-blue-primary/70 to-dark-blue-primary/80 border border-teal-700/40 relative overflow-hidden">
            {/* Glowing orb effect */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-tr from-teal-500 via-cyan-400 to-emerald-400 rounded-full blur-xl opacity-40 z-0 animate-pulse"></div>
            {/* Animated background for testimonial card */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 via-cyan-600/10 to-emerald-600/5 animate-gradient-slow"></div>
            <span className="text-5xl text-teal-400 mb-6 z-10 relative">"</span>
            <p className="text-2xl text-white mb-8 font-medium z-10 drop-shadow-lg relative">
              {text}
            </p>
            <div className="mb-6 z-10 relative">
              <span className="font-bold text-teal-200 text-lg block">{name}</span>
              <span className="text-teal-400 text-sm">{company}</span>
            </div>
            <div className="flex gap-4 justify-center mt-2 z-10 relative">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-700 via-cyan-600 to-teal-500 hover:from-teal-600 hover:to-cyan-400 text-white border border-teal-500/50 shadow-lg shadow-teal-500/30 transition-all duration-200 hover:shadow-teal-400/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-700 via-cyan-600 to-teal-500 hover:from-teal-600 hover:to-cyan-400 text-white border border-teal-500/50 shadow-lg shadow-teal-500/30 transition-all duration-200 hover:shadow-teal-400/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
