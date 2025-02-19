import React, { useState } from 'react';
import dog from '../../assets/cute-dog.webp'
import cat from '../../assets/kitten.webp'
import { Card } from 'flowbite-react';

import { Button, Modal } from "flowbite-react";

const Article = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalData, setModalData] = useState({})
    const handleModal = (pet) =>{
        setOpenModal(true)
        if(pet === 'dog'){
            setModalData({title: "Dog & Puppy Adoption", description: "Ready to add a furry friend to your family? Our comprehensive articles cover everything you need to know about adopting a dog or puppy, from finding the best organization to understanding the adoption process. Our team of experts and experienced animal advocates are here to guide you every step of the way and help you find the perfect canine companion for your home. Whether you’re looking for a playful puppy or a laid-back senior dog, there’s a wide variety of adoptable dogs out there, each with its unique charm, and we’re here to assist you throughout the process. Read our articles today and open your heart to the possibilities of finding your perfect canine companion!"})
        }
        else{
            setModalData({title: "Cat & Kitten Adoption", description: "Looking to welcome a new cat or kitten into your family? Our comprehensive articles have all the information you need to adopt a feline companion successfully. From finding the best organization to understanding the adoption process, our team of experts and animal advocates guides you every step of the way. Whether you’re looking for a playful kitten, a laid-back senior cat or even a specific breed, there’s a diverse range of adoptable cats out there waiting for you. Read our articles today and find your perfect (or purrfect) feline friend!"})
        }
    }
     
    return (
        <div className='mt-16 dark:text-white gap-5  md:flex justify-evenly items-center'>
            <div className='border dark:border-gray-600 rounded-xl pb-5 text-center space-y-9 relative'>
                <img src={dog} alt="" className='w-full rounded-tr-xl rounded-tl-xl'/>
                
                <h1 className='text-3xl font-semibold'>Dog Adoption Articles</h1>
                <p>Learn more about caring for your new dog</p>
                <button onClick={() => handleModal('dog')} class="py-2  w-44 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white uppercase" >Read More</button>
            </div>
            <div className='border dark:border-gray-600 rounded-xl mt-5 md:mt-0 pb-5 text-center space-y-9 relative'>
                <img src={cat} alt="" className='w-full rounded-tr-xl rounded-tl-xl'/>
                
                <h1 className='text-3xl font-semibold'>Cat Adoption Articles</h1>
                <p>Helpful insights on what to expect</p>
                <button  onClick={() => handleModal("cat")} class="py-2  w-44 px-4 border-2 rounded-lg font-bold text-[#0E7A81] hover:bg-[#0E7A81] hover:text-white uppercase" >Read More</button>
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{modalData?.title}</Modal.Header>
        <Modal.Body >
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             {modalData?.description}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
};

export default Article;