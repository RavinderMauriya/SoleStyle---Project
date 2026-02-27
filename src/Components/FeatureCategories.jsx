import React from "react";

const FeatureCategories = () => {
  const categories = [
    {
      title: "Running",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBQDFsb1b4l1qwdSq76Ao5Y1QwbOK7X75zOGuf6m8hpW8RfADjHZga8BwyKaVRLJ6im8-zyGynjMYn2Vxv6IbIp15kjgtOkJtFdz7cY6POQM2xHqAGVZWv10tXUFUh5vavSM8jpD_NxwSweiNtdmXMCGREe7nehbAvGxDD_2AVX5VIjzmA3exvRjbvGO-SeVFcdXUdE7O6VVErkU4iQbZgoWxEcvvgIfIxOnSIuPSVycDNDThQt2Dz7R1vuGObQtu5HqbJUQcJWXywn",
    },
    {
      title: "Casual",
      image:
        "https://myurbancountry.com/cdn/shop/products/uc165_navy_01_9.jpg?v=1681049485&width=990",
    },
    {
      title: "Sneakers",
      image:
        "https://www.lacoste.in/media/catalog/product/5/1/51sma0062_aiz_01.jpg",
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-16 py-12">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          Featured Categories
        </h2>

        <button className="hidden sm:block text-sm font-bold text-gray-500 hover:text-black transition">
          View All →
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl aspect-[4/5] md:aspect-[3/4] cursor-pointer"
          >
            {/* Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url(${cat.image})` }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity" />

            {/* Text */}
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight mb-2">
                {cat.title}
              </h3>

              <span className="text-sm font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Shop Collection →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCategories;