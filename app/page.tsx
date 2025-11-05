export default function Page() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Overall</h1>
      <p className="text-sm text-gray-600">
        Unified overview of G3 (Tree Measurement), G7 (Hazard & Data Fusion), and infra status.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">G3 Status</h2>
          <p className="text-sm text-gray-500">Latest model, last run, sample results…</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">G7 Hazard & Fusion</h2>
          <p className="text-sm text-gray-500">KMA/K-water links, fusion pipeline %…</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">Servers</h2>
          <p className="text-sm text-gray-500">GPU usage, RTSP nodes, API health…</p>
        </div>
      </div>
    </section>
  );
}
