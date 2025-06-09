import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  BarChart3,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import WaveDivider from "../components/ui/WaveDivider";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and best practices for optimal performance and user experience.",
      features: [
        "React/Next.js Development",
        "Node.js Backend Services",
        "TypeScript Implementation",
        "Responsive Design",
        "Progressive Web Apps",
        "API Integration",
        "Performance Optimization",
        "SEO Implementation",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      pricing: "Starting from $5,000",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: [
        "React Native Development",
        "iOS/Android Native Apps",
        "Cross-platform Solutions",
        "UI/UX Design",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Performance Monitoring",
      ],
      technologies: ["React Native", "Swift", "Kotlin", "Flutter"],
      pricing: "Starting from $8,000",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services designed for modern businesses and future growth.",
      features: [
        "AWS/Azure/GCP Setup",
        "Cloud Migration",
        "DevOps Implementation",
        "Microservices Architecture",
        "Auto-scaling Solutions",
        "Container Orchestration",
        "CI/CD Pipelines",
        "Infrastructure as Code",
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
      pricing: "Starting from $3,000",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Robust data pipelines and analytics solutions to unlock valuable business insights from your data.",
      features: [
        "ETL Pipeline Development",
        "Data Warehousing",
        "Real-time Analytics",
        "Machine Learning Integration",
        "Data Visualization",
        "Business Intelligence",
        "Data Quality Management",
        "Predictive Analytics",
      ],
      technologies: [
        "Python",
        "Apache Spark",
        "Snowflake",
        "Tableau",
        "TensorFlow",
      ],
      pricing: "Starting from $6,000",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets, data, and business operations.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Security Monitoring",
        "Incident Response",
        "Risk Assessment",
        "Security Training",
        "Vulnerability Management",
      ],
      technologies: ["OWASP", "NIST Framework", "ISO 27001", "SOC 2"],
      pricing: "Starting from $4,000",
    },
    {
      icon: BarChart3,
      title: "Digital Strategy",
      description:
        "Strategic consulting to align technology initiatives with business objectives and drive digital transformation.",
      features: [
        "Technology Roadmap",
        "Digital Transformation",
        "Process Optimization",
        "ROI Analysis",
        "Competitive Analysis",
        "Market Research",
        "Change Management",
        "Innovation Workshops",
      ],
      technologies: ["Agile", "Lean", "Design Thinking", "OKRs"],
      pricing: "Starting from $2,500",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We start by understanding your business goals, challenges, and requirements through detailed consultation.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Our team develops a comprehensive strategy and roadmap tailored to your specific needs and objectives.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "We implement the solution using best practices, modern technologies, and agile methodologies.",
    },
    {
      step: "04",
      title: "Deployment",
      description:
        "Careful deployment and testing ensure your solution is ready for production with minimal disruption.",
    },
    {
      step: "05",
      title: "Support",
      description:
        "Ongoing maintenance, monitoring, and support to ensure optimal performance and continuous improvement.",
    },
  ];

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
                Services
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation journey.
            </p>
          </motion.div>
        </div>
        <WaveDivider color="fill-white dark:fill-slate-50" />
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-100 dark:to-slate-200 rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-800 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-800 mb-3">
                        Key Features:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm text-slate-600 dark:text-slate-600"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-800 mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-200 text-blue-800 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {service.pricing}
                      </span>
                      <Link
                        to="/contact"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group"
                      >
                        <span>Get Quote</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Process"
            subtitle="A proven methodology that ensures successful project delivery and client satisfaction."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss your project requirements and how we can help bring
              your vision to life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
