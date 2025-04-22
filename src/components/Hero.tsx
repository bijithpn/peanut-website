import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const Hero = ({
  title = "Premium Hand-Roasted Nuts",
  subtitle = "Savor the crunch of nature's finest, carefully roasted to perfection for an unmatched flavor experience.",
  ctaText = "Browse Products",
  onCtaClick = () => {},
}: HeroProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // Custom ease curve for smoother animation
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full h-[700px] bg-brand-light overflow-hidden">
      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="w-16 h-16 rounded-full bg-brand-orange flex items-center justify-center mb-4">
              <svg
                width="32"
                height="32"
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
            <motion.p
              className="text-sm font-medium text-brand-orange tracking-wider"
              variants={itemVariants}
            >
              NATURALLY DELICIOUS
            </motion.p>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">{title}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={buttonVariants} whileHover="hover">
            <Button
              onClick={onCtaClick}
              className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-6 rounded-md font-medium text-lg group transition-all duration-300"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>

          {/* Subtle background shape */}
          <motion.div
            className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-brand-cream opacity-50 -z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* Minimal decorative element */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-brand-orange opacity-20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.2 }}
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
