import { useState } from "react";

export default function App() {
  const API = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const generate = async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch(`${API}/api/generate-music`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
      });

      if (!res.ok) throw new Error("API failed");

      const json = await res.json();
      setData(json);
    } catch (e) {
      setError("Generation failed");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 30, fontFamily: "Arial" }}>
      <h1>OmniCreate AI</h1>

      <button onClick={generate} disabled={loading}>
        {loading ? "Generating..." : "Generate Beat"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && (
        <div style={{ marginTop: 20 }}>
          <h3>Result</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>

          <div>
            <b>Monetized:</b> {String(data.monetized)}
          </div>
        </div>
      )}
    </div>
  );
}
