import React from "react";
import Benefits from "../Components/Benefits";
import FeatureCategories from "../Components/FeatureCategories";
import TrendingProduct from "../Components/TrendingProduct";
import NewsLetter from "../Components/NewsLetter";
import FormModel from "../Components/FormModel"

const Home = () => {
  return (
    <div className="w-full relative">

      {/* Hero (Full Width) */}
      <section className="w-full px-4 sm:px-6 lg:px-16 py-6">
        <div className="relative rounded-2xl overflow-hidden min-h-[60vh] lg:min-h-[80vh] bg-[url('https://cdn.pixabay.com/photo/2019/05/10/04/45/shoes-4192767_640.jpg')] bg-cover bg-center flex items-center">

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-r from-black/60 to-transparent" />

          {/* Content */}
          <div className="relative z-10 max-w-xl px-6 sm:px-10 lg:px-20 text-white">

            <p className="text-xs sm:text-sm font-semibold mb-4 px-3 py-1 bg-green-400 text-black rounded-full inline-block">
              New Season Drop
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              STEP INTO <br /> FUTURE STYLE
            </h1>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-200">
              Experience the ultimate comfort and revolutionary
              design with our latest premium collection engineered
              for urban movement.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-green-400 text-black px-6 sm:px-8 py-3 rounded-3xl font-bold hover:bg-green-500 transition">
                Shop Now
              </button>

              <button className="border border-white bg-white/20 px-6 py-3 rounded-3xl font-bold hover:bg-white/30 transition">
                Explore Collection
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Centered Content Wrapper imp*/}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16">

        <Benefits />
        <FeatureCategories />
        <TrendingProduct />
        <NewsLetter />

      </div>

    
    </div>
  );
};

export default Home;