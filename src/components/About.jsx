import profile from "../assets/profile.jpg";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiCpu, FiGlobe, FiDatabase } from 'react-icons/fi'

const About = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    { icon: FiCode, label: 'Clean Code', value: '10+ Projects' },
    { icon: FiCpu, label: 'AI/ML', value: '5+ Models' },
    { icon: FiGlobe, label: 'Web Apps', value: '8+ Sites' },
    { icon: FiDatabase, label: 'Databases', value: '4+ Systems' },
  ]

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Get to know me better
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-cyan via-primary-500 to-accent-purple rounded-3xl opacity-20 blur-2xl" />
              <div className={`relative aspect-square rounded-3xl overflow-hidden ${
                darkMode ? 'glass' : 'bg-white shadow-xl'
              }`}>
                  <img
                    src={profile}
                    alt="VY"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className={`text-2xl md:text-3xl font-poppins font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Computer Science Student & Developer
            </h3>
            
            <div className={`space-y-4 mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>
                I'm a passionate Computer Science student with a deep interest in 
                Artificial Intelligence, Machine Learning, and Full-Stack Web Development. 
                I love turning complex problems into simple, beautiful solutions.
              </p>
              <p>
                Currently pursuing my degree while working on exciting projects that 
                combine cutting-edge technology with practical applications. I believe 
                in continuous learning and pushing the boundaries of what's possible.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with 
                the developer community.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className={`p-4 rounded-xl ${
                    darkMode ? 'glass' : 'bg-white shadow-lg'
                  }`}
                >
                  <Icon className="w-6 h-6 text-primary-500 mb-2" />
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {label}
                  </p>
                  <p className={`text-lg font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
