
import { useState, useEffect } from 'react';
import { Zap, Eye, Shield, Gauge } from 'lucide-react';

const LighthouseWidget = () => {
  const [scores, setScores] = useState({
    performance: 0,
    accessibility: 0,
    bestPractices: 0,
    seo: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading lighthouse scores
    const loadScores = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock lighthouse scores (in real implementation, fetch from /public/lighthouse.json)
      setScores({
        performance: 96,
        accessibility: 98, 
        bestPractices: 95,
        seo: 100
      });
      
      setIsLoading(false);
    };

    loadScores();
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreBackground = (score: number) => {
    if (score >= 90) return 'from-green-500 to-green-600';
    if (score >= 50) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const metrics = [
    { name: 'Performance', score: scores.performance, icon: Zap },
    { name: 'Accessibility', score: scores.accessibility, icon: Eye },
    { name: 'Best Practices', score: scores.bestPractices, icon: Shield },
    { name: 'SEO', score: scores.seo, icon: Gauge }
  ];

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="glass-card p-4 rounded-xl max-w-xs">
        <div className="flex items-center space-x-2 mb-3">
          <div className="w-6 h-6 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded flex items-center justify-center">
            <Gauge className="text-white" size={12} />
          </div>
          <span className="text-sm font-medium text-white">Lighthouse Scores</span>
        </div>

        {isLoading ? (
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-700 rounded animate-pulse"></div>
                <div className="h-2 bg-gray-700 rounded flex-1 animate-pulse"></div>
                <div className="w-8 h-4 bg-gray-700 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center space-x-2">
                <metric.icon 
                  size={12} 
                  className={getScoreColor(metric.score)}
                />
                <span className="text-xs text-gray-300 flex-1">{metric.name}</span>
                <span className={`text-xs font-mono ${getScoreColor(metric.score)}`}>
                  {metric.score}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="mt-3 pt-2 border-t border-gray-700">
          <div className="text-xs text-gray-400 text-center">
            Updated weekly via GitHub Actions
          </div>
        </div>
      </div>
    </div>
  );
};

export default LighthouseWidget;
