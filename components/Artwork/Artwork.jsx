import React from "react";
// import { sanityClient, urlFor } from "@sanity/client";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import { sanityClient, urlFor } from "../../lib/sanity";
import { createClient } from "next-sanity";
import ArtPiece from "./ArtPiece";

function Artwork({ pieces }) {
  // const configuredSanityClient = sanityClient({
  //   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  //   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  //   useCdn: true,
  // });
  console.log(pieces);
  const pieceQuery = `*[_type == "product"]{_id, defaultProductVariant, title, variants, Description}`;

  return (
    <div>
      <h3 className="top-12 animate-pulse text-center text-2xl uppercase tracking-[20px] text-[#F7AB0A] ">
        Find your next favorite piece
      </h3>{" "}
      <main>
        <div className="flex">
          {pieces.length > 0 && (
            <>
              {pieces.map((piece) => (
                <div key={piece._id}>
                  <ArtPiece piece={piece} />
                </div>
              ))}
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default Artwork;
