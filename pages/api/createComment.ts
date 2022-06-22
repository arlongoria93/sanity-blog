import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";
const client = sanityClient({
  dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion:'2022-06-21',
  token:process.env.SANITY_AUTH_TOKEN,
  useCdn: process.env.NODE_ENV ==="production"
});

export default  async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, comment } = JSON.parse(req.body);
  try {
    await client.create({
      _type: "comment",
      post: {
        _type: "reference",
       _ref:_id
      },
      name,
      email,
      comment,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Couldnt submit comment", error });
  }
  console.log("comment created");

  res.status(200).json({ message: "Comment submitted" });
}
