
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      name: "ISTQB® CTFL",
      fullName: "Certified Tester Foundation Level",
      issuer: "International Software Testing Qualifications Board",
      year: "2019",
      category: "Testing",
      verified: true,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "ISTQB® CTAL-TA", 
      fullName: "Certified Tester Advanced Level - Test Analyst",
      issuer: "International Software Testing Qualifications Board",
      year: "2021",
      category: "Testing",
      verified: true,
      color: "from-green-500 to-green-600"
    },
    {
      name: "ISTQB® CTAL-TTA",
      fullName: "Certified Tester Advanced Level - Technical Test Analyst", 
      issuer: "International Software Testing Qualifications Board",
      year: "2022",
      category: "Testing",
      verified: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "CCNA",
      fullName: "Cisco Certified Network Associate",
      issuer: "Cyber Technical Consulting",
      year: "2018",
      category: "Networking",
      verified: true,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "CCNP Switching",
      fullName: "Cisco Certified Network Professional - Switching",
      issuer: "Cyber Technical Consulting", 
      year: "2018",
      category: "Networking",
      verified: true,
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Computer System Validation",
      fullName: "CSV Training & Certification",
      issuer: "ETQ",
      year: "2017",
      category: "Compliance",
      verified: true,
      color: "from-red-500 to-red-600"
    },
    {
      name: "JMeter Performance Testing",
      fullName: "Advanced Performance Testing with JMeter",
      issuer: "ETQ",
      year: "2017", 
      category: "Performance",
      verified: true,
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Risk Assessment",
      fullName: "Risk Assessment & Management",
      issuer: "ETQ",
      year: "2017",
      category: "Management",
      verified: true,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Berlitz English Levels 1-3",
      fullName: "English Language Proficiency Certification",
      issuer: "Berlitz Language Center",
      year: "2016",
      category: "Language",
      verified: true,
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Certificates & Training</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements that validate expertise and commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center group-hover:animate-glow flex-shrink-0`}>
                  <Award className="text-white" size={24} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-sunset-orange transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-2 leading-tight">
                    {cert.fullName}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Issuer:</span>
                  <span className="text-gray-300">{cert.issuer}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Year:</span>
                  <span className="text-gray-300 flex items-center space-x-1">
                    <Calendar size={12} />
                    <span>{cert.year}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Category:</span>
                  <span className={`px-2 py-1 bg-gradient-to-r ${cert.color} text-white text-xs rounded-full`}>
                    {cert.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                {cert.verified && (
                  <div className="flex items-center space-x-1 text-green-400 text-xs">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Verified</span>
                  </div>
                )}
                <button className="text-sunset-orange hover:text-sunset-amber transition-colors text-sm flex items-center space-x-1 group">
                  <span>View Certificate</span>
                  <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">9</div>
            <div className="text-gray-400 text-sm">Total Certificates</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">3</div>
            <div className="text-gray-400 text-sm">ISTQB® Levels</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">8</div>
            <div className="text-gray-400 text-sm">Years Learning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">100%</div>
            <div className="text-gray-400 text-sm">Verified</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
