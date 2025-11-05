// components/Menu.ts
export type MenuItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  roles?: Array<'user' | 'admin'>; // omit or include to restrict
};

export const MENU: MenuItem[] = [
  { label: 'Overall',            href: '/' },
  { label: 'WBS Schedule',       href: '/wbs' },
  { label: 'Server Configuration', href: '/server-config', roles: ['admin'] },
  { label: 'G3 Tree Measurement', href: '/g3' },
  { label: 'G7 Project',         href: '/g7' },
  { label: 'Data Fusion',        href: '/fusion' },
  { label: 'About Project',      href: '/about' },
];
