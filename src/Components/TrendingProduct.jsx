import React from "react";
import Card from "./Card";

const TrendingProduct = () => {
  const trendingProducts = [
    {
      id: 1,
      name: "Urban Runner X1",
      type: "runner",
      oldPrice: 5000,
      newPrice: 4000,
      desc: "Men's Running Shoes",
      rating: "132",
      image: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDHDYGUEcdHyEpiAHL6oE4o9j1NhPvAjbTa0Zlxyi37MKHYec8W5pCSsSr28DyDz0I3hIC7-NHo48KG-407XFfzYcpHUDgnahm2PTWLAFGbt1ldG-3AmzoqdrFS5m3jbvxnMfjMl0SZ91hwNpioNMJk_DYo1V-cgL9yJjqBHp9cJlM6uZ9bLc7qP0uC8rPJqM3aZVZAfGHCb0OTPOWI4fxgz682zaD4Ug7TwmE5N00HkWWafvqdkLkDr9ykwJsyNAkOPFFMcz1PDX_C",
      ],
    },
    {
      id: 2,
      name: "Air Force Drift",
      type: "runner",
      oldPrice: 2100,
      newPrice: 1100,
      desc: "Unisex Sneakers",
      rating: 128,
      image: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAX3YH-wmvpqVLKzc2POCh3N96T3I6tKTKCTBfBNF5DMyC1rjaW0S6yLN1G5wYrnr5iI6Jax686lpSngLee1C8ylTAZhtxcskjWG6VLuKkcUzVHfY8V6ucLjgg1dlv8NJLW7oLZitKaad-I_Va36BmcYot3ZB11UmIFA5nxkNzG7EomFL9zSX9tWWHdmPVDxYa8AbunHAOfiDn3-XNK5PA5fDrcWQK6BN3PswT7nlKlkoKAL5jUxKWEQwS7LcaonCwbbX6MHOJn78_m"
      ],
    },
    {
      id: 3,
      name: "Stealth Pro 4",
      type: "runner",
      oldPrice: 1200,
      newPrice: 1000,
      desc: "Professional Running",
      rating: 28,
      image: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAPSLcKRjq0n3hrO_yMIzFAqysyIHS6mOpY47-m6DXdM7u0GKlLxVcp9XqynotfsN3fody6RYEfWrYDgt4qCiiJIRVujhSEI2Emf_c4wzKLWAQdUAiaZX0mpLrY9yYawdc0bo4PyIgzhS3zqb_Z4G17eVJc-QElPc_FN3XzJCEAA5LciEuBS0CC5HGHH__yVj03LtVe_8Y9Tr8mL5NeUJQblinfAKSDVs0KEry1bGI5JTdQ4JSU_q5cWJhjACG8ifbS_-a72KmgIMMK"
      ],
    },
    {
      id: 4,
      name: "Retro Wave 90s",
      type: "runner",
      oldPrice: 3200,
      newPrice: 2500,
      desc: "Lifestyle Collection",
      rating: 28,
      image: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBvH_42-y5w1psBJD1Frz1oJ5bpTUAqYSmODSWBVcYIAglK6hPTzSvAOrpn5zRf70Yktxk5_duF5_YkSHrHrv6_pz8lPH5E3x34XnP1CAcAOPQ7DQU23heW_IhgZc4QHrzQYmdMMMwxoMTA8TKQBw2aeiHFI5xEdOKtEVy2Oe2GxZxCO_WoY_yIMcVL18-Ym6rIpWtx4XNy4UANWq_B3TTYoHjw9GIEn7zIRKOs2iNj2IP5Lcmy_nq7HBTYQFab2qhLyzhw9YvoQeft"
      ],
    }
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingProducts.map((item) => (
          <div key={item.id}><Card name={item.name} oldPrice={item.oldPrice} newPrice={item.newPrice} desc={item.desc} image={item.image[0]}/></div>
        ))}
      </div>
    </section>
  );
};

export default TrendingProduct;