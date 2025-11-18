'use client';

import { useState, useEffect } from 'react';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

interface Props {
  query: string;
  currentPage: number;
}

export default function InvoicesClient({ query, currentPage }: Props) {
  // On simule totalPages pour éviter l'appel direct à la DB côté client
  const [totalPages, setTotalPages] = useState<number | null>(null);

  // Exemple de récupération via API Route côté serveur
  useEffect(() => {
    async function fetchTotalPages() {
      try {
        const res = await fetch(`/api/invoices/pages?query=${query}`);
        const data = await res.json();
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error('Erreur API:', err);
      }
    }

    fetchTotalPages();
  }, [query]);

  if (totalPages === null) return <InvoicesTableSkeleton />;

  return (
    <div className="mt-4 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-2">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>

      <Table query={query} currentPage={currentPage} />

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
