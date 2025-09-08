import React from 'react';

interface FilterTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: Array<{
    id: string;
    label: string;
    count?: number;
  }>;
}

export function FilterTabs({ activeTab, onTabChange, tabs }: FilterTabsProps) {
  return (
    <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            activeTab === tab.id
              ? 'bg-white text-gray-900 shadow-sm'
              : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
          }`}
        >
          <span>{tab.label}</span>
          {tab.count !== undefined && (
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              activeTab === tab.id
                ? 'bg-gray-100 text-gray-600'
                : 'bg-gray-200 text-gray-500'
            }`}>
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}