import { useState } from "react";

const API = import.meta.env.VITE_API_URL;

export default function Dashboard() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);

    const res = await fetch(`${API}/api/generate-music`, {
      method: "POST"
    });

    const data = await res.json();
    setTrack(data);
    setLoading(false);
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>🎧 OmniCreate AI</h1>

      <button onClick={generate}>
        {loading ? "Generating..." : "Generate AI Beat"}
      </button>

      {track && (
        <div>
          <p>Style: {track.style}</p>
          <p>ID: {track.track_id}</p>
        </div>
      )}
    </div>
  );
}
