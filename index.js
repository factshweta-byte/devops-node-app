const express = require("express");
const os = require("os");

const app = express();
const startTime = Date.now();

app.get("/", (req, res) => {
  const uptimeSeconds = Math.floor((Date.now() - startTime) / 1000);

  res.json({
    status: "OK ✅",
    message: "DevOps Project Running Successfully 🚀",
    uptime_in_seconds: uptimeSeconds,
    server_time: new Date().toLocaleString(),
    hostname: os.hostname()
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "Healthy ✅"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});