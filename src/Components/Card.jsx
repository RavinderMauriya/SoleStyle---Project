import React, { useContext } from 'react'
import { Heart } from 'lucide-react';
import { productDataContext } from '../Context/productDataContext';
const Card = ({ id, image, name, oldPrice, newPrice, desc }) => {

  const {addToCart} = useContext(productDataContext);

  return (
    <div className="group relative flex flex-col h-full bg-gray-100/70 rounded-2xl overflow-hidden">

      <div className="p-4">
      <div className="relative aspect-square">
        <div className="absolute top-4 left-4 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100">
          <Heart className="text-red-700 w-5 h-5" />
        </div>
        <img className="w-full h-full rounded-2xl object-cover " src={image} alt={name} />
      </div>
      </div>

      <div className="w-full p-4 flex flex-col flex-grow">
        <div>
          <div className="flex justify-between">
            <h4 className="font-semibold text-sm">{name}</h4>
            <div className="flex">
              <del className="font-light mr-1 text-xs">₹{oldPrice}</del>
              <h4 className="font-bold">₹{newPrice}</h4>
            </div>
          </div>

          <div className="py-3 text-slate-700">
            <p>{desc}</p>
          </div>
        </div>

        <button className="mt-auto px-3 py-1.5 w-full bg-green-400 rounded-2xl font-bold transform-view"
        onClick={(e)=>{
          e.stopPropagation();
          e.preventDefault();
          addToCart(id);
          console.log("cart btn click")
          // Navigate("/cart")
        }}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card