const API = import.meta.env.VITE_API_URL;

export async function generateMusic() {
  const res = await fetch(`${API}/api/generate-music`, {
    method: "POST"
  });

  if (!res.ok) throw new Error("API failed");

  return await res.json();
}
