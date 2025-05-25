
import { useState } from 'react';
import { ExternalLink, Github, Eye, EyeOff, Zap, Shield, Target } from 'lucide-react';

const Projects = () => {
  const [qaViewEnabled, setQaViewEnabled] = useState(false);

  const projects = [
    {
      title: "AI-Powered Test Automation Framework",
      description: "Revolutionary testing framework with self-healing locators and intelligent test generation using AI/ML algorithms.",
      tech: ["Selenium", "Python", "TensorFlow", "Jenkins"],
      image: "/placeholder-project1.jpg",
      qaInsights: {
        testCoverage: "95%",
        defectReduction: "60%", 
        executionTime: "75% faster"
      },
      features: ["Self-healing locators", "Auto test generation", "Smart reporting"],
      demoGif: "/demo-automation.gif"
    },
    {
      title: "Cross-Platform Mobile Testing Suite",
      description: "Comprehensive mobile testing solution supporting iOS, Android, and hybrid apps with parallel execution capabilities.",
      tech: ["Appium", "Java", "TestNG", "Azure DevOps"],
      image: "/placeholder-project2.jpg", 
      qaInsights: {
        testCoverage: "88%",
        deviceReduction: "75%",
        releaseTime: "50% faster"
      },
      features: ["Parallel execution", "Cloud device farm", "Real-time reporting"],
      demoGif: "/demo-mobile.gif"
    },
    {
      title: "CI/CD Quality Gates Platform",
      description: "Enterprise-grade platform for implementing quality gates in CI/CD pipelines with automated decision making.",
      tech: ["Jenkins", "Docker", "SonarQube", "Grafana"],
      image: "/placeholder-project3.jpg",
      qaInsights: {
        deploymentSuccess: "99.2%",
        rollbackReduction: "80%",
        qualityScore: "A+"
      },
      features: ["Automated quality gates", "Risk assessment", "Deployment analytics"],
      demoGif: "/demo-cicd.gif"
    },
    {
      title: "Performance Testing Observatory",
      description: "Real-time performance monitoring and testing platform with predictive analytics and bottleneck detection.",
      tech: ["JMeter", "Grafana", "InfluxDB", "Python"],
      image: "/placeholder-project4.jpg",
      qaInsights: {
        performanceGain: "40%",
        issueDetection: "85% faster",
        resourceOptimization: "60%"
      },
      features: ["Real-time monitoring", "Predictive analytics", "Auto-scaling recommendations"],
      demoGif: "/demo-performance.gif"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Innovative testing solutions and frameworks that demonstrate quality engineering excellence
          </p>
          
          {/* QA View Toggle */}
          <div className="inline-flex items-center space-x-3 glass-card px-6 py-3 rounded-full">
            <span className="text-sm text-gray-300">Standard View</span>
            <button
              onClick={() => setQaViewEnabled(!qaViewEnabled)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                qaViewEnabled ? 'bg-sunset-orange' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                qaViewEnabled ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
            <span className="text-sm text-sunset-orange">QA Metrics View</span>
            {qaViewEnabled ? <Eye size={16} className="text-sunset-orange" /> : <EyeOff size={16} className="text-gray-400" />}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden group hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image/GIF */}
              <div className="relative h-48 bg-gradient-to-br from-sunset-orange/20 to-sunset-amber/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-30">
                    {index === 0 && <Zap />}
                    {index === 1 && <Shield />}
                    {index === 2 && <Target />}
                    {index === 3 && <Eye />}
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-sunset-orange transition-colors">
                    <ExternalLink size={16} className="text-white" />
                  </button>
                  <button className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-sunset-orange transition-colors">
                    <Github size={16} className="text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sunset-orange transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* QA Metrics Overlay */}
                {qaViewEnabled && (
                  <div className="mb-4 p-4 bg-sunset-orange/10 border border-sunset-orange/30 rounded-lg">
                    <h4 className="text-sunset-orange font-semibold mb-2">QA Impact Metrics</h4>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {Object.entries(project.qaInsights).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-white font-mono">{value}</div>
                          <div className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-sunset-orange/20 text-sunset-orange text-xs rounded-full border border-sunset-orange/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <span className="w-1 h-1 bg-sunset-orange rounded-full"></span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <button className="btn-secondary group">
            <span>View All Projects</span>
            <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
