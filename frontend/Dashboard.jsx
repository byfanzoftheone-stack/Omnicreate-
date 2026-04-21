import { useState } from "react";

export default function Dashboard() {
  const [track, setTrack] = useState(null);

  const generateMusic = async () => {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/generate-music", {
      method: "POST"
    });

    const data = await res.json();
    setTrack(data);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>OmniCreate AI</h1>

      <button onClick={generateMusic}>
        Generate AI Beat
      </button>

      {track && (
        <div>
          <p>{track.style}</p>
          <p>{track.track_id}</p>
        </div>
      )}
    </div>
  );
}
