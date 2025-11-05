'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU } from './Menu';

export default function Sidebar({ role = 'user' }: { role?: 'user' | 'admin' }) {
  const pathname = usePathname();
  const items = MENU.filter(m => !m.roles || m.roles.includes(role));

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white">
      <div className="px-4 py-4 text-lg font-semibold">Pyeongtaek AI</div>
      <nav className="flex flex-col gap-1 px-2 pb-6">
        {items.map(item => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-3 py-2 text-sm ${
                active
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
