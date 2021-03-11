//Require dependencies
const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");

//Port
const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutDb", { useNewUrlParser: true });

app.use(require("./routes/api.js"))
app.use(require("./routes/view.js"))

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });