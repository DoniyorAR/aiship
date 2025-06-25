import { useEffect, useState } from 'react'
import DataValidationTabs from '../../components/DataValidationTabs'

const CSV_FILES = [
  'data1.csv',
  'data2.csv',
  'data3.csv',
  'data4.csv',
  'data5.csv',
];

function parseCSV(text) {
  const lines = text.trim().split('\n').filter(Boolean);
  if (lines.length === 0) return { columns: [], rows: [] };
  const columns = lines[0].split(',');
  const rows = lines.slice(1).map(l => l.split(','));
  return { columns, rows };
}

function getDataQuality({ columns, rows }) {
  const numRows = rows.length;
  const numFeatures = columns.length;
  const missingPerCol = columns.map((col, i) => (
    rows.reduce((acc, row) => acc + (row[i] === '' || row[i] === undefined ? 1 : 0), 0)
  ));
  const totalMissing = missingPerCol.reduce((a, b) => a + b, 0);
  const percentMissing = numRows === 0 ? 0 : Math.round(100 * totalMissing / (numRows * numFeatures));
  return { numRows, numFeatures, missingPerCol, totalMissing, percentMissing };
}

function MissingBar({ value, max, label }) {
  const percent = max === 0 ? 0 : Math.round((value / max) * 100);
  return (
    <div className="flex items-center mb-1">
      <span className="w-28 text-xs text-blue-900">{label}</span>
      <div className="h-3 bg-blue-100 rounded flex-1 mx-2 overflow-hidden">
        <div className="h-3 bg-red-400" style={{ width: `${percent}%` }} />
      </div>
      <span className="w-10 text-right text-xs">{value}</span>
    </div>
  );
}

export default function DataQuality() {
  const [quality, setQuality] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      CSV_FILES.map(filename =>
        fetch(`/${filename}`)
          .then(res => res.ok ? res.text() : '')
          .then(text => {
            const { columns, rows } = parseCSV(text);
            const quality = getDataQuality({ columns, rows });
            return { filename, columns, ...quality };
          })
      )
    ).then(arr => {
      const data = {};
      arr.forEach(q => data[q.filename] = q);
      setQuality(data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <DataValidationTabs active="Data Quality" />
      <h1 className="text-2xl font-bold mb-6">Data Quality Report</h1>
      {loading && <div className="text-blue-700">Loading data quality analysis…</div>}
      <div className="grid md:grid-cols-2 gap-8">
        {CSV_FILES.map(name => {
          const q = quality[name];
          if (!q) return (
            <div key={name} className="bg-white rounded-xl shadow p-5">
              <h3 className="text-blue-900 font-semibold mb-2">{name}</h3>
              <div className="text-gray-400">Loading…</div>
            </div>
          );
          return (
            <div key={name} className="bg-white rounded-xl shadow p-5 flex flex-col">
              <h3 className="text-blue-900 font-semibold mb-2">{name}</h3>
              <div className="mb-2">
                <b>Rows:</b> {q.numRows} &nbsp; | &nbsp;
                <b>Features:</b> {q.numFeatures} &nbsp; | &nbsp;
                <b>Missing values:</b> {q.totalMissing} ({q.percentMissing}%)
              </div>
              <div className="mb-1 text-sm text-blue-900">Columns:</div>
              <div className="mb-4 flex flex-wrap gap-2">
                {q.columns.map((col, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 rounded px-2 py-1 text-xs">{col}</span>
                ))}
              </div>
              <div className="mb-2 text-sm text-blue-900 font-semibold">Missing values per column</div>
              <div className="mb-2">
                {q.columns.map((col, i) => (
                  <MissingBar key={i} label={col} value={q.missingPerCol[i]} max={q.numRows} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
      <div className="text-xs text-gray-500 mt-6">
        Note: CSV files must be present in the <code>/public</code> folder. Only empty fields are counted as missing values.
      </div>
    </section>
  );
}
