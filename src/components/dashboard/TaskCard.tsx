import React from 'react';
import { Calendar, User, MoreVertical, Workflow, Bot } from 'lucide-react';
import { Task } from '../../types/task';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { StatusIndicator } from '../ui/StatusIndicator';

interface TaskCardProps {
  task: Task;
  onAction?: (taskId: string) => void;
  isSelected?: boolean;
}

export function TaskCard({ task, onAction, isSelected }: TaskCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'success';
      case 'completed': return 'info';
      case 'expired': return 'error';
      default: return 'default';
    }
  };

  const getCategoryIcon = (category: string) => {
    if (category === 'Job Req Agent') {
      return <Bot className="w-4 h-4" />;
    }
    return <Workflow className="w-4 h-4" />;
  };
  return (
    <div 
      className={`bg-white rounded-xl border p-4 cursor-pointer transition-all duration-200 ${
        isSelected 
          ? 'bg-indigo-50 border-indigo-600' 
          : 'border-[#D1D5DC] hover:bg-indigo-50 hover:border-indigo-600'
      }`}
      onClick={() => onAction?.(task.id)}
    >
      <div className="grid grid-cols-[1fr_auto_auto_auto_auto_auto] gap-6 items-center">
        {/* First Column: Title, Tags, Category */}
        <div className="space-y-2 min-w-0">
          <h3 className="text-sm  text-[#464F5E] leading-6 truncate">{task.title}</h3>
          
          <div className="flex flex-wrap gap-2">
            {task.tags.map((tag) => (
              <Badge key={tag} variant="default" size="sm">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-xs text-gray-500">
            {getCategoryIcon(task.category)}
            <span className="truncate">{task.category}</span>
          </div>
        </div>

        {/* Status Column */}
        <div className="flex justify-center">
          <StatusIndicator status={task.status} />
        </div>

        {/* Assignee Column */}
        <div className="flex items-center gap-2 text-sm text-gray-600 whitespace-nowrap">
          <User className="w-4 h-4" />
          <span>{task.assignee.name}</span>
        </div>

        {/* Due Date Column */}
        <div className="flex items-center gap-2 text-sm text-gray-600 whitespace-nowrap">
          <Calendar className="w-4 h-4" />
          <span>Due {formatDate(task.dueDate)}</span>
        </div>

        {/* Action Button Column */}
        <div>
          {task.actionLabel && task.status === 'open' && (
            <Button
  variant="outline"
  size="sm"
  className="text-indigo-700 bg-white border-[#8C95A8] hover:bg-gray-50"
  onClick={(e) => {
    e.stopPropagation();
    onAction?.(task.id);
  }}
>
  {task.actionLabel}
</Button>

          )}
        </div>

        {/* More Options Column */}
        <div>
          <button
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors duration-150"
            aria-label="More options"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}