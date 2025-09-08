import React, { useState } from 'react';
import { Users, User, Globe, Layers } from 'lucide-react';
import { useTasks } from '../../hooks/useTasks';
import { TopHeader } from './TopHeader';
import { StatusChips } from './StatusChips';
import { SearchAndFilters } from './SearchAndFilters';
import { PrioritySection } from './PrioritySection';
import { TaskSidePanel } from './TaskSidePanel';
import { Task } from '../../types/task';

export function ActionCenter() {
  const {
    tasks,
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
  } = useTasks();

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const scopeTabs = [
    { id: 'my', label: 'My tasks', count: taskCounts.myTasks, icon: User },
    { id: 'team', label: 'Team', count: taskCounts.teamTasks, icon: Users },
    { id: 'all', label: 'All', count: taskCounts.allTasks, icon: Layers }
  ];

  const statusTabs = [
    { id: 'open', label: 'Open', count: statusCounts.open },
    { id: 'completed', label: 'Completed', count: statusCounts.completed },
    { id: 'expired', label: 'Expired', count: statusCounts.expired }
  ];

  const handleTaskAction = (taskId: string) => {
    const allFilteredTasks = priorityGroups.flatMap(group => group.tasks);
    const taskIndex = allFilteredTasks.findIndex(t => t.id === taskId);
    const task = allFilteredTasks[taskIndex];
    if (task) {
      setSelectedTask(task);
      setCurrentTaskIndex(taskIndex);
      setIsPanelOpen(true);
    }
  };

  const handleNavigateTask = (direction: 'previous' | 'next') => {
    const allFilteredTasks = priorityGroups.flatMap(group => group.tasks);
    let newIndex = currentTaskIndex;
    
    if (direction === 'previous' && currentTaskIndex > 0) {
      newIndex = currentTaskIndex - 1;
    } else if (direction === 'next' && currentTaskIndex < allFilteredTasks.length - 1) {
      newIndex = currentTaskIndex + 1;
    }
    
    if (newIndex !== currentTaskIndex) {
      setCurrentTaskIndex(newIndex);
      setSelectedTask(allFilteredTasks[newIndex]);
    }
  };
  const handleClosePanel = () => {
    setIsPanelOpen(false);
    setSelectedTask(null);
    setCurrentTaskIndex(0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top Header */}
      <TopHeader />
      
      <div className="flex">
      {/* Left Sidebar */}
      <div className="w-14 bg-[#F8F9FB] border-r border-[#D1D5DC]"></div>
      
      {/* Main Content */}
      <div className="flex-1">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-[#353B46]">Action Center</h1>
            
            <div className="flex items-center gap-4">
              <div className="flex border border-[#D1D5DC] rounded-[8px]">
                {scopeTabs.map((tab, index) => {
                const Icon = tab.icon;
                return (
                  <button
  key={tab.id}
  onClick={() => setActiveScope(tab.id as any)}
  className={`flex items-center gap-2 px-3 py-1.5 text-xs font-medium transition-colors duration-200
    ${activeScope === tab.id
      ? 'bg-white text-[#464F5E] border border-[#8C95A8] rounded-[8px]'
      : 'bg-[#F8F9FB] text-[#637085] hover:text-gray-900 rounded-[8px] hover:bg-gray-50'
    }`}
>
  <Icon className="w-4 h-4" />
  <span>{tab.label} ({tab.count})</span>
</button>


                );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 bg-white min-h-screen">
        <div className="space-y-8">
          {/* Status Chips and Filters */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
            <StatusChips
              activeStatus={activeStatus}
              onStatusChange={(status) => setActiveStatus(status as any)}
              statusCounts={statusCounts}
            />
            
            <SearchAndFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedType={selectedType}
              onTypeChange={setSelectedType}
              selectedTopic={selectedTopic}
              onTopicChange={setSelectedTopic}
              availableTypes={availableTypes}
              availableTopics={availableTopics}
            />
          </div>

          {/* Priority Sections */}
          <div className="space-y-6">
            {priorityGroups.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
                <p className="text-gray-600">Try adjusting your filters or search terms.</p>
              </div>
            ) : (
              priorityGroups.map((group) => (
                <PrioritySection
                  key={group.priority}
                  group={group}
                  isCollapsed={collapsedSections.has(group.priority)}
                  onToggle={() => toggleSection(group.priority)}
                  onTaskAction={handleTaskAction}
                  selectedTaskId={selectedTask?.id}
                />
              ))
            )}
          </div>
        </div>
      </div>
      </div>
      </div>
      
      {/* Task Side Panel */}
      <TaskSidePanel
        task={selectedTask}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
        onNavigate={handleNavigateTask}
        canNavigatePrevious={currentTaskIndex > 0}
        canNavigateNext={currentTaskIndex < priorityGroups.flatMap(group => group.tasks).length - 1}
      />
    </div>
  );
}