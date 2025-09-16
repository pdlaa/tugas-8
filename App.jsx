import React, { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const foods = [
    { id: 1, name: "Sate Ayam", category: "Grill", price: "15K", img: "https://picsum.photos/400/300?random=1" },
    { id: 2, name: "Bakso", category: "Soup", price: "12K", img: "https://picsum.photos/400/300?random=2" },
    { id: 3, name: "Martabak", category: "Snack", price: "20K", img: "https://picsum.photos/400/300?random=3" },
    { id: 4, name: "Es Teh Manis", category: "Drink", price: "5K", img: "https://picsum.photos/400/300?random=4" },
    { id: 5, name: "Nasi Goreng", category: "Grill", price: "18K", img: "https://picsum.photos/400/300?random=5" },
  ];

  const categories = ["All", "Grill", "Soup", "Snack", "Drink"];

  const filteredFoods = foods.filter(
    (food) =>
      (category === "All" || food.category === category) &&
      food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen w-full bg-gray-100">
      {/* Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6">
          🍢 StreetFood Finder
        </h1>

        {/* Search Bar */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Cari makanan..."
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-4"
        />

        {/* Filter Buttons */}
        <div className="flex gap-2 sm:gap-3 flex-wrap justify-center mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                category === cat
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Food List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredFoods.length > 0 ? (
            filteredFoods.map((food) => (
              <div
                key={food.id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition"
              >
                <img
                  src={food.img}
                  alt={food.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{food.name}</h3>
                  <p className="text-gray-500">{food.category}</p>
                  <p className="text-orange-600 font-bold mt-2">{food.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              Tidak ada makanan ditemukan 🍽️
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
