import React from "react";
import { FaFacebook, FaTiktok, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 rounded-b">
      <div className="container mx-auto py-6 px-4">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <Link to="https://www.facebook.com/abdiaziz.Africa" className="text-gray-400 hover:text-white ml-4">
              <FaFacebook />
            </Link>
            <Link to="https://www.tiktok.com/@abdi_aziz1?is_from_webapp=1&sender_device=pc" className="text-gray-400 hover:text-white ml-4">
              <FaTiktok />
            </Link>
            <Link to="#" className="text-gray-400 hover:text-white ml-4">
              <FaInstagram />
            </Link>
          </div>
          <div className="text-center md:text-left md:order-1">
            <p className="text-gray-400"> &copy; All rights reserved By  Abdiaziz Maashaa.  {new Date().getFullYear()} </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
