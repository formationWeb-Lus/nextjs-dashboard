import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  const customer = customers.find(c => c.id === invoice.customer_id);

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold">Edit Invoice #{invoice.id}</h1>

      <div className="mt-4">
        <p><strong>Customer:</strong> {customer?.name ?? 'Unknown'}</p>
        <p><strong>Amount:</strong> {invoice.amount}</p>
        <p><strong>Status:</strong> {invoice.status}</p>
      </div>

      {/* Ici tu peux ajouter un formulaire Client Component si nécessaire */}
    </div>
  );
}
