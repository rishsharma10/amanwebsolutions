import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("calledddd")
  return res.status(200).json({ data: {message:"fetched"} });
}
