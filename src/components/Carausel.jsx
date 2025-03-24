import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    image:
      "https://ik.imagekit.io/kf28wicizj/visionMechatronics/pexels-krisof-1252890.jpg?updatedAt=1742573966570",
    title: "Energy is transforming",
    description:
      "And in this transformation, we are here to support you in achieving your sustainable energy goals....",
    buttonText: "About us",
    link: "/aboutus",
  },
  {
    id: 2,
    image:
      "https://ik.imagekit.io/kf28wicizj/visionMechatronics/pexels-flickr-157039.jpg?updatedAt=1742619730852",
    title: "WHAT WE OFFER",
    description: `A Leading name in the Energy Storage Industry we provide premium lithim-ion batteries, customized battery packs and efficient energy
    storage solution, and robotics. Explore our diverse range of solutions and product tailor made to suit your needs`,
    buttonText: "Explore Products",
    link: "/",
  },
  {
    id: 3,
    image:
      "https://ik.imagekit.io/kf28wicizj/visionMechatronics/daniele-colucci-OtXJhYjbKeg-unsplash.jpg?updatedAt=1742628665395",
    title: "COMMITMENT TO FUTURE",
    description: `We believe in the power of energy and are committed to providing sustainable Energy Solutions to ensure access to affordable, reliable, 
    sustainable, and modern energy for all. We have solutions for those who want to help power the world with green energy`,
    buttonText: "Know More...",
    link: "/",
  },
  {
    id: 4,
    image:
      "https://ik.imagekit.io/kf28wicizj/visionMechatronics/zbynek-burival-V4ZYJZJ3W4M-unsplash.jpg?updatedAt=1742575682854",
    title: "RENEWABLE ENERGY",
    description: `We are assisting domestic, commercial, and industrial users shift from conventional ways to new renewable and green ways of generating and using Power`,
    secondDesc: `Get a low electricity bill now. Ask us how?`,
    buttonText: "Know More...",
    link: "/",
  },
  {
    id: 5,
    image:
      "https://ik.imagekit.io/kf28wicizj/visionMechatronics/siddharth-verma-MpbhFhl0zi4-unsplash.jpg?updatedAt=1742629097628",
    title: "COFFEE CORNER",
    quote: `"If you want to go fast, go alone, if you want to go far, go together" ~Martha Stewart`,
    description: `We are on a lookout to explore and discuss mutual synergies with institution as partners, suppliers or more. Reach out to us with your brilliant ideas.`,
    buttonText: "Contact Us",
    link: "/contactus",
  },
];

export default function Carousel() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="w-full h-screen">
      <div className="absolute top-0 left-0 w-full z-50 h-[4px] bg-gray-700">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSlideChange={(swiper) => {
          const progressPercent =
            ((swiper.realIndex + 1) / slides.length) * 100;
          setProgress(progressPercent);
        }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-white/60 p-6 md:p-10 rounded-lg text-center w-[90%] md:max-w-4xl">
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-black">
                  {slide.title}
                </h1>
                {slide?.quote ? (
                  <p className="text-base font-semibold md:text-lg lg:text-2xl mt-9 text-black">
                    {slide.quote}
                  </p>
                ) : (
                  ""
                )}
                <p className="text-base md:text-lg lg:text-2xl mt-9 text-black">
                  {slide.description}
                </p>
                {slide?.secondDesc ? (
                  <p className="text-base md:text-lg lg:text-2xl mt-9 text-black">
                    {slide.secondDesc}
                  </p>
                ) : (
                  ""
                )}
                <button className="mt-6 px-6 py-2 bg-white-500 rounded-full border border-black text-black bg-white transition">
                  <Link to={`${slide.link}`}>{slide.buttonText}</Link>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
