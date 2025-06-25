const members = [
  {
    name: 'Professor, Cho Young-Im',
    role: 'Chief of the Lab',
    expertise: 'Gachon University Professor, HoD of ISO/IEC JTC 1/SC 42, Convenor of ISO/IEC JTC 1/SC 43 WG 5',
    image: '/prof.jpg',
    bio: 'Standards Subcommittee for the AI New Industry Committee under the Ministry of Trade.',
  },
  {
    name: 'Mr Oh Kang-Hwan',
    role: 'Project Manager',
    expertise: 'Artificial Intelligence & Software Development',
    image: '/mr_oh.png',
    bio: 'Project Planning Leader',
  },
  {
    name: 'Mukhtorov Doni',
    role: 'Ph.D Researcher',
    expertise: 'AI researcher, Software Engineer, ISO/IEC JTC 1/SC 43/WG5 Project Editor',
    image: '/doni.jpg',
    bio: 'Expert in scaling AI systems',
  },
];

export default function Overview() {
  // Example score (could be dynamic)
  const score = 26;

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Project Score */}
      <div className="flex flex-col items-center mb-10">
        <span className="uppercase tracking-wider text-blue-700 font-bold text-lg mb-2">Project Score</span>
        <div className="relative w-32 h-32 flex items-center justify-center mb-2">
          <svg className="w-full h-full" viewBox="0 0 120 120">
            <circle
              cx="60" cy="60" r="54"
              stroke="#e0e7ef"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="60" cy="60" r="54"
              stroke="#2563eb"
              strokeWidth="12"
              fill="none"
              strokeDasharray={339.292}
              strokeDashoffset={339.292 * (1 - score / 100)}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 1s' }}
            />
          </svg>
          <span className="absolute text-4xl font-extrabold text-blue-800">{score}</span>
        </div>
        <span className="text-gray-500 text-md">Overall Progress</span>
      </div>

      {/* Members */}
      <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Team Members</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {members.map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition"
          >
            <img
              src={m.image}
              alt={m.name}
              className="w-28 h-28 object-cover rounded-full border-4 border-blue-200 mb-3 shadow"
            />
            <h3 className="text-lg font-bold text-blue-900">{m.name}</h3>
            <span className="text-blue-600 font-semibold">{m.role}</span>
            <div className="text-sm text-gray-500 mt-1 mb-2 text-center">{m.expertise}</div>
            <div className="text-gray-700 text-center">{m.bio}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
