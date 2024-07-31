
import React from 'react';
import { Task } from '../store/slices/taskSlice';

interface TaskCardProps {
  task: Task;
  onClick: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  // Function to determine the priority class
  const getPriorityClass = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div 
      className="bg-white p-4 rounded-lg shadow-md mb-4 cursor-pointer transition-transform transform hover:scale-105" 
      onClick={onClick}
    >
      <h4 className="font-semibold text-lg mb-2">{task.title}</h4>
      {task.description && <p className="text-sm text-gray-600 mb-2">{task.description}</p>}
       
      
    </div>
  );
};

export default TaskCard;
