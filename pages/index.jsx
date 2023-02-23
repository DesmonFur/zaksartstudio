import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Artwork from "../components/Artwork/Artwork";
import { fetchPieces } from "./api/apiUtils/getPieces";
import { createClient } from "next-sanity";

function HomePage({ pieces }) {
  return (
    <>
      <Header />
      <div className="mt-24 flex items-center justify-center">
        <Artwork pieces={pieces} />
      </div>
      <Footer />
    </>
  );
}

const client = createClient({
  projectId: "6al1v3ul",
  dataset: "production",
  apiVersion: "2022-03-25",

  useCdn: false,
});
const pieceQuery = `*[_type == "product"]{_id, defaultProductVariant, title, variants, Description}`;

export const getStaticProps = async () => {
  // const pieces = await fetchPieces();
  const pieces = await client.fetch(pieceQuery);

  return {
    props: {
      pieces,
    },
  };
};

export default HomePage;
