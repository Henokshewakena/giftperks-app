"use client";

import Image from "next/image";
import React, { useState } from "react";

// products are integrated here
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 100,
    description: "Description of product 1",
    img: "/assets/images/gift-icon.png",
    discount: "10% off",
  },
  {
    id: 2,
    name: "Product 2",
    price: 150,
    description: "Description of product 2",
    img: "/assets/images/gift-box.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 200,
    description: "Description of product 3",
    img: "/assets/images/gift-box.png",
    discount: "20% off",
  },
  {
    id: 4,
    name: "Product 4",
    price: 200,
    description: "Description of product 4",
    img: "/assets/images/gift-box.png",
    discount: "20% off",
  },
  {
    id: 5,
    name: "Product 5",
    price: 200,
    description: "Description of product 5",
    img: "/assets/images/gift-box.png",
    discount: "20% off",
  },
  // Add products here
];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (type) => {
    setSortType(type);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortType === "price") {
        return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
      } else {
        return sortOrder === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name);
      }
    });

  return (
    <div className="md:h-screen md:w-full flex flex-row mt-2">
      <div className="min-h-min md:w-1/4 md:p-4 fixed">
        <div className="md:mb-4 md:mr-20 bg-grey">
          <label className="block mb-2">Sort By:</label>
          <button onClick={() => handleSort("price")} className="block mb-2">
            Price
          </button>
          <button onClick={() => handleSort("name")} className="block mb-2">
            Type
          </button>
        </div>
      </div>
      <div className="w-3/4 flex flex-col ml-20  md:p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="block md:w-full w-full rounded-md border border-gray-200 bg-white py-2.5 font-satoshi pl-5 pr-12 text-sm shadow-lg font-medium focus:border-black focus:outline-none focus:ring-0"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-orange-500 p-4 rounded-2xl shadow-sm"
            >
              <h2 className="text-lg font-bold">{product.name}</h2>
              <Image src={product.img} width={150} height={170} />
              <p>{product.description}</p>
              <p className="text-xl font-bold">${product.price}</p>
              {product.discount && (
                <p className="text-orange-500">{product.discount}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
