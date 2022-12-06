import React from "react";
import { sanityClient, urlFor } from "../../lib/sanity";
import Image from "next/image";

function ArtPiece({ piece }) {
  return (
    <div className="mt-12 text-center sm:h-64 sm:w-64 md:h-[19rem] md:w-[19rem] lg:h-[20rem] lg:w-[20rem] ">
      <Image
        src={urlFor(piece.defaultProductVariant.images[0]).url()}
        layout=""
        width={300}
        height={300}
      />
      <h1>{piece.title}</h1>
    </div>
  );
}

export default ArtPiece;
