const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const DB_PATH = path.join(__dirname, "../data/tracks.json");

function loadDB() {
  if (!fs.existsSync(DB_PATH)) return [];
  return JSON.parse(fs.readFileSync(DB_PATH));
}

function saveDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

function generateTrack() {
  const id = uuidv4();

  const track = {
    track_id: id,
    style: ["drill ambient", "cinematic hip hop", "lofi wave"][Math.floor(Math.random() * 3)],
    status: "completed",
    created_at: Date.now(),
    audio_url: `https://example.com/audio/${id}.mp3`
  };

  const db = loadDB();
  db.push(track);
  saveDB(db);

  return track;
}

module.exports = { generateTrack, loadDB };
