import express from "express";
import { mongoose, Schema, model } from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect("mongodb://127.0.0.1:27017/users").then(() => {
  console.log("Connected");
});

app.listen(4000, () => {
  console.log("Server is listening on 4000");
});

const userSchema = Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
});

const User = model("User", userSchema);

app.post("/users", async (req, res) => {
  let user = new User(req.body);
  await user.save();
  res.send("user added");
});
