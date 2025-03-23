import React from "react";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaGooglePlay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="hidden md:flex flex-wrap justify-start items-start p-18   bg-[#026994] text-white">
      {/* First Section - Company Info (Larger Space) */}
      <div className="w-[40%] md:w-[40%] space-y-4">
        <img
          src="https://vmechatronics.com/img/logo.webp"
          className="w-80 mb-7"
          alt="Vision Mechatronics logo"
        />

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="py-[5px]">
            <MailOutlined className="text-xl" />
          </div>
          <div>
            <p className="text-base">sales@vmechatronics.com</p>
            <p className="text-base">careers@vmechatronics.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="py-[5px]">
            <PhoneOutlined className="text-xl" />
          </div>
          <div>
            <p className="text-base">+91-22-25477750</p>
            <p className="text-base">+91 9969009235</p>
            <p className="text-base">+91 9967118412</p>
          </div>
        </div>
      </div>

      {/* Second, Third, Fourth Sections - Equal Space */}
      <div className="w-[60%] md:w-[20%]">
        <h3 className="text-xl font-semibold mb-10">Quick Links</h3>
        <ul className="space-y-3 text-base">
          <li className="cursor-pointer hover:translate-x-3 duration-300">
            Micro-Grid
          </li>
          <li className="cursor-pointer hover:translate-x-3 duration-300">
            Sustainability
          </li>
          <li className="cursor-pointer hover:translate-x-3 duration-300">
            Renewable Energy
          </li>
          <li className="cursor-pointer hover:translate-x-3 duration-300">
            Products and Services
          </li>
          <li className="cursor-pointer hover:translate-x-3 duration-300">
            Press Release
          </li>
        </ul>
      </div>

      <div className="w-[60%] md:w-[20%]">
        <h3 className="text-xl font-semibold mb-10">Where To</h3>
        <ul className="space-y-3 text-base">
          <li className="cursor-pointer hover:translate-x-3 duration-300">
            Events
          </li>
          <li className="cursor-pointer hover:translate-x-3 duration-300">
            Careers
          </li>
          <li className="cursor-pointer hover:translate-x-3 duration-300">
            About Us
          </li>
          <li className="cursor-pointer hover:translate-x-3 duration-300">
            Contact Us
          </li>
          <li className="cursor-pointer hover:translate-x-3 duration-300">
            Privacy Policy
          </li>
        </ul>
      </div>

      <div className="w-[60%] md:w-[20%]">
        <h3 className="text-lg font-semibold mb-7">Social Icons</h3>
        <div className="flex gap-4 flex-wrap ">
          {/* Social Media Icons */}
          {[
            {
              icon: <FaFacebookF />,
              link: "https://www.facebook.com/visionmechatronics#",
            },
            { icon: <FaTwitter />, link: "https://x.com/VisionMechX" },
            {
              icon: <FaInstagram />,
              link: "https://www.instagram.com/visionmechatronics/",
            },
            {
              icon: <FaLinkedinIn />,
              link: "https://www.linkedin.com/company/vision-mechatronics-pvt.-ltd./",
            },
            {
              icon: <FaYoutube />,
              link: "https://www.youtube.com/channel/UCsFmRkC44Et6dFkTvD-AhDg",
            },
            {
              icon: <FaPinterestP />,
              link: "https://in.pinterest.com/visionmechatron/",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-white text-[#026994] p-3 rounded-full hover:bg-gray-200"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
