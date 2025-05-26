
import { useState, useEffect } from 'react';
import { Calendar, ExternalLink, Rss } from 'lucide-react';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  url: string;
  category: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock blog posts (in real implementation, fetch from RSS feed)
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        title: "Elevate Your QA Engineering Skills",
        excerpt: "Your comprehensive guide for aspiring and professional Quality Assurance engineers, covering modern testing principles, methodologies, and tools....",
        date: "2025-01-15",
        url: "https://tofailhiary.github.io/QAGeeks/intro",
        category: "Testing Introduction "
      },
      {
        title: "Software Testing Life Cycle (STLC)",
        excerpt: "STLC is a sequence of specific activities conducted during the testing process to ensure software quality goals are met...",
        date: "2025-01-17",
        url: "https://tofailhiary.github.io/QAGeeks/stlc",
        category: "STLC"
      },
      {
        title: "QA Interview Questions",
        excerpt: "Explore a comprehensive list of categorized QA interview question...",
        date: "2025-01-28",
        url: "https://tofailhiary.github.io/QAGeeks/mobile-testing-strategy",
        category: "Interview Questions"
      }
    ];

    // Simulate API call
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient mb-4">Latest Blog Posts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8"> {/* Changed from text-gray-400 */}
          Concise insights, step-by-step tutorials, Q&A, reusable templates, and thought-provoking pieces on QA, test automation, and AI chatbots—crafted to make complex topics easy to grasp
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="glass-card p-6 rounded-xl animate-pulse">
                <div className="h-4 bg-muted rounded mb-4"></div> {/* Changed from bg-gray-700 */}
                <div className="h-20 bg-muted rounded mb-4"></div> {/* Changed from bg-gray-700 */}
                <div className="h-3 bg-muted rounded w-1/2"></div> {/* Changed from bg-gray-700 */}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="glass-card p-6 rounded-xl group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-sunset-orange/20 text-sunset-orange text-xs rounded-full border border-sunset-orange/30 mb-3">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-sunset-orange transition-colors leading-tight"> {/* Changed from text-white */}
                    {post.title}
                  </h3>
                  <p className="text-secondary-foreground text-sm leading-relaxed"> {/* Changed from text-gray-300 */}
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground"> {/* Changed from text-gray-400 */}
                    <Calendar size={12} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-sunset-orange hover:text-sunset-amber transition-colors text-sm group"
                  >
                    <span>Read More</span>
                    <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://tofailhiary.github.io/QAGeeks/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <span>QA Blog</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
