export default function App() {
  const api = import.meta.env.VITE_API_URL;

  const generate = async () => {
    const res = await fetch(`${api}/api/generate-music`, {
      method: "POST"
    });
    const data = await res.json();
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>🎧 OmniCreate AI</h1>
      <button onClick={generate}>
        Generate Beat
      </button>
    </div>
  );
}
