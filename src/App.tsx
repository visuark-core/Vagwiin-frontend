import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import ComputerRepairPage from "./pages/ComputerRepairPage";
import DataRecoveryPage from "./pages/DataRecoveryPage";
import HardwareReplacementPage from "./pages/HardwareReplacementPage";
import NetworkingPage from "./pages/NetworkingPage";
import SoftwareTroubleshootingPage from "./pages/SoftwareTroubleshootingPage";
import CustomPCBuildPage from "./pages/CustomPCBuildPage";
import BlogsPage from "./pages/BlogsPage";
import BlogDetailPage from "./pages/BlogDetailPage";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ServicesPage" element={<ServicesPage />} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/TestimonialsPage" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blog/:id" element={<BlogDetailPage />} />
            <Route path="/computer-repair" element={<ComputerRepairPage />} />
            <Route path="/data-recovery" element={<DataRecoveryPage />} />
            <Route path="/hardware-replacement" element={<HardwareReplacementPage />} />
            <Route path="/networking" element={<NetworkingPage />} />
            <Route path="/software-troubleshooting" element={<SoftwareTroubleshootingPage />} />
            <Route path="/custom-pc-build" element={<CustomPCBuildPage />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;