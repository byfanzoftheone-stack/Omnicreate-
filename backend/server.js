const express = require("express");
const cors = require("cors");

const musicRoutes = require("./routes/music");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/music", musicRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Backend running on", PORT));
