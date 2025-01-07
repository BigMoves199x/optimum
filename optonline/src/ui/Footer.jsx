import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#002864] text-white py-6">
      <div className="container mx-auto px-6">
        {/* First Div Container */}
        <div className="grid grid-cols-1 md:flex gap-6">
          <p className="font-bold text-lg">Optimum Stores</p>
          <p className="font-bold text-lg">@OptimumHelp</p>
          <p className="font-bold text-lg">Contact Us</p>
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-400 my-6" />

        {/* Links Section */}
        <div className=" grid grid-cols-2 md:grid-cols-1">
          {/* Left Links */}
          <div className="md:flex gap-10 text-sm leading-8 md:leading-normal  ">

            <p href="#" className="hover:text-gray-300 ">
              Report Abuse
            </p>


            <p href="#" className="hover:text-gray-300">
              Accessibility
            </p>


            <p href="#" className="hover:text-gray-300">
              Storm Preparedness
            </p>


            <p href="#" className="hover:text-gray-300">
              Legal Compliance
            </p>


          </div>

          {/* Right Links */}
          <div className="md:flex gap-10 text-sm leading-8 md:leading-normal md:py-4 ">


            <p href="#" className="hover:text-gray-300">
              Service Terms & Info
            </p> 


            <p href="#" className="hover:text-gray-300">
              Copyright Policy
            </p>


            <p href="#" className="hover:text-gray-300">
              Privacy Notice
            </p>


            <p href="#" className="hover:text-gray-300">
              About Altice USA
            </p>


          </div>
        </div>

        {/* Footer Text */}
        <p className="text-white text-sm py-10">
          © Copyright 2025 CSC Holdings, LLC.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
