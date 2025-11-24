// app/dashboard/page.tsx
export const dynamic = 'force-dynamic'; // ⚡ Important pour éviter le build fetch

import { fetchLatestInvoices } from '../lib/data'; // adapte le chemin si nécessaire

export default async function DashboardPage() {
  const invoices = await fetchLatestInvoices(); // fetch au runtime
  return (
    <div>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(invoices, null, 2)}</pre>
    </div>
  );
}
