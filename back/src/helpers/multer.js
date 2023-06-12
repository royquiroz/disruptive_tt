import multer from "multer";
import cloudinary from "cloudinary";
import multerCloudinary from "multer-storage-cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = multerCloudinary({
  cloudinary,
  folder: "disruptive",
  allowedFormats: ["jpg", "png", "jpeg"],
});

export default multer({ storage });
