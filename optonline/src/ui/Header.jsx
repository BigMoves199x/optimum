import React from 'react';
import Opt from '../assets/Opt.png'
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-[#002864] h-20 md:h-28">
      <div className=' text-white flex justify-between px-10 py-2'>
        <div className="flex space-x-3">
          <a href="#" className="text-sm hover:underline hidden md:block">En español</a>
        </div>

        <div className="flex space-x-6 font-bold font-orbit hidden md:flex">
          <a href="#" className="text-sm hover:underline ">Sign in</a>
          <a href="#" className="text-sm hover:underline">Pay bill</a>
          <a href="#" className="text-sm hover:underline">Support</a>
          <div>
            <input type="text" className='rounded' />
            <div className='w-8 h-6 rounded-r bg-orange-500 absolute top-2 right-10'>


            </div>

            <FaMagnifyingGlass className="absolute top-2.5 right-12" />
          </div>


        </div>

        <div className='absolute right-8 top-8 flex gap-8'>
        <FaMagnifyingGlass size={20} />
          <FaBars size={20} />
          
        </div>


      </div>


      <div className='text-white flex space-x-4 justify-between px-6 py-2'>
        <div className='w-40'>
          <img src={Opt} alt="" />
        </div>

        <div className=' flex space-x-4 font-thin font-orbit hidden md:block'>
          <a href="#" className=" hover:underline text-3xl">Internet</a>
          <a href="#" className=" hover:underline text-3xl">TV</a>
          <a href="#" className="hover:underline text-3xl">Phone</a>
          <a href="#" className="hover:underline text-3xl">My Office</a>

        </div>
      </div>

      <div className='text-white '>
        <FaMagnifyingGlass className='hidden' />
      </div>

    </header>
  );
};

export default Header;
