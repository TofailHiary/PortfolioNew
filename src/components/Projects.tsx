
import { useState } from 'react';
import { Github, Eye, EyeOff } from 'lucide-react'; // Removed ExternalLink, Zap, Shield, Target

const Projects = () => {
  const [qaViewEnabled, setQaViewEnabled] = useState(false);

  const projects =  [
    {
      title: "API Testing Framework",
      githubUrl: "https://github.com/TofailHiary/Restassured.git",
      description:
        "Scalable RestAssured + TestNG framework with dynamic env config, rich validators, and Extent-powered reporting.",
      tech: ["Java", "RestAssured", "TestNG", "Maven", "ExtentReports"],
      image: "/placeholder-api.jpg",
      qaInsights: {
        testCoverage: "~90%",
        defectDetection: "≈60% boost",
        regressionCycle: "3× faster"
      },
      features: [
        "Dynamic env config loader",
        "Reusable request/validator helpers",
        "Rich Extent Reports"
      ],
      demoGif: "/demo-api.gif",
      icon: "🧪"
    },
  
    {
      title: "Web UI Testing Framework",
      githubUrl: "https://github.com/TofailHiary/QAWebTestNG.git",
      description:
        "Modular Selenium + TestNG framework with Excel-driven data sets, dynamic environment config, and interactive Extent Reports.",
      tech: ["Java", "Selenium", "TestNG", "WebDriverManager", "ExtentReports"],
      image: "/placeholder-web.jpg",
      qaInsights: {
        testCoverage: "~85%",
        defectReduction: "≈60%",
        executionTime: "2× faster"
      },
      features: [
        "Excel data-driven tests",
        "Dynamic env config loader",
        "Rich Extent Reports"
      ],
      demoGif: "/demo-web.gif",
      icon: "🌐"
    },
  
    {
      title: "Web Automation Framework (POM + BDD)",
      githubUrl: "https://github.com/TofailHiary/Web-framework.git",
      description:
        "Cucumber-driven Selenium framework with Page Object Model, dual Allure/Extent reporting, and CI-ready Maven build.",
      tech: ["Java", "Selenium", "Cucumber", "Maven", "Allure", "ExtentReports"],
      image: "/placeholder-webframework.jpg",
      qaInsights: {
        testCoverage: "~80%",
        defectReduction: "≈55%",
        ciReady: "Travis CI integrated"
      },
      features: [
        "Page Object Model architecture",
        "BDD Gherkin scenarios",
        "Allure & Extent dual reports"
      ],
      demoGif: "/demo-webframework.gif",
      icon: "🕸️"
    },
  
    {
      title: "Cross-Platform Mobile Automation Framework",
      githubUrl: "https://github.com/TofailHiary/Mobile.git",
      description:
        "Unified Appium + TestNG suite for Android & iOS with device-pool config, HTML/Extent reports, and Extent Report.",
      tech: ["Java", "Appium", "TestNG", "Maven", "ExtentReports", "HTML"],
      image: "/placeholder-mobile.jpg",
      qaInsights: {
        testCoverage: "~88%",
        deviceReduction: "≈75%",
        releaseTime: "2× faster"
      },
      features: [
        "Works with Android & iOS execution",
        "Device-pool/UDID config loader",
        "HTML & Extent email reports"
      ],
      demoGif: "/demo-mobile.gif",
      icon: "📱"
    }
  ];
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8"> {/* Changed from text-gray-400 */}
            Innovative testing solutions and frameworks that demonstrate quality engineering excellence
          </p>
          
          {/* QA View Toggle */}
          <div className="inline-flex items-center space-x-3 glass-card px-6 py-3 rounded-full">
            <span className="text-sm text-muted-foreground">Standard View</span> {/* Changed from text-gray-300 */}
            <button
              onClick={() => setQaViewEnabled(!qaViewEnabled)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                qaViewEnabled ? 'bg-sunset-orange' : 'bg-gray-600' // bg-gray-600 might need adjustment for light theme if it looks off
              }`}
            >
              <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${ // bg-white for toggle knob is fine
                qaViewEnabled ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
            <span className="text-sm text-sunset-orange">QA Metrics View</span>
            {qaViewEnabled ? <Eye size={16} className="text-sunset-orange" /> : <EyeOff size={16} className="text-muted-foreground" />} {/* Changed from text-gray-400 */}
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
                    {project.icon}
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  {/* The user only asked to keep the GitHub link. If ExternalLink is needed, it can be added back with a project.demoUrl */}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View on GitHub"
                      className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center hover:bg-sunset-orange transition-colors"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-sunset-orange transition-colors"> {/* Changed from text-white */}
                  {project.title}
                </h3>
                <p className="text-secondary-foreground text-sm mb-4 leading-relaxed"> {/* Changed from text-gray-300 */}
                  {project.description}
                </p>

                {/* QA Metrics Overlay */}
                {qaViewEnabled && (
                  <div className="mb-4 p-4 bg-sunset-orange/10 border border-sunset-orange/30 rounded-lg">
                    <h4 className="text-sunset-orange font-semibold mb-2">QA Impact Metrics</h4>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {Object.entries(project.qaInsights).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-foreground font-mono">{value}</div> {/* Changed from text-white */}
                          <div className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div> {/* Changed from text-gray-400 */}
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
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm text-secondary-foreground"> {/* Changed from text-gray-300 */}
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
          <a
            href="https://github.com/TofailHiary"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <span>View All Projects on Github</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
