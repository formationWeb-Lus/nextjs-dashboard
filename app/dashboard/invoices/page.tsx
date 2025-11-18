'use client';

import { useState, useEffect } from 'react';
import Search from '@/app/ui/search';
import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { fetchInvoicesPages } from '@/app/lib/data';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  // Charger le nombre total de pages
  useEffect(() => {
    async function loadPages() {
      try {
        const pages = await fetchInvoicesPages(query);
        setTotalPages(pages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadPages();
  }, [query]);

  if (loading) {
    return (
      <div className="p-6">
        <InvoicesTableSkeleton />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">

      {/* Barre de recherche */}
      <div className="flex justify-between items-center">
        <Search placeholder="Search invoices..." />
        <CreateInvoice />
      </div>

      {/* Tableau des invoices */}
      <Table query={query} currentPage={currentPage} />

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      )}
    </div>
  );
}
