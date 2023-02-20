import React from "react";
import { sanityClient, urlFor } from "../../lib/sanity";
import Image from "next/image";

function ArtPiece({ piece }) {
  return (
    <div className="mt-12  transform  cursor-pointer text-center transition duration-500 hover:scale-125 sm:h-64 sm:w-64 md:h-[22rem] md:w-[19rem]  lg:h-[25rem] lg:w-[25rem] ">
      <Image
        src={urlFor(piece.defaultProductVariant.images[0]).url()}
        layout=""
        width={500}
        height={500}
      />
    </div>
  );
}

export default ArtPiece;
