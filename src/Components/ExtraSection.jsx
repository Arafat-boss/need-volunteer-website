import React from "react";
import bg from"../assets/bg.avif"

const ExtraSection = () => {
  return (
    <div
      className="w-full mt-5"
    //   style={`background-image: url(${bg}); background-position: center center; background-blend-mode: multiply; background-size: cover`}
    style={{ backgroundImage:  `url(${bg})` }}
    >
      <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
        <h1 className="text-5xl antialiased font-semibold leading-none text-center  dark:text-gray-800">
          Get Our Updates
        </h1>
        <p className="pt-2 pb-8 text-xl antialiased text-center  dark:text-gray-800">
          Find out about events and other news
        </p>
        <div className="flex flex-row border rounded-lg border-purple-500">
          <input
            type="text"
            placeholder="example@email.com"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <button
            type="button"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-cyan-400 dark:bg-cyan-600 text-gray-900 dark:text-gray-50"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
