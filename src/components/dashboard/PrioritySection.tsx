import React from 'react';
import { ChevronDown } from 'lucide-react';
import { PriorityGroup } from '../../types/task';
import { TaskCard } from './TaskCard';

interface PrioritySectionProps {
  group: PriorityGroup;
  isCollapsed: boolean;
  onToggle: () => void;
  onTaskAction?: (taskId: string) => void;
  selectedTaskId?: string;
}

export function PrioritySection({ group, isCollapsed, onToggle, onTaskAction, selectedTaskId }: PrioritySectionProps) {
  const getPriorityConfig = (priority: string) => {
    switch (priority) {
      case 'high':
        return {
          label: 'High priority',
          borderColor: 'border-[#F9B1B9]',
          indicatorColor: 'bg-red-500',
          backgroundColor: 'bg-[#FFE9EB]'
        };
      case 'medium':
        return {
          label: 'Medium priority',
          borderColor: 'border-[#FACD78]',
          indicatorColor: 'bg-orange-500',
          backgroundColor: 'bg-[#FBEDD5]'
        };
      case 'low':
        return {
          label: 'Low priority',
          borderColor: 'border-[#D1D5DC]',
          indicatorColor: 'bg-[#637085]',
          backgroundColor: 'bg-[#E8EAEE]'
        };
      default:
        return {
          label: 'Unknown priority',
          borderColor: 'border-gray-200',
          indicatorColor: 'bg-gray-500',
          backgroundColor: 'bg-gray-100'
        };
    }
  };

  const config = getPriorityConfig(group.priority);

  return (
    <div className="rounded-[10px] overflow-hidden transition-all duration-200 bg-white">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between px-3 py-2 ${config.backgroundColor} hover:opacity-90 transition-all duration-150 border ${config.borderColor} ${
          isCollapsed ? 'rounded-[10px]' : 'rounded-t-[10px]'
        }`}
      >
        <div className="flex items-center gap-3">
          <ChevronDown 
            className={`w-4 h-4 text-[#464F5E] transition-transform duration-200 ${
              isCollapsed ? '-rotate-90' : ''
            }`}
          />
          <div className={`w-2 h-2 rounded-full ${config.indicatorColor}`} />
          <span className="font-medium text-[#464F5E] text-sm">{config.label}</span>
          <span className="text-sm text-[#464F5E] ml-[-8px]">({group.count})</span>
        </div>
      </button>
      
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isCollapsed ? 'max-h-0' : 'max-h-[2000px]'
      }`}>
        <div className="p-4 pt-4 space-y-4 bg-[#F8F9FB] border-l border-r border-b border-[#D1D5DC] rounded-b-[10px]">
          {group.tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onAction={onTaskAction}
              isSelected={selectedTaskId === task.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}