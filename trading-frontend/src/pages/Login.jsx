import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

export default function Login() {
  const navigate = useNavigate();
  const { fetchUser } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      await fetchUser();
      navigate("/dashboard");
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  }

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at top, #1a1f26 0%, #0b0f14 55%, #070b10 100%)",
      }}
    >
      {/* GLOBAL GRID / DEPTH */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 min-h-screen flex flex-col">

        {/* ================= HEADER ================= */}
        <header className="px-8 md:px-16 lg:px-24 py-6 flex items-center justify-between border-b border-white/10">
          <Link
            to="/"
            className="text-xs tracking-ultra uppercase text-white hover:text-gold transition"
          >
            Chai Street
          </Link>

          <Link
            to="/signup"
            className="text-xs tracking-ultra uppercase text-stone-400 hover:text-gold transition"
          >
            Apply for Access
          </Link>
        </header>

        {/* ================= MAIN ================= */}
        <main className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-24">
          <div className="w-full max-w-md bg-[#0e141b]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-stone-400">

            {/* SECTION LABEL */}
            <p className="text-xs tracking-ultra uppercase text-gold mb-4">
              Member Login
            </p>

            {/* TITLE */}
            <h1 className="text-2xl md:text-3xl font-serif tracking-tight text-white mb-4">
              Welcome back.
            </h1>

            {/* SUBTEXT */}
            <p className="text-sm md:text-base text-stone-400 mb-10">
              Access your dashboard and portfolio environment.
            </p>

            {/* ERROR */}
            {error && (
              <div className="mb-8 px-4 py-3 border border-red-500/30 bg-red-500/10 text-red-400 text-sm rounded-md">
                {error}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={submit} className="space-y-8">

              {/* EMAIL */}
              <div>
                <label className="block text-xs tracking-ultra uppercase mb-3 text-stone-400">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-gold transition"
                />
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block text-xs tracking-ultra uppercase mb-3 text-stone-400">
                  Password
                </label>
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-gold transition"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="group flex items-center gap-4 text-xs tracking-ultra uppercase text-gold hover:text-white transition"
              >
                <span className="border-b border-gold pb-1 group-hover:border-white transition">
                  Sign In
                </span>
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
            </form>

            {/* LINKS */}
            <p className="mt-12 text-sm text-stone-400">
              Forgot your password?{" "}
              <Link
                to="/reset-password"
                className="text-gold border-b border-gold/40 hover:border-gold transition"
              >
                Reset it here
              </Link>
            </p>

            <p className="mt-4 text-sm text-stone-400">
              Don’t have access?{" "}
              <Link
                to="/signup"
                className="text-gold border-b border-gold/40 hover:border-gold transition"
              >
                Apply for access
              </Link>
            </p>
          </div>
        </main>

        {/* ================= FOOTER ================= */}
        <footer className="px-8 md:px-16 lg:px-24 py-6 border-t border-white/10 text-stone-500 text-xs">
          © 2026 Chai Street. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
