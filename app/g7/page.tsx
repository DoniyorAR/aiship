export default function Page() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">G7 — Hazard Risk & Data Fusion</h1>
      <p className="text-sm text-gray-600">
        Hazard risk prediction with soil sensors + public datasets (KMA, K-water, etc.).
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">Fusion Pipeline</h2>
          <p className="text-sm text-gray-500">Status, % complete, last sync, feature store.</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">Risk Outputs</h2>
          <p className="text-sm text-gray-500">Slope/flood/fire risk layers and summaries.</p>
        </div>
      </div>
    </section>
  );
}
