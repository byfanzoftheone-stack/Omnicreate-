const express = require("express");
const router = express.Router();
const { generateTrack, loadDB } = require("../services/musicService");

router.post("/generate", (req, res) => {
  const track = generateTrack();
  res.json(track);
});

router.get("/history", (req, res) => {
  const db = loadDB();
  res.json(db);
});

router.get("/status/:id", (req, res) => {
  const db = loadDB();
  const track = db.find(t => t.track_id === req.params.id);
  res.json(track || { status: "not_found" });
});

module.exports = router;
