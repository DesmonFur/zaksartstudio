import React, { useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Artwork from "../components/Artwork/Artwork";
import { fetchPieces } from "./api/apiUtils/getPieces";
import { createClient } from "next-sanity";
import ImageGallery from "react-image-gallery";
import { BsChevronDown } from "react-icons/bs";
function HomePage({ pieces }) {
  const images = [
    {
      original:
        "https://res.cloudinary.com/notio/image/upload/c_scale,h_5000,q_100,w_5000/v1677219877/zaksartstudio/Untitled_design_1_azpk8i.png",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original:
        "https://res.cloudinary.com/notio/image/upload/v1677219843/zaksartstudio/Untitled_design_3_nuvukp.png",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original:
        "https://res.cloudinary.com/notio/image/upload/v1677219840/zaksartstudio/Untitled_design_2_wig0tv.png",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <>
      <div className="flex h-[90vh] w-full ">
        <div className="flex-1 bg-heroMobile bg-cover bg-center bg-no-repeat  sm:bg-hero">
          <Header />
          <div className=" absolute right-0 left-0 bottom-[12vh] mx-auto w-[8%] animate-pulse text-white ">
            <BsChevronDown size={40} />
          </div>
        </div>
      </div>
      <div className="mt-12">
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
const pieceQuery = `*[_type == "product"]|order(listOrder asc){_id, defaultProductVariant, title, variants, description, listOrder}`;

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
