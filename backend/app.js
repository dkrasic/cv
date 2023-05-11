const express = require("express");
const bodyParser = require("body-parser");

const positionRouter = require("./routes/positionRoutes");

const { mongoConnect } = require("./utils/database.js");

const app = express();
const PORT = process.env.PORT || 3001;

// middleware for parsing the body of each request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// middleware for routing requests
app.use("/api/positions", positionRouter);

mongoConnect(() => {
  app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}.`);
  });
});
