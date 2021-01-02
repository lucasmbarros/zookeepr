// require statements
const express = require("express");
const { animals } = require("./data/animals");
const fs = require("fs");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// serve static assets
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
