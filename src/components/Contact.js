import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-medium mb-6">Contact me</h2>
      <form className="flex flex-col space-y-4">
        <label className="font-medium" htmlFor="name">
          Name
        </label>
        <input
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="name"
          id="name"
        />
        <label className="font-medium" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          name="email"
          id="email"
        />
        <label className="font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="message"
          id="message"
          rows="5"
        ></textarea>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <div className="flex mt-6">
        <div className="flex items-center mr-6">
          <FaEnvelope className="text-blue-500 mr-2" />
          <a href="mailto:info@example.com" className="text-gray-600 hover:text-blue-500">
            maashaajr@gmail.com
          </a>
        </div>
        <div className="flex items-center">
          <FaPhoneAlt className="text-blue-500 mr-2" />
          <a href="tel:+252619792712" className="text-gray-600 hover:text-blue-500">
          +252619792712
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
