
import { Award, Calendar, Globe, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate QA professional with expertise in automation, leadership, and cutting-edge testing methodologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                With over 8 years of experience in software quality assurance, I've evolved from a hands-on test engineer 
                to a strategic QA leader. My journey spans across diverse industries and technologies, where I've successfully 
                led teams, implemented robust automation frameworks, and championed quality-first methodologies. I specialize 
                in bridging the gap between technical excellence and business objectives, ensuring that quality is never 
                compromised while maintaining velocity and reliability in software delivery.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-sunset-orange mb-4">Career Objective</h4>
              <p className="text-gray-300 italic">
                "Seeking an opportunity in a reputable organisation that offers challenging assignments for professional 
                growth, where I can leverage my QA-automation leadership and AI tooling expertise."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                <Calendar className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Born</h4>
              <p className="text-gray-300">25 May 1990</p>
              <p className="text-sm text-gray-400">33 years old</p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                <Globe className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Nationality</h4>
              <p className="text-gray-300">Jordanian</p>
              <p className="text-sm text-gray-400">Male</p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Education</h4>
              <p className="text-gray-300">B.Sc. 2013</p>
              <p className="text-sm text-gray-400">GPA: 2.5 "Good"</p>
            </div>

            <div className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                <Award className="text-white" size={28} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Languages</h4>
              <p className="text-gray-300">Arabic (Native)</p>
              <p className="text-sm text-gray-400">English (Fluent)</p>
            </div>
          </div>
        </div>

        {/* ISTQB Fun Fact */}
        <div className="mt-12 text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-sunset-orange mb-4">🎯 ISTQB® Fun Fact</h3>
            <p className="text-gray-300 text-lg">
              Holding multiple ISTQB® certifications (CTFL, CTAL-TA, CTAL-TTA), I'm part of the global community 
              of over 1 million certified testing professionals worldwide. These certifications represent not just 
              knowledge, but a commitment to international testing standards and continuous professional development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
