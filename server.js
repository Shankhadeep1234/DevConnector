const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect to database
connectDB();

//init middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

//Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log(`Server stared on port: ${port}`);
});
