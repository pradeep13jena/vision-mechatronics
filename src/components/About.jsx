import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

  return (
    <div className="w-full">
      <div
        className="relative w-full h-screen flex flex-col items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/kf28wicizj/visionMechatronics/business-people-partnership-support-team-urban-scene-concept.jpg?updatedAt=1742656141239')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm"></div>

        {/* Text Content */}
        <div className="relative z-10 px-3 md:px-0">
          <h1 className="text-5xl lg:text-7xl font-extrabold">About Us</h1>
          <p className="text-lg md:text-2xl font-semibold mt-5 px-3">
            Vision Mechatronics, a leading name in Energy Storage Industry
          </p>
          <button className="mt-5 py-3 md:py-4 px-7 md:px-10 rounded-xl bg-red-600 text-white hover:bg-red-700 border-none outline-none shadow-[0px_25px_50px_-12px_rgba(255,255,255,0.7)] cursor-pointer transition-all duration-200">
            KNOW MORE...
          </button>
        </div>
      </div>

      <div className="px-2 md:px-20 py-10 p-20">
        {/* First part */}
        <div className="px-0 md:px-24 p-16 lg:p-20" data-aos="fade-up">
          <h1 className="text-2xl md:text-4xl font-bold font-serif px-3 border-l-[5px] border-l-[#0098da] mb-16 lg:mb-20">
            {" "}
            <span className="text-[#0098da]">VISION</span> <br /> STATEMENT
          </h1>
          <div className="flex flex-col lg:flex lg:flex-row gap-10 px-2 lg:px-4">
            <div className="w-full lg:w-1/2">
              <img
                src="https://vmechatronics.com/img/about-us/vision.webp"
                className="w-full rounded-2xl"
                alt="Vision image"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-[#0098da] font-bold text-2xl lg:text-3xl font-serif mb-10">
                <q>
                  Vision 2025: We aspire to be a Listed Indian Multi National by
                  2025.
                </q>
              </p>
              <p className="text-black text-xl/8 lg:text-2xl/9 font-light">
                We are continously innovating cutting - edge and
                mission-critical technology to improve our long-term ability to
                seamlessly and efficiently provide access to cost-effective
                solutions that are <b>“Made in India”</b>.
              </p>
            </div>
          </div>
        </div>

        {/* Second part */}
        <div className="px-0 md:px-20 py-10 p-20" data-aos="fade-up">
          <h1 className="text-2xl md:text-4xl font-bold font-serif px-3 border-l-[5px] border-l-[#0098da] mb-16 lg:mb-20">
            {" "}
            <span className="text-[#0098da]">TOGETHER</span> <br /> WE CAN
          </h1>
          <div className="flex flex-col lg:flex lg:flex-row gap-10 px-2 lg:px-4">
            <div className=" w-full lg:w-1/2">
              <img
                src="https://vmechatronics.com/img/about-us/working-together-with-vision-mechatronics.webp"
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-[#0098da] font-bold text-2xl lg:text-3xl font-serif mb-5 lg:mb-10">
                <q>
                  Coming Together is a beginning, Staying Together is Progress,
                  and Working Together is Success.
                </q>{" "}
                <br />
                <span className="text-black font-light mt-4 text-xl font-sans">
                  ~Henry Ford
                </span>
              </p>
              <p className="text-black text-xl lg:text-2xl/9 font-light">
                We are open to Technology Transfers, Partnerships,
                Collaborations, and Joint Ventures with individuals and/or
                companies from around the world. We also have a platform for
                inventors to have their dreams manufactured with minimal
                investment. <br />
                <b>Together, we can make a difference.</b>{" "}
              </p>
            </div>
          </div>
        </div>

        {/* Third Part */}
        <div className="px-0 md:px-20 py-10 p-20" data-aos="fade-up">
          <h1 className="text-2xl md:text-4xl font-bold font-serif px-3 border-l-[5px] border-l-[#0098da] mb-16 lg:mb-20">
            {" "}
            <span className="text-[#0098da]">CORPORATE</span> <br /> SOCIAL{" "}
            <br /> RESPONSIBILITY{" "}
          </h1>
          <div className="flex flex-col lg:flex lg:flex-row gap-10 px-2 lg:px-4">
            <div className="w-full lg:w-1/2">
              <img
                src="https://vmechatronics.com/img/about-us/corporate-social-responsibility.webp"
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-black text-xl lg:text-2xl/9 font-light">
                We believe that development of an individual is significant
                during their budding stages and therefore we offer internship to
                young students to prepare them for industrial practices and
                groom them to take up challenges. We assign live projects for
                learning and development. We aim for the all-round development
                of the Interns, to transform them into entrepreneurs who take
                ownership of their projects.
              </p>
            </div>
          </div>
        </div>

        {/* Forth Part */}
        <div className="px-0 md:px-20 py-10 p-20" data-aos="fade-up">
          <h1 className="text-2xl md:text-4xl font-bold font-serif px-3 border-l-[5px] border-l-[#0098da] mb-16 lg:mb-20">
            {" "}
            <span className="text-[#0098da]">OUR</span> <br /> CORE VALUES
          </h1>
          <div className="flex flex-col lg:flex lg:flex-row gap-10 px-2 lg:px-4">
            <div className="w-full lg:w-1/2">
              <img
                src="https://vmechatronics.com/img/about-us/vision-mechatronics-core-values.webp"
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-black text-xl lg:text-2xl/9 font-light">
                Passion for Excellence: <b>Mission “WOW”</b> <br />
                Customer Focus: <b>We will always do our best</b> <br />
                Communication: <b>We prefer a two-way communication</b> <br />
                Teamwork: <b>Together we can</b> <br />
                Proactive Innovation: <b>Let us Initiate Innovate!</b> <br />
                Integrity: <b>
                  Let us do the right thing and not the easy one
                </b>{" "}
                <br />
                Diversity: <b>All are equal, Value the differences</b> <br />
                Fun: <b>We enjoy what we do</b> <br />
                Empowering Lives!
              </p>
            </div>
          </div>
        </div>

        {/* Fifth part */}
        <div className="px-0 md:px-20 py-10 p-20" data-aos="fade-up">
          <h1 className="text-2xl md:text-4xl font-bold font-serif px-3 border-l-[5px] border-l-[#0098da] mb-16 lg:mb-20">
            {" "}
            <span className="text-[#0098da]">MAKE IN INDIA</span> <br />{" "}
            Endeavour and Prosper
          </h1>
          <div className="flex flex-col lg:flex lg:flex-row gap-10 px-2 lg:px-4">
            <div className="w-full lg:w-1/2">
              <img
                src="https://vmechatronics.com/img/about-us/make-in-india-vision-mechatronics.webp"
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-[#0098da] font-bold text-2xl lg:text-3xl font-serif mb-5 lg:mb-10">
                <q>Start-up India and Stand-Up India</q> <br />
                <span className="text-black font-light mt-4 text-xl font-sans">
                  ~Hon'ble Prime Minister Of India Shri. Narendra Modi Ji
                </span>
              </p>
              <p className="text-black text-xl lg:text-2xl/9 font-light">
                We at VMPL have been inspired by the "Make in India" initiative
                launched by the Government of India. As citizens of the country,
                it is our duty and responsibility to contribute to the growth of
                India. All our work and products are developed and manufactured
                in India. In doing so, we seek to create more job opportunities
                for our fellow Indians and help our country's forward growth.
              </p>
            </div>
          </div>
        </div>

        {/* sixth part */}
        <div className="px-0 md:px-20 py-10 p-20" data-aos="fade-up">
          <h1 className="text-2xl md:text-4xl font-bold font-serif px-3 border-l-[5px] border-l-[#0098da] mb-16 lg:mb-20">
            {" "}
            <span className="text-[#0098da]">FROM THE</span> <br /> DIRECTORS{" "}
            <br /> DESK{" "}
          </h1>
          <div className="px-2 mb-5">
            <p className="text-black text-xl lg:text-2xl/9 font-light">
              We at Vision Mechatronics operate in Robotics, Renewable Energy
              and Lithium ion Energy Storage. We are proud to be a technology
              company that started off in 2009 with very small robotics project
              and today operates in various verticals. Our customers count on us
              to authoritatively leverage quality technology in order to
              continue to synergistically optimize cost effective materials. We
              continue to pro-actively morph best practice services to allow us
              to endeavor to collaboratively customize long-term, high-impact
              intellectual capital. It is our job to competently optimize
              emerging information, efficiently network opportunities, and
              enthusiastically initiate deliverables.
            </p>
          </div>
          <div className="flex flex-col lg:flex lg:flex-row gap-10 px-2 lg:px-4 py-5">
            <div className="w-full lg:w-1/2">
              <img
                src="https://vmechatronics.com/img/about-us/directors-desk-vision-mechatronics.webp"
                alt=""
                className="w-full rounded-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <p className="text-black text-xl/9 font-light">
                We exist to synergistically customize interdependent products in
                parallel with our clients' needs to revolutionize quality
                content. We reliably and assertively develop effective and
                economically sound information to provide solutions for our
                clients. It is our business to promote market-driven information
                as well as pro-actively disseminate ethical solutions that
                provide key differentiators between us and our competitors. We
                work together to build quality technology business
                infrastructure with young talent for people to flourish. We work
                in sync to initiate high standards so that we may endeavor to
                utilize high-quality performance-based methods while continuing
                to go viral to solve business problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
