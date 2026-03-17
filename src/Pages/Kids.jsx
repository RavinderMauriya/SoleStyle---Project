
import React, { useContext, useState } from "react";
import { productDataContext } from "../Context/productDataContext";
import Card from "../Components/Card";
import { SlidersHorizontal } from 'lucide-react';
import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

const kids = () => {
  const { products } = useContext(productDataContext);
  const [showFilter, setShowFilter] = useState(false);

  const [sortOption, setSortOption] = useState("featured"); // Sorting

  // kids products filter into Product.js
  const kidsProducts = products.filter(
    (item) => item.category === "kids"
  );

  //Filter products
  const [filters, setFilters] = useState({
    type: [], price: []
  });

  // Filter data check
  const toggleFilter = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((v) => v !== value)
        : [...prev[filterType], value],
    }));
  };

  // Core logic of user filter
  const filteredProducts = kidsProducts.filter((product) => {
    const typeMatch =
      filters.type.length === 0 || filters.type.includes(product.type);

    const priceMatch =
      filters.price.length === 0 ||
      filters.price.some((range) => {
        if (range === "0-2000") return product.newPrice < 2000;
        if (range === "2000-5000") return product.newPrice >= 2000 && product.newPrice < 5000;
        if (range === "5000+") return product.newPrice >= 5000;
        return false;
      });

    return typeMatch && priceMatch;
  });
  const typeList = [...new Set(kidsProducts.map(p => p.type))];


  // Add Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "high-low":
        return b.newPrice - a.newPrice;

      case "low-high":
        return a.newPrice - b.newPrice;

      case "newest":
        return b.id - a.id; // higher id = newer

      default:
        return 0; // featured (original order)
    }
  });
  return (
    <div className="w-full">
      <main className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-8">

        {/* Header */}
        <div className="mb-10">
          <div className="text-sm text-gray-500 mb-3">
            Home / Shop /{" "}
            <span className="text-black font-medium">Kids Shoes</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold">
                Kids's Shoes
              </h1>
              <p className="text-gray-500 mt-2">
                {kidsProducts?.length || 0} items
              </p>
            </div>

            <div className="flex items-center gap-3">
              <label className="text-sm text-gray-500">Sort by:</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="text-sm font-semibold outline-none bg-transparent"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="high-low">Price: High-Low</option>
                <option value="low-high">Price: Low-High</option>
              </select>

              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowFilter(true)}
                className="lg:hidden px-4 py-2 border rounded-lg text-sm font-semibold flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4 align-middle" />
                <span className="leading-none">Filter</span>
              </button>
            </div>
          </div>
        </div>

        {/* Layout */}
        <div className="flex gap-10">

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0 space-y-8 sticky top-24 h-fit max-h-[calc(100vh-120px)] overflow-y-auto pr-2 bg-gray-50/50">

            {/* Categories */}
            <h3 className="font-bold mb-4">Categories (Type)</h3>
            <ul className="space-y-2 text-sm text-gray-900">
              {typeList.map((t) => (
                <li key={t}>
                  <label className="flex gap-2 cursor-pointer hover:text-green-500">
                    <input
                      type="checkbox"
                      checked={filters.type.includes(t)}
                      onChange={() => toggleFilter("type", t)}
                    />
                    {t}
                  </label>
                </li>
              ))}
            </ul>

            {/* Price */}
            <div>
              <h3 className="font-bold mb-4">Shop by Price</h3>
              <div className="space-y-2 text-sm">
                <label className="flex gap-2">
                  <input type="checkbox" onChange={() => toggleFilter("price", "0-2000")} />
                  ₹0 - ₹2000
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" onChange={() => toggleFilter("price", "2000-5000")} />
                  ₹2000 - ₹5000
                </label>
                <label className="flex gap-2">
                  <input type="checkbox" onChange={() => toggleFilter("price", "5000+")} />
                  Above ₹5000
                </label>
              </div>
            </div>

          </aside>



          {/* Product Grid */}
          <div className="flex-1">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">


              {sortedProducts.map((product) => (
                <motion.div layput key={product.id}>
                  <Link to={`/productdetail/${product.id}`}>
                    <Card product={product} />
                  </Link>
                </motion.div>
              ))}

            </motion.div>

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
      </main >

      {/* Mobile Filter Drawer */}
      {
        showFilter && (
          <div className="fixed inset-0 bg-black/40 z-50 flex">
            <div className="bg-white w-72 p-6 overflow-y-auto">
              <button
                onClick={() => setShowFilter(false)}
                className="mb-6 text-lg font-bold"
              >
                X
              </button>

              {/* Same Filter Content */}
              <div className="space-y-8">

                <div>
                  <h3 className="font-bold mb-4">Categories (Type)</h3>
                  <ul className="space-y-2 text-sm text-gray-900">
                    {typeList.map((t) => (
                      <li key={t}>
                        <label className="flex gap-2 cursor-pointer hover:text-green-500">
                          <input
                            type="checkbox"
                            checked={filters.type.includes(t)}
                            onChange={() => toggleFilter("type", t)}
                          />
                          {t}
                        </label>
                      </li>
                    ))}
                  </ul>

                </div>

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

              </div>
            </div>

            {/* Click Outside Area */}
            <div
              className="flex-1"
              onClick={() => setShowFilter(false)}
            />
          </div>
        )
      }
    </div >
  );
};

export default kids;