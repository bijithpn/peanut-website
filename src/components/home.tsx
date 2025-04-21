import React from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import ProductGrid from "./ProductGrid";
import Navbar from "./Navbar";
import BenefitsSection from "./BenefitsSection";
import AboutUs from "./AboutUs";

const Home = () => {
  // Animation variants for page elements
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-brand-light"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      {/* Navbar */}
      <Navbar transparent={true} />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Main Content */}
      <motion.main className="container mx-auto px-4 py-12">
        {/* Bestselling Products Section */}
        <motion.section className="mb-20" variants={staggerChildren}>
          <motion.div variants={fadeIn} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">
              Our Bestsellers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our most loved premium roasted nuts, carefully selected
              and hand-roasted to perfection.
            </p>
          </motion.div>

          <ProductGrid title="Featured Products" />
        </motion.section>

        {/* Benefits Section */}
        <BenefitsSection />
      </motion.main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center mr-3">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6.5C12 5.67157 12.6716 5 13.5 5C14.3284 5 15 5.67157 15 6.5C15 7.32843 14.3284 8 13.5 8C12.6716 8 12 7.32843 12 6.5Z"
                      fill="white"
                    />
                    <path
                      d="M15.5 10C15.5 9.17157 16.1716 8.5 17 8.5C17.8284 8.5 18.5 9.17157 18.5 10C18.5 10.8284 17.8284 11.5 17 11.5C16.1716 11.5 15.5 10.8284 15.5 10Z"
                      fill="white"
                    />
                    <path
                      d="M5.5 10C5.5 9.17157 6.17157 8.5 7 8.5C7.82843 8.5 8.5 9.17157 8.5 10C8.5 10.8284 7.82843 11.5 7 11.5C6.17157 11.5 5.5 10.8284 5.5 10Z"
                      fill="white"
                    />
                    <path
                      d="M9 6.5C9 5.67157 9.67157 5 10.5 5C11.3284 5 12 5.67157 12 6.5C12 7.32843 11.3284 8 10.5 8C9.67157 8 9 7.32843 9 6.5Z"
                      fill="white"
                    />
                    <path
                      d="M6 14C6 12.3431 7.34315 11 9 11H15C16.6569 11 18 12.3431 18 14V19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19V14Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <span className="text-xl font-semibold">Premium Nuts</span>
              </div>
              <p className="text-gray-400 mb-4">
                Handcrafted, premium roasted nuts for the discerning snacker.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-brand-orange transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-brand-orange transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 text-gray-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-gray-400">
                    123 Nut Street, Crunchville, CA 90210
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-gray-400">(555) 123-4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-gray-400">info@premiumnuts.com</span>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div className="md:col-span-1">
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Monday - Friday: 9am - 6pm</li>
                <li>Saturday: 10am - 4pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Premium Nuts. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;
