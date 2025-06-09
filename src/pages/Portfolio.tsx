import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import WaveDivider from "../components/ui/WaveDivider";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "cloud", name: "Cloud Solutions" },
    { id: "data", name: "Data & Analytics" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description:
        "Modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      results: [
        "300% increase in sales",
        "50% faster load times",
        "95% customer satisfaction",
      ],
    },
    {
      id: 2,
      title: "Healthcare Mobile App",
      category: "mobile",
      description:
        "HIPAA-compliant mobile application for patient management, appointment scheduling, and telemedicine consultations.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "WebRTC", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      results: [
        "10,000+ active users",
        "40% reduction in no-shows",
        "HIPAA compliant",
      ],
    },
    {
      id: 3,
      title: "Cloud Migration Project",
      category: "cloud",
      description:
        "Complete cloud migration for enterprise client, including infrastructure setup, data migration, and DevOps implementation.",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      liveUrl: "#",
      githubUrl: "#",
      results: [
        "60% cost reduction",
        "99.9% uptime",
        "Zero downtime migration",
      ],
    },
    {
      id: 4,
      title: "Financial Dashboard",
      category: "web",
      description:
        "Real-time financial analytics dashboard with advanced charting, reporting, and data visualization capabilities.",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      results: [
        "Real-time data processing",
        "Custom reporting",
        "Multi-tenant architecture",
      ],
    },
    {
      id: 5,
      title: "IoT Data Platform",
      category: "data",
      description:
        "Scalable IoT data platform processing millions of sensor readings with real-time analytics and machine learning insights.",
      image:
        "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Apache Kafka", "Spark", "TensorFlow", "InfluxDB"],
      liveUrl: "#",
      githubUrl: "#",
      results: [
        "1M+ data points/hour",
        "Predictive maintenance",
        "30% efficiency gain",
      ],
    },
    {
      id: 6,
      title: "Social Media App",
      category: "mobile",
      description:
        "Cross-platform social media application with real-time messaging, content sharing, and advanced privacy controls.",
      image:
        "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      technologies: ["Flutter", "Firebase", "Node.js", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      results: [
        "50,000+ downloads",
        "Real-time messaging",
        "Cross-platform compatibility",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Explore our successful projects and see how we've helped
              businesses transform their operations through innovative
              technology solutions.
            </p>
          </motion.div>
        </div>
        <WaveDivider color="fill-white dark:fill-slate-50" />
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                    : "bg-slate-100 dark:bg-slate-200 text-slate-700 hover:bg-slate-200 dark:hover:bg-slate-300"
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12" layout>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-100 dark:to-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                      aria-label="View source code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-800 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-800 mb-3">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-200 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-slate-800 mb-3">
                      Key Results:
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, resultIndex) => (
                        <li
                          key={resultIndex}
                          className="flex items-center text-sm text-slate-600 dark:text-slate-600"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Project Impact"
            subtitle="The measurable results we've achieved for our clients across all projects."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "25+", label: "Happy Clients" },
              { number: "99.9%", label: "Uptime Average" },
              { number: "200%", label: "Average ROI Increase" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 dark:text-slate-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Portfolio;
