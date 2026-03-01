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

import React, { createContext } from "react";
import { products } from "../assets/products";

export const productDataContext = createContext();

export const DataProvider = ({ children }) => {
  return (
    <productDataContext.Provider value={{ products }}>
      {children}
    </productDataContext.Provider>
  );
};