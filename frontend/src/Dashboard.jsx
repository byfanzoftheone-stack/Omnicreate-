import { useState } from "react";

export default function Dashboard() {
  const [track, setTrack] = useState(null);

  const API = import.meta.env.VITE_API_URL;

  const generate = async () => {
    const res = await fetch(`${API}/api/generate-music`, {
      method: "POST"
    });

    const data = await res.json();
    setTrack(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>🎧 OmniCreate AI</h1>

      <button onClick={generate}>
        Generate AI Beat
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
