'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface SearchProps {
  placeholder?: string;
  initialQuery?: string;
}

export default function Search({ placeholder, initialQuery = '' }: SearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/dashboard/invoices?query=${encodeURIComponent(query)}&page=1`);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      className="border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}
