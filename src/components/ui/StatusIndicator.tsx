import React from 'react';

interface StatusIndicatorProps {
  status: 'open' | 'completed' | 'expired';
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'open':
        return {
          outerColor: 'bg-green-100',
          innerColor: 'bg-green-600',
          label: 'Open'
        };
      case 'completed':
        return {
          outerColor: 'bg-blue-100',
          innerColor: 'bg-blue-600',
          label: 'Completed'
        };
      case 'expired':
        return {
          outerColor: 'bg-red-100',
          innerColor: 'bg-red-600',
          label: 'Expired'
        };
      default:
        return {
          outerColor: 'bg-gray-100',
          innerColor: 'bg-gray-600',
          label: 'Unknown'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div className="flex items-center gap-2">
      <div className={`w-4 h-4 rounded-full ${config.outerColor} flex items-center justify-center`}>
        <div className={`w-2 h-2 rounded-full ${config.innerColor}`} />
      </div>
      <span className="text-sm text-[#464F5E]">{config.label}</span>
    </div>
  );
}