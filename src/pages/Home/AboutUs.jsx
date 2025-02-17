import React from "react";
import { FaPaw, FaDonate, FaHeart } from "react-icons/fa";
import { Card } from "flowbite-react";

const AboutUs = () => {
  return (
    <div className="mt-16 ">
      {/* About Us Section */}

      <Card className="">
        
        <h2 className="font-extrabold text-4xl mb-2 dark:text-white">
        About Us
        </h2>
        <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
          Welcome to our Pet Adoption and Donation platform! This website is
          designed to connect loving homes with pets in need and to facilitate
          donation campaigns for animal care. Users can add pets, adopt pets,
          create and manage donation campaigns, and directly make adoption
          requests—all within a user-friendly interface.
        </p>
        <p className="font-normal text-justify text-gray-700 dark:text-gray-400">
          Our mission is to provide a seamless and transparent platform for
          individuals passionate about helping animals. Whether you're looking
          to adopt a pet, support a cause, or organize a campaign, our tools
          and features make it easy to contribute and connect.
        </p>
      </Card>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
        {/* Card 1 */}

        <Card className="">
          <FaPaw className="text-4xl text-indigo-500 dark:text-indigo-400 mb-2 mx-auto" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pet Adoption
          </h5>
          <p className="font-normal  text-gray-700 dark:text-gray-400">
            Find loving homes for pets in need. Adopt your next furry companion
            today!
          </p>

        </Card>


        {/* Card 2 */}
        <Card className="">
          <FaDonate className="text-4xl text-green-500 dark:text-green-400 mb-2 mx-auto" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Donation Campaigns
          </h5>
          <p className="font-normal  text-gray-700 dark:text-gray-400">
            Support animal care through donation campaigns and make a
            difference.
          </p>
        </Card>



      </div>
    </div>
  );
};

export default AboutUs;
