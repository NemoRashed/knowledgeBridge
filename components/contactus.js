import React from "react";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";

export default function ContactUs() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        {/* Pattern background */}
        <div className="absolute inset-0 opacity-10 pattern-grid-lg text-green-500"></div>

        <div className="max-w-4xl w-full bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden relative z-10">
          <div className="flex flex-col md:flex-row">
            {/* Left Section (Form) */}
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-6 text-green-800">
                Contact Us
              </h2>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-white bg-opacity-50 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-white bg-opacity-50 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-2 bg-white bg-opacity-50 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-green-800 font-semibold py-2 rounded-lg hover:bg-yellow-500 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Section (Contact Info and Map) */}
            <div className="md:w-1/2 bg-green-100 bg-opacity-50 p-8 flex flex-col">
              {/* Contact Information */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6 text-green-800">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FiMapPin className="mr-4 text-green-600 mt-1" />
                    <p className="text-green-700">
                      123 Green Street
                      <br />
                      Eco City, Earth 54321
                      <br />
                      Sustainable Country
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="mr-4 text-green-600" />
                    <p className="text-green-700">+1 (234) 567-8900</p>
                  </div>
                  <div className="flex items-center">
                    <FiMail className="mr-4 text-green-600" />
                    <p className="text-green-700">contact@greencompany.com</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="flex-grow">
                <h3 className="text-2xl font-semibold mb-4 text-green-800">
                  Our Location
                </h3>
                <div className="h-full rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2157860486147!2d-73.98784532342224!3d40.75779613922396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1682367115746!5m2!1sen!2sus"
                    width="100%"
                    height="70%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
