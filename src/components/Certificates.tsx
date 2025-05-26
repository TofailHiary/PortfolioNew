
import { Award, ExternalLink, Calendar } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      name: "ISTQB® CTFL",
      fullName: "Certified Tester Foundation Level",
      issuer: "International Software Testing Qualifications Board",
      year: "2019",
      category: "Testing",
      color: "from-blue-500 to-blue-600",
      fileUrl: "ctfl.pdf"
    },
    {
      name: "ISTQB® CTAL-TA", 
      fullName: "Certified Tester Advanced Level - Test Analyst",
      issuer: "International Software Testing Qualifications Board",
      year: "2021",
      category: "Testing",
      color: "from-green-500 to-green-600",
      fileUrl: "ctal-ta.pdf"
    },
    {
      name: "ISTQB® CTAL-TTA",
      fullName: "Certified Tester Advanced Level - Technical Test Analyst", 
      issuer: "International Software Testing Qualifications Board",
      year: "2022",
      category: "Testing",
      color: "from-purple-500 to-purple-600",
      fileUrl: "21-CTAL-TTA-183921-12.pdf"
    },
    {
      name: "CCNA (Training)",
      fullName: "",
      issuer: "Cyber Technical Consulting",
      year: "2013",
      category: "Networking",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "CCNP Switching (Training)",
      fullName: "",
      issuer: "Cyber Technical Consulting", 
      year: "2013",
      category: "Networking",
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Computer System Validation (Training)",
      fullName: "",
      issuer: "ETQ",
      year: "2017",
      category: "Compliance",
      color: "from-red-500 to-red-600"
    },
    {
      name: "JMeter Performance Testing (Training)",
      fullName: "Advanced Performance Testing with JMeter",
      issuer: "ETQ",
      year: "2018", 
      category: "Performance",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      name: "Risk Assessment (Training)",
      fullName: "Risk Assessment & Management",
      issuer: "ETQ",
      year: "2017",
      category: "Management",
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Berlitz English Levels 1-3",
      fullName: "English Language Proficiency Certification",
      issuer: "Berlitz Language Center",
      year: "2016",
      category: "Language",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section id="certificates" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Certificates & Training</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto"> {/* Changed from text-gray-400 */}
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
                  <Award className="text-primary-foreground" size={24} /> {/* Changed from text-white */}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-sunset-orange transition-colors"> {/* Changed from text-white */}
                    {cert.name}
                  </h3>
                  <p className="text-sm text-secondary-foreground mb-2 leading-tight"> {/* Changed from text-gray-300 */}
                    {cert.fullName}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-start justify-between text-sm"> {/* Changed items-center to items-start */}
                  <span className="text-muted-foreground whitespace-nowrap mr-2">Issuer:</span> {/* Added mr-2 for spacing */}
                  <span className="text-secondary-foreground text-right flex-shrink min-w-0">{cert.issuer}</span> {/* Added text-right and flex properties */}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Year:</span>
                  <span className="text-secondary-foreground flex items-center space-x-1"> {/* Changed from text-gray-300 */}
                    <Calendar size={12} />
                    <span>{cert.year}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Category:</span> {/* Changed from text-gray-400 */}
                  <span className={`px-2 py-1 bg-gradient-to-r ${cert.color} text-white text-xs rounded-full`}>
                    {cert.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-end"> {/* Changed justify-between to justify-end */}
                {/* Removed Verified status display */}
                {!cert.name.toLowerCase().includes("(training)") && cert.fileUrl && (
                  <a 
                    href={cert.fileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    download 
                    className="text-sunset-orange hover:text-sunset-amber transition-colors text-sm flex items-center space-x-1 group"
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certification Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">9</div>
            <div className="text-muted-foreground text-sm">Total Certificates & Trainings</div> {/* Changed from text-gray-400 */}
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">3</div>
            <div className="text-muted-foreground text-sm">ISTQB® Levels</div> {/* Changed from text-gray-400 */}
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">9+</div>
            <div className="text-muted-foreground text-sm">Years Learning</div> {/* Changed from text-gray-400 */}
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">100%</div>
            <div className="text-muted-foreground text-sm">Verified</div> {/* Changed from text-gray-400 */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
