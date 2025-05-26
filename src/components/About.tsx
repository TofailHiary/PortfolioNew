
import { Award, Calendar, Globe, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto"> {/* Changed from text-gray-400 */}
          Passionate QA leader specializing in automation & manual testing, AI-augmented quality engineering, STLC governance, and Agile-driven delivery strategy
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Professional Journey</h3> {/* Changed from text-white */}
              <p className="text-secondary-foreground leading-relaxed"> {/* Changed from text-gray-300 */}
              With 9 + years in software quality assurance, I’ve advanced from hands-on test engineer to strategic QA leader, delivering results across fintech, e-commerce, telecom, ERP, HR, finance, marketing, social media, CMS, e-learning, real estate, insurance, healthcare, and content-management domains. I pair deep manual-testing expertise with scalable automation frameworks, governing the entire STLC—from requirements analysis to release sign-off—within fast-paced Agile sprints. Along the way, I’ve led distributed teams, embedded quality gates in every iteration, and championed quality-first practices that turn engineering rigour into measurable business value.              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-sunset-orange mb-4">Career Objective</h4>
              <p className="text-secondary-foreground italic"> {/* Changed from text-gray-300 */}
              Vision-driven QA & Automation Leader (ISTQB CTFL, CTAL-TA/TTA) seeking to head enterprise Quality Engineering in an innovation-focused technology organization. My mission is to fuse AI-powered, self-healing automation with disciplined manual testing and STLC-aligned Agile workflows—slashing regression cycles and defect-escape rates, mentoring cross-functional squads in quality-first thinking, and turning detailed test insights into data-backed decisions that safeguard user trust and accelerate global releases              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                <Calendar className="text-primary-foreground" size={28} /> {/* Changed from text-white */}
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Born</h4> {/* Changed from text-white */}
              <p className="text-secondary-foreground">25 May 1990</p> {/* Changed from text-gray-300 */}
              
            </div>

            <div className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                <Globe className="text-primary-foreground" size={28} /> {/* Changed from text-white */}
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Nationality</h4> {/* Changed from text-white */}
              <p className="text-secondary-foreground">Jordanian</p> {/* Changed from text-gray-300 */}
              
            </div>

            <div className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                <GraduationCap className="text-primary-foreground" size={28} /> {/* Changed from text-white */}
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Education</h4> {/* Changed from text-white */}
              <p className="text-secondary-foreground">B.Sc. 2013</p> {/* Changed from text-gray-300 */}
              
            </div>

            <div className="glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                <Award className="text-primary-foreground" size={28} /> {/* Changed from text-white */}
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Languages</h4> {/* Changed from text-white */}
              <p className="text-secondary-foreground">Arabic (Native)</p> {/* Changed from text-gray-300 */}
              <p className="text-sm text-muted-foreground">English (Fluent)</p> {/* Changed from text-gray-400 */}
            </div>
          </div>
        </div>

        {/* ISTQB Fun Fact */}
        <div className="mt-12 text-center">
          <div className="glass-card p-8 rounded-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-sunset-orange mb-4">🎯 ISTQB® Fun Fact</h3>
            <p className="text-secondary-foreground text-lg"> {/* Changed from text-gray-300 */}
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
