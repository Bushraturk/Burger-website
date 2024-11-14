import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-700 font-sans px-6 py-12 mb-7 ">
      {" "}
      10
      <div className="absolute inset-0 opacity-20">
        <Image
          src="banner03.png"     
          alt="delicious burger banner"
          width={100}
          height ={100}
          className="object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4 ">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg mb-6 max-w-xl">
          Shop Now For Exclusive Burger Discount!
        </p>
        <button
          type="button"
          className="bg-blue-500 text-white justify-center items-center text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-cyan-400 transition duration-500"
        >
          Exciting Deals
        </button>
      </div>
    </div>
  );
};

export default Banner;
