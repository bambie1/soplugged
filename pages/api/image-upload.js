import { cloudinary } from "../../utils/cloudinary";

export default async function handler(req, res) {
  try {
    const fileStr = req.body.data;
    const response = await cloudinary.uploader.upload(fileStr, {
      upload_preset: req.body.preset,
    });
    res.status(200).json({ imageUrl: response.url });
  } catch (error) {
    res.status(500).json({ error: "something went wrong" });
  }
}
