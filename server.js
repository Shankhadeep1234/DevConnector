const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect to database
connectDB();

app.get("/", (req, res) => res.send("API running"));

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`Server stared on port: ${port}`);
});
