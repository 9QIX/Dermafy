import express from "express";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import fileUpload from "express-fileupload";

const app = express();
app.use(express.json());
app.use(fileUpload());

const apiUrl = process.env.API_URL || "https://autoderm-api.firstderm.com/Query";

const headers = {
  "Api-Key": process.env.API_KEY || "",
};

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Welcome to My FastAPI App");
});

app.post("/img/", async (req, res) => {
  const { age, sex } = req.body;
  const imageFile = req.files?.image;

  if (!imageFile) {
    return res.status(400).json({ error: "Please select an image." });
  }

  const formData = new FormData();
  formData.append("Image", fs.createReadStream(imageFile.path));

  try {
    // The rest of your code goes here
  } catch (error) {
    // Handle error
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
