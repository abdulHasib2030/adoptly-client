import React from "react";
import { FaPaw, FaDonate, FaHeart } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className=" mx-auto mt-10 p-4">
      {/* About Us Section */}
      <div className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-md p-6 mb-8">
        <h2 className="font-extrabold text-4xl mb-2">
          About Us
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
          Welcome to our Pet Adoption and Donation platform! This website is
          designed to connect loving homes with pets in need and to facilitate
          donation campaigns for animal care. Users can add pets, adopt pets,
          create and manage donation campaigns, and directly make adoption
          requests—all within a user-friendly interface.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-justify">
          Our mission is to provide a seamless and transparent platform for
          individuals passionate about helping animals. Whether you're looking
          to adopt a pet, support a cause, or organize a campaign, our tools
          and features make it easy to contribute and connect.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-md p-6 text-center">
          <FaPaw className="text-4xl text-indigo-500 dark:text-indigo-400 mb-4 mx-auto" />
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
            Pet Adoption
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Find loving homes for pets in need. Adopt your next furry companion
            today!
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-md p-6 text-center">
          <FaDonate className="text-4xl text-green-500 dark:text-green-400 mb-4 mx-auto" />
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2">
            Donation Campaigns
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Support animal care through donation campaigns and make a
            difference.
          </p>
        </div>

   
      </div>
    </div>
  );
};

export default AboutUs;
