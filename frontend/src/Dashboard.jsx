import { useState } from "react";

export default function Dashboard() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateMusic = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "https://omnicreate-production.up.railway.app"}/api/generate-music`,
        { method: "POST" }
      );

      const data = await res.json();
      setTrack(data);
    } catch (err) {
      console.log("API ERROR:", err);
      alert("API failed — check Railway connection");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🎧 OmniCreate AI</h1>

      <button onClick={generateMusic}>
        {loading ? "Generating..." : "Generate AI Beat"}
      </button>

      {track && (
        <div style={{ marginTop: 20 }}>
          <h3>Result:</h3>
          <p><b>Style:</b> {track.style}</p>
          <p><b>ID:</b> {track.track_id}</p>
        </div>
      )}
    </div>
  );
}
