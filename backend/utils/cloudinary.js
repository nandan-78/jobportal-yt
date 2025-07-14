import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:"458145122444973",
    api_secret:process.env.API_SECRET
});
export default cloudinary;