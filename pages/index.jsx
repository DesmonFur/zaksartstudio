import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Artwork from "../components/Artwork/Artwork";
function HomePage() {
  const [artpieces, setArtpieces] = useState("hi");

  return (
    <>
      <Header />
      <div className="flex items-center justify-center mt-24">
        <Artwork />
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
