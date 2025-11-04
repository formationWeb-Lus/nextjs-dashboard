import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

type InvoiceStatusProps = {
  status: 'pending' | 'paid';
};

export default function InvoiceStatus({ status }: InvoiceStatusProps) {
  const statusMap = {
    pending: {
      label: 'Pending',
      icon: <ClockIcon className="ml-1 w-4 text-gray-500" />,
      className: 'bg-gray-100 text-gray-500',
    },
    paid: {
      label: 'Paid',
      icon: <CheckIcon className="ml-1 w-4 text-white" />,
      className: 'bg-green-500 text-white',
    },
  };

  const current = statusMap[status];

  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs font-medium',
        current.className
      )}
    >
      {current.label}
      {current.icon}
    </span>
  );
}
