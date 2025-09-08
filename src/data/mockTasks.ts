import { Task } from '../types/task';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Approve offer letter for Jason Michaels',
    description: 'Review and approve the offer letter for new sales representative candidate',
    priority: 'high',
    status: 'open',
    assignee: {
      name: 'Hans Svenson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    dueDate: '2024-08-20T14:00:00Z',
    tags: ['Hiring', 'Sales Representative'],
    category: 'Product roles hiring Q4',
    type: 'Approval',
    topic: 'HR',
    actionLabel: 'Review offer'
  },
  {
    id: '2',
    title: 'Fill in Request form for job',
    description: 'Complete the job request form for Senior UX Designer position',
    priority: 'medium',
    status: 'open',
    assignee: {
      name: 'Hans Svenson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    dueDate: '2024-08-22T00:00:00Z',
    tags: ['Hiring', 'Senior UX Designer'],
    category: 'Job Req Agent',
    type: 'Form',
    topic: 'HR',
    actionLabel: 'Fill in form'
  },
  {
    id: '3',
    title: 'Assign Onboarding Buddy for Maria Rodriguez',
    description: 'Select and assign an onboarding buddy for new sales intern',
    priority: 'low',
    status: 'open',
    assignee: {
      name: 'Hans Svenson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    dueDate: '2024-08-22T00:00:00Z',
    tags: ['Onboarding', 'Sales Intern'],
    category: 'Employee Onboarding Flow',
    type: 'Assignment',
    topic: 'HR',
    actionLabel: 'Assign'
  },
  {
    id: '4',
    title: 'Assign Onboarding Buddy for Jonathan Hall',
    description: 'Select and assign an onboarding buddy for new sales intern',
    priority: 'low',
    status: 'open',
    assignee: {
      name: 'Hans Svenson',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    dueDate: '2024-08-22T00:00:00Z',
    tags: ['Onboarding', 'Sales Intern'],
    category: 'Employee Onboarding Flow',
    type: 'Assignment',
    topic: 'HR',
    actionLabel: 'Assign'
  },
  {
    id: '5',
    title: 'Review quarterly budget proposal',
    description: 'Analyze Q4 budget allocations and approve changes',
    priority: 'high',
    status: 'completed',
    assignee: {
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    dueDate: '2024-08-18T16:00:00Z',
    tags: ['Finance', 'Budget Review'],
    category: 'Financial Planning',
    type: 'Review',
    topic: 'Finance',
    actionLabel: 'Review'
  },
  {
    id: '6',
    title: 'Update security protocols',
    description: 'Implement new security measures for remote work',
    priority: 'medium',
    status: 'expired',
    assignee: {
      name: 'Mike Johnson',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    dueDate: '2024-08-15T12:00:00Z',
    tags: ['Security', 'IT Policy'],
    category: 'Infrastructure Updates',
    type: 'Implementation',
    topic: 'Security',
    actionLabel: 'Update'
  }
];