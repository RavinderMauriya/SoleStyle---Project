import React, { useContext } from "react";
import { Trash2 } from "lucide-react";
import { productDataContext } from "../Context/productDataContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } =
    useContext(productDataContext);

  const subtotal = cart.reduce(
    (acc, item) =>
      acc +
      (Number(item.newPrice) || 0) *
      (Number(item.quantity) || 0),
    0
  );

  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  console.log(cart)
  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 py-10">

        <h1 className="text-3xl md:text-5xl font-extrabold mb-8">
          Your Bag
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Cart Items */}
          <div className="flex-1 space-y-6">

            {cart.length === 0 && <p>No Cart Item</p>}

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-6 items-start bg-gray-100 p-4 rounded-2xl"
              >
                <img
                  className="w-28 h-28 object-cover rounded-xl"
                  src={item.image}
                  alt={item.name}
                />

                <div className="flex-1">
                  <div className="flex justify-between">

                    <h4 className="font-semibold text-lg">
                      {item.name}
                    </h4>
                    <h4 className="text-md font-semibold">
                      ₹{item.newPrice}
                    </h4>

                  </div>
                  <p>{item.category} Shoes</p>
                  <p>{item.selectedSize}</p>

                  <div className="flex items-center justify-between mt-6">

                    <div className="flex items-center border rounded-lg">
                      <button
                        className="px-3 py-1"
                        onClick={() =>
                          updateQuantity(
                            item.id, item.selectedSize, item.quantity - 1
                          )
                        }
                      >
                        -
                      </button>

                      <span className="px-4">
                        {item.quantity}
                      </span>

                      <button
                        className="px-3 py-1"
                        onClick={() =>
                          updateQuantity(
                            item.id, item.selectedSize, item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>
                    </div>

                    <Trash2
                      onClick={() =>
                        removeFromCart(item.id, item.selectedSize)
                      }
                      className="w-5 h-5 text-gray-500 cursor-pointer hover:text-red-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="w-full lg:w-[380px] bg-gray-100 rounded-2xl p-6 h-fit">
            <h3 className="text-xl font-bold mb-6">
              Summary
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t my-6"></div>

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

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