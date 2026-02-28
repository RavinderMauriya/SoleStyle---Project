// import React from 'react'
// import { Truck, BadgeCheck, Headset, RefreshCcw } from 'lucide-react'

// const Benefits = () => {
//   return (
//     <section className="py-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

//         <div className="text-center space-y-3 p-4 rounded-xl hover:bg-gray-50 transition">
//           <Truck className="mx-auto w-8 h-8 text-green-500" />
//           <h4 className="font-semibold text-base">Free Shipping</h4>
//           <p className="text-sm text-gray-500">On all orders over $40</p>
//         </div>

//         <div className="text-center space-y-3 p-4 rounded-xl hover:bg-gray-50 transition">
//           <BadgeCheck className="mx-auto w-8 h-8 text-green-500" />
//           <h4 className="font-semibold text-base">Authenticity</h4>
//           <p className="text-sm text-gray-500">100% Genuine Products</p>
//         </div>

//         <div className="text-center space-y-3 p-4 rounded-xl hover:bg-gray-50 transition">
//           <RefreshCcw className="mx-auto w-8 h-8 text-green-500" />
//           <h4 className="font-semibold text-base">Easy Return</h4>
//           <p className="text-sm text-gray-500">30 Day Return Policy</p>
//         </div>

//         <div className="text-center space-y-3 p-4 rounded-xl hover:bg-gray-50 transition">
//           <Headset className="mx-auto w-8 h-8 text-green-500" />
//           <h4 className="font-semibold text-base">24/7 Support</h4>
//           <p className="text-sm text-gray-500">Dedicated Support Team</p>
//         </div>

//       </div>
//     </section>
//   )
// }

// export default Benefits


import React from "react";
import { Truck, BadgeCheck, Headset, RefreshCcw } from "lucide-react";

const Benefits = () => {
  return (
    <section className="py-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div className="text-center space-y-3 p-4 rounded-xl hover:bg-gray-50 transition">
          <Truck className="mx-auto w-8 h-8 text-green-500" />
          <h4 className="font-semibold text-base">Free Shipping</h4>
          <p className="text-sm text-gray-500">On all orders over $40</p>
        </div>

        <div className="text-center space-y-3 p-4 rounded-xl hover:bg-gray-50 transition">
          <BadgeCheck className="mx-auto w-8 h-8 text-green-500" />
          <h4 className="font-semibold text-base">Authenticity</h4>
          <p className="text-sm text-gray-500">100% Genuine Products</p>
        </div>

        <div className="text-center space-y-3 p-4 rounded-xl hover:bg-gray-50 transition">
          <RefreshCcw className="mx-auto w-8 h-8 text-green-500" />
          <h4 className="font-semibold text-base">Easy Return</h4>
          <p className="text-sm text-gray-500">30 Day Return Policy</p>
        </div>

        <div className="text-center space-y-3 p-4 rounded-xl hover:bg-gray-50 transition">
          <Headset className="mx-auto w-8 h-8 text-green-500" />
          <h4 className="font-semibold text-base">24/7 Support</h4>
          <p className="text-sm text-gray-500">Dedicated Support Team</p>
        </div>

      </div>

    </section>
  );
};

export default Benefits;