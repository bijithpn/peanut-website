import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Premium Almonds",
  description = "Hand-roasted almonds with a hint of sea salt. Perfect for snacking.",
  price = 12.99,
  image = "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?w=400&q=80",
  onAddToCart = () => {},
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-1.5 border-gray-100 shadow-sm bg-white hover:shadow-md hover:border-brand-orange hover:border-opacity-30 transition-all duration-400">
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="aspect-square"
          >
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-brand-orange border-1 border-brand-orange/20"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            ${price.toFixed(2)}
          </motion.div>
        </div>

        <CardContent className="flex-grow p-5">
          <motion.h3
            className="text-lg font-semibold text-brand-dark"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            {name}
          </motion.h3>
          <motion.p
            className="text-sm text-gray-600 mt-2 line-clamp-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {description}
          </motion.p>
        </CardContent>

        <CardFooter className="p-5 pt-0">
          <Button
            onClick={() => onAddToCart(id)}
            className="w-full bg-transparent hover:bg-brand-orange text-brand-orange hover:text-white border-1.5 border-brand-orange transition-all duration-300"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
