import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productDataContext } from "../Context/productDataContext";
import Benefits from "../Components/Benefits";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(productDataContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [thumbnail, setThumbnail] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Reset when product changes
  useEffect(() => {
    setSelectedSize(null);
    setQuantity(1);

    if (product?.image && Array.isArray(product.image)) {
      setThumbnail(product.image[0]);
    } else {
      setThumbnail(product?.image || null);
    }
  }, [product]);

  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    if (!selectedSize) return toast.error("Select size");

    const safeQty = Number(quantity);
    if (safeQty < 1 || isNaN(safeQty)) return;
    toast.success("Item added successfully")
    addToCart({
      ...product,
      quantity: safeQty,
      selectedSize,
    });
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-8">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Home / Shop / {product.category} /{" "}
        <span className="text-black font-medium">
          {product.name}
        </span>
      </div>

      <div className="flex flex-col md:flex-row gap-16">

        {/* Images */}
        <div className="flex gap-4">

          {/* Thumbnails */}
          {Array.isArray(product.image) && (
            <div className="flex flex-col gap-3">
              {product.image.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(img)}
                  className={`border w-20 h-20 rounded overflow-hidden cursor-pointer ${
                    thumbnail === img
                      ? "border-black"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={img}
                    alt="thumb"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Main Image */}
          <div className="border rounded overflow-hidden w-[400px] h-[400px]">
            <img
              src={thumbnail}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-sm">

          <h1 className="text-3xl font-medium">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <span
                  key={i}
                  className={
                    product.rating > i
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }
                >
                  ★
                </span>
              ))}
            <span className="ml-2">({product.rating})</span>
          </div>

          {/* Price */}
          <div className="mt-6">
            <p className="text-gray-500 line-through">
              ₹{product.oldPrice}
            </p>
            <p className="text-2xl font-semibold">
              ₹{product.newPrice}
            </p>
          </div>

          {/* Description */}
          <div className="mt-6">
            <p className="font-medium mb-2">About Product</p>
            <ul className="list-disc ml-5 text-gray-600 space-y-1">
              {Array.isArray(product.longDesc)
                ? product.longDesc.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))
                : <li>{product.longDesc}</li>}
            </ul>
          </div>

          {/* Size */}
          <div className="mt-6">
            <p className="font-medium mb-2">Select Size</p>
            <div className="flex gap-3 flex-wrap">
              {[4, 5, 6, 7, 8].map((size) => (
                <div
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-6 py-2 rounded font-semibold cursor-pointer ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "border-gray-400 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="font-medium mb-2">Quantity</p>
            <input
              type="number"
              min="1"
              max="10"
              value={quantity}
              onChange={(e) =>
                setQuantity(Number(e.target.value))
              }
              className="p-2 border rounded border-gray-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-gray-100 hover:bg-gray-200 font-medium active:scale-95"
            >
              Add to Cart
            </button>

            <button className="w-full py-3 bg-green-500 text-white hover:bg-green-600 font-medium active:scale-95">
              Buy Now
            </button>
          </div>

        </div>
      </div>

      <Benefits />
    </div>
  );
};

export default ProductDetails;