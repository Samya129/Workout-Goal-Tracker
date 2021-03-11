//Require dependencies
const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

//Port
const PORT = process.env.PORT || 3001;

const app = express();

//Activate morgan
app.use(logger("dev"));

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Connect to mongoose with the database name I defined
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDb", { useNewUrlParser: true });

//Require each route below for use:
app.use(require("./routes/api.js"))
app.use(require("./routes/view.js"))

//Run server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });