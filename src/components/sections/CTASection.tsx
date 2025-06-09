import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";
import WaveDivider from "../ui/WaveDivider";

const CTASection = () => {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700">
      {/* <WaveDivider 
        className="absolute top-0 left-0 right-0" 
        color="fill-white dark:fill-slate-50" 
        flip={true} 
      /> */}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Let's discuss how we can help you achieve your technology goals. Get
            in touch with our team for a free consultation and project estimate.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold text-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-200"
              >
                <Calendar className="w-6 h-6" />
                <span>Schedule Consultation</span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <div className="text-2xl font-bold text-white mb-2">Free</div>
              <div className="text-blue-100">Initial Consultation</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-100">Satisfaction Guarantee</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
