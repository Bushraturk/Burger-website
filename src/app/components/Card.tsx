import React from "react";
import Image from "next/image";
const FloatingImageContent = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-3xl font-bold mb-4 text-white">Delicious Burger</h2>
        <p className="text-white mb-4">
          Experience the juiciest burger in town,made with fresh ingeridents and
          grilled to perfection{" "}
        </p>
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
          Order Now
        </button>

        <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">
          {""}Coming Soon : Our New Burger Launches
          {""}{" "}
        </h3>

        <ul className="text-white">
          <li>
            {" "}
            <strong> Cheesy BBQ Bacon Burger : </strong>
            Cheesy BBQ Bacon Burger: A mouthwatering blend of cheddar
            cheese,crispy bacon, and BBQ
          </li>
          <br />
          <li>
            {" "}
            <strong> Spicy Jalapeno Burger : </strong>A fiery delight topped
            with fresh jalapenos and zesty chipolte mayo.
          </li>
          <br />
          <li>
            {" "}
            <strong> Mashroom Swiss Burger : </strong>
            Juicy beef patty melted Swiss cheese for a rich, savory taste.
          </li>
          <br />
          <li>
            {" "}
            <strong> Avocado veggie Burger : </strong>A delicious plant-based
            opton featuring a grilled veggie patty.
          </li>
          <br />

          <li>
            {" "}
            <strong> Buffalo Chicken Burger : </strong>
            Crispy chicken breast tossed in spicy buffalo sauce.
          </li>
          <br />
        </ul>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0">
        <Image
          src="/background1.png"
          alt="delicious burger"
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-out transform hover:scale-105 mr-7"
        />
      </div>
    </section>
  );
};
export default FloatingImageContent;
