const timeline = [
  {
    phase: "Planning",
    description: "Project scope, goals, resource allocation, and initial meeting with all stakeholders.",
    start: "2025-05",
    end: "2025-06",
  },
  {
    phase: "Data Validation",
    description: "Dataset collection, cleaning, validation checks, and documentation.",
    start: "2025-06",
    end: "2025-07",
  },
  {
    phase: "AI Model Training",
    description: "Model selection, training, optimization, and initial validation.",
    start: "2025-07",
    end: "2025-09",
  },
  {
    phase: "Test Validation",
    description: "Testing models with new/holdout datasets and reporting metrics.",
    start: "2025-09",
    end: "2025-10",
  },
  {
    phase: "Explainability",
    description: "Integrating explainable AI techniques, feature importance, and visualizations.",
    start: "2025-10",
    end: "2025-11",
  },
  {
    phase: "Governance",
    description: "Ensuring compliance, fairness, auditing, and standard procedures.",
    start: "2025-10",
    end: "2025-12",
  },
  {
    phase: "Platform Development",
    description: "Front-end and back-end development for the Ship platform.",
    start: "2025-06",
    end: "2025-12",
  },
  {
    phase: "API",
    description: "API design, implementation, integration, and documentation.",
    start: "2025-11",
    end: "2025-12",
  },
];

export default function Timeline() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Project Timeline (2025)</h2>
      <div className="overflow-x-auto rounded-2xl shadow-lg bg-white">
        <table className="min-w-full text-left">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="py-3 px-5 font-semibold">Phase</th>
              <th className="py-3 px-5 font-semibold">Description</th>
              <th className="py-3 px-5 font-semibold">Start</th>
              <th className="py-3 px-5 font-semibold">End</th>
            </tr>
          </thead>
          <tbody>
            {timeline.map((item, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                <td className="py-3 px-5 font-medium text-blue-900">{item.phase}</td>
                <td className="py-3 px-5 text-blue-800">{item.description}</td>
                <td className="py-3 px-5 text-blue-700">{item.start}</td>
                <td className="py-3 px-5 text-blue-700">{item.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-gray-500 text-right mt-3">* All dates are estimated and subject to revision.</div>
    </section>
  );
}
