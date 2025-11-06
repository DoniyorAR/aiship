// app/page.tsx
export const metadata = {
  title: "Pyeongtaek Smart Platform — Overview",
  description: "Home overview for G3/G7 projects, WBS, server configuration, and data fusion.",
};

export default function Page() {
  const cards = [
    { href: "/overall",        title: "Overall",            desc: "High-level summary of projects and status." },
    { href: "/wbs",            title: "WBS schedule",       desc: "Work breakdown, owners, and milestones." },
    { href: "/server-config",  title: "Server Configuration",desc: "GPU/CPU, storage, services, and endpoints." },
    { href: "/g3",             title: "G3 tree measurement",desc: "LiDAR-based DBH/height/health modules." },
    { href: "/g7",             title: "G7 Project",         desc: "Underground risk prediction & monitoring." },
    { href: "/fusion",         title: "Data fusion",        desc: "Sensor + climate + CCTV + LiDAR fusion." },
    { href: "/about",          title: "About Project",      desc: "Context, team, and documentation." },
  ];

  return (
    <main className="min-h-[calc(100vh-4rem)] p-6 md:p-10">
      <section className="mb-10">
        <div className="flex items-center gap-4">
          {/* Optional logo (ensure /public/logo.png exists) */}
          <img src="/logo.png" alt="Logo" className="h-10 w-10 rounded-md" />
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Pyeongtaek Smart Platform
            </h1>
            <p className="text-sm text-gray-500">
              Overview of G3/G7 initiatives, schedules, infrastructure, and data fusion.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {cards.map((c) => (
          <a
            key={c.href}
            href={c.href}
            className="group rounded-2xl border border-gray-200 p-5 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium">{c.title}</h2>
              <span className="text-gray-400 group-hover:text-gray-600 transition">&#8594;</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">{c.desc}</p>
          </a>
        ))}
      </section>
    </main>
  );
}
