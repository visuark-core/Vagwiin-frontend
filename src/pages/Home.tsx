import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import TestimonialsSection from "./TestimonialsSection";
import VagwiinAdvantage from "./VagwiinAdvantage";

export default function Home() {
  const services = [
    {
      icon: '🛠️',
      title: 'Computer Repair',
      desc: 'From hardware fixes to software troubleshooting, our expert technicians handle all brands and models with precision and care.',
      link: '/computer-repair'
    },
    {
      icon: '💾',
      title: 'Data Recovery',
      desc: "Lost your valuable data? Don't worry. Our advanced recovery tools and techniques ensure that your data is restored safely and securely.",
      link: '/data-recovery'
    },
    {
      icon: '🔧',
      title: 'Hardware Replacement',
      desc: "Replace faulty components to restore your device's full functionality. Genuine parts with warranty included.",
      link: '/hardware-replacement'
    },
    {
      icon: '🌐',
      title: 'Networking',
      desc: 'Set up fast and secure networks for homes or offices. We ensure optimal connectivity and seamless performance.',
      link: '/networking'
    },
    {
      icon: '🛡️',
      title: 'Software Troubleshooting',
      desc: 'Fix software issues, optimize performance, and ensure smooth operation across all your devices.',
      link: '/software-troubleshooting'
    },
    {
      icon: '💻',
      title: 'Custom PC Build',
      desc: 'Build your dream PC with high-performance parts. Tailored configurations for gaming, design, and professional use.',
      link: '/custom-pc-build'
    }
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main className="relative min-h-screen w-full bg-gradient-to-b from-dark-blue-primary via-dark-blue-secondary to-dark-blue-primary flex items-center justify-center overflow-hidden">
        {/* Hero Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/logos/vagwiin.mp4" // Change filename if needed
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: 0.8 }}
        />
        {/* Black Shield Overlay */}
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.4, zIndex: 1 }} />
        
        {/* Animated Background Gradient Overlay */}
        <div className="absolute inset-0 opacity-60 z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 via-cyan-800/20 to-emerald-900/30 animate-gradient-x"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/20 via-teal-800/30 to-emerald-900/25 animate-gradient-y"></div>
        </div>
        
        {/* Spline 3D Laptop Animation */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none">
        </div>
        
        {/* Overlay Content */}
        <motion.div
          className="relative z-10 flex flex-col items-start max-w-2xl px-2 sm:px-4 md:px-8 py-8 sm:py-11 w-full mx-auto"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4 w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-600 to-cyan-300 flex items-center justify-center text-white font-bold text-xl border-2 border-teal-400 shadow-lg shadow-teal-500/30"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              V
            </motion.div>
            <span className="text-lg font-semibold text-white tracking-wide">Vagwiin</span>
          </motion.div>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight drop-shadow-xl w-full break-words"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Your IT Problems<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 animate-gradient-text">We Fix It Fast!</span>
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-2xl text-gray-200 mb-6 sm:mb-8 font-medium max-w-xl w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            Get expert desktop and laptop repair with Vagwiin. We offer no hidden charges, quick repair service, and convenient doorstep pickup & drop.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 1 } }
            }}
          >
            <motion.a
              href="/contact"
              className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-3 px-7 rounded-full text-lg shadow-lg shadow-teal-500/30 transition-all duration-200 flex items-center gap-2"
              whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)' }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.4 }}
            >
              Contact Us <span className="text-xl">&rarr;</span>
            </motion.a>
            <motion.a
              href="#discover"
              className="border-2 border-teal-400 hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 hover:text-white text-teal-400 font-bold py-3 px-7 rounded-full text-lg shadow-lg transition-all duration-200 flex items-center gap-2"
              whileHover={{ scale: 1.08, boxShadow: '0 0 20px rgba(20, 184, 166, 0.3)' }}
              whileTap={{ scale: 0.96 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.4 }}
            >
              Discover More
            </motion.a>
          </motion.div>
        </motion.div>
      </main>

      {/* Infinite Logo Strip */}
      <section className="w-full py-8 bg-gradient-to-b from-dark-blue-primary via-dark-blue-secondary to-dark-blue-primary relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-800/20 via-cyan-700/30 to-emerald-800/20 animate-gradient-slow"></div>
        </div>
        <div className="overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to right, #010F36 0%, transparent 10%, transparent 90%, #010F36 100%)', zIndex: 1 }} />
          <div className="w-full flex items-center" style={{ height: '80px' }}>
            <div className="flex items-center animate-logo-scroll gap-12" style={{ minWidth: '200%' }}>
              {/* Repeat 4 logos for infinite effect */}
              {[...Array(3)].map((_, repeatIdx) => (
                <React.Fragment key={repeatIdx}>
                  <img src="/logos/nirdesham.png" alt="Nirdesham Media" className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/primescore.png" alt="PrimeScore" className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/satlaa.png" alt="Satlaa pvt. ltd." className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/rajcomp.png" alt="RajComp" className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/nirdesham.png" alt="Nirdesham Media" className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/primescore.png" alt="PrimeScore" className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/satlaa.png" alt="Satlaa pvt. ltd." className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/rajcomp.png" alt="RajComp" className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/nirdesham.png" alt="Nirdesham Media" className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/primescore.png" alt="PrimeScore" className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/satlaa.png" alt="Satlaa pvt. ltd." className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/rajcomp.png" alt="RajComp" className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/nirdesham.png" alt="Nirdesham Media" className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/primescore.png" alt="PrimeScore" className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/satlaa.png" alt="Satlaa pvt. ltd." className="h-12 w-auto grayscale opacity-80" />
                  <img src="/logos/rajcomp.png" alt="RajComp" className="h-12 w-auto grayscale opacity-80" />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-16 bg-gradient-to-b from-dark-blue-primary via-dark-blue-secondary to-dark-blue-primary relative overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/20 via-cyan-800/30 to-emerald-900/20 animate-gradient-diagonal"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-emerald-900/25 via-teal-800/20 to-cyan-900/25 animate-gradient-reverse"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-white mb-10 text-center drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                className="group bg-gradient-to-br from-dark-blue-secondary/80 via-dark-blue-primary/70 to-dark-blue-primary/80 backdrop-blur-sm rounded-xl shadow-lg shadow-teal-900/20 p-8 flex flex-col items-center text-center border border-teal-700/30 hover:border-teal-400 transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: '0 0 40px rgba(20, 184, 166, 0.4), 0 0 80px rgba(6, 182, 212, 0.2)',
                  borderColor: '#14b8a6' 
                }}
              >
                {/* Animated background for cards */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 via-cyan-600/5 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 text-4xl mb-4 text-teal-400 drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{service.icon}</span>
                <h3 className="relative z-10 text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="relative z-10 text-gray-300 mb-4">{service.desc}</p>
                <a href={service.link} className="relative z-10 text-teal-400 font-semibold cursor-pointer hover:text-cyan-300 transition-colors group-hover:text-cyan-300">Learn More →</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <TestimonialsSection />

      {/* The Vagwiin Advantage Section */} 
      <VagwiinAdvantage />

  <style>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-scroll {
          animation: logo-scroll 30s linear infinite;
        }
        @keyframes gradient-x {
          0%, 100% { transform: translateX(-50%) scale(1); }
          50% { transform: translateX(50%) scale(1.1); }
        }
        @keyframes gradient-y {
          0%, 100% { transform: translateY(-50%) scale(1); }
          50% { transform: translateY(50%) scale(1.1); }
        }
        @keyframes gradient-diagonal {
          0%, 100% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
          50% { transform: translate(50%, 50%) rotate(180deg) scale(1.2); }
        }
        @keyframes gradient-diagonal-reverse {
          0%, 100% { transform: translate(50%, 50%) rotate(0deg) scale(1); }
          50% { transform: translate(-50%, -50%) rotate(-180deg) scale(1.2); }
        }
        @keyframes gradient-reverse {
          0%, 100% { transform: translateX(50%) translateY(50%); }
          50% { transform: translateX(-50%) translateY(-50%); }
        }
        @keyframes gradient-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x { animation: gradient-x 15s ease infinite; }
        .animate-gradient-y { animation: gradient-y 20s ease infinite; }
        .animate-gradient-diagonal { animation: gradient-diagonal 25s ease infinite; }
        .animate-gradient-diagonal-reverse { animation: gradient-diagonal-reverse 30s ease infinite; }
        .animate-gradient-reverse { animation: gradient-reverse 18s ease infinite; }
        .animate-gradient-slow { animation: gradient-slow 12s ease infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease infinite; }
        .animate-gradient-text { 
          animation: gradient-text 3s ease infinite; 
          background-size: 200% 200%;
        }
      `}</style>
    </>
  );
}