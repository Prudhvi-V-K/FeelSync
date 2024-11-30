const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// Initialize the app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Import routes
const emotionRoutes = require("./routes/emotions");

// Use routes
app.use("/api/emotions", emotionRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to MoodSphere Backend!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
