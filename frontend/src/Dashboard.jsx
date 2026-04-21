import { useState } from "react";
import { generateMusic } from "./api";

export default function Dashboard() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    setLoading(true);
    try {
      const data = await generateMusic();
      setTrack(data);
    } catch (e) {
      setTrack({ error: "API failed" });
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>🎧 OmniCreate AI</h1>

      <button onClick={run} disabled={loading}>
        {loading ? "Generating..." : "Generate AI Beat"}
      </button>

      {track && (
        <pre style={{ marginTop: 20 }}>
          {JSON.stringify(track, null, 2)}
        </pre>
      )}
    </div>
  );
}
