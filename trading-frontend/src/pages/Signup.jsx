import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";

const FOCUS = [
  "Long Term Trading",
  "Swing Trading",
  "Day Trading",
  "Portfolio Management",
];

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age_group: "",
    trading_expertise: "",
    focus_areas: [],
  });

  function toggleFocus(v) {
    setForm((p) => ({
      ...p,
      focus_areas: p.focus_areas.includes(v)
        ? p.focus_areas.filter((x) => x !== v)
        : [...p.focus_areas, v],
    }));
  }

  async function submit(e) {
    e.preventDefault();

    if (!form.age_group || !form.trading_expertise) {
      alert("Please select age group and trading expertise");
      return;
    }

    try {
      const res = await api.post("/auth/signup", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.detail || "Signup failed");
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
            to="/login"
            className="text-xs tracking-ultra uppercase text-stone-400 hover:text-gold transition"
          >
            Member Login
          </Link>
        </header>

        {/* ================= MAIN ================= */}
        <main className="flex-1 px-8 md:px-16 lg:px-24 py-20 flex justify-center">
          <div className="w-full max-w-2xl bg-[#0e141b]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-stone-400">

            {/* LABEL */}
            <p className="text-xs tracking-ultra uppercase text-gold mb-4">
              Access Request
            </p>

            {/* TITLE */}
            <h1 className="text-2xl md:text-3xl font-serif tracking-tight text-white mb-6">
              Join a disciplined<br />
              trading environment.
            </h1>

            {/* SUBTEXT */}
            <p className="text-sm md:text-base text-stone-400 leading-relaxed max-w-xl mb-14">
              Chai Street is a private trading community built around
              risk control, context, and long-term capital preservation.
            </p>

            {/* FORM */}
            <form onSubmit={submit} className="space-y-10">

              {/* NAME */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs tracking-ultra uppercase mb-3 text-stone-400">
                    First Name
                  </label>
                  <input
                    value={form.first_name}
                    onChange={(e) =>
                      setForm({ ...form, first_name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-gold transition"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-ultra uppercase mb-3 text-stone-400">
                    Last Name
                  </label>
                  <input
                    value={form.last_name}
                    onChange={(e) =>
                      setForm({ ...form, last_name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-gold transition"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-xs tracking-ultra uppercase mb-3 text-stone-400">
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
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
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-gold transition"
                />
              </div>

              {/* AGE GROUP */}
              <div>
                <label className="block text-xs tracking-ultra uppercase mb-3 text-stone-400">
                  Age Group
                </label>
                <select
                  value={form.age_group}
                  onChange={(e) =>
                    setForm({ ...form, age_group: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-gold transition"
                >
                  <option value="" className="bg-[#0b0f14] text-stone-400">
                    Select age group
                  </option>
                  <option value="20-30" className="bg-[#0b0f14]">20–30</option>
                  <option value="30-40" className="bg-[#0b0f14]">30–40</option>
                  <option value="40-50" className="bg-[#0b0f14]">40–50</option>
                </select>
              </div>

              {/* EXPERTISE */}
              <div>
                <label className="block text-xs tracking-ultra uppercase mb-3 text-stone-400">
                  Trading Expertise
                </label>
                <select
                  value={form.trading_expertise}
                  onChange={(e) =>
                    setForm({ ...form, trading_expertise: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-white/30 py-3 text-white focus:outline-none focus:border-gold transition"
                >
                  <option value="" className="bg-[#0b0f14] text-stone-400">
                    Select expertise
                  </option>
                  <option value="beginner" className="bg-[#0b0f14]">Beginner</option>
                  <option value="advanced" className="bg-[#0b0f14]">Advanced</option>
                  <option value="expert" className="bg-[#0b0f14]">Expert</option>
                </select>
              </div>

              {/* FOCUS AREAS */}
              <div>
                <label className="block text-xs tracking-ultra uppercase mb-4 text-stone-400">
                  Primary Focus
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {FOCUS.map((f) => (
                    <button
                      key={f}
                      type="button"
                      onClick={() => toggleFocus(f)}
                      className={`
                        h-12 flex items-center justify-center
                        text-xs tracking-ultra uppercase
                        rounded-full transition-all
                        ${
                          form.focus_areas.includes(f)
                            ? "border border-gold text-gold bg-gold/10 shadow-[0_0_0_1px_rgba(212,175,55,0.3)]"
                            : "border border-white/30 text-stone-400 hover:border-gold hover:text-gold"
                        }
                      `}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="group flex items-center gap-4 text-xs tracking-ultra uppercase text-gold hover:text-white transition"
              >
                <span className="border-b border-gold pb-1 group-hover:border-white transition">
                  Submit Request
                </span>
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
            </form>

            {/* DISCLAIMER */}
            <p className="mt-16 text-xs text-stone-500 leading-relaxed max-w-md">
              By submitting this form, you acknowledge that access is subject
              to review and approval. Not all applications are accepted.
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
