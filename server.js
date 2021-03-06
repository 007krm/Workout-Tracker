const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./routes");
require("dotenv").config()
const PORT = process.env.PORT || 3000;

const app = express();
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use(express.static("public"));
// after localhost workout might change
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
