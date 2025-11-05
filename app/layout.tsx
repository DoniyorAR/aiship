
import './globals.css';
import Topbar from '@/components/Topbar';
import Sidebar from '@/components/Sidebar';

export const metadata = {
  title: 'Pyeongtaek Smart Platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // TODO: wire real role from auth/session
  const role: 'user' | 'admin' = 'admin';

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <Topbar />
        <div className="mx-auto flex max-w-screen-2xl">
          <Sidebar role={role} />
          <main className="flex-1 p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
