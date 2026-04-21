import { useState } from "react";

export default function App() {
  const API = import.meta.env.VITE_API_URL;

  const [style, setStyle] = useState("cinematic hip hop");
  const [loading, setLoading] = useState(false);
  const [track, setTrack] = useState(null);
  const [error, setError] = useState(null);

  const generate = async () => {
    setLoading(true);
    setError(null);
    setTrack(null);

    try {
      const res = await fetch(`${API}/api/generate-music`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ style })
      });

      const data = await res.json();

      if (!data.track_id) {
        setError("Invalid response from engine");
        return;
      }

      setTrack(data);
    } catch (err) {
      setError("API connection failed");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>🎧 OmniCreate AI</h1>

      {/* USER INPUT LAYER */}
      <input
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        placeholder="Enter style (drill, cinematic, trap...)"
        style={{ padding: 10, width: "100%", marginBottom: 10 }}
      />

      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate Beat"}
      </button>

      {/* ERROR STATE */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* OUTPUT STATE */}
      {track && (
        <div style={{ marginTop: 20 }}>
          <h3>Result</h3>

          <p><b>ID:</b> {track.track_id}</p>
          <p><b>Style:</b> {track.style}</p>

          <audio controls style={{ width: "100%", marginTop: 10 }}>
            <source src={track.audio_url} />
          </audio>

          <pre style={{ marginTop: 10 }}>
            {JSON.stringify(track, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
