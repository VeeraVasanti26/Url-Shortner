const express = require("express");
const cors = require("cors");
const rateLimiter = require("./config/rateLimiter");
const urlRoutes = require("./routes/urlRoutes");

const app = express();

// Global middleware
app.use(cors());
app.use(express.json());

// Rate limiting
app.use("/api", rateLimiter);

// Routes
app.use("/api/url", urlRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("URL Shortener API is running");
});

module.exports = app;
