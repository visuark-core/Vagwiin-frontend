import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
	{
		name: "Sarah J.",
		text: "Vagwiin recovered my lost data and fixed my laptop in a day. Professional, fast, and friendly!",
		company: "Acme Corp",
		photo: "https://randomuser.me/api/portraits/women/44.jpg",
		rating: 5,
	},
	{
		name: "Michael B.",
		text: "Best IT service in town. Transparent pricing and real expertise. Highly recommended!",
		company: "Techify",
		photo: "https://randomuser.me/api/portraits/men/32.jpg",
		rating: 4,
	},
	{
		name: "Priya S.",
		text: "Quick turnaround and genuine parts. My desktop runs like new!",
		company: "DataSecure",
		photo: "https://randomuser.me/api/portraits/women/68.jpg",
		rating: 5,
	},
];

const companyLogos = [
	"https://cdn.simpleicons.org/google/4285F4",
	"https://cdn.simpleicons.org/intel/0071C5",
	"https://cdn.simpleicons.org/dell/007DB8",
	"https://cdn.simpleicons.org/hp/0096D6",
	"https://cdn.simpleicons.org/cisco/1BA0D7",
	"https://cdn.simpleicons.org/lenovo/E2231A",
	"https://cdn.simpleicons.org/acer/83B81A",
	"https://cdn.simpleicons.org/google/4285F4",
	"https://cdn.simpleicons.org/intel/0071C5",
	"https://cdn.simpleicons.org/dell/007DB8",
	"https://cdn.simpleicons.org/hp/0096D6",
	"https://cdn.simpleicons.org/cisco/1BA0D7",
	"https://cdn.simpleicons.org/lenovo/E2231A",
	"https://cdn.simpleicons.org/acer/83B81A",
	"https://cdn.simpleicons.org/google/4285F4",
	"https://cdn.simpleicons.org/intel/0071C5",
	"https://cdn.simpleicons.org/dell/007DB8",
	"https://cdn.simpleicons.org/hp/0096D6",
	"https://cdn.simpleicons.org/cisco/1BA0D7",
	"https://cdn.simpleicons.org/lenovo/E2231A",
	"https://cdn.simpleicons.org/acer/83B81A",
];

const TestimonialsPage = () => {
	 useEffect(() => {
		 window.scrollTo(0, 0);
	 }, []);

	return (
		<div className="bg-gradient-to-b from-[#011549] via-[#01123B] to-[#011549] min-h-screen w-full overflow-x-hidden">
			<section className="max-w-5xl mx-auto px-6 py-20">
				{/* Title + Intro */}
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					className="text-4xl md:text-5xl font-extrabold text-white text-center mb-6 drop-shadow-lg"
				>
					Testimonials
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.3 }}
					className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-16"
				>
					Don’t just take our word for it. Here’s what our clients have to say
					about their experience with{" "}
					<span className="text-cyan-400 font-semibold">Vagwiin</span>.
				</motion.p>

				{/* Testimonials */}
				<div className="flex flex-col gap-12">
					{testimonials.map((t, idx) => (
						<motion.div
							key={t.name}
							initial={{ opacity: 0, y: 60 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: idx * 0.3 }}
							viewport={{ once: true }}
							className="relative bg-[#01123B]/70 border border-cyan-500/20 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8 backdrop-blur-md"
						>
							{/* Quote Icon */}
							<Quote className="absolute top-4 right-4 w-10 h-10 text-cyan-500/40" />

							{/* Photo */}
							<img
								src={t.photo}
								alt={t.name}
								className="w-24 h-24 rounded-full object-cover border-4 border-cyan-500/40 shadow-md"
							/>

							{/* Text */}
							<div className="flex-1 text-center md:text-left">
								<p className="text-gray-200 text-lg italic leading-relaxed mb-4">
									“{t.text}”
								</p>
								<div className="flex flex-col md:flex-row md:items-center md:justify-between">
									<div>
										<span className="font-bold text-white">{t.name}</span>{" "}
										<span className="text-gray-400 text-sm">
											({t.company})
										</span>
									</div>
									{/* Stars */}
									<div className="flex mt-2 md:mt-0">
										{Array.from({ length: 5 }).map((_, i) => (
											<Star
												key={i}
												className={`w-5 h-5 ${
													i < t.rating
														? "text-yellow-400 fill-yellow-400"
														: "text-gray-600"
												}`}
											/>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Logos Section */}
			<section className="w-full py-12 bg-[#01123B] border-t border-cyan-500/20 overflow-hidden">
				<div
					className="flex items-center gap-16 animate-marquee whitespace-nowrap"
					style={{ animationDuration: "30s" }}
				>
					{companyLogos.concat(companyLogos).map((logo, idx) => (
						<img
							key={idx}
							src={logo}
							alt="Company Logo"
							className="h-12 w-auto grayscale opacity-70 hover:opacity-100 transition duration-300"
						/>
					))}
				</div>
			</section>

			<style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
		</div>
	);
};

export default TestimonialsPage;
