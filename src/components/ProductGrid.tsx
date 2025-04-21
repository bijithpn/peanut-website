import React from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  products?: Product[];
  title?: string;
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      name: "Premium Almonds",
      description: "Hand-roasted almonds with a hint of sea salt",
      price: 12.99,
      image:
        "https://images.unsplash.com/photo-1574570423046-83ac378ba0d3?w=800&q=80",
    },
    {
      id: "2",
      name: "Honey Cashews",
      description: "Sweet and crunchy cashews glazed with organic honey",
      price: 14.99,
      image:
        "https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=800&q=80",
    },
    {
      id: "3",
      name: "Spicy Pecans",
      description: "Perfectly roasted pecans with a spicy kick",
      price: 13.99,
      image:
        "https://images.unsplash.com/photo-1573851552153-816785fecf4a?w=800&q=80",
    },
  ],
  title = "Our Bestsellers",
}: ProductGridProps) => {
  // Only use the first 3 products
  const displayProducts = products.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 px-4 bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="px-6 py-3 border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-colors duration-300 rounded-md font-medium">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGrid;
