// import React, { createContext } from "react";
// import { menShops } from "../assets/menShops";
// import { womenShops } from "../assets/womenShops";

// export const productDataContext = createContext();

// export const DataProvider = ({ children }) => {
//   return (
//     <productDataContext.Provider
//       value={{
//         menShopspage: menShops,
//         womenShopspage: womenShops,
//       }}
//     >
//       {children}
//     </productDataContext.Provider>
//   );
// };

import React, { createContext, useState } from "react";
import { products } from "../assets/products";

export const productDataContext = createContext();

export const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existing = cart.find((i) => i.id === item.id);

    if (existing) {
      setCart(
        cart.map((i) =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      setCart(cart.filter((i) => i.id !== id));
    } else {
      setCart(
        cart.map((i) =>
          i.id === id ? { ...i, quantity: qty } : i
        )
      );
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };
  return (
    <productDataContext.Provider value={{ products, cart, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </productDataContext.Provider>
  );
};