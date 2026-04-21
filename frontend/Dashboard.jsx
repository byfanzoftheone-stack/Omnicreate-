import React, { useEffect, useRef, useState } from "react";

export default function Dashboard() {
  const ws = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8000/ws/music/create");

    ws.current.onmessage = (e) => {
      setData(JSON.parse(e.data));
    };
  }, []);

  return (
    <div style={{ padding: 20, background: "#000", color: "#fff" }}>
      <h1>OmniCreate MVP Music Engine</h1>

      <button onClick={() => ws.current.send("random philosophical thought")}>
        Generate Song
      </button>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
