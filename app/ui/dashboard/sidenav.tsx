import Link from 'next/link';

export default function SideNav() {
  return (
    <nav className="flex flex-col p-4 bg-gray-100 h-full">
      <h2 className="mb-4 text-lg font-semibold">Dashboard</h2>
      <Link href="/dashboard" className="mb-2 hover:text-blue-600">
        Home
      </Link>
      <Link href="/dashboard/customers" className="mb-2 hover:text-blue-600">
        Customers
      </Link>
      <Link href="/dashboard/invoices" className="hover:text-blue-600">
        Invoices
      </Link>
    </nav>
  );
}
