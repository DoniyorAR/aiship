export default function Page() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Data Fusion</h1>
      <p className="text-sm text-gray-600">
        Feature engineering and alignment across sensors and public APIs.
      </p>
      <div className="rounded-lg border bg-white p-4">
        <h2 className="font-medium">Schema</h2>
        <p className="text-sm text-gray-500">RDF-compatible tables: sensors, climate, hydrology, risk labels.</p>
      </div>
    </section>
  );
}
