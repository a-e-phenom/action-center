import React from 'react';

interface StatusChipsProps {
  activeStatus: string;
  onStatusChange: (status: string) => void;
  statusCounts: {
    open: number;
    completed: number;
    expired: number;
  };
}

export function StatusChips({ activeStatus, onStatusChange, statusCounts }: StatusChipsProps) {
  const statusOptions = [
    { id: 'open', label: 'Open', count: statusCounts.open },
    { id: 'completed', label: 'Completed', count: statusCounts.completed },
    { id: 'expired', label: 'Expired', count: statusCounts.expired }
  ];

  return (
    <div className="flex gap-2">
      {statusOptions.map((status) => (
        <button
          key={status.id}
          onClick={() => onStatusChange(status.id)}
          className={`flex items-center gap-2 px-[10px] py-[6px] rounded-[8px] text-sm  transition-colors
            ${
              activeStatus === status.id
                ? 'bg-[#EAE8FB] text-[#353B46] font-medium'
                : 'bg-white text-[#637085] border border-[#D1D5DC] hover:bg-gray-50'
            }`}
        >
          <span>{status.label}</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-[6px] font-medium
              ${
                activeStatus === status.id
                  ? 'bg-white text-[#637085]'
                  : 'bg-[#F4F6FA] text-[#637085]'
              }`}
          >
            {status.count}
          </span>
        </button>
      ))}
    </div>
  );
}
