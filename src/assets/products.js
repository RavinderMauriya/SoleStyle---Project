import { menShops } from "./menShops";
import { womenShops } from "./womenShops";
import { kidsShops } from "./kidsShops";

// Order: Men → Women → Kids
const mergedData = [
  ...menShops,
  ...womenShops,
  ...kidsShops,
];

export const products = mergedData.map((item, index) => ({
  ...item,
  id: index + 1,
}));