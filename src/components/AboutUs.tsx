import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const timelineItems: TimelineItem[] = [
    {
      year: "2010",
      title: "Our Beginning",
      description:
        "Founded with a passion for quality nuts and a small family-owned roastery.",
    },
    {
      year: "2015",
      title: "Expanding Horizons",
      description:
        "Introduced our signature honey-roasted collection and expanded to nationwide shipping.",
    },
    {
      year: "2018",
      title: "Sustainability Focus",
      description:
        "Committed to 100% sustainable sourcing and eco-friendly packaging for all products.",
    },
    {
      year: "2022",
      title: "Premium Selection",
      description:
        "Launched our premium artisanal collection featuring rare and exotic nuts from around the world.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-brand-dark mb-6"
          >
            About Jaanaki Jaane
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-brand-orange mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8"
          >
            Founded in 2010, Jaanaki Jaane has been dedicated to bringing you
            the finest quality nuts from around the world. Our passion for
            quality and flavor drives everything we do.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1611174797136-5d9f8a7854d9?w=800&q=80"
              alt="Our story"
              className="w-full h-auto object-cover rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-brand-dark">
              Our Story
            </h3>
            <p className="text-gray-600">
              What started as a small family business has grown into a beloved
              brand known for exceptional quality and taste. We carefully select
              nuts from sustainable farms and roast them in small batches to
              ensure perfect flavor every time.
            </p>
            <p className="text-gray-600">
              Our commitment to quality means we never compromise on ingredients
              or processes. Each product is crafted with care, using traditional
              methods combined with innovative techniques to create the perfect
              balance of flavors.
            </p>
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors duration-300 rounded-md font-medium"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-brand-dark text-center mb-12"
          >
            Our Journey Through The Years
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-brand-orange/20 rounded-full"></div>

            {/* Timeline items */}
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex items-center mb-16 last:mb-0 relative ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                <div className="w-full md:w-5/12">
                  <div
                    className={`p-6 bg-brand-light rounded-lg shadow-sm border-1 border-brand-orange/10 hover:shadow-md transition-all duration-300 ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"}`}
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-3xl font-bold text-brand-orange mr-3">
                        {item.year}
                      </span>
                      <h4 className="text-xl font-semibold text-brand-dark">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>

                {/* Empty div for spacing on the other side */}
                <div className="hidden md:block w-5/12"></div>

                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-brand-orange rounded-full border-4 border-white shadow-md z-10"
                ></motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
