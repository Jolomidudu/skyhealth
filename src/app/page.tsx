import Link from "next/link";
import {
  Heart,
  Calendar,
  Shield,
  Zap,
  ArrowRight,
  Stethoscope,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/40 to-sky-50 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-700 flex items-center justify-center shadow-lg shadow-blue-700/30">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 h-6 text-white"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              SkyHealth
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
              Care · Manage · Heal
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-700 transition">
            Features
          </a>
          <a href="#how" className="hover:text-blue-700 transition">
            How it works
          </a>
          <Link
            href="/dashboard"
            className="text-blue-700 hover:text-blue-800 transition"
          >
            Dashboard
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-flex text-sm font-medium text-slate-600 hover:text-slate-900 px-4 py-2"
          >
            Sign in
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-blue-700/25 transition"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Trusted by 120+ hospitals worldwide
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
              Smarter care.
              <br />
              Better outcomes.
              <br />
              <span className="text-blue-700">Together.</span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-md">
              Powerful hospital management for patients, doctors, and staff.
              Appointments, records, and care coordination — all in one secure
              platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-7 py-3.5 rounded-xl shadow-xl shadow-blue-700/30 transition-all hover:scale-[1.02]"
              >
                Explore Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-7 py-3.5 rounded-xl border border-slate-200 shadow-sm transition"
              >
                Get Started
              </Link>
            </div>

            {/* Feature pills */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Heart, label: "Patient Care" },
                { icon: Calendar, label: "Smart Scheduling" },
                { icon: Shield, label: "Secure & Private" },
                { icon: Zap, label: "Fast & Reliable" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-white/70 backdrop-blur border border-white shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-700 text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Phone mockups */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Phone 1 - Dashboard */}
            <div className="relative z-10 w-[280px] sm:w-[300px] bg-white rounded-[2.5rem] shadow-2xl shadow-slate-900/20 border-[8px] border-slate-900 overflow-hidden">
              {/* Status bar */}
              <div className="bg-slate-50 px-5 pt-3 pb-2 flex justify-between items-center text-[10px] font-medium text-slate-600">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="w-4 h-2.5 bg-slate-400 rounded-sm" />
                  <div className="w-3 h-2.5 bg-slate-400 rounded-sm" />
                  <div className="w-2 h-2.5 bg-slate-400 rounded-sm" />
                </div>
              </div>

              {/* App header */}
              <div className="px-4 py-3 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-700 flex items-center justify-center">
                    <Stethoscope className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-sm text-slate-900">
                    SkyHealth
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <span className="text-xs">🔔</span>
                </div>
              </div>

              <div className="p-4 space-y-4 pb-16">
                {/* Search */}
                <div className="bg-slate-100 rounded-xl px-3 py-2 text-xs text-slate-400">
                  Search patients, appointments or staff...
                </div>

                {/* Today's Schedule */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-4 text-white relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <p className="text-xs font-medium text-blue-100">
                    Today&apos;s Schedule
                  </p>
                  <p className="text-2xl font-bold mt-1">12 appointments</p>
                  <button className="mt-3 bg-white/20 hover:bg-white/30 text-xs font-semibold px-3 py-1.5 rounded-lg backdrop-blur">
                    View All →
                  </button>
                </div>

                {/* Upcoming */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-bold text-slate-800">
                      Upcoming Appointments
                    </h3>
                    <span className="text-[10px] text-blue-600 font-medium">
                      See all
                    </span>
                  </div>
                  <div className="flex gap-2 overflow-hidden">
                    {[
                      { dept: "Cardiology", raised: "$3,240", pct: 67 },
                      { dept: "Pediatrics", raised: "$1,860", pct: 57 },
                    ].map((a) => (
                      <div
                        key={a.dept}
                        className="flex-shrink-0 w-28 bg-slate-50 rounded-xl p-2.5 border border-slate-100"
                      >
                        <div className="w-full h-16 bg-gradient-to-br from-blue-100 to-sky-100 rounded-lg mb-2 flex items-center justify-center">
                          <Users className="w-6 h-6 text-blue-500" />
                        </div>
                        <p className="text-[10px] font-semibold text-slate-800 truncate">
                          {a.dept}
                        </p>
                        <p className="text-[9px] text-slate-500">{a.raised}</p>
                        <div className="mt-1 h-1 bg-slate-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${a.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Departments */}
                <div>
                  <h3 className="text-sm font-bold text-slate-800 mb-2">
                    Browse by Department
                  </h3>
                  <div className="grid grid-cols-4 gap-2">
                    {["❤️", "👶", "🚨", "🦴"].map((emoji, i) => (
                      <div
                        key={i}
                        className="aspect-square bg-slate-50 rounded-xl flex items-center justify-center text-lg border border-slate-100"
                      >
                        {emoji}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom nav */}
              <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-4 py-2 flex justify-around items-center text-[9px] text-slate-500">
                <div className="flex flex-col items-center gap-0.5 text-blue-600">
                  <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center">
                    🏠
                  </div>
                  Home
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span>🔍</span> Explore
                </div>
                <div className="w-10 h-10 -mt-5 rounded-full bg-blue-700 flex items-center justify-center text-white shadow-lg">
                  +
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span>🔔</span> Alerts
                </div>
                <div className="flex flex-col items-center gap-0.5">
                  <span>👤</span> Profile
                </div>
              </div>
            </div>

            {/* Phone 2 - Doctor profile (offset) */}
            <div className="absolute -right-4 sm:right-0 top-12 w-[240px] sm:w-[260px] bg-white rounded-[2.2rem] shadow-2xl shadow-slate-900/15 border-[7px] border-slate-800 overflow-hidden scale-90 origin-top-right hidden sm:block">
              <div className="bg-slate-50 px-4 pt-2.5 pb-1.5 flex justify-between text-[9px] text-slate-500">
                <span>9:41</span>
                <div className="flex gap-0.5">
                  <div className="w-3 h-2 bg-slate-400 rounded-sm" />
                </div>
              </div>
              <div className="relative">
                <div className="h-28 bg-gradient-to-br from-blue-100 to-sky-200 flex items-end justify-center pb-2">
                  <div className="w-20 h-20 rounded-full bg-white border-4 border-white shadow-md overflow-hidden flex items-center justify-center text-3xl">
                    👩‍⚕️
                  </div>
                </div>
                <div className="px-4 pt-2 pb-4">
                  <p className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">
                    Education
                  </p>
                  <h3 className="text-base font-bold text-slate-900">
                    Dr. Aisha Okoro
                  </h3>
                  <p className="text-xs text-blue-600 font-medium">
                    Cardiology
                  </p>
                  <p className="text-[10px] text-slate-500 mt-1.5 leading-snug">
                    Give Aisha the chance to continue her education and build a
                    brighter future.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full w-[78%] bg-blue-500 rounded-full" />
                    </div>
                    <span className="text-[10px] font-bold text-slate-700">
                      78%
                    </span>
                  </div>
                  <div className="mt-2 flex justify-between text-[9px] text-slate-500">
                    <span>12 active patients</span>
                    <span>98% satisfaction</span>
                  </div>
                  <button className="mt-3 w-full bg-blue-700 text-white text-xs font-semibold py-2.5 rounded-xl">
                    Schedule Visit →
                  </button>
                  <div className="mt-3 pt-3 border-t border-slate-100">
                    <p className="text-[10px] font-semibold text-slate-700">
                      About the doctor
                    </p>
                    <p className="text-[9px] text-slate-500 mt-1 leading-relaxed">
                      Aisha is a bright and determined cardiologist with a
                      passion for patient-centered care.
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-[9px] text-slate-400">
                      <span className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-[8px]">
                        🏥
                      </span>
                      Managed by SkyHealth Hospital · Lagos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "50k+", label: "Patients served" },
            { value: "1,200+", label: "Healthcare providers" },
            { value: "99.9%", label: "Uptime guarantee" },
            { value: "24/7", label: "Support available" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-blue-700">
                {stat.value}
              </p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Features section */}
      <section id="features" className="relative z-10 bg-white py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-bold text-slate-900">
              Everything you need to run a modern hospital
            </h2>
            <p className="mt-3 text-slate-600">
              From smart scheduling to secure patient records — SkyHealth brings
              your entire care team together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Smart Scheduling",
                desc: "AI-assisted appointment booking that reduces no-shows and optimizes doctor availability.",
              },
              {
                icon: Users,
                title: "Patient Portal",
                desc: "Patients can view records, book visits, message their care team, and track treatment progress.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "HIPAA-ready encryption, role-based access, and full audit trails for complete peace of mind.",
              },
              {
                icon: Stethoscope,
                title: "Clinical Workflows",
                desc: "Customizable care pathways, e-prescribing, lab integrations, and real-time collaboration.",
              },
              {
                icon: Clock,
                title: "Real-time Insights",
                desc: "Live dashboards for occupancy, wait times, revenue, and quality metrics.",
              },
              {
                icon: CheckCircle2,
                title: "Care Coordination",
                desc: "Seamless handoffs between departments, specialists, and external partners.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/5 transition group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-700 group-hover:text-white transition">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-20 bg-gradient-to-br from-blue-700 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to transform your hospital?
          </h2>
          <p className="mt-4 text-blue-100 text-lg">
            Join hundreds of healthcare organizations already delivering better
            care with SkyHealth.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 bg-white text-blue-800 font-semibold px-8 py-3.5 rounded-xl shadow-lg hover:bg-blue-50 transition"
            >
              Launch Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 border-2 border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900 text-slate-400 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-white">SkyHealth</span>
          </div>
          <p className="text-sm">
            © 2026 SkyHealth. Care · Manage · Heal. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
