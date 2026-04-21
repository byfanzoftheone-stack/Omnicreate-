import { useState } from "react";

export default function App() {
  const api = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState("Idle");

  const generate = async () => {
    setLoading(true);
    setStatus("Generating beat...");
    setResult(null);

    try {
      const res = await fetch(`${api}/api/generate-music`, {
        method: "POST"
      });

      const data = await res.json();

      setResult(data);
      setStatus("Complete");
    } catch (err) {
      setStatus("Failed to connect to API");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>🎧 OmniCreate AI</h1>

      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate Beat"}
      </button>

      <p>Status: {status}</p>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Result:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
