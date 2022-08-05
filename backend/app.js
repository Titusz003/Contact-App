import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { contactsController } from "./src/controllers/contactsController.js";
import upload from "./multerMiddleware.js";
const app = express();
app.use(cors());
app.use(express.static("contactImages"));
app.use(bodyParser.json());

app.get("/contacts", contactsController.get);
app.post(
  "/contacts",
  upload.single("contactPictureFile"),
  contactsController.post
);
app.put(
  "/contacts",
  upload.single("contactPictureFile"),
  contactsController.put
);
app.delete("/contacts", contactsController.delete);

app.listen(5000, () => console.log("Server is running"));

export default app;
