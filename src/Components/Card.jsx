import React from "react";
import { Heart } from "lucide-react";

const Card = ({ product }) => {
  return (
    <div className="group relative flex flex-col bg-white border border-gray-300 rounded-2xl overflow-hidden transition hover:shadow-xl">

      {/* Wishlist Icon */}
      <button className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur rounded-full p-2 opacity-0 group-hover:opacity-100 transition">
        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition" />
      </button>

      {/* Image */}
      <div className="aspect-square bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        {/* Title */}
        <h4 className="font-semibold text-sm leading-snug line-clamp-2 min-h-[40px]">
          {product.name}
        </h4>

        {/* Description */}
        <p className="mt-0.5 text-xs text-gray-500 line-clamp-2 min-h-[32px]">
          {product.desc}
        </p>

        {/* Price Section */}
        <div className="mt-auto pt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">
              ₹{product.newPrice}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">
                ₹{product.oldPrice}
              </span>
            )}
          </div>

          {/* Discount Badge */}
          {product.oldPrice && (
            <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">
              {Math.round(
                ((product.oldPrice - product.newPrice) /
                  product.oldPrice) *
                  100
              )}
              % OFF
            </span>
          )}
        </div>

      </div>
    </div>
  );
};

export default Card;