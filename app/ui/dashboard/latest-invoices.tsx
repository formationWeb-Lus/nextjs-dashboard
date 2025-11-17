"use client";

import Image from "next/image";

export type LatestInvoice = {
  id: string;
  name: string;
  email: string;
  amount: string;
  image_url: string;
};

export default function LatestInvoices({
  latestInvoices,
}: {
  latestInvoices: LatestInvoice[];
}) {
  return (
    <div className="mt-6 w-full">
      <h2 className="text-xl font-semibold mb-4">Latest Invoices</h2>
      <ul className="space-y-3">
        {latestInvoices.map((invoice) => (
          <li
            key={invoice.id}
            className="flex items-center justify-between p-4 bg-white shadow rounded"
          >
            <div className="flex items-center gap-3">
              <Image
                src={invoice.image_url}
                alt={invoice.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-medium">{invoice.name}</p>
                <p className="text-sm text-gray-500">{invoice.email}</p>
              </div>
            </div>

            <span className="font-semibold">{invoice.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

