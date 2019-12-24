const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//load environment variables
dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(cors());
app.use("/upload", require("./routes/fileUploader"));
app.use("/register", require("./routes/users"));
app.use("/login", require("./routes/login"));

//conect to mongoose
mongoose
  .connect(process.env.MongoDB_Key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(console.log("connected to mongoDB"))
  .catch(err => console.log(err));

//connect to server
const PORT = 5000;
app.listen(PORT, () => console.log("listening on port " + PORT));
