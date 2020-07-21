//-- .env --------------------------------------------------------------------
const path = require("path");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({
    path: path.resolve(__dirname, ".env"),
  });
}

//-- Dependencies ------------------------------------------------------------
const express = require("express");
const logger = require("morgan");
const db = require("./config/connection");

const { passport } = require("./lib/passport");
const mongoose = require("mongoose");

//-- Constants ---------------------------------------------------------------
const PORT = process.env.PORT || 3001;
const LOG_MODE = process.env.NODE_ENV === "production" ? "common" : "dev";

//-- Express -----------------------------------------------------------------
const app = express();

db.on("error", (err) => {
  console.log("Mongoose connection error:", err);
});

//-- Middleware --------------------------------------------------------------
app.use(logger(LOG_MODE));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

//-- Static Server (Production) ----------------------------------------------
if (process.env.NODE_ENV === "production") {
  const clientBuildPath = path.join(__dirname, "..", "client", "build");
  console.log(`Client build path: ${clientBuildPath}\n`);
  app.use(express.static(clientBuildPath));
}

//-- Controller Routes -------------------------------------------------------
app.use(require("./controllers"));

//-- React catch-all ---------------------------------------------------------
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
//-- Main --------------------------------------------------------------------

app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));

//-- Export to Tests ---------------------------------------------------------
module.exports = app;
