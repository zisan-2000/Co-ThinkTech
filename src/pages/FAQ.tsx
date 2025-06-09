import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';
import WaveDivider from '../components/ui/WaveDivider';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What services does CoThinkTech offer?',
          answer: 'We offer comprehensive technology solutions including web development, mobile app development, cloud solutions, data engineering, cybersecurity, and digital strategy consulting. Our team specializes in modern frameworks and technologies to deliver scalable, secure solutions.'
        },
        {
          question: 'How long has CoThinkTech been in business?',
          answer: 'CoThinkTech was founded in 2019 and has been serving clients for over 5 years. In this time, we\'ve completed 50+ projects and built lasting relationships with clients ranging from startups to Fortune 500 companies.'
        },
        {
          question: 'What industries do you work with?',
          answer: 'We work across various industries including healthcare, finance, e-commerce, education, manufacturing, and technology startups. Our diverse experience allows us to understand unique industry challenges and deliver tailored solutions.'
        },
        {
          question: 'Do you work with startups or only established companies?',
          answer: 'We work with businesses of all sizes, from early-stage startups to large enterprises. We understand that each stage of business has unique needs and budget considerations, and we tailor our approach accordingly.'
        }
      ]
    },
    {
      title: 'Project & Pricing',
      faqs: [
        {
          question: 'How do you price your projects?',
          answer: 'Our pricing is based on project scope, complexity, timeline, and required technologies. We offer both fixed-price and time-and-materials models. After understanding your requirements, we provide a detailed proposal with transparent pricing and no hidden costs.'
        },
        {
          question: 'What is your typical project timeline?',
          answer: 'Project timelines vary based on complexity and scope. Simple websites typically take 4-8 weeks, while complex web applications can take 3-6 months. Mobile apps usually require 2-4 months. We provide detailed timelines during the planning phase.'
        },
        {
          question: 'Do you offer ongoing support and maintenance?',
          answer: 'Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We believe in long-term partnerships with our clients.'
        },
        {
          question: 'Can you work within our existing budget?',
          answer: 'We work with various budget ranges and can often find creative solutions to meet your needs. During our initial consultation, we\'ll discuss your budget and recommend the best approach to maximize value within your constraints.'
        }
      ]
    },
    {
      title: 'Technical Questions',
      faqs: [
        {
          question: 'What technologies do you specialize in?',
          answer: 'We specialize in modern web technologies including React, Next.js, Node.js, TypeScript, Python, and cloud platforms like AWS and Azure. For mobile development, we use React Native and native iOS/Android development. We stay current with the latest technologies and best practices.'
        },
        {
          question: 'Do you provide cloud migration services?',
          answer: 'Yes, we offer comprehensive cloud migration services including assessment, planning, migration execution, and optimization. We work with AWS, Azure, and Google Cloud Platform to help businesses modernize their infrastructure.'
        },
        {
          question: 'How do you ensure the security of our applications?',
          answer: 'Security is built into our development process from day one. We follow OWASP guidelines, implement secure coding practices, conduct regular security audits, and ensure compliance with industry standards like GDPR, HIPAA, and SOC 2 when required.'
        },
        {
          question: 'Can you integrate with our existing systems?',
          answer: 'Absolutely. We have extensive experience integrating with various third-party systems, APIs, databases, and legacy applications. We ensure seamless data flow and maintain system integrity throughout the integration process.'
        }
      ]
    },
    {
      title: 'Process & Communication',
      faqs: [
        {
          question: 'What is your development process?',
          answer: 'We follow an agile development methodology with regular sprints, daily standups, and frequent client communication. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support.'
        },
        {
          question: 'How often will we receive project updates?',
          answer: 'We provide regular updates through weekly status reports, bi-weekly demo sessions, and maintain constant communication through Slack or your preferred communication platform. You\'ll always know the current status of your project.'
        },
        {
          question: 'Can we make changes during development?',
          answer: 'Yes, we understand that requirements can evolve. Our agile process accommodates changes, though we\'ll discuss the impact on timeline and budget. We use a formal change request process to ensure transparency.'
        },
        {
          question: 'Do you provide training for our team?',
          answer: 'Yes, we offer comprehensive training for your team on how to use and maintain the solutions we build. This includes documentation, video tutorials, and hands-on training sessions to ensure your team is comfortable with the new system.'
        }
      ]
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
            <HelpCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Find answers to common questions about our services, process, and how we can help 
              transform your business with technology.
            </p>
          </motion.div>
        </div>
        <WaveDivider color="fill-white dark:fill-slate-50" />
      </section>

      {/* FAQ Sections */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-800 mb-8 text-center">
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <motion.div
                        key={faqIndex}
                        className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-100 dark:to-slate-200 rounded-2xl overflow-hidden shadow-lg"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-200 transition-colors"
                        >
                          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-800 pr-4">
                            {faq.question}
                          </h3>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-blue-600" />
                            ) : (
                              <Plus className="w-5 h-5 text-blue-600" />
                            )}
                          </div>
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-8 pb-6">
                                <p className="text-slate-600 dark:text-slate-600 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Can't find the answer you're looking for? Our team is here to help. 
              Get in touch and we'll respond as quickly as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact Us</span>
              </Link>
              <a
                href="mailto:hello@cothinktech.com"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-2xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200"
              >
                <span>Email Us Directly</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default FAQ;