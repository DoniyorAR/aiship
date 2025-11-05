'use client';
export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-screen-2xl items-center justify-between px-4">
        <div className="text-sm font-medium text-gray-900">
          Pyeongtaek Smart Platform
        </div>
        <div className="text-xs text-gray-500">
          G3 · G7 · Fusion
        </div>
      </div>
    </header>
  );
}
