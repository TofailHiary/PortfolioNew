
import { useState, useEffect, useRef } from 'react';
import { Code, Database, Cpu, Cloud, Smartphone, BarChart, Brain, Users } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Leadership & Soft Skills",
      icon: Users,
      color: "from-sunset-orange to-sunset-amber",
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Mentoring", level: 90 },
        { name: "Communication", level: 92 },
        { name: "Stakeholder Management", level: 88 },
        { name: "Analytical Thinking", level: 94 }
      ]
    },
    {
      title: "Automation & Testing",
      icon: Code,
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "Selenium", level: 95 },
        { name: "Appium", level: 90 },
        { name: "Playwright (MCP)", level: 85 },
        { name: "Java", level: 88 },
        { name: "Cucumber/JBehave", level: 92 }
      ]
    },
    {
      title: "API & Performance",
      icon: BarChart,
      color: "from-green-500 to-green-600",
      skills: [
        { name: "Postman", level: 95 },
        { name: "Swagger/OpenAPI", level: 85 },
        { name: "JMeter", level: 90 },
        { name: "Charles Proxy", level: 88 }
      ]
    },
    {
      title: "CI/CD & DevOps",
      icon: Cloud,
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Jenkins", level: 92 },
        { name: "Azure DevOps", level: 88 },
        { name: "Docker", level: 75 },
        { name: "GitHub Actions", level: 85 }
      ]
    },
    {
      title: "Databases & Servers",
      icon: Database,
      color: "from-indigo-500 to-indigo-600",
      skills: [
        { name: "MS SQL", level: 85 },
        { name: "MySQL", level: 82 },
        { name: "Oracle", level: 80 },
        { name: "Apache Tomcat", level: 78 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-pink-500 to-pink-600",
      skills: [
        { name: "Xcode", level: 85 },
        { name: "iOS Testing", level: 90 },
        { name: "Android Testing", level: 88 },
        { name: "Mobile Automation", level: 92 }
      ]
    },
    {
      title: "AI & Emerging Tech",
      icon: Brain,
      color: "from-red-500 to-red-600",
      skills: [
        { name: "llama.cpp", level: 80 },
        { name: "Ollama", level: 78 },
        { name: "AI Development tools", level: 75 },
        { name: "AI Testing Tools", level: 85 }
      ]
    },
    {
      title: "Monitoring & Reporting",
      icon: Cpu,
      color: "from-yellow-500 to-yellow-600",
      skills: [
        { name: "Allure Reports", level: 90 },
        { name: "Extent Reports", level: 92 },
        { name: "Grafana dashboard", level: 80 },
        { name: "Firebase Crashlytics", level: 85 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-padding" ref={skillsRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto"> {/* Changed from text-gray-400 */}
            Comprehensive technical and leadership capabilities across the full software testing lifecycle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-card p-6 rounded-xl group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:animate-glow`}>
                  <category.icon className="text-primary-foreground" size={20} /> {/* Changed from text-white */}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3> {/* Changed from text-white */}
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm text-secondary-foreground">{skill.name}</span> {/* Changed from text-gray-300 */}
                      <span className="text-xs text-sunset-orange">{skill.level}%</span>
                    </div>
                    <div className="skill-bar"> {/* Background to be handled in index.css */}
                      <div
                        className={`skill-progress ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Professional Qualities</h3> {/* Changed from text-white */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Works under pressure",
              "Quick learner", 
              "Sociable",
              "Strong presentations",
              "Problem solver",
              "Detail-oriented",
              "Team player",
              "Innovative thinking"
            ].map((quality, index) => (
              <div
                key={index}
                className="glass-card px-4 py-2 rounded-full text-sm text-secondary-foreground hover:text-sunset-orange transition-colors duration-200 animate-fade-in" /* Changed from text-gray-300 */
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {quality}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
