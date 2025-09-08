import { useState, useMemo } from 'react';
import { Task, TaskCounts, StatusCounts, PriorityGroup } from '../types/task';
import { mockTasks } from '../data/mockTasks';

export function useTasks() {
  const [tasks] = useState<Task[]>(mockTasks);
  const [activeScope, setActiveScope] = useState<'my' | 'team' | 'all'>('my');
  const [activeStatus, setActiveStatus] = useState<'open' | 'completed' | 'expired'>('open');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All types');
  const [selectedTopic, setSelectedTopic] = useState('All topics');
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(new Set());

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesStatus = task.status === activeStatus;
      const matchesSearch = searchQuery === '' || 
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesType = selectedType === 'All types' || task.type === selectedType;
      const matchesTopic = selectedTopic === 'All topics' || task.topic === selectedTopic;
      
      return matchesStatus && matchesSearch && matchesType && matchesTopic;
    });
  }, [tasks, activeStatus, searchQuery, selectedType, selectedTopic]);

  const taskCounts: TaskCounts = useMemo(() => {
    return {
      myTasks: tasks.filter(task => task.assignee.name === 'Hans Svenson').length,
      teamTasks: tasks.length,
      allTasks: tasks.length
    };
  }, [tasks]);

  const statusCounts: StatusCounts = useMemo(() => {
    return {
      open: tasks.filter(task => task.status === 'open').length,
      completed: tasks.filter(task => task.status === 'completed').length,
      expired: tasks.filter(task => task.status === 'expired').length
    };
  }, [tasks]);

  const priorityGroups: PriorityGroup[] = useMemo(() => {
    const groups = filteredTasks.reduce((acc, task) => {
      if (!acc[task.priority]) {
        acc[task.priority] = [];
      }
      acc[task.priority].push(task);
      return acc;
    }, {} as Record<string, Task[]>);

    return (['high', 'medium', 'low'] as const).map(priority => ({
      priority,
      tasks: groups[priority] || [],
      count: (groups[priority] || []).length
    })).filter(group => group.count > 0);
  }, [filteredTasks]);

  const availableTypes = useMemo(() => {
    const types = new Set(tasks.map(task => task.type));
    return ['All types', ...Array.from(types)];
  }, [tasks]);

  const availableTopics = useMemo(() => {
    const topics = new Set(tasks.map(task => task.topic));
    return ['All topics', ...Array.from(topics)];
  }, [tasks]);

  const toggleSection = (priority: string) => {
    setCollapsedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(priority)) {
        newSet.delete(priority);
      } else {
        newSet.add(priority);
      }
      return newSet;
    });
  };

  return {
    tasks,
    filteredTasks,
    taskCounts,
    statusCounts,
    priorityGroups,
    activeScope,
    activeStatus,
    searchQuery,
    selectedType,
    selectedTopic,
    availableTypes,
    availableTopics,
    collapsedSections,
    setActiveScope,
    setActiveStatus,
    setSearchQuery,
    setSelectedType,
    setSelectedTopic,
    toggleSection
  };
}