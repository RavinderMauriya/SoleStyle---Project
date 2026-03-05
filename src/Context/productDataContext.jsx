import React, { createContext, useState, useEffect } from "react";
import { products } from "../assets/products";
import {toast} from "react-hot-toast"

export const productDataContext = createContext();

export const DataProvider = ({ children }) => {
  
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* -------------------- Add To Cart -------------------- */
  const addToCart = (item) => {
    const cartItem = {
      ...item,
      quantity: Number(item.quantity) ?? 1,
      selectedSize: item.selectedSize ?? null,
    };

    setCart((prev) => {
      const existing = prev.find(
        (i) => i.id === cartItem.id &&
          i.selectedSize === cartItem.selectedSize
      );

      if (existing) {
        return prev.map((i) =>
          i.id === cartItem.id && i.selectedSize === cartItem.selectedSize
            ? {
              ...i,
              quantity: i.quantity + cartItem.quantity,
            }
            : i
        );
      }

      return [...prev, cartItem];
    });
  };

  /* -------------------- Update Quantity -------------------- */
  const updateQuantity = (id, selectedSize, qty) => {
    const safeQty = Number(qty);

    if (isNaN(safeQty)) return;

    setCart((prev) => {
      if (safeQty <= 0) {
        return prev.filter(
          (i) => !(i.id === id && i.selectedSize === selectedSize)
        );
      }

      return prev.map((i) =>
        i.id === id && i.selectedSize === selectedSize
          ? { ...i, quantity: safeQty }
          : i
      );
    });
  };

  /* -------------------- Remove Item -------------------- */
  const removeFromCart = (id, selectedSize) => {
    setCart((prev) => prev.filter(
      (i) => !(i.id === id && i.selectedSize === selectedSize)
    )
    );
    toast.success("Item removed");
  };

  return (
    <productDataContext.Provider
      value={{
        products,
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </productDataContext.Provider>
  );
};