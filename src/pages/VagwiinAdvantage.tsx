import { motion } from "framer-motion";
import { ShieldCheck, Truck, Wrench, Wallet } from "lucide-react";

export default function VagwiinAdvantage() {
  const advantages = [
    {
      title: "Expert IT Technicians",
      description:
        "Our certified experts bring years of experience in repairing laptops, desktops, and handling complex IT challenges with precision.",
      icon: <ShieldCheck className="w-8 h-8 text-teal-400" />,
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden costs, no surprises. We provide upfront estimates so you know exactly what you’re paying for.",
      icon: <Wallet className="w-8 h-8 text-cyan-400" />,
    },
    {
      title: "Doorstep Pickup & Delivery",
      description:
        "Convenient service at your doorstep. We collect, repair, and deliver your device safely back to you.",
      icon: <Truck className="w-8 h-8 text-emerald-400" />,
    },
    {
      title: "On-Demand Quick Repairs",
      description:
        "Urgent issue? Our technicians ensure same-day or next-day repairs so you can get back to work without delay.",
      icon: <Wrench className="w-8 h-8 text-green-400" />,
    },
  ];

  return (
    /* The Vagwiin Advantage Section */
    <section className="w-full py-20 bg-gradient-to-b from-dark-blue-primary via-dark-blue-secondary to-dark-blue-primary relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-tl from-cyan-900/30 via-teal-800/20 to-emerald-900/30 animate-gradient-diagonal-reverse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            The Vagwiin Advantage
          </h2>
          <p className="text-lg sm:text-xl text-teal-200 font-medium">
            Reliable, affordable, and professional computer repair and IT
            services tailored to your needs.  
            Our mission is to keep your digital world running smoothly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {advantages.map((adv, idx) => (
            <motion.div
              key={adv.title}
              className="group bg-gradient-to-br from-dark-blue-secondary/80 via-dark-blue-primary/70 to-dark-blue-primary/80 backdrop-blur-md rounded-2xl p-8 shadow-lg shadow-teal-900/30 border border-teal-700/30 hover:border-teal-400 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 35px rgba(20,184,166,0.35)",
              }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 via-cyan-600/10 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="mb-4">{adv.icon}</div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-white mb-2 z-10 relative">
                {adv.title}
              </h3>
              <p className="text-gray-300 text-base z-10 relative leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
