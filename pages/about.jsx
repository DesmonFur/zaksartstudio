import React from "react";
import Header from "../components/Header/Header";

function About() {
  return (
    <>
      <Header />
      <div className="flex relative flex-col text-center md:text-left md:flex-row max-w-77xl px-10 mx-auto items-center justify-evenly">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          About Me
        </h3>
      </div>{" "}
    </>
  );
}

export default About;
