import React from 'react'
import { Heart } from 'lucide-react';

// const Card = (item) => {
//   return (
//     <div>
//         <div className=" group relative flex flex-col items-start justify-center bg-gray-200 rounded-2xl" key={item.id}>

//             <div className="p-4">
//               <div className="absolute top-6 left-6 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100"><Heart className="text-red-700 size-5" /></div>
//               <img className="rounded-2xl" src={item.image} alt={item.name} />
//             </div>

//             <div className="w-full p-4 flex flex-col">
//               <div>
//                 <div className="flex justify-between">
//                   <h4 className="font-bold">{item.name}</h4>
//                   <div className="flex"><del className="font-light mr-1">₹{item.oldPrice}</del> <h4 className="font-bold">₹{item.newPrice}</h4></div>
//                 </div>
//                 <div className="py-2"><p>{item.desc}</p></div>
//               </div>
//               <button className="px-3 py-2 w-full bg-green-400 rounded-2xl font-bold">Add to cart</button>
//             </div>

//           </div>
//     </div>
//   )
// }

const Card = ({ id, image, name, oldPrice, newPrice, desc }) => {
  return (
    <div className="group relative flex flex-col h-full bg-gray-100/70 rounded-2xl overflow-hidden">

      <div className="relative p-4">
        <div className="absolute top-4 left-4 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100">
          <Heart className="text-red-700 w-5 h-5" />
        </div>
        <img className="w-full rounded-2xl object-cover" src={image} alt={name} />
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

        <button className="mt-auto px-3 py-1.5 w-full bg-green-400 rounded-2xl font-bold">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card