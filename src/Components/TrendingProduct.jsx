import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { productDataContext } from "../Context/productDataContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TrendingProduct = () => {
  const { products } = useContext(productDataContext);

  const trendingProducts = products.filter((product) => product.isTrending);

  return (
    <section className="py-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Trending Products
        </h2>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* {trendingProducts.map((i) => (
              <Link key={i.id} to={`/productdetail/${i.id}`}>
              <Card product={i}/>
               </Link>
            ))} */}
          {trendingProducts.map((i) => (
            <motion.div key={i.id} layout>
              <Link to={`/productdetail/${i.id}`}>
                <Card product={i} />
              </Link>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default TrendingProduct;