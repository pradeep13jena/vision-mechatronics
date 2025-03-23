import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../utils/sidebarSlice.js";
import { Link } from "react-router-dom";
import { CloseOutlined, CaretDownOutlined } from "@ant-design/icons";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  // State for submenu visibility
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div
      className={`lg:hidden fixed top-0 right-0 w-72 h-full bg-white shadow-xl transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 flex flex-col`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <CloseOutlined
          className="text-xl cursor-pointer"
          onClick={() => dispatch(closeSidebar())}
        />
      </div>

      {/* Sidebar Content */}
      <div className="flex flex-col p-5 space-y-4 overflow-y-auto flex-grow">
        <Link
          to="/"
          className="text-gray-700 text-lg font-medium"
          onClick={() => dispatch(closeSidebar())}
        >
          Home
        </Link>

        {/* What We Do */}
        <div
          className="text-gray-700 text-lg font-medium cursor-pointer flex items-center justify-between"
          onClick={() => toggleMenu("whatWeDo")}
        >
          What We Do?{" "}
          <CaretDownOutlined
            className={`transition-transform ${
              openMenu === "whatWeDo" ? "rotate-180" : ""
            }`}
          />
        </div>
        {openMenu === "whatWeDo" && (
          <div className="ml-4 space-y-2 flex flex-col">
            <Link
              to="/aboutus"
              className="block text-gray-600"
              onClick={() => dispatch(closeSidebar())}
            >
              About Us
            </Link>
            <Link
              to="/"
              className="block text-gray-600"
              onClick={() => dispatch(closeSidebar())}
            >
              Partnership
            </Link>
          </div>
        )}

        {/* Products & Services */}
        <div
          className="text-gray-700 text-lg font-medium cursor-pointer flex items-center justify-between"
          onClick={() => toggleMenu("products")}
        >
          Products & Services{" "}
          <CaretDownOutlined
            className={`transition-transform ${
              openMenu === "products" ? "rotate-180" : ""
            }`}
          />
        </div>
        {openMenu === "products" && (
          <div className="ml-4 space-y-2 flex flex-col">
            {[
              "One-box",
              "Joulie",
              "Li-Rack Eco",
              "Joulie+",
              "CelPak",
              "CelPak-n",
              "Li-V",
              "Hycooker",
              "Relive",
              "DC Spare list",
            ].map((item) => (
              <Link
                key={item}
                to={`/`}
                className="block text-gray-600"
                onClick={() => dispatch(closeSidebar())}
              >
                {item.replace("-", " ")}
              </Link>
            ))}
          </div>
        )}

        {/* Industries */}
        <div
          className="text-gray-700 text-lg font-medium cursor-pointer flex items-center justify-between"
          onClick={() => toggleMenu("industries")}
        >
          Industries{" "}
          <CaretDownOutlined
            className={`transition-transform ${
              openMenu === "industries" ? "rotate-180" : ""
            }`}
          />
        </div>
        {openMenu === "industries" && (
          <div className="ml-4 space-y-2 flex flex-col">
            {[
              "Agriculture",
              "Corporate",
              "Manufacturing",
              "Infrastructure",
              "Residential",
              "Electrical Vehicle",
            ].map((item) => (
              <Link
                key={item}
                to={`/`}
                className="block text-gray-600"
                onClick={() => dispatch(closeSidebar())}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        )}

        {/* Essentials */}
        <div
          className="text-gray-700 text-lg font-medium cursor-pointer flex items-center justify-between"
          onClick={() => toggleMenu("essential")}
        >
          Essential{" "}
          <CaretDownOutlined
            className={`transition-transform ${
              openMenu === "essential" ? "rotate-180" : ""
            }`}
          />
        </div>
        {openMenu === "essential" && (
          <div className="ml-4 space-y-2 flex flex-col">
            {[
              "Events",
              "Micro-Grid",
              "Sustainability",
              "Sustainability",
              "Renewable Energy",
              "News",
              "Blogs",
            ].map((item) => (
              <Link
                key={item}
                to={`/`}
                className="block text-gray-600"
                onClick={() => dispatch(closeSidebar())}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>
        )}

        {/* Contact */}
        <Link
          to="/contactus"
          className="text-gray-700 text-lg font-medium"
          onClick={() => dispatch(closeSidebar())}
        >
          Contact Us
        </Link>
      </div>

      {/* Social Icons Footer */}
      <div className="p-5 bg-gray-100 flex flex-col items-start">
        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
        <div className="flex gap-3 flex-wrap">
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
              className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-300"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
