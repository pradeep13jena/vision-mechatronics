import React from "react";
import { Popover, Button } from "antd";
import { CaretDownOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar, closeSidebar } from "../utils/sidebarSlice.js";

const Header = () => {
  const dispatch = useDispatch();

  // Submenus with Popovers
  const whatWeDoMenu = (
    <div className="bg-white py-1 !w-full rounded flex flex-col justify-start items-start gap-2 !text-base">
      <Link
        to="/aboutus"
        className="block py-1 px-4 !hover:text-black/50 !text-black font-semibold hover:scale-105 transition-all duration-500"
      >
        About Us
      </Link>
      <Link
        to="/"
        className="block py-1 px-4 !hover:text-black/50 !text-black font-semibold hover:scale-105 transition-all duration-500"
      >
        Partnership
      </Link>
    </div>
  );

  const productsMenu = (
    <div className="bg-white !w-full rounded flex flex-col gap-2 !text-base">
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
          className="block py-1 px-4 !hover:text-black/50 !text-black font-semibold hover:scale-105 transition-all duration-500"
        >
          {item.replace("-", " ")}
        </Link>
      ))}
    </div>
  );

  const industriesMenu = (
    <div className="bg-white !w-full rounded flex flex-col gap-2 !text-base">
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
          className="block py-1 px-4 !hover:text-black/50 !text-black font-semibold hover:scale-105 transition-all duration-500"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}
    </div>
  );

  const essentialMenu = (
    <div className="bg-white !w-full rounded flex flex-col gap-2 !text-base">
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
          className="block py-1 px-4 !hover:text-black/50 !text-black font-semibold hover:scale-105 transition-all duration-500"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="absolute z-50 flex w-full justify-between items-center px-4 py-5 bg-transparent">
      <div>
        <img
          src="https://vmechatronics.com/img/logo.webp"
          className="w-30 md:w-50"
          alt="Vision Mechatronics logo"
        />
      </div>
      <div className="gap-3 items-center hidden lg:flex">
        {/* Home */}
        <Link
          to="/"
          className="!text-white !text-lg !font-medium !hover:text-gray-300"
        >
          Home{" "}
          <span className="invisible">
            <CaretDownOutlined />
          </span>
        </Link>

        {/* What We Do */}
        <Popover content={whatWeDoMenu} trigger="hover">
          <Button
            type="link"
            className="!text-white !text-lg !font-medium !hover:text-gray-300"
          >
            What We Do?
            <CaretDownOutlined />
          </Button>
        </Popover>

        {/* Products and Services */}
        <Popover content={productsMenu} trigger="hover">
          <Button
            type="link"
            className="!text-white !text-lg !font-medium !hover:text-gray-300"
          >
            Products & Services
            <CaretDownOutlined />
          </Button>
        </Popover>

        {/* Industries */}
        <Popover content={industriesMenu} trigger="hover">
          <Button
            type="link"
            className="!text-white !text-lg !font-medium !hover:text-gray-300"
          >
            Industries
            <CaretDownOutlined />
          </Button>
        </Popover>

        {/* Essentials */}
        <Popover content={essentialMenu} trigger="hover">
          <Button
            type="link"
            className="!text-white !text-lg !font-medium !hover:text-gray-300"
          >
            Essential
            <CaretDownOutlined />
          </Button>
        </Popover>

        {/* Contact Us */}
        <Link
          to="/contactus"
          className="!text-white !text-lg !font-medium !hover:text-gray-300"
        >
          Contact Us
        </Link>
      </div>
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => dispatch(toggleSidebar())}
      >
        <MenuOutlined style={{ fontSize: "24px", color: "white" }} />
      </div>
    </nav>
  );
};

export default Header;
