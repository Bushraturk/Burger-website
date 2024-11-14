"use client";
import Image from "next/image";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

// import Image from "next/image";

const ProductCardGrid = () => {
  const ProductImages = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0 "
        style={{
          backgroundColor: "gray-700", // Hardcoded color
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />

      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative">
        Most Requested Items
      </h1>
      <h1 className="text-3xl text-white z-10 relative">Order Now</h1>

      <section
        id="projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 "
      >
        {Array.from({ length: 6 }).map((image, index) => (
          <div
            key={index}
            className="w-70 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <Image
                src={ProductImages[index]}
                alt={`Product ${index + 1}`}
                width={288}
                height={320}
                className="object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-slate-500 mr-3 uppercase text-xs">
                  Category
                </span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  Burger Name {index + 1}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold terxt-black my-3 cursor-auto">
                    $149
                  </p>
                  <del>
                    <br />
                    <p className="text-sm text-blue-800 cursor-auto ml-2">
                      {""}$199
                    </p>
                  </del>

                  <div className="ml-auto">
                    <FaShoppingCart className="w-5 h-5 text-blue-800" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCardGrid;
