import { HomeIcon } from '@heroicons/react/24/outline';

export default function TestIcon() {
  return (
    <div className="p-6 flex items-center gap-2">
      <HomeIcon className="w-8 h-8 text-blue-600" />
      <p className="text-lg">Icône test visible</p>
    </div>
  );
}
