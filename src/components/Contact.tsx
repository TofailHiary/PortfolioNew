
import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Check } from 'lucide-react'; // Removed MessageSquare
import WhatsappIcon from './icons/WhatsappIcon'; // Added WhatsappIcon import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mzzrlawl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Handle errors (e.g., show an error message to the user)
        // For now, just log it and don't clear the form or show success
        console.error("Form submission error:", await response.json());
        alert("There was an error submitting your message. Please try again."); // Simple alert for now
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your message. Please try again."); // Simple alert for now
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto"> {/* Changed from text-gray-400 */}
            Ready to discuss quality assurance challenges, automation opportunities, or leadership roles? 
            Let's connect and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3> {/* Changed from text-white */}
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded-lg flex items-center justify-center">
                    <Mail className="text-primary-foreground" size={20} /> {/* Changed from text-white */}
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p> {/* Changed from text-gray-400 */}
                    <p className="text-foreground">tofailhiary@gmail.com</p> {/* Changed from text-white */}
                    <p className="text-secondary-foreground text-sm">tofailhiary@yahoo.com</p> {/* Changed from text-gray-300 */}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded-lg flex items-center justify-center">
                    <Phone className="text-primary-foreground" size={20} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <p className="text-foreground">+962 777 894 429</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-sunset-orange to-sunset-amber rounded-lg flex items-center justify-center">
                    <MapPin className="text-primary-foreground" size={20} /> {/* Changed from text-white */}
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p> {/* Changed from text-gray-400 */}
                    <p className="text-foreground">Amman, Jordan</p> {/* Changed from text-white */}
                    <p className="text-secondary-foreground text-sm">UTC +03</p> {/* Changed from text-gray-300 */}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3> {/* Changed from text-white */}
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/al-tofail-al-hiary-3268a798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <Linkedin className="text-white" size={20} />
                </a>
                <a
                  href="https://github.com/tofailhiary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <Github className="text-white" size={20} />
                </a>
                <a
                  href="https://wa.me/962777894429"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                >
                  <WhatsappIcon className="text-white w-5 h-5" />
                </a>
                <a
                  href="mailto:tofailhiary@gmail.com"
                  className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                  aria-label="Send an email"
                >
                  <Mail className="text-white" size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Send a Message</h3> {/* Changed from text-white */}
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="text-white" size={32} /> {/* text-white on green bg is fine */}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h4> {/* Changed from text-white */}
                <p className="text-secondary-foreground">Thank you for reaching out. I'll get back to you soon!</p> {/* Changed from text-gray-300 */}
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-sunset-orange hover:text-sunset-amber transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-foreground mb-2"> {/* Changed from text-gray-300 */}
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring text-foreground placeholder:text-muted-foreground transition-all duration-200"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-foreground mb-2"> {/* Changed from text-gray-300 */}
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring text-foreground placeholder:text-muted-foreground transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-foreground mb-2"> {/* Changed from text-gray-300 */}
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring text-foreground placeholder:text-muted-foreground transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-foreground mb-2"> {/* Changed from text-gray-300 */}
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-ring text-foreground placeholder:text-muted-foreground transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
