import AiModelTabs from '../../components/AiModelTabs'

const splits = [
  {
    name: "Train",
    color: "from-green-400 to-green-700",
    metrics: {
      Accuracy: 0.98,
      Precision: 0.97,
      Recall: 0.96,
      F1: 0.965,
      Loss: 0.042,
    },
    samples: 12000,
  },
  {
    name: "Validation",
    color: "from-yellow-400 to-yellow-700",
    metrics: {
      Accuracy: 0.91,
      Precision: 0.89,
      Recall: 0.93,
      F1: 0.91,
      Loss: 0.17,
    },
    samples: 2500,
  },
  {
    name: "Test",
    color: "from-blue-400 to-blue-700",
    metrics: {
      Accuracy: 0.89,
      Precision: 0.88,
      Recall: 0.9,
      F1: 0.89,
      Loss: 0.19,
    },
    samples: 3000,
  },
]

function ProgressBar({ value, color }) {
  return (
    <div className="w-full h-4 rounded-xl bg-blue-100 overflow-hidden">
      <div
        className={`h-4 rounded-xl bg-gradient-to-r ${color} transition-all`}
        style={{ width: `${Math.round(value * 100)}%` }}
      />
    </div>
  )
}

export default function Validation() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <AiModelTabs active="AI Model Validation" />
      <h1 className="text-2xl font-bold mb-8">AI Model Validation</h1>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {splits.map(split => (
          <div
            key={split.name}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center text-center border-t-8"
            style={{
              borderTopColor:
                split.name === "Train"
                  ? "#22c55e"
                  : split.name === "Validation"
                  ? "#eab308"
                  : "#2563eb",
            }}
          >
            <h2 className="text-xl font-bold text-blue-900 mb-2">{split.name} Set</h2>
            <span className="text-xs text-gray-500 mb-2">Samples: {split.samples}</span>
            <div className="w-full mb-3">
              <span className="block text-blue-700 font-semibold">Accuracy</span>
              <ProgressBar value={split.metrics.Accuracy} color={split.color} />
              <span className="block mt-1 text-blue-900 text-lg font-bold">{(split.metrics.Accuracy * 100).toFixed(2)}%</span>
            </div>
            <div className="grid grid-cols-2 gap-2 w-full mb-2">
              <Metric label="Precision" value={split.metrics.Precision} />
              <Metric label="Recall" value={split.metrics.Recall} />
              <Metric label="F1" value={split.metrics.F1} />
              <Metric label="Loss" value={split.metrics.Loss} decimals={3} isLoss />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-bold mb-2 text-blue-900">Validation Summary</h3>
        <ul className="list-disc ml-6 text-blue-700 mb-2">
          <li>High training accuracy and low loss indicate strong model learning.</li>
          <li>Validation accuracy is lower, but close, indicating low overfitting.</li>
          <li>Test performance is consistent with validation, showing good generalization.</li>
          <li>Precision, recall, and F1 are all well-balanced across splits.</li>
          <li>For further insight, see confusion matrices, learning curves, and class-wise metrics.</li>
        </ul>
      </div>
    </section>
  )
}

function Metric({ label, value, decimals = 2, isLoss = false }) {
  return (
    <div className={`rounded-md px-2 py-1 flex flex-col items-center
      ${isLoss ? 'bg-red-50 text-red-700' : 'bg-blue-50 text-blue-900'}`}>
      <span className="font-semibold text-xs">{label}</span>
      <span className={`font-bold ${isLoss ? 'text-red-600' : 'text-blue-900'}`}>
        {isLoss ? value.toFixed(decimals) : (value * 100).toFixed(decimals) + "%"}
      </span>
    </div>
  )
}
