import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Eye, Heart, Award, Globe } from "lucide-react";
import SectionTitle from "../components/ui/SectionTitle";
import WaveDivider from "../components/ui/WaveDivider";

const About = () => {
  const team = [
    {
      name: "Alex Thompson",
      position: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech industry, passionate about innovation.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "Sarah Chen",
      position: "CTO",
      bio: "Technical architect specializing in scalable systems and cloud infrastructure.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "Michael Rodriguez",
      position: "Lead Developer",
      bio: "Full-stack expert with expertise in modern web and mobile technologies.",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "Emily Johnson",
      position: "UX/UI Designer",
      bio: "Creative designer focused on user-centered design and exceptional experiences.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "David Park",
      position: "DevOps Engineer",
      bio: "Infrastructure specialist ensuring reliable, scalable, and secure deployments.",
      image:
        "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
    {
      name: "Lisa Wang",
      position: "Project Manager",
      bio: "Agile expert ensuring projects are delivered on time and exceed expectations.",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission",
      description:
        "To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.",
    },
    {
      icon: Eye,
      title: "Vision",
      description:
        "To be the leading technology partner for businesses seeking digital transformation, recognized for our expertise, innovation, and client success.",
    },
    {
      icon: Heart,
      title: "Values",
      description:
        "Innovation, integrity, collaboration, excellence, and continuous learning guide everything we do and every relationship we build.",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Winner of Tech Innovation Award 2023",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across 15+ countries",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "50+ certified professionals",
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
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About
              </span>{" "}
              CoThinkTech
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              We're more than just a technology company. We're your partners in
              digital transformation, committed to turning your vision into
              reality through innovative solutions and collaborative excellence.
            </p>
          </motion.div>
        </div>
        <WaveDivider color="fill-white dark:fill-slate-50" />
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-600 leading-relaxed">
                <p>
                  Founded in 2019 by a team of passionate technologists,
                  CoThinkTech emerged from a simple yet powerful idea:
                  technology should solve real business problems, not create new
                  ones.
                </p>
                <p>
                  What started as a small consulting firm has grown into a
                  comprehensive technology partner, serving clients from
                  startups to Fortune 500 companies. Our journey has been marked
                  by continuous learning, adaptation, and an unwavering
                  commitment to excellence.
                </p>
                <p>
                  Today, we're proud to be at the forefront of digital
                  innovation, helping businesses navigate the complexities of
                  modern technology while staying true to our core values of
                  collaboration, integrity, and results-driven solutions.
                </p>
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

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Foundation"
            subtitle="The principles that guide our work and define our commitment to excellence."
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
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
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Achievements"
            subtitle="Recognition and milestones that reflect our commitment to excellence."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-100 dark:to-purple-100 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <achievement.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-600">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The talented individuals who make CoThinkTech's success possible."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {member.position}
                </p>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
