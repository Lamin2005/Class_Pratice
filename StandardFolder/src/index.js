import app from "./app.js";
import dotenv from "dotenv";
import connection from "./db/index.js";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const PORT = process.env.PORT || 8080;

connection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
