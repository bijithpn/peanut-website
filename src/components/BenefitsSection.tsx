import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitsSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const benefits: Benefit[] = [
    {
      icon: <CheckCircle className="h-10 w-10 text-[#ff8343]" />,
      title: "100% Natural",
      description: "Only the finest nuts with no preservatives or additives",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#ff8343]" />,
      title: "Hand-Roasted",
      description: "Carefully roasted in small batches for perfect flavor",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#ff8343]" />,
      title: "Ethically Sourced",
      description: "Supporting sustainable farming practices worldwide",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#ff8343]" />,
      title: "Eco-Friendly",
      description: "Packaged in recyclable materials to protect our planet",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-[#fffaf0] w-full" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Our Nuts
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We take pride in delivering the highest quality roasted nuts with
            exceptional taste and nutritional value.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
