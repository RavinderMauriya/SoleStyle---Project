import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { productDataContext } from "../Context/productDataContext";
import Benefits from "../Components/Benefits";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(productDataContext);

  const product = products?.find(
    (item) => item.id === Number(id)
  );

  const [thumbnail, setThumbnail] = useState(
    product?.image?.[0]
  );

  if (!product) return <div>Product not found</div>;

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-8">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Home / Shop / Men Shoes /{" "}
        <span className="text-black font-medium">
          {product.name}
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-16">

        {/* Image Section */}
        <div className="flex gap-4">

          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {product.image.map((img, index) => (
              <div
                key={index}
                onClick={() => setThumbnail(img)}
                className="border w-20 h-20 border-gray-300 rounded overflow-hidden cursor-pointer"
              >
                <img
                  src={img}
                  alt="thumb"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="border border-gray-300 rounded overflow-hidden w-[400px] h-[400px]">
            <img
              src={thumbnail}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 text-sm">

          <h1 className="text-3xl font-medium">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {Array(5)
              .fill("")
              .map((_, i) =>
                product.rating > i ? (
                  <span key={i} className="text-yellow-500">★</span>
                ) : (
                  <span key={i} className="text-gray-300">★</span>
                )
              )}
            <span className="ml-2 text-base">
              ({product.rating})
            </span>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-gray-500 line-through">
              ₹{product.oldPrice}
            </p>
            <p className="text-2xl font-semibold">
              ₹{product.newPrice}
            </p>
            <span className="text-gray-500 text-sm">
              (inclusive of all taxes)
            </span>
          </div>

          {/* Description */}
          <div className="mt-6">
            <p className="font-medium mb-2">
              About Product
            </p>
            <ul className="list-disc ml-5 text-gray-600 space-y-1">
              {product.longDesc}
            </ul>
          </div>

          {/* Size */}
          <div className="mt-6">
            <p className="font-medium mb-2">
              Select Size
            </p>
            <div className="flex flex-wrap gap-2 justify-around cursor-pointer">
              <div className="border border-gray-400 hover:bg-gray-100 font-semibold rounded px-6 py-2">4</div>
              <div className="border border-gray-400 hover:bg-gray-100 font-semibold rounded px-6 py-2">5</div>
              <div className="border border-gray-400 hover:bg-gray-100 font-semibold rounded px-6 py-2">6</div>
              <div className="border border-gray-400 hover:bg-gray-100 font-semibold rounded px-6 py-2">7</div>
              <div className="border border-gray-400 hover:bg-gray-100 font-semibold rounded px-6 py-2">8</div>
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="font-medium mb-2">
              Quantity
            </p>
            <div className="p-0.5">
              <input className="p-2 border rounded border-gray-400 hover:bg-gray-100" type="number"min="1" max="10" defaultValue={1}/>
            </div>
          </div>
 
          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 transition font-medium">
              Add to Cart
            </button>
            <button className="w-full py-3 bg-green-500 text-white hover:bg-green-600 transition font-medium">
              Buy Now
            </button>
          </div>

        </div>
      </div>
      <Benefits/>
    </div>
  );
};

export default ProductDetails;