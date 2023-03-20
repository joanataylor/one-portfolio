import React from "react";
import JoProfPic from "../assets/jopic.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full 
      bg-gradient-to-b from-gray via-gray-300 to-white"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold">
            {/* text-4xl for mobile the other for desktop */}
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a software developer, and prior to transitioning into this
            field, I spent ten years honing my skills in customer service, team
            management, and problem-solving in the hospitality industry. My
            diverse background and experience have equipped me with a unique
            perspective and skillset that I now apply to my work as a software
            developer.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 
            flex items-center rounded-md bg-gradient-to-r from-yellow-500
             to-orange-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={JoProfPic}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
