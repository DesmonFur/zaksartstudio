import React from "react";
import Header from "../components/Header/Header";

function About() {
  return (
    <>
      <Header />
      <div className="max-w-77xl relative mx-auto flex flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left">
        <h3 className="top-24 mt-12 animate-pulse text-center text-2xl uppercase  tracking-[20px] text-[#F7AB0A] ">
          About Me
        </h3>
      </div>{" "}
    </>
  );
}

export default About;
