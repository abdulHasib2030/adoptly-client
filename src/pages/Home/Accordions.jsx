import React from 'react';

import { Accordion } from "flowbite-react";

const Accordions = () => {
    return (
      <div className=" mx-auto mt-16 ">
      {/* About Us Section */}
      {/* <div className="bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-md p-6 mb-8"> */}
        <h2 className="font-extrabold text-4xl mb-2 dark:text-white">
          FAQ
        </h2>
           <Accordion collapseAll className='text-start'>
      <Accordion.Panel >
        <Accordion.Title>How do I add a pet to the website for adoption?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          You can add a pet by navigating to the "Add Pet" section in your User Dashboard. There, you'll find a form to fill out the pet’s information, including the image (which will be uploaded via Cloudinary or imgbb), pet name, age, category, location, and descriptions. Once you submit the form, the pet will be added to the database and listed for adoption.
          </p>
         
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>Can I adopt a pet directly from the pet listing page?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Yes, you can! Each pet card on the Pet Listing Page has a "View Details" button. Clicking on it will take you to the Pet Details Page, where you can click the "Adopt" button. This opens a modal where you can submit your adoption request, including your phone number and address.

          </p>
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How do donation campaigns work on the website?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2  text-gray-500 dark:text-gray-400">
          To create a donation campaign, navigate to the Create Donation Campaign section of your Dashboard. Fill out the form with the pet's image, the maximum donation amount, the last date for donation, and both a short and long description of the campaign. Your donation campaign will be listed on the Donation Campaigns Page, where users can donate to support the cause.
          </p>
         
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>How do I track my donations on the website?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2  text-gray-500 dark:text-gray-400">
          You can view all the donations you've made by visiting the My Donations section in your dashboard. It shows a list of the pets you've donated to, along with the amount you've contributed. You can also request a refund by clicking the "Ask for a Refund" button if applicable.


          </p>
         
          
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What happens after I submit an adoption request for a pet?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2  text-gray-500 dark:text-gray-400">
          After you submit an adoption request, the pet’s owner will receive the details of your request. If they approve it, the pet’s status will be updated to "Adopted" in the system. You will be contacted directly to finalize the adoption process and arrange for the pet pickup.

          </p>
         
          
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion> 
        </div>
    );
};

export default Accordions;