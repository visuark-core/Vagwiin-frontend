import React from "react";
import { useParams, Link } from "react-router-dom";

const blogDetails = {
  "1": {
    title: "How to Fix a Slow Laptop: Top 5 Solutions",
    image: "/blogs/laptop-slow.jpg",
    content: `Is your laptop running slow? Here are the top 5 solutions:

1. Uninstall unused programs and clear temporary files.
2. Disable startup programs using Task Manager.
3. Upgrade your RAM if possible.
4. Scan for malware and viruses.
5. Update your operating system and drivers.

Try these steps and your laptop should run faster!`
  },
  "2": {
    title: "Common Computer Startup Problems and Their Fixes",
    image: "/blogs/computer-startup.jpg",
    content: `If your computer won't start, check these:

1. Ensure power supply and cables are connected.
2. Listen for beep codes and check error lights.
3. Try booting in Safe Mode.
4. Remove external devices and try again.
5. If all fails, consult a technician.`
  },
  "3": {
    title: "Laptop Battery Draining Fast? Here’s What to Do",
    image: "/blogs/battery-drain.jpg",
    content: `To fix fast battery drain:

1. Lower screen brightness.
2. Close background apps.
3. Turn off Wi-Fi/Bluetooth when not needed.
4. Replace old battery if needed.
5. Update battery drivers.`
  },
  "4": {
    title: "How to Remove Viruses and Malware from Your PC",
    image: "/blogs/virus-malware.jpg",
    content: `Steps to clean your PC:

1. Install a trusted antivirus program.
2. Run a full system scan.
3. Remove detected threats.
4. Keep your OS and software updated.
5. Avoid suspicious downloads and emails.`
  },
  "5": {
    title: "Troubleshooting Wi-Fi Connectivity Issues",
    image: "/blogs/wifi-issues.jpg",
    content: `Fix Wi-Fi problems by:

1. Restarting your router and device.
2. Forgetting and reconnecting to the network.
3. Updating network drivers.
4. Checking for interference from other devices.
5. Resetting network settings if needed.`
  },
  "6": {
    title: "Blue Screen Errors: Causes and Solutions",
    image: "/blogs/blue-screen.jpg",
    content: `Blue screen errors (BSOD) can be caused by:

1. Faulty hardware or drivers.
2. Overheating.
3. Software conflicts.
4. Virus infections.

To fix:
- Update drivers.
- Check hardware.
- Scan for malware.
- Restore system to a previous point.`
  },
  "7": {
    title: "How to Recover Deleted Files on Your Computer",
    image: "/blogs/recover-files.jpg",
    content: `To recover deleted files:

1. Check the Recycle Bin.
2. Use built-in recovery tools.
3. Try third-party recovery software.
4. Avoid writing new data to the drive.
5. Seek professional help for critical data.`
  },
  "8": {
    title: "Laptop Overheating: Prevention and Fixes",
    image: "/blogs/overheating.jpg",
    content: `Prevent overheating by:

1. Cleaning air vents and fans.
2. Using a cooling pad.
3. Avoiding heavy usage on soft surfaces.
4. Monitoring temperature with software.
5. Replacing thermal paste if needed.`
  }
};

export default function BlogDetailPage() {
  const { id } = useParams();
  const blog = blogDetails[id || ""];

  if (!blog) {
    return (
      <main className="min-h-screen w-full bg-gradient-to-b from-dark-blue-primary via-dark-blue-secondary to-dark-blue-primary flex items-center justify-center">
        <div className="text-center text-white text-2xl">Blog not found.</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-dark-blue-primary via-dark-blue-secondary to-dark-blue-primary py-12 px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-dark-blue-secondary/80 rounded-xl shadow-lg p-8 border border-teal-700/30">
        <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover rounded-lg mb-6" />
        <h1 className="text-3xl font-bold text-teal-300 mb-4">{blog.title}</h1>
        <pre className="text-gray-200 whitespace-pre-wrap mb-6">{blog.content}</pre>
        <Link to="/blogs" className="text-cyan-300 font-semibold hover:underline">&larr; Back to Blogs</Link>
      </div>
    </main>
  );
}
