import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import WaveDivider from "../components/ui/WaveDivider";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt:
        "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps and beyond.",
      author: "Alex Thompson",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Web Development",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "Cloud Migration: A Complete Guide for Businesses",
      excerpt:
        "Learn the essential steps, best practices, and common pitfalls to avoid when migrating your business to the cloud.",
      author: "Sarah Chen",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Cloud Computing",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 3,
      title: "Mobile App Security: Protecting User Data in 2024",
      excerpt:
        "Discover the latest security threats facing mobile applications and how to implement robust protection measures.",
      author: "Michael Rodriguez",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Mobile Security",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 4,
      title: "AI and Machine Learning in Business Applications",
      excerpt:
        "How artificial intelligence is transforming business operations and creating new opportunities for growth.",
      author: "Emily Johnson",
      date: "2024-01-08",
      readTime: "15 min read",
      category: "Artificial Intelligence",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 5,
      title: "DevOps Best Practices for Startup Teams",
      excerpt:
        "Essential DevOps practices that can help startup teams deploy faster, more reliably, and with greater confidence.",
      author: "David Park",
      date: "2024-01-05",
      readTime: "7 min read",
      category: "DevOps",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false,
    },
    {
      id: 6,
      title: "Building Scalable APIs: Architecture and Design Patterns",
      excerpt:
        "Learn how to design and build APIs that can handle growth while maintaining performance and reliability.",
      author: "Lisa Wang",
      date: "2024-01-03",
      readTime: "11 min read",
      category: "Backend Development",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
      featured: false,
    },
  ];

  const categories = [
    "All Posts",
    "Web Development",
    "Cloud Computing",
    "Mobile Security",
    "Artificial Intelligence",
    "DevOps",
    "Backend Development",
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="pt-24  bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Insights, tutorials, and industry trends from our team of
              technology experts. Stay updated with the latest in software
              development and digital innovation.
            </p>
          </motion.div>
        </div>
        <WaveDivider color="fill-white dark:fill-slate-50" />
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 bg-white dark:bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-100 dark:to-slate-200 rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-slate-600 dark:text-slate-600 mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-200 text-blue-800 rounded-full">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-slate-800 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-slate-400" />
                      <span className="text-slate-600 dark:text-slate-600 font-medium">
                        {featuredPost.author}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Latest Articles"
            subtitle="Explore our latest insights and tutorials on technology, development, and digital innovation."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-slate-800 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-slate-400" />
                      <span className="text-sm text-slate-600 dark:text-slate-300">
                        {post.author}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 font-medium group"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Subscribe to our newsletter and get the latest insights,
              tutorials, and industry trends delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Blog;
