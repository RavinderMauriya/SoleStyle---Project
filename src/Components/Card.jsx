// import React, { useContext } from "react";
// import { Heart } from "lucide-react";
// import { productDataContext } from "../Context/productDataContext";

// const Card = ({ product }) => {
//   const { addToCart } = useContext(productDataContext);

//   return (
//     <div className="group relative flex flex-col bg-gray-100/70 rounded-2xl overflow-hidden">

//       {/* Image */}
//       <div className="p-4">
//         <div className="relative aspect-square">
//           <div className="absolute top-4 left-4 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100">
//             <Heart className="text-red-600 w-5 h-5" />
//           </div>
//           <img
//             className="w-full h-full object-cover rounded-2xl"
//             src={product.image}
//             alt={product.name}
//           />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-4 flex flex-col flex-grow">

//         <div>
//           <div className="flex justify-between">
//             <h4 className="font-semibold text-sm line-clamp-2">
//               {product.name}
//             </h4>
//             <div className="flex items-center">
//               <del className="text-xs mr-1">
//                 ₹{product.oldPrice}
//               </del>
//               <span className="font-bold">
//                 ₹{product.newPrice}
//               </span>
//             </div>
//           </div>

//           <p className="py-3 text-slate-600 text-sm">
//             {product.desc}
//           </p>
//         </div>

//         {/* <button
//           className="mt-auto px-3 py-2 w-full bg-green-400 rounded-2xl font-bold"
//           onClick={(e) => {
//             e.preventDefault();
//             e.stopPropagation();
//             addToCart({
//               ...product,
//               selectedSize : "M",
//               quantity:1,
//             });
//           }}
//         >
//           Add to Cart
//         </button> */}

//       </div>
//     </div>
//   );
// };

// export default Card;

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