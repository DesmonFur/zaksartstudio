import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
function HomePage() {
  const [artpieces, setArtpieces] = useState("hi");

  return (
    <>
      <Header />
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;
