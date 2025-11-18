import Search from '@/app/ui/search';
import Pagination from '@/app/ui/invoices/pagination';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { fetchInvoicesPages } from '@/app/lib/data';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  // 👉 Fait côté serveur (pas besoin de useState / useEffect)
  const totalPages = await fetchInvoicesPages(query);

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
