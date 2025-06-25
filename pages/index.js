import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("gachon_ai_auth") === "1") {
      router.replace("/home");
    }
  }, [router]);

  function handleSubmit(e) {
    e.preventDefault();
    if (id === "gachon522" && password === "gachonaisc") {
      localStorage.setItem("gachon_ai_auth", "1");
      router.replace("/home");
    } else {
      setError("Invalid ID or password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-800">AI & Smart City Lab Login</h1>
        <label className="block mb-2 text-blue-900 font-semibold">ID</label>
        <input
          className="w-full p-2 border rounded mb-4"
          value={id}
          onChange={e => setId(e.target.value)}
          autoFocus
        />
        <label className="block mb-2 text-blue-900 font-semibold">Password</label>
        <input
          className="w-full p-2 border rounded mb-4"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <div className="text-red-600 mb-4 text-sm">{error}</div>}
        <button
          className="w-full bg-blue-800 hover:bg-blue-600 text-white font-bold py-2 rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
