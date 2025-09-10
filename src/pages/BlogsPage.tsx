import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: "1",
    title: "How to Fix a Slow Laptop: Top 5 Solutions",
    summary: "Is your laptop running slow? Discover the most effective troubleshooting steps to speed up your device.",
    author: "Neeraj Kumhar",
    date: "2025-09-10",
    image: "/blogs/laptop-slow.jpg"
  },
  {
    id: "2",
    title: "Common Computer Startup Problems and Their Fixes",
    summary: "Learn how to diagnose and resolve common issues that prevent your computer from starting properly.",
    author: "Neeraj Kumhar",
    date: "2025-09-09",
    image: "/blogs/computer-startup.jpg"
  },
  {
    id: "3",
    title: "Laptop Battery Draining Fast? Here’s What to Do",
    summary: "Tips and tricks to extend your laptop battery life and fix rapid battery drain issues.",
    author: "Neeraj Kumhar",
    date: "2025-09-08",
    image: "/blogs/battery-drain.jpg"
  },
  {
    id: "4",
    title: "How to Remove Viruses and Malware from Your PC",
    summary: "A step-by-step guide to cleaning your computer and keeping it safe from threats.",
    author: "Neeraj Kumhar",
    date: "2025-09-07",
    image: "/blogs/virus-malware.jpg"
  },
  {
    id: "5",
    title: "Troubleshooting Wi-Fi Connectivity Issues",
    summary: "Quick fixes for laptop and desktop Wi-Fi problems, from hardware to software.",
    author: "Neeraj Kumhar",
    date: "2025-09-06",
    image: "/blogs/wifi-issues.jpg"
  },
  {
    id: "6",
    title: "Blue Screen Errors: Causes and Solutions",
    summary: "Understand why blue screen errors happen and how to resolve them on Windows computers.",
    author: "Neeraj Kumhar",
    date: "2025-09-05",
    image: "/blogs/blue-screen.jpg"
  },
  {
    id: "7",
    title: "How to Recover Deleted Files on Your Computer",
    summary: "Step-by-step instructions to recover lost files using built-in and third-party tools.",
    author: "Neeraj Kumhar",
    date: "2025-09-04",
    image: "/blogs/recover-files.jpg"
  },
  {
    id: "8",
    title: "Laptop Overheating: Prevention and Fixes",
    summary: "Learn how to keep your laptop cool and prevent overheating issues.",
    author: "Neeraj Kumhar",
    date: "2025-09-03",
    image: "/blogs/overheating.jpg"
  }
];

export default function BlogsPage() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-dark-blue-primary via-dark-blue-secondary to-dark-blue-primary py-12 px-4">
  <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center">Tech Troubleshooting Blogs</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-dark-blue-secondary/80 rounded-xl shadow-lg p-6 border border-teal-700/30 hover:border-teal-400 transition-all duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h2 className="text-2xl font-bold text-teal-300 mb-2">{blog.title}</h2>
              <p className="text-gray-300 mb-4">{blog.summary}</p>
              <div className="flex justify-between items-center text-sm text-teal-400 mb-2">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>
              <Link to={`/blog/${blog.id}`} className="text-cyan-300 font-semibold hover:underline">Read Full Blog &rarr;</Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
