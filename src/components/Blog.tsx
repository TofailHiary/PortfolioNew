
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
        title: "AI-Powered Self-Healing Test Automation: The Future is Now",
        excerpt: "Exploring how artificial intelligence is revolutionizing test automation with self-healing capabilities that adapt to UI changes automatically...",
        date: "2024-01-15",
        url: "https://tofailhiary.github.io/QAGeeks/ai-self-healing-automation",
        category: "AI Testing"
      },
      {
        title: "Building Resilient CI/CD Pipelines: Quality Gates That Matter",
        excerpt: "A comprehensive guide to implementing quality gates in your CI/CD pipeline that actually prevent bugs from reaching production...",
        date: "2024-01-08",
        url: "https://tofailhiary.github.io/QAGeeks/cicd-quality-gates",
        category: "DevOps"
      },
      {
        title: "Mobile Testing Strategy: Cross-Platform Excellence",
        excerpt: "Best practices for testing mobile applications across iOS and Android platforms, including device fragmentation challenges...",
        date: "2023-12-28",
        url: "https://tofailhiary.github.io/QAGeeks/mobile-testing-strategy",
        category: "Mobile Testing"
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
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Insights, tutorials, and thoughts on quality assurance, automation, and the future of testing
          </p>
          
          <a
            href="https://tofailhiary.github.io/QAGeeks/feed.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-sunset-orange hover:text-sunset-amber transition-colors"
          >
            <Rss size={16} />
            <span className="text-sm">Subscribe to RSS Feed</span>
          </a>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="glass-card p-6 rounded-xl animate-pulse">
                <div className="h-4 bg-gray-700 rounded mb-4"></div>
                <div className="h-20 bg-gray-700 rounded mb-4"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
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
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-sunset-orange transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-400">
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
            <span>Visit QA Geeks Blog</span>
            <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
