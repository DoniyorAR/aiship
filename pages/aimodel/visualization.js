import AiModelTabs from '../../components/AiModelTabs'

export default function Visualization() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <AiModelTabs active="Visualization" />
      <h1 className="text-2xl font-bold mb-6">AI Model Visualization</h1>
      <div className="bg-white p-6 rounded-xl shadow mb-4">
        <iframe
          src="https://netron.app"
          title="Netron Model Visualizer"
          width="100%"
          height="800"
          className="rounded-xl border-2 border-blue-200"
          allowFullScreen
        />
        <div className="mt-3 text-sm text-blue-900">
          <b>Tip:</b> You can open and visualize ONNX, Keras, TensorFlow, PyTorch, and other model files right inside this embedded Netron viewer.
          <br />
          If you prefer, <a href="https://netron.app" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">open Netron in a new tab</a>.
        </div>
      </div>
    </section>
  )
}
