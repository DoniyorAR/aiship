export default function Page() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">G3 — Tree Measurement</h1>
      <p className="text-sm text-gray-600">
        RGB-only flow (and optional LiDAR) for height, DBH, volume, and health index.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">Upload / Capture</h2>
          <p className="text-sm text-gray-500">Drop an image to run segmentation & measurement.</p>
        </div>
        <div className="rounded-lg border bg-white p-4">
          <h2 className="font-medium">Latest Results</h2>
          <p className="text-sm text-gray-500">Recent measurements, health %, and history.</p>
        </div>
      </div>
    </section>
  );
}
