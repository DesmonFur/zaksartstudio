import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Artwork from "../components/Artwork/Artwork";
import { fetchPieces } from "./api/apiUtils/getPieces";

function HomePage({ pieces }) {
  return (
    <>
      <Header />
      <div className="mt-24 flex items-center justify-center">
        <Artwork pieces={pieces} />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export const getStaticProps = async () => {
  const pieces = await fetchPieces();

  return {
    props: {
      pieces,
    },
  };
};

export default HomePage;
