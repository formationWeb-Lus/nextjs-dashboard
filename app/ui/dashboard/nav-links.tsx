'use client';

import {
  HomeIcon,
  UserGroupIcon,
  DocumentDuplicateIcon,
  BuildingOffice2Icon, // Icône Acme
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4">
      {/* 🔹 Logo Section */}
      <div className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg shadow-md">
        <BuildingOffice2Icon className="w-6 h-6" />
        <h1 className="text-lg font-bold tracking-wide">Acme</h1>
      </div>

      {/* 🔹 Navigation Links */}
      <div className="flex flex-col gap-2">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex items-center gap-3 rounded-md p-3 text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-700 hover:bg-sky-100 hover:text-blue-600'
              )}
            >
              <LinkIcon className="w-6 h-6 flex-shrink-0" />
              <span>{link.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
