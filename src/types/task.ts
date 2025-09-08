export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'high' | 'medium' | 'low';
  status: 'open' | 'completed' | 'expired';
  assignee: {
    name: string;
    avatar?: string;
  };
  dueDate: string;
  tags: string[];
  category: string;
  type: string;
  topic: string;
  actionLabel?: string;
}

export interface TaskCounts {
  myTasks: number;
  teamTasks: number;
  allTasks: number;
}

export interface StatusCounts {
  open: number;
  completed: number;
  expired: number;
}

export interface PriorityGroup {
  priority: 'high' | 'medium' | 'low';
  tasks: Task[];
  count: number;
}