import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // API call or email logic
  };

  return (
    <main className="relative min-h-screen w-full bg-gradient-to-b from-dark-blue-primary via-dark-blue-secondary to-dark-blue-primary flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 via-cyan-800/20 to-emerald-900/30 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-900/20 via-teal-800/30 to-emerald-900/25 animate-gradient-y"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-16">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-white mb-6 text-center drop-shadow-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Us
        </motion.h1>
  <p className="text-lg text-teal-200 mb-10 text-center max-w-2xl mx-auto">
          Have questions or need help with our IT solutions? Get in touch with
          our team — we’re here to assist you.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 bg-gradient-to-br from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-6 rounded-2xl border border-teal-700/40 shadow-lg shadow-teal-900/30 backdrop-blur-lg"
            >
              <MapPin className="w-6 h-6 text-teal-400 mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg">Our Office</h3>
                <p className="text-teal-200">
                  Jodhpur, Rajasthan, India
                </p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 bg-gradient-to-br from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-6 rounded-2xl border border-teal-700/40 shadow-lg shadow-teal-900/30 backdrop-blur-lg"
            >
              <Phone className="w-6 h-6 text-teal-400 mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg">Phone</h3>
                <p className="text-teal-200">+91 94619 91604</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 bg-gradient-to-br from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-6 rounded-2xl border border-teal-700/40 shadow-lg shadow-teal-900/30 backdrop-blur-lg"
            >
              <Mail className="w-6 h-6 text-teal-400 mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg">Email</h3>
                <p className="text-teal-200">contact@vagwiin.com</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-start gap-4 bg-gradient-to-br from-dark-blue-secondary/70 via-dark-blue-primary/70 to-dark-blue-primary/80 p-6 rounded-2xl border border-teal-700/40 shadow-lg shadow-teal-900/30 backdrop-blur-lg"
            >
              <Clock className="w-6 h-6 text-teal-400 mt-1" />
              <div>
                <h3 className="text-white font-bold text-lg">Business Hours</h3>
                <p className="text-teal-200">Mon - Sat, 9AM - 7PM</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-gradient-to-br from-dark-blue-secondary/80 via-dark-blue-primary/70 to-dark-blue-primary/80 p-8 rounded-2xl shadow-2xl shadow-teal-900/30 border border-teal-700/40 backdrop-blur-xl">
            {submitted ? (
              <div className="text-center text-green-400 font-bold text-xl py-16">
                ✅ Thank you for contacting us! We'll respond as soon as
                possible.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-dark-blue-secondary/60 border border-teal-700/40 rounded-lg px-5 py-3 text-white focus:outline-none focus:border-teal-400 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-dark-blue-secondary/60 border border-teal-700/40 rounded-lg px-5 py-3 text-white focus:outline-none focus:border-teal-400 transition-all"
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={5}
                  className="bg-dark-blue-secondary/60 border border-teal-700/40 rounded-lg px-5 py-3 text-white focus:outline-none focus:border-teal-400 transition-all resize-none"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 text-white font-bold py-3 px-7 rounded-full text-lg shadow-lg shadow-teal-500/30 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
  </div>

        {/* Google Map */}
        {/* Map Embed */}
  <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-white/10 my-10">
          <iframe
            title="Vagwiin Location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=73.024%2C26.238%2C73.04%2C26.26&amp;layer=mapnik&amp;marker=26.251%2C73.032"
            className="w-full h-full"
            style={{ filter: "invert(90%) hue-rotate(180deg)" }} // makes map match dark theme
          ></iframe>
        </div>

        {/* Social Links */}
  <div className="mt-10 flex justify-center gap-6">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{ scale: 1.2 }}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-gradient-to-tr from-teal-700 via-cyan-600 to-teal-500 text-white border border-teal-500/40 shadow-md shadow-teal-500/30"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
