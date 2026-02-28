const products = [
  {
    id: 1,
    name: "AeroStride X1",
    oldPrice: 8999,
    newPrice: 7499,
    desc: "Lightweight performance runner.",
    longDesc: "AeroStride X1 built for daily runs with breathable mesh upper, shock-absorbing midsole and durable rubber outsole.",
    image: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1584735175315-9d5df23be620",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1"
    ],
    type: "runner",
    rating: 4.4,
    category: "men"
  },
  {
    id: 2,
    name: "UrbanFlex Pro",
    oldPrice: 7999,
    newPrice: 6599,
    desc: "Modern lifestyle sneaker.",
    longDesc: "UrbanFlex Pro designed for all-day city wear with cushioned insole and flexible outsole.",
    image: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      "https://images.unsplash.com/photo-1528701800489-20be3c48f0c7"
    ],
    type: "casual",
    rating: 4.2,
    category: "women"
  },
  {
    id: 3,
    name: "Velocity Prime",
    oldPrice: 9999,
    newPrice: 8499,
    desc: "High rebound running shoe.",
    longDesc: "Velocity Prime engineered for speed training with responsive foam cushioning and lightweight upper.",
    image: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1584735175315-9d5df23be620",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1"
    ],
    type: "runner",
    rating: 4.6,
    category: "men"
  },
  {
    id: 4,
    name: "StreetNova Edge",
    oldPrice: 7499,
    newPrice: 6299,
    desc: "Bold street sneaker.",
    longDesc: "StreetNova Edge combines layered upper design with padded collar and soft EVA sole for comfort.",
    image: [
      "https://images.unsplash.com/photo-1528701800489-20be3c48f0c7",
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f"
    ],
    type: "Sneakers",
    rating: 4.3,
    category: "women"
  }
];

// Remaining 16 fully unique
const names = [
  "SkyDash Lite","RapidCore Z","MetroPulse","Zenith Glide",
  "FlashStep Neo","CoreSprint V2","OrbitWalk Max","StridePeak",
  "FlexOrbit","UrbanDash Jr","NovaTrail K","AeroKid Boost",
  "PulseStreet","CloudRift","SprintHive","DriftMotion"
];

for (let i = 5; i <= 20; i++) {
  products.push({
    id: i,
    name: names[i - 5],
    oldPrice: 7000 + i * 150,
    newPrice: 6000 + i * 120,
    desc: "Comfort-focused performance shoe.",
    longDesc: `${names[i - 5]} crafted with breathable upper, shock-absorbing midsole and slip-resistant outsole for daily comfort.`,
    image: [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1584735175315-9d5df23be620",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1"
    ],
    type: i % 3 === 0 ? "Sneakers" : i % 2 === 0 ? "casual" : "runner",
    rating: 4.0 + (i % 5) * 0.2,
    category: i % 3 === 0 ? "kids" : i % 2 === 0 ? "women" : "men"
  });
}

export default products;