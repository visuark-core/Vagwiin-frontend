import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Target, ShieldCheck } from "lucide-react";

const aboutSections = [
	{
		title: "Who We Are",
		icon: <Users className="w-10 h-10 text-cyan-400" />,
		img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=800&q=80",
		desc: "Vagwiin is a team of passionate IT professionals dedicated to delivering reliable, modern, and friendly technology solutions for individuals and businesses alike.",
	},
	{
		title: "Our Mission",
		icon: <Target className="w-10 h-10 text-cyan-400" />,
		img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80",
		desc: "To provide fast, transparent, and expert IT repair and support, building trust and confidence with every client we serve.",
	},
	{
		title: "Why Choose Us?",
		icon: <ShieldCheck className="w-10 h-10 text-cyan-400" />,
		img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
		desc: "Certified technicians, genuine parts, clear communication, and a proven track record of thousands of successful repairs and happy customers.",
	},
];

const AboutPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	});

	return (
		<div className="bg-gradient-to-br from-[#011549] via-[#01123B] to-[#011549] min-h-screen w-full overflow-x-hidden">
			<section className="max-w-6xl mx-auto px-6 py-20">
				{/* Title */}
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-4xl md:text-5xl font-extrabold text-white text-center mb-16 drop-shadow-lg"
				>
					About Us
				</motion.h1>

				{/* Content Sections */}
				<div className="grid gap-16">
					{aboutSections.map((section, idx) => (
						<motion.div
							key={section.title}
							initial={{ opacity: 0, x: idx % 2 === 0 ? -80 : 80 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.7, delay: idx * 0.2 }}
							viewport={{ once: true }}
							className={`flex flex-col md:flex-row items-center gap-10 ${
								idx % 2 === 1 ? "md:flex-row-reverse" : ""
							}`}
						>
							{/* Image */}
							<motion.img
								src={section.img}
								alt={section.title}
								className="w-full md:w-1/2 rounded-2xl shadow-2xl object-cover h-72 border-4 border-cyan-500/50 hover:scale-105 transition-transform duration-500"
								whileHover={{ scale: 1.05 }}
							/>

							{/* Text Card */}
							<div className="flex-1 bg-[#01123B]/60 border border-cyan-500/20 rounded-2xl shadow-lg backdrop-blur-md">
								<div className="p-6">
									<div className="flex items-center gap-4 mb-4">
										{section.icon}
										<h2 className="text-2xl md:text-3xl font-bold text-white">
											{section.title}
										</h2>
									</div>
									<p className="text-gray-300 text-lg leading-relaxed">
										{section.desc}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
