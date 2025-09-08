import React from 'react';
import { X, ChevronLeft, ArrowRightFromLine, ChevronRight, ChevronDown, Workflow, Bell, Bot } from 'lucide-react';
import { Task } from '../../types/task';
import { StatusIndicator } from '../ui/StatusIndicator';

interface TaskSidePanelProps {
  task: Task | null;
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (direction: 'previous' | 'next') => void;
  canNavigatePrevious?: boolean;
  canNavigateNext?: boolean;
}

export function TaskSidePanel({ task, isOpen, onClose, onNavigate, canNavigatePrevious, canNavigateNext }: TaskSidePanelProps) {
  const [activeTab, setActiveTab] = React.useState<'task' | 'activity'>('task');
  
  if (!isOpen || !task) return null;

  const getCategoryIcon = (category: string) => {
    if (category === 'Job Req Agent') {
      return <Bot className="w-4 h-4" />;
    }
    return <Workflow className="w-4 h-4" />;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderActivityContent = () => {
    return (
      <div className="space-y-4">
        {/* Activity Item 1 */}
        <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Workflow className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900">
              Workflow <span className="font-medium">Product roles hiring Q4</span> created the task.
            </p>
            <p className="text-xs text-gray-500 mt-1">2d</p>
          </div>
        </div>

        {/* Activity Item 2 */}
        <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Workflow className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900">
              Workflow <span className="font-medium">Product roles hiring Q4</span> assigned <span className="font-medium">Anna Thompson</span> to the task.
            </p>
            <p className="text-xs text-gray-500 mt-1">2d</p>
          </div>
        </div>

        {/* Activity Item 3 */}
        <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2" 
              alt="Anna Thompson"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900">
              <span className="font-medium">Anna Thompson</span> assigned <span className="font-medium">Hans Svenson</span> to the task.
            </p>
            <p className="text-xs text-gray-500 mt-1">2d</p>
          </div>
        </div>

        {/* Activity Item 4 */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Bell className="w-4 h-4 text-gray-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-gray-900">
              System sent a notification to <span className="font-medium">Hans Svenson</span> 48h before the due date.
            </p>
            <p className="text-xs text-gray-500 mt-1">2d</p>
          </div>
        </div>
      </div>
    );
  };

  const renderTaskContent = () => {
    if (task.category === 'Employee Onboarding Flow') {
      return (
        <div className="space-y-6">
          <div>
           
          </div>

          <div className="bg-[#F4F6FA] rounded-[10px] p-4">
             <h4 className="text-sm font-medium text-[#464F5E] mb-2">
              Assign Onboarding Buddy to {task.title.includes('Maria Rodriguez') ? 'Maria Rodriguez' : 'Jonathan Hall'}
            </h4>
            <h4 className="font-normal text-sm text-[#464F5E] mb-2">Onboarding Buddy</h4>
            <div className="relative">
              <select className="w-full text-sm px-3 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
                <option>Select onboarding buddy</option>
                <option>Sarah Chen</option>
                <option>Mike Johnson</option>
                <option>Emily Davis</option>
                <option>Alex Thompson</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>
      );
    }

    if (task.type === 'Form') {
      return (
        <div className="space-y-6">
          <div className="bg-[#F4F6FA] rounded-[10px] p-4 space-y-4">
            <h4 className="text-sm font-medium text-[#464F5E] mb-4">Fill in Request form for job</h4>
            
            {/* Qualifications */}
            <div>
              <label className="block text-sm font-medium text-[#464F5E] mb-2">Qualifications</label>
              <textarea
                placeholder="Qualifications"
                className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none h-20"
              />
            </div>
            
            {/* Experience level */}
            <div>
              <label className="block text-sm font-medium text-[#464F5E] mb-2">Experience level</label>
              <div className="relative">
                <select className="w-full text-sm px-3 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
                  <option>Select experience level</option>
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                  <option>Lead/Principal</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            {/* Job Description */}
            <div>
              <label className="block text-sm font-medium text-[#464F5E] mb-2">Job Description</label>
              <textarea
                placeholder="Job Description"
                className="w-full px-3 py-2 border border-gray-400 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none h-32"
              />
            </div>
          </div>
        </div>
      );
    }

    if (task.type === 'Approval') {
      return (
        <div className="space-y-6">
          <div className="bg-[#F4F6FA] rounded-[10px] p-4">
            <h4 className="text-sm font-medium text-[#464F5E] mb-4">Approve Offer Letter</h4>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              {/* Phenom Logo */}
              <div className="mb-6">
                <div className="text-lg font-semibold text-black">Phenom</div>
              </div>
              
              {/* Letter Content */}
              <div className="space-y-4 text-sm text-gray-800 leading-relaxed">
                <p>Dear Matthew Johnson,</p>
                
                <p>
                  We are pleased to offer you the exciting opportunity to join Phenom as a valued Product Manager. After careful consideration, it is evident that your unique skills and enthusiasm align seamlessly with the spirit of our team.
                </p>
                
                <p>
                  Your anticipated start date for this role is May 25, 2024. As a Product Manager in Miami, Florida, United States, you will be an integral part of our dynamic workforce, contributing to the magic that makes Phenom a world-renowned destination.
                </p>
                
                <p>
                  In recognition of your commitment and dedication, we are pleased to offer a competitive compensation of $40 per hour for this hourly position. Your work schedule will encompass a variety of shifts, allowing for flexibility and exposure to different aspects of the role, both during the day and at night.
                </p>
                
                <p>
                  Enclosed, you will find the detailed terms and conditions of your employment. We encourage you to review this documentation thoroughly to ensure a clear understanding of the expectations and benefits associated with your role.
                </p>
                
                <p>
                  We are genuinely excited about the prospect of you joining the Phenom family and contributing to the enchanting experiences we create for our guests. Your signature below will confirm your acceptance of this offer.
                </p>
              </div>
              
              {/* Signature Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="border-b border-gray-300 pb-1 mb-2">
                      <span className="text-sm text-gray-600">Johanna David</span>
                    </div>
                    <div className="text-xs text-gray-500">Head of HR</div>
                    
                    {/* Signature */}
                    <div className="mt-4">
                      <svg width="120" height="40" viewBox="0 0 120 40" className="text-gray-800">
                        <path d="M10 30 Q 20 10, 30 25 Q 40 35, 50 20 Q 60 15, 70 30 Q 80 35, 90 25 Q 100 20, 110 30" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              fill="none" 
                              strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div>
                    <div className="border-b border-gray-300 pb-1 mb-2">
                      <span className="text-sm text-gray-600">Your signature</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Approval Buttons */}
          <div className="flex gap-3 mt-6">
            <button className="text-sm flex-1 px-4 py-2 text-indigo-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Do not approve
            </button>
            <button className="text-sm flex-1 px-4 py-2 text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 transition-colors font-medium">
              Approve
            </button>
          </div>
        </div>
      );
    }

    // Default content for other task types
    return (
      <div className="bg-[#F4F6FA] rounded-[10px] p-4">
        <h3 className="text-sm font-medium text-[#464F5E] mb-2">{task.title}</h3>
       
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="flex-1 bg-black bg-opacity-25"
        onClick={onClose}
      />
      
      {/* Side Panel */}
      <div className="w-[504px] bg-white shadow-xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <ArrowRightFromLine className="w-4 h-4 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate?.('previous')}
              disabled={!canNavigatePrevious}
              className={`flex items-center gap-2 text-sm transition-colors ${
                canNavigatePrevious 
                  ? 'text-[#2927B2] hover:text-blue-800' 
                  : 'text-gray-400 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button 
              onClick={() => onNavigate?.('next')}
              disabled={!canNavigateNext}
              className={`flex items-center gap-2 text-sm transition-colors ${
                canNavigateNext 
                  ? 'text-[#2927B2] hover:text-blue-800' 
                  : 'text-gray-400 cursor-not-allowed'
              }`}
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 pt-2 overflow-y-auto">
          {/* Task Details */}
          <div className="space-y-0 mb-4">
            {/* Assignee */}
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-[#464F5E] font-medium text-sm">Assignee</span>
              <span className=" text-[#464F5E] text-sm">{task.assignee.name}</span>
            </div>
            
            {/* Status */}
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-[#464F5E] font-medium text-sm">Status</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[#464F5E] text-sm capitalize">{task.status}</span>
              </div>
            </div>
            
            {/* Priority */}
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-[#464F5E] font-medium text-sm">Priority</span>
              <span className="text-[#464F5E] text-sm capitalize">{task.priority}</span>
            </div>
            
            {/* Due date */}
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-[#464F5E] font-medium text-sm">Due date</span>
              <span className="text-[#464F5E] text-sm">{formatDate(task.dueDate)}</span>
            </div>
            
            {/* Triggered by */}
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-[#464F5E] font-medium text-sm">Triggered by</span>
              <div className="flex items-center gap-2 text-[#464F5E] text-sm">
                {getCategoryIcon(task.category)}
                <span>{task.category}</span>
              </div>
            </div>
          </div>

          {/* Tabs */}
        <div className="w-full flex border border-[#D1D5DC] rounded-[8px] mt-2 mb-4">
  <button
    onClick={() => setActiveTab('task')}
    className={`flex-1 items-center px-3 py-1.5 text-xs font-medium transition-colors duration-200 rounded-[8px]
      ${activeTab === 'task'
        ? 'bg-white text-[#464F5E] border  border-[#8C95A8]'
        : 'bg-[#F8F9FB] text-[#637085] hover:text-gray-900 hover:bg-gray-50'
      }`}
  >
    <span>Task</span>
  </button>

  <button
    onClick={() => setActiveTab('activity')}
    className={`flex-1 items-center px-3 py-1.5 text-xs font-medium transition-colors duration-200 rounded-[8px]
      ${activeTab === 'activity'
        ? 'bg-white text-[#464F5E] border border-[#8C95A8]'
        : 'bg-[#F8F9FB] text-[#637085] hover:text-gray-900 hover:bg-gray-50'
      }`}
  >
    <span>Activity (4)</span>
  </button>
</div>



          {/* Tab Content */}
          {activeTab === 'task' ? renderTaskContent() : renderActivityContent()}
        </div>
      </div>
    </div>
  );
}