import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'edit age',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound(); // 👈 redirige vers not-found.tsx
  }

  // ... ton formulaire ici
}
