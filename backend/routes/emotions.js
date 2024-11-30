const express = require("express");
const router = express.Router();

// Mock data for testing
const mockRecommendations = {
  happy: ["Listen to upbeat music", "Try a new hobby"],
  sad: ["Meditation exercises", "Watch a feel-good movie"],
  stressed: ["Deep breathing techniques", "Take a walk outdoors"],
};

// Route to get recommendations based on emotion
router.post("/analyze", (req, res) => {
  const { emotion } = req.body;

  if (!emotion || !mockRecommendations[emotion.toLowerCase()]) {
    return res.status(400).json({
      error: "Invalid or missing emotion in request.",
    });
  }

  const recommendations = mockRecommendations[emotion.toLowerCase()];
  res.json({
    emotion,
    recommendations,
  });
});

module.exports = router;
