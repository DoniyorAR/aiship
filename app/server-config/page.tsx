export default function Page() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Server Configuration</h1>
      <p className="text-sm text-gray-600">
        Hosts, GPUs, RTSP endpoints, NGINX, swagger URLs, and environment notes.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">University Server</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
            <li>ZeroTier IP: 192.168.xxx.xxx</li>
            <li>2× RTX 3090, 32GB RAM</li>
            <li>FastAPI + NGINX + PostgreSQL</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">Hostinger Edge</h2>
          <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
            <li>Reverse proxy to campus via SSH tunnel</li>
            <li>Static Next.js + API gateway</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
