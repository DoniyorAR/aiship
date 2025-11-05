export default function Page() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">WBS Schedule</h1>
      <p className="text-sm text-gray-600">Milestones for G3, G7, Fusion, and Demo.</p>

      <div className="overflow-auto rounded-lg border bg-white p-3">
        <table className="min-w-[720px] text-sm">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="py-2 pr-4">WBS No.</th>
              <th className="py-2 pr-4">Task Title</th>
              <th className="py-2 pr-4">Project</th>
              <th className="py-2 pr-4">Owner</th>
              <th className="py-2 pr-4">Start</th>
              <th className="py-2 pr-4">Due</th>
              <th className="py-2 pr-4">Progress</th>
            </tr>
          </thead>
          <tbody>
            {/* Replace with dynamic rows */}
            <tr className="border-t">
              <td className="py-2 pr-4">1.0</td>
              <td className="py-2 pr-4">Data Fusion & Public Dataset Research</td>
              <td className="py-2 pr-4">G7</td>
              <td className="py-2 pr-4">Doni / Mr. Oh</td>
              <td className="py-2 pr-4">2025-07-01</td>
              <td className="py-2 pr-4">2025-12-10</td>
              <td className="py-2 pr-4">70%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
