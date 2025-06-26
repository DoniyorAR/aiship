import AiModelTabs from '../../components/AiModelTabs'

/** Example: this would come from the submitted results file */
const submitted = {
  task: "classification", // or 'regression'
  reported: {
    Accuracy: 0.89,
    Precision: 0.88,
    Recall: 0.9,
    F1: 0.89,
    // AUC: 0.91, // Uncomment to test missing metric warning
  },
  confusionMatrix: {
    TP: 90,
    FP: 10,
    FN: 15,
    TN: 85,
  },
};

const requiredForTask = {
  classification: ['Accuracy', 'Precision', 'Recall', 'F1', 'AUC'],
  regression: ['MAE', 'RMSE', 'R2'],
};

function checkRequired(task, reported) {
  const required = requiredForTask[task] || [];
  return required.map(metric => ({
    metric,
    present: metric in reported,
    value: reported[metric] ?? null,
  }));
}

// Example: Validate F1 from precision & recall
function validateF1(precision, recall, f1) {
  if (!precision || !recall || !f1) return null;
  const expected = (2 * precision * recall) / (precision + recall);
  return Math.abs(expected - f1) < 0.01;
}

// Example: Validate accuracy from confusion matrix
function validateAccuracy(matrix, accuracy) {
  if (!matrix || accuracy === undefined) return null;
  const total = matrix.TP + matrix.FP + matrix.FN + matrix.TN;
  const expected = (matrix.TP + matrix.TN) / total;
  return Math.abs(expected - accuracy) < 0.01;
}

export default function Metrics() {
  const { task, reported, confusionMatrix } = submitted;
  const requirements = checkRequired(task, reported);

  const f1Valid = validateF1(reported.Precision, reported.Recall, reported.F1);
  const accValid = validateAccuracy(confusionMatrix, reported.Accuracy);

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <AiModelTabs active="Metrics" />
      <h1 className="text-2xl font-bold mb-6">AI Model Metrics Validation</h1>

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="font-semibold text-blue-900 mb-3">Submitted Metrics</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(reported).map(([key, val]) => (
            <div key={key} className="flex flex-col items-center bg-blue-50 p-4 rounded-xl shadow">
              <span className="text-sm text-blue-900 font-semibold">{key}</span>
              <span className="text-2xl font-extrabold text-blue-700">{(val * 100).toFixed(2)}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="font-semibold text-blue-900 mb-3">Metrics Presence Check</h2>
        <table className="min-w-full text-left border">
          <thead>
            <tr className="bg-blue-100">
              <th className="py-2 px-3 font-semibold">Metric</th>
              <th className="py-2 px-3 font-semibold">Required</th>
              <th className="py-2 px-3 font-semibold">Reported</th>
              <th className="py-2 px-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {requirements.map(r => (
              <tr key={r.metric} className={r.present ? "" : "bg-red-50"}>
                <td className="py-2 px-3">{r.metric}</td>
                <td className="py-2 px-3 text-blue-900">{'Yes'}</td>
                <td className="py-2 px-3">
                  {r.present ? (r.value * 100).toFixed(2) + '%' : <span className="text-red-700">Missing</span>}
                </td>
                <td className="py-2 px-3">
                  {r.present ? (
                    <span className="text-green-700">✔️</span>
                  ) : (
                    <span className="text-red-600">⚠️ Missing</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-2 text-sm text-gray-500">
          <b>Note:</b> All required metrics should be reported for the <span className="font-semibold">{task}</span> task.
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="font-semibold text-blue-900 mb-3">Metrics Consistency Validation</h2>
        <ul className="list-disc ml-8">
          <li>
            <b>F1 Score: </b>
            {f1Valid === null ? (
              <span className="text-gray-600">Not enough data to check.</span>
            ) : f1Valid ? (
              <span className="text-green-700">Correctly calculated.</span>
            ) : (
              <span className="text-red-600 font-bold">Mismatch! F1 does not match precision/recall.</span>
            )}
          </li>
          <li>
            <b>Accuracy: </b>
            {accValid === null ? (
              <span className="text-gray-600">Not enough data to check.</span>
            ) : accValid ? (
              <span className="text-green-700">Correctly calculated from confusion matrix.</span>
            ) : (
              <span className="text-red-600 font-bold">Mismatch! Accuracy does not match confusion matrix.</span>
            )}
          </li>
        </ul>
      </div>

      <div className="bg-blue-50 rounded-xl shadow p-6 text-blue-800 mt-6">
        <b>Tip:</b> This page verifies the **presence** and **correctness** of submitted evaluation metrics. For auditing, always require teams to upload their confusion matrix or prediction table along with summary metrics.
      </div>
    </section>
  )
}
