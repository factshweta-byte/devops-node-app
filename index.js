const express = require("express");
const dotenv = require("dotenv");
const os = require("os");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

let visitCount = 0;
const startTime = Date.now();

// Home route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to DevOps Node App 🚀",
  });
});

// Health check route
app.get("/health", (req, res) => {
  const uptime = Math.floor((Date.now() - startTime) / 1000);
  res.json({
    status: "OK",
    uptime_seconds: uptime,
  });
});

// App info route
app.get("/info", (req, res) => {
  res.json({
    app_name: process.env.APP_NAME || "DevOps-App",
    version: process.env.APP_VERSION || "1.0.0",
    environment: process.env.NODE_ENV || "development",
    hostname: os.hostname(),
  });
});

// Visit counter route
app.get("/visit", (req, res) => {
  visitCount++;
  res.json({
    message: "Visitor count updated",
    count: visitCount,
    hostname: os.hostname(),
  });
});

// Time route
app.get("/time", (req, res) => {
  res.json({
    server_time: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
