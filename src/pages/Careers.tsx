import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Heart, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import WaveDivider from '../components/ui/WaveDivider';

const Careers = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'Join our engineering team to build scalable web applications using modern technologies.',
      requirements: [
        '5+ years of experience with React and Node.js',
        'Experience with cloud platforms (AWS/Azure)',
        'Strong understanding of database design',
        'Experience with CI/CD pipelines'
      ]
    },
    {
      id: 2,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$110,000 - $150,000',
      description: 'Help us build and maintain robust, scalable infrastructure for our growing platform.',
      requirements: [
        '3+ years of DevOps experience',
        'Expertise in Docker and Kubernetes',
        'Experience with Infrastructure as Code',
        'Strong scripting skills (Python/Bash)'
      ]
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'San Francisco, CA / Hybrid',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      description: 'Create beautiful, intuitive user experiences that delight our clients and their users.',
      requirements: [
        '4+ years of UX/UI design experience',
        'Proficiency in Figma and design systems',
        'Experience with user research and testing',
        'Strong portfolio demonstrating design thinking'
      ]
    },
    {
      id: 4,
      title: 'Project Manager',
      department: 'Operations',
      location: 'San Francisco, CA / Hybrid',
      type: 'Full-time',
      salary: '$85,000 - $120,000',
      description: 'Lead cross-functional teams to deliver exceptional results for our clients.',
      requirements: [
        '3+ years of project management experience',
        'PMP or Agile certification preferred',
        'Experience with software development projects',
        'Excellent communication and leadership skills'
      ]
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      description: 'Turn data into insights that drive business decisions for our clients.',
      requirements: [
        'PhD or Masters in Data Science, Statistics, or related field',
        'Experience with Python, R, and SQL',
        'Machine learning and statistical modeling expertise',
        'Experience with big data technologies'
      ]
    },
    {
      id: 6,
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'San Francisco, CA / Hybrid',
      type: 'Full-time',
      salary: '$60,000 - $80,000 + Commission',
      description: 'Help grow our business by identifying and qualifying new opportunities.',
      requirements: [
        '1-3 years of sales or business development experience',
        'Strong communication and interpersonal skills',
        'Experience with CRM systems',
        'Self-motivated and results-driven'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness programs'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible hours, unlimited PTO, and remote work options'
    },
    {
      icon: Zap,
      title: 'Growth & Learning',
      description: 'Professional development budget, conference attendance, and mentorship'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and celebrations'
    },
    {
      icon: DollarSign,
      title: 'Financial Benefits',
      description: 'Competitive salary, equity options, and 401(k) with company matching'
    },
    {
      icon: MapPin,
      title: 'Great Location',
      description: 'Modern office in the heart of San Francisco with hybrid work options'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace new technologies and creative solutions to solve complex problems.'
    },
    {
      title: 'Collaborative Spirit',
      description: 'We believe the best results come from diverse teams working together.'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage experimentation.'
    },
    {
      title: 'Client Success',
      description: 'Our clients\' success is our success, and we go above and beyond to deliver.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Join Our{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Build the future of technology with us. We're looking for passionate individuals 
              who want to make a real impact in the world of software development.
            </p>
          </motion.div>
        </div>
        <WaveDivider color="fill-white dark:fill-slate-50" />
      </section>

      {/* Company Culture */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-800 mb-6">
                Why Work at CoThinkTech?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-600 mb-6 leading-relaxed">
                We're more than just a technology company. We're a community of innovators, 
                problem-solvers, and dreamers who believe technology can make the world better.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-600 mb-8 leading-relaxed">
                Our team enjoys a collaborative environment where everyone's ideas are valued, 
                growth is encouraged, and work-life balance is prioritized.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <h4 className="font-bold text-slate-900 dark:text-slate-800 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Benefits & Perks"
            subtitle="We believe in taking care of our team with comprehensive benefits and a supportive work environment."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Open Positions"
            subtitle="Join our growing team and help us build the future of technology."
            className="mb-16"
          />

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-100 dark:to-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-800">
                        {position.title}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-200 text-blue-800 text-sm font-medium rounded-full">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4" />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-600 mb-4 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-800 mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-sm text-slate-600 dark:text-slate-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8">
                    <Link
                      to="/contact"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 group"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
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
              Don't See Your Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you'd like to contribute.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Get In Touch</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Careers;