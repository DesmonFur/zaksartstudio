import { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../lib/sanity";

const pieceQuery = groq`*[_type == "product"]{_id, defaultProductVariant, title, variants, Description}`;

export default async function handler(req, res) {
  const pieces = await sanityClient.fetch(pieceQuery);
  console.log(pieces);
  res.status(200).json(pieces);
}
