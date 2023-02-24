import React from "react";
import { sanityClient, urlFor } from "../../lib/sanity";
import Image from "next/image";

function ArtPiece({ piece }) {
  return (
    <>
      {/* <Image
        src={urlFor(piece.defaultProductVariant.images[0]).url()}
        width={600}
        height={600}
      /> */}
      <img
        // className="  h-64   cursor-pointer"
        className=" h-full w-full object-contain object-center"
        src={urlFor(piece.defaultProductVariant.images[0]).url()}
        alt=""
      />{" "}
    </>
  );
}

export default ArtPiece;
