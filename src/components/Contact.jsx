import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const Contact = () => {
  return (
    <div className="w-full">
      {/* First Section - Hero Image with Blur Overlay and Text */}
      <div
        className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/kf28wicizj/visionMechatronics/jonas-leupe-wK-elt11pF0-unsplash.jpg?updatedAt=1742636461918')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm"></div>

        {/* Text Content */}
        <div className="relative z-10">
          <h1 className="text-5xl lg:text-7xl font-extrabold">Let's Talk...</h1>
          <p className="text-xl md:text-2xl font-semibold mt-5">
            Feel Free to Contact Us
          </p>
          <button className="mt-5 py-3 md:py-4 px-7 md:px-10 rounded-xl bg-red-600 text-white hover:bg-red-700 border-none outline-none shadow-[0px_25px_50px_-12px_rgba(255,255,255,0.7)] cursor-pointer transition-all duration-200">
            KNOW MORE...
          </button>
        </div>
      </div>

      {/* Second Section - Contact Form and Map */}
      <div className="w-full flex flex-col md:flex-row px-2 py-10 md:p-10 gap-10">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-4xl font-semibold text-center mb-7 font-serif">
            <span className="text-[#026994]">Feel free to</span> contact us
          </h2>
          <form className="space-y-4  border border-gray-400 p-4 rounded-md">
            {/* Dropdown */}
            <div className="w-full h-12 flex border border-gray-400 rounded">
              <div className="w-[15%] md:w-[8%] flex items-center justify-center bg-gray-200">
                <Inventory2OutlinedIcon sx={{ fontSize: 21 }} />
              </div>
              <select className="w-full p-2 h-full border-none outline-none bg-white">
                <option>Product Enquiry</option>
                <option>Partnership Enquiry</option>
                <option>Dealership Enquiry</option>
                <option>Others</option>
              </select>
            </div>

            {/* Name and Email */}
            <div className="flex gap-4">
              <div className="w-1/2 h-12 flex border border-gray-400 rounded">
                <div className="w-[40%] md:w-[18%] flex items-center justify-center bg-gray-200">
                  <AccountCircleOutlinedIcon sx={{ fontSize: 24 }} />
                </div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 h-full border-none outline-none"
                />
              </div>
              <div className="w-1/2 h-12 flex border border-gray-400 rounded">
                <div className="w-[40%] md:w-[18%] flex items-center justify-center bg-gray-200">
                  <MailOutlineOutlinedIcon sx={{ fontSize: 24 }} />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-2 h-full border-none outline-none"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="w-full h-12 border border-gray-400 rounded flex">
              <div className="w-[15%] md:w-[8%] flex items-center justify-center bg-gray-200">
                <PhoneInTalkOutlinedIcon
                  className="text-black"
                  sx={{ fontSize: 21 }}
                />
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 h-full border-none outline-none"
              />
            </div>

            {/* Description */}
            <div className="w-full h-full border border-gray-400 rounded flex">
              <div className="w-[15%] md:w-[8%] flex items-center justify-center bg-gray-200">
                <DescriptionOutlinedIcon
                  className="text-black"
                  sx={{ fontSize: 27 }}
                />
              </div>
              <textarea
                placeholder="Please describe your query"
                className="w-full p-2 h-full border-none outline-none resize-none text-base"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center my-10 md:my-4 ">
              <button
                type="submit"
                className=" w-1/2 md:w-1/4 py-3 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700 text-lg"
              >
                SUBMIT FORM
              </button>
            </div>
          </form>
        </div>

        {/* Third Section - Map */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-semibold text-center mb-7 font-serif">
            <span className="text-[#026994]">Our</span> Presence
          </h2>
          <div className="w-full h-72 lg:h-[86%] rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.7839037678023!2d72.96756507498084!3d19.204638582026526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b93e226b4a7f%3A0x646799755846c5e0!2sVision%20Mechatronics%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1742713822650!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
