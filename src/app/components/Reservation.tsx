import React from "react";

const ReservationSection = () => {
  return (
    <section className="bg-gradient-to-r from-black to bg-slate-900 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-white">
          Make A Reservation
        </h2>
        <form className="max-w-md mx-auto">
          <div className="mb-4 text-black">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="date"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="time"
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
          </div>
        </form>
      </div>

      <div className="mb-4 ml-48">
        <button className="bg-blue-600 text-white py-2 px-10 rounded-md hover:bg-blue-700 ml-96">
          {" "}
          Reserved Table
        </button>
      </div>
    </section>
  );
};

export default ReservationSection;
