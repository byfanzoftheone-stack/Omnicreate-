import { useState } from "react";

const API = import.meta.env.VITE_API_URL || "";

export default function Dashboard() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API}/api/generate-music`, {
        method: "POST",
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setResult({ error: "API failed" });
    }
    setLoading(false);
  };

  return (
    <div>
      <button onClick={generate}>
        {loading ? "Generating..." : "Generate Beat"}
      </button>

      {result && (
        <pre style={{ marginTop: 20 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}
