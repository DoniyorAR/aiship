import DataValidationTabs from '../../components/DataValidationTabs'
import { useEffect, useState } from 'react'

const CSV_FILES = [
  'data1.csv',
  'data2.csv',
  'data3.csv',
  'data4.csv',
  'data5.csv',
];

function parsePreview(csvText) {
  const lines = csvText.split('\n').slice(0, 6);
  return lines.map((line, i) => (
    <tr key={i}>
      {line.split(',').map((cell, j) => (
        <td key={j} className="px-2 py-1 border border-blue-100 text-xs">{cell}</td>
      ))}
    </tr>
  ));
}

export default function Datasets() {
  const [previews, setPreviews] = useState({});

  useEffect(() => {
    CSV_FILES.forEach(filename => {
      fetch(`/${filename}`)
        .then(res => res.ok ? res.text() : '')
        .then(text => {
          setPreviews(prev => ({
            ...prev,
            [filename]: text,
          }));
        });
    });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <DataValidationTabs active="Datasets" />
      <h1 className="text-2xl font-bold mb-6">Datasets Overview</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {CSV_FILES.map(name => (
          <div key={name} className="bg-white rounded-xl shadow p-5 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-blue-900 font-semibold">{name}</h3>
              <a
                href={`/${name}`}
                download
                className="text-blue-500 underline text-sm"
              >
                Download
              </a>
            </div>
            <div className="overflow-x-auto border rounded-md bg-blue-50 mb-3">
              <table className="min-w-max">
                <tbody>
                  {previews[name]
                    ? parsePreview(previews[name])
                    : <tr><td className="p-2 text-gray-400">Loading preview…</td></tr>}
                </tbody>
              </table>
            </div>
            <div className="text-xs text-gray-500">
              Preview shows first 5 rows of CSV file.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
