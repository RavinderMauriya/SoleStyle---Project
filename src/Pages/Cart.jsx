import React, { useContext } from "react";
import { Trash2 } from "lucide-react";
import { productDataContext } from "../Context/productDataContext";

const Cart = () => {
  const { cart, products, updateQuantity, removeFromCart } = useContext(productDataContext);
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-10">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-extrabold">Your Bag</h1>
          <p className="text-gray-500 mt-2">
            Total 2 items • <span className="text-green-500">Free Shipping</span> applied
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT - Cart Items */}
          <div className="flex-1 space-y-8">

            {cart.length === 0 && <p>No Cart Item</p>}

            {/* Item  */}
            {cart.map((item) => {
              return <div key={item.id} className="flex gap-6 items-start border p-3 border-transparent hover:bg-gray-100 rounded-2xl">
                <img
                  className="w-28 h-28 lg:w-36 lg:h-36 object-cover rounded-xl bg-gray-100"
                  src={item.image}
                  alt=""
                />

                <div className="flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">{item.name}</h4>
                      <p className="text-sm text-gray-500">Men's Shoes</p>
                      <p className="text-sm text-gray-500">Size: 10</p>
                    </div>
                    <h4 className="font-bold text-lg">₹{item.newPrice}</h4>
                  </div>

                  <div className="flex items-center justify-between mt-6">
                    {/* Quantity */}
                    <button
                      className="px-3 py-1"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>

                    <span className="px-4">{item.quantity}</span>

                    <button
                      className="px-3 py-1"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>

                    <Trash2  onClick={() => removeFromCart(item.id)} className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500" />
                  </div>
                </div>
              </div>
            })}



          </div>


          {/* RIGHT - Summary */}
          <div className="w-full lg:w-[380px] bg-gray-100 rounded-2xl p-6 h-fit">

            <h3 className="text-xl font-bold mb-6">Summary</h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$300.00</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping Charges</span>
                <span className="text-green-500">Free</span>
              </div>

              <div className="flex justify-between">
                <span>Tax</span>
                <span>$24.00</span>
              </div>
            </div>

            <div className="border-t my-6"></div>

            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total</span>
              <span>$324.00</span>
            </div>

            {/* Promo */}
            <div className="mt-6">
              <p className="text-sm mb-2">Promo Code</p>
              <div className="flex gap-2">
                <input
                  className="flex-1 bg-white border rounded-lg px-3 py-2 text-sm outline-none"
                  placeholder="Enter code"
                />
                <button className="bg-black text-white px-4 rounded-lg text-sm">
                  Apply
                </button>
              </div>
            </div>

            {/* Checkout */}
            <button className="mt-8 w-full bg-black text-white py-3 rounded-full font-semibold">
              Proceed to Checkout →
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;