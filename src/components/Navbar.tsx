import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.nav
      className={`w-full py-4 px-6 ${transparent ? "fixed top-0 left-0 z-50" : "bg-white shadow-sm fixed top-0 left-0 z-50"}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div variants={itemVariants} className="flex items-center">
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
          <span className="text-xl font-semibold text-gray-900">
            Jaanaki Jaane
          </span>
        </motion.div>

        {/* Navigation Links */}
        <motion.ul className="hidden md:flex space-x-8" variants={navVariants}>
          {navLinks.map((link, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Link
                to={link.path}
                className="text-gray-700 hover:text-brand-orange transition-colors duration-300 font-medium"
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button - simplified for this implementation */}
        <motion.div variants={itemVariants} className="md:hidden">
          <button
            className="text-gray-700 hover:text-brand-orange focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
