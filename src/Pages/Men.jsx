import React, { useContext } from "react";
import { productDataContext } from "../Context/productDataContext";
import Card from "../Components/Card";

const Men = () => {
  const menShops = useContext(productDataContext);

  return (
    <div className="w-full">

      {/* Main Wrapper */}
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-8">

        {/* Breadcrumb + Title */}
        <div className="mb-10">
          <div className="text-sm text-gray-500 mb-3">
            Home / Shop / <span className="text-black font-medium">Men Shoes</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold">Men's Shoes</h1>
              <p className="text-gray-500 mt-2">
                {menShops?.length || 0} items
              </p>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-500">Sort by:</label>
              <select className="text-sm font-semibold outline-none bg-transparent">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: High-Low</option>
                <option>Price: Low-High</option>
              </select>
            </div>
          </div>
        </div>

        {/* Layout Split */}
        <div className="flex gap-10">

          {/* Sidebar (Desktop) */}
          {/* <aside className="hidden lg:block w-64 shrink-0 space-y-8"> */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8 sticky top-24 h-fit max-h-[calc(100vh-120px)] overflow-y-auto pr-2">

            {/* Category */}
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="hover:text-green-500 cursor-pointer">Lifestyle</li>
                <li className="text-green-500 font-medium cursor-pointer">Running</li>
                <li className="hover:text-green-500 cursor-pointer">Basketball</li>
                <li className="hover:text-green-500 cursor-pointer">Training</li>
              </ul>
            </div>

            {/* Price */}
            <div>
              <h3 className="font-bold mb-4">Shop by Price</h3>
              <div className="space-y-2 text-sm">
                <label className="flex gap-2">
                  <input type="checkbox" />
                  ₹0 - ₹2000
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" />
                  ₹2000 - ₹5000
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" />
                  Above ₹5000
                </label>
              </div>
            </div>

          </aside>

          {/* Product Grid */}
          <div className="flex-1">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

              {menShops && menShops.map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  oldPrice={item.oldPrice}
                  newPrice={item.newPrice}
                  desc={item.desc}
                />
              ))}

            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center gap-3">
              <button className="px-4 py-2 rounded-lg bg-green-400 font-bold">
                1
              </button>
              <button className="px-4 py-2 rounded-lg hover:bg-gray-200">
                2
              </button>
              <button className="px-4 py-2 rounded-lg hover:bg-gray-200">
                3
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Men;