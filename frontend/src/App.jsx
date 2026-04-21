import { useState } from "react";

export default function App() {
  const API = import.meta.env.VITE_API_URL;

  const [state, setState] = useState("idle");
  const [result, setResult] = useState(null);

  const run = async () => {
    setState("loading");
    setResult(null);

    try {
      const res = await fetch(`${API}/api/generate-music`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });

      const json = await res.json();

      if (!json.track_id) {
        setState("error");
        return;
      }

      setResult(json);
      setState("success");
    } catch (e) {
      setState("error");
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>OmniCreate AI</h1>

      <button onClick={run}>
        {state === "loading" ? "Running Engine..." : "Generate"}
      </button>

      <p>Status: {state}</p>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
