
import { useEffect, useState } from 'react';
import { ArrowRight, Download, MapPin, Mail, Phone, PlayCircle } from 'lucide-react'; // Added PlayCircle
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; // Assuming Shadcn UI Dialog

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isPodcastModalOpen, setIsPodcastModalOpen] = useState(false);

  const roles = [
    "QA & QC Team Lead",
    "ISTQB® CTFL, CTAL-TA, CTAL-TTA",
    "Automation Engineer",
    "CI/CD Specialist"
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const typingDuration = 3500; // Corresponds to 'typing 3.5s' in CSS
    const pauseDuration = 1500; // Pause before switching to the next role
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, typingDuration + pauseDuration);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background circuit */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-0.5 circuit-line"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 circuit-line" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-0.5 circuit-line" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-sunset-orange rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Al-Tofail</span> {/* Changed from text-white */}
            <br />
            <span className="text-gradient">Al-Hiary</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-foreground mb-4 h-8 flex justify-center items-center"> {/* Changed from text-gray-300 */}
            <div key={currentRoleIndex} className="typewriter font-mono">
              {roles[currentRoleIndex]}
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"> {/* Changed from text-gray-400 */}
            Quality ∙ Velocity ∙ Reliability
          </p>

          {/* Contact info chips */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="glass-card px-4 py-2 rounded-full flex items-center space-x-2">
              <MapPin size={16} className="text-sunset-orange" />
              <span className="text-sm text-muted-foreground">Amman, Jordan (UTC +03)</span> {/* Changed from text-gray-300 */}
            </div>
            <div className="glass-card px-4 py-2 rounded-full flex items-center space-x-2">
              <Mail size={16} className="text-sunset-orange" />
              <span className="text-sm text-muted-foreground">tofailhiary@gmail.com</span> {/* Changed from text-gray-300 */}
            </div>
            <div className="glass-card px-4 py-2 rounded-full flex items-center space-x-2">
              <Phone size={16} className="text-sunset-orange" />
              <span className="text-sm text-muted-foreground">+962 777 894 429</span> {/* Changed from text-gray-300 */}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center sm:items-start"> {/* Changed items-center to sm:items-start */}
            <a
              href="#contact"
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>Get In Touch</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="CV_AlTofailAlHiary.pdf" 
              download
              className="btn-secondary inline-flex items-center space-x-2 group"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              <span>Download CV</span>
            </a>
            {/* Podcast Player Button & Modal */}
            <Dialog open={isPodcastModalOpen} onOpenChange={setIsPodcastModalOpen}>
              <DialogTrigger asChild>
                <button className="btn-secondary inline-flex items-center space-x-2 group">
                  <PlayCircle size={20} className="group-hover:scale-110 transition-transform" />
                  <span>Podcast About Me</span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[525px] bg-card border-border">
                <DialogHeader>
                  <DialogTitle className="text-foreground">Podcast: Al-Tofail Al-Hiary - Quality Assurance</DialogTitle>
                </DialogHeader>
                <div className="py-4">
                  <audio 
                    controls 
                    src="Al-Tofail Al-Hiary_ Quality Assurance.wav" 
                    aria-label="Al-Tofail Al-Hiary Quality Assurance Podcast"
                    className="w-full rounded-lg"
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sunset-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sunset-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
