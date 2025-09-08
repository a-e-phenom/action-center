import React from 'react';
import { Search } from 'lucide-react';
import { Dropdown } from '../ui/Dropdown';

interface SearchAndFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
  selectedTopic: string;
  onTopicChange: (topic: string) => void;
  availableTypes: string[];
  availableTopics: string[];
}

export function SearchAndFilters({
  searchQuery,
  onSearchChange,
  selectedType,
  onTypeChange,
  selectedTopic,
  onTopicChange,
  availableTypes,
  availableTopics
}: SearchAndFiltersProps) {
  const filterClass =
    "h-8 text-sm rounded-md flex items-center placeholder-gray-600 text-gray-800";

  return (
    <div className="flex flex-col sm:flex-row gap-2">
      {/* Search box */}
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 h-8 text-sm border border-gray-400 rounded-[8px] 
                     placeholder-gray-600 text-gray-800
                     focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
        />
      </div>

      {/* Dropdowns */}
      <div className="flex gap-2">
        <Dropdown
          value={selectedType}
          options={availableTypes}
          onChange={onTypeChange}
          className={`w-40 ${filterClass}`}
        />

        <Dropdown
          value={selectedTopic}
          options={availableTopics}
          onChange={onTopicChange}
          className={`w-40 ${filterClass}`}
        />
      </div>
    </div>
  );
}
