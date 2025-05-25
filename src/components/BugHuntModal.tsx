
import { useState, useEffect } from 'react';
import { X, Bug, ExternalLink, Github } from 'lucide-react';

interface BugHuntModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BugHuntModal = ({ isOpen, onClose }: BugHuntModalProps) => {
  const [issues, setIssues] = useState([
    {
      title: "Memory leak in automated test cleanup",
      repo: "selenium/selenium",
      status: "investigating", 
      priority: "high",
      url: "https://github.com/selenium/selenium/issues/12345"
    },
    {
      title: "False positive detection in AI locator",
      repo: "microsoft/playwright",
      status: "fix-submitted",
      priority: "medium", 
      url: "https://github.com/microsoft/playwright/issues/67890"
    },
    {
      title: "Performance regression in mobile testing",
      repo: "appium/appium",
      status: "verified",
      priority: "high",
      url: "https://github.com/appium/appium/issues/54321"
    }
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'b') {
        e.preventDefault();
        // Modal will be opened by parent component
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'investigating': return 'text-yellow-400 bg-yellow-400/20';
      case 'fix-submitted': return 'text-blue-400 bg-blue-400/20';
      case 'verified': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/20';
      case 'medium': return 'text-orange-400 bg-orange-400/20';
      case 'low': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <Bug className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-white">Bug Hunt Console</h2>
                <p className="text-sm text-gray-400">Current OSS issues I'm tracking</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="space-y-4">
            {issues.map((issue, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-medium leading-tight pr-4">
                    {issue.title}
                  </h3>
                  <a
                    href={issue.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-sunset-orange transition-colors flex-shrink-0"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Github size={14} className="text-gray-400" />
                    <span className="text-gray-300">{issue.repo}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(issue.status)}`}>
                    {issue.status.replace('-', ' ')}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(issue.priority)}`}>
                    {issue.priority} priority
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-sunset-orange/10 border border-sunset-orange/30 rounded-lg">
            <p className="text-sm text-sunset-orange mb-2">💡 Pro Tip</p>
            <p className="text-sm text-gray-300">
              Press <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Ctrl + B</kbd> anytime to open this console
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BugHuntModal;
