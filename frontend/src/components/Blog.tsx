
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

const Blog = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: 'Building Interactive 3D Experiences with React Three Fiber',
      excerpt: 'Dive into the world of 3D web development and learn how to create stunning interactive experiences using React Three Fiber and modern web technologies.',
      content: '',
      date: 'April 15, 2024',
      readTime: '8 min read',
      tags: ['React', 'Three.js', 'WebGL', '3D'],
      featured: true
    },
    {
      id: 2,
      title: 'The Art of Micro-Interactions in Modern Web Design',
      excerpt: 'Explore how subtle animations and micro-interactions can transform user experience and create more engaging web interfaces.',
      content: '',
      date: 'April 10, 2024',
      readTime: '6 min read',
      tags: ['UI/UX', 'Animation', 'Design'],
      featured: true
    },
    {
      id: 3,
      title: 'Performance Optimization Techniques for React Applications',
      excerpt: 'Learn advanced techniques to optimize React applications for better performance, including code splitting, memoization, and bundle analysis.',
      content: '',
      date: 'March 28, 2024',
      readTime: '10 min read',
      tags: ['React', 'Performance', 'Optimization'],
      featured: false
    },
    {
      id: 4,
      title: 'Creating Responsive Animations with Framer Motion',
      excerpt: 'Master the art of creating smooth, responsive animations that work across all devices using Framer Motion.',
      content: '',
      date: 'March 20, 2024',
      readTime: '7 min read',
      tags: ['Animation', 'Framer Motion', 'React'],
      featured: false
    }
  ];

  const featuredPosts = posts.filter(p => p.featured);
  const recentPosts = posts.filter(p => !p.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Blog & Writeups
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Thoughts on development, design, and the intersection of technology and creativity.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Featured Articles</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.div
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Read more
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Recent Posts */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-200">Recent Posts</h3>
          <div className="space-y-6">
            {recentPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="group cursor-pointer"
              >
                <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={14} />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <motion.div
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium whitespace-nowrap"
                      whileHover={{ x: 5 }}
                    >
                      Read more
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
              Stay Updated
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles about web development, design, and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
