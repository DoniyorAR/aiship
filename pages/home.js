import Layout from '../components/Layout'

export default function Home() {
  return (
    <section className="relative z-0">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 tracking-tight">
            AI Model & Dataset <span className="text-yellow-500">Validation</span> Platform
          </h1>
          <p className="text-lg text-blue-700 mb-8">
            <span className="font-semibold">Ship</span> is your all-in-one solution for data quality checks, project tracking, AI model evaluation, and explainability. Secure, collaborative, and built for transparency.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <FeatureCard title="Project Workflow" desc="Track and manage every step of your AI journey with timelines and real-time updates." icon="🚀" />
            <FeatureCard title="Data Validation" desc="Detect, explore, and validate datasets before model training for robust AI solutions." icon="🧬" />
            <FeatureCard title="Explainability" desc="Use interactive tools to make AI model predictions more understandable and trusted." icon="🔎" />
          </div>
          <a href="/datavalidation/datasets" className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full shadow transition">
            Get Started
          </a>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src="/project-figure.png"
            alt="Ship platform workflow"
            className="rounded-3xl shadow-2xl border-8 border-white w-full max-w-4xl h-auto object-contain"
            style={{ maxHeight: '80vh' }}
          />
        </div>
      </div>
      <svg className="absolute left-0 right-0 bottom-0 z-[-1]" height="100" width="100%" viewBox="0 0 1440 320">
        <path fill="#1e3a8a" fillOpacity="0.10"
          d="M0,192L60,213.3C120,235,240,277,360,282.7C480,288,600,256,720,218.7C840,181,960,139,1080,128C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
      </svg>
    </section>
  )
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center text-center hover:scale-105 transition">
      <span className="text-4xl mb-2">{icon}</span>
      <h3 className="font-bold text-blue-900 mb-1">{title}</h3>
      <p className="text-blue-600 text-sm">{desc}</p>
    </div>
  )
}
