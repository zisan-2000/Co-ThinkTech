import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      company: 'TechStart Inc.',
      content: 'CoThinkTech transformed our outdated systems into a modern, efficient platform. Their expertise and dedication exceeded our expectations. The team was professional, responsive, and delivered on time.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Michael Chen',
      position: 'CTO, InnovateLab',
      company: 'InnovateLab',
      content: 'Working with CoThinkTech was a game-changer for our startup. They helped us build a scalable architecture that grew with our business. Their technical expertise is unmatched.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Product Manager, DataFlow',
      company: 'DataFlow',
      content: 'The mobile app CoThinkTech developed for us has been incredibly successful. User engagement increased by 300% after launch. Their attention to detail and user experience is exceptional.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'David Park',
      position: 'Founder, EcoSolutions',
      company: 'EcoSolutions',
      content: 'CoThinkTech helped us digitize our entire operation. The cloud migration was seamless, and the new system has improved our efficiency by 40%. Highly recommended!',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Lisa Thompson',
      position: 'Director of IT, RetailMax',
      company: 'RetailMax',
      content: 'The e-commerce platform CoThinkTech built for us has revolutionized our business. Sales increased by 250% in the first quarter. Their ongoing support has been fantastic.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'James Wilson',
      position: 'VP Engineering, FinanceFlow',
      company: 'FinanceFlow',
      content: 'Security was our top priority, and CoThinkTech delivered a robust, compliant solution. Their cybersecurity expertise gave us confidence in our digital transformation.',
      rating: 5,
      avatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Here's what our clients have to say about working with CoThinkTech."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-100 dark:to-slate-200 rounded-2xl p-8 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-500/20" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-slate-700 dark:text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-600">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-blue-600 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;