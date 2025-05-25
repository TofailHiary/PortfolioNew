
import { Building, Calendar, MapPin, Users, Zap, Target } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Estarta Solutions",
      role: "Lead / Senior QC & Automation Engineer",
      period: "Mar 2022 – May 2025",
      location: "Amman, Jordan",
      positions: [
        {
          title: "Lead QC Engineer",
          period: "Apr 2023 – May 2025",
          highlights: [
            "Trained 40+ QA engineers across multiple projects",
            "Built comprehensive CI/CD pipelines",
            "Implemented AI self-healing locators",
            "Reduced defect rate by 60% through strategic quality initiatives"
          ]
        },
        {
          title: "Senior QC Engineer", 
          period: "Mar 2022 – Apr 2023",
          highlights: [
            "Governed SDLC/STLC processes",
            "Streamlined release cycles",
            "Mentored junior team members"
          ]
        }
      ],
      icon: Building,
      color: "from-sunset-orange to-sunset-amber"
    },
    {
      company: "Majid Al Futtaim",
      role: "QA Automation Engineer",
      period: "May 2021 – Mar 2022",
      location: "Dubai, UAE",
      highlights: [
        "Automated 75% of regression testing (Selenium/Cucumber)",
        "Reduced device usage by 75% through smart automation",
        "Established robust test automation framework"
      ],
      icon: Zap,
      color: "from-blue-500 to-blue-600"
    },
    {
      company: "Mawdoo3.com",
      role: "QC Engineer",
      period: "Feb 2020 – May 2021",
      location: "Amman, Jordan",
      highlights: [
        "Implemented Extent Reports for comprehensive test reporting",
        "Developed database utility frameworks",
        "Enhanced test coverage across web platforms"
      ],
      icon: Target,
      color: "from-green-500 to-green-600"
    },
    {
      company: "Shepherd Tech",
      role: "QC Engineer",
      period: "Jun 2019 – Feb 2020",
      location: "Amman, Jordan",
      highlights: [
        "Built metrics-driven QA processes from scratch",
        "Established quality standards and KPIs",
        "Implemented comprehensive testing strategies"
      ],
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      company: "Baaz Inc.",
      role: "QA Engineer",
      period: "Jun 2018 – Jun 2019",
      location: "Amman, Jordan",
      highlights: [
        "Led iOS/Android Appium automation initiatives",
        "Owned mobile testing strategies",
        "Established cross-platform testing standards"
      ],
      icon: MapPin,
      color: "from-pink-500 to-pink-600"
    },
    {
      company: "ETQ",
      role: "Software Test Engineer",
      period: "Mar 2016 – Jun 2018",
      location: "Amman, Jordan",
      highlights: [
        "Performed full-lifecycle testing",
        "Specialized in Computer System Validation (CSV)",
        "Ensured compliance with regulatory standards"
      ],
      icon: Calendar,
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey through quality assurance excellence across diverse industries and technologies
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-sunset-orange to-sunset-amber"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-sunset-orange rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="glass-card p-8 rounded-xl group hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-gradient-to-r ${exp.color} rounded-lg flex items-center justify-center group-hover:animate-glow`}>
                        <exp.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">{exp.company}</h3>
                        <p className="text-sunset-orange font-medium mb-2">{exp.role}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {exp.positions ? (
                      <div className="space-y-6">
                        {exp.positions.map((position, posIndex) => (
                          <div key={posIndex} className="border-l-2 border-sunset-orange/30 pl-4">
                            <h4 className="font-semibold text-white mb-1">{position.title}</h4>
                            <p className="text-sm text-gray-400 mb-3">{position.period}</p>
                            <ul className="space-y-2">
                              {position.highlights.map((highlight, hIndex) => (
                                <li key={hIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                                  <span className="w-1 h-1 bg-sunset-orange rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-2">
                        {exp.highlights?.map((highlight, hIndex) => (
                          <li key={hIndex} className="text-gray-300 text-sm flex items-start space-x-2">
                            <span className="w-1 h-1 bg-sunset-orange rounded-full mt-2 flex-shrink-0"></span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
