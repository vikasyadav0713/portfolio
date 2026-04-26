import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiBookOpen } from 'react-icons/fi'

const experiences = [
  {
    type: 'education',
    title: 'Higher Secondary Education',
    organization: 'Lions School, Mirzapur',
    period: 'April 2020 - May 2022',
    description: 'Completed higher secondary education with a focus on science subjects. Achieved 75% overall,',
    skills: ['Physics', 'Chemistry', 'Computer Science', 'Mathematics'],
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Science',
    organization: 'IILM University, Greater Noida',
    period: '2023 - 2027',
    description: 'Pursuing Computer Science with specialization in AI/ML. CGPA: 8.5/10. Active member of coding club and AI society.',
    skills: ['Data Structures', 'Algorithms', 'Machine Learning', 'Web Development'],
  },
  {
    type: 'work',
    title: 'Web Development Intern',
    organization: 'Sync and Explore, Noida',
    period: 'Oct 2025 - Dec 2026',
    description: 'Built responsive web applications using React and Node.js. Collaborated with design team to implement UI/UX improvements.',
    skills: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
  },
  {
    type: 'work',
    title: 'AI ML Intern',
    organization: 'Eduskill, Remote',
    period: 'Jan 2026 - March 2026',
    description: 'Developed machine learning models for predictive analytics. Worked on data preprocessing, model training, and evaluation using Python libraries.',
    skills: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
  },
]

const TimelineItem = ({ item, index, darkMode, inView }) => {
  const isLeft = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex md:items-center ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 gradient-bg shadow-lg shadow-primary-500/30">
        {item.type === 'work' ? (
          <FiBriefcase className="w-5 h-5 text-white" />
        ) : (
          <FiBookOpen className="w-5 h-5 text-white" />
        )}
      </div>

      {/* Content */}
      <div className={`ml-16 md:ml-0 md:w-1/2 ${
        isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'
      }`}>
        <div className={`p-6 rounded-2xl ${
          darkMode ? 'glass' : 'bg-white shadow-lg'
        } hover:shadow-xl transition-shadow duration-300`}>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
            item.type === 'work'
              ? 'bg-accent-cyan/20 text-accent-cyan'
              : 'bg-accent-purple/20 text-accent-purple'
          }`}>
            {item.period}
          </span>
          
          <h3 className={`text-xl font-poppins font-semibold mb-1 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {item.title}
          </h3>
          
          <p className="text-primary-400 font-medium mb-3">
            {item.organization}
          </p>
          
          <p className={`text-sm mb-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {item.description}
          </p>
          
          <div className={`flex flex-wrap gap-2 ${
            isLeft ? 'md:justify-end' : ''
          }`}>
            {item.skills.map((skill) => (
              <span
                key={skill}
                className={`text-xs px-2 py-1 rounded-md ${
                  darkMode 
                    ? 'bg-white/5 text-gray-300' 
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My journey so far
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 ${
            darkMode ? 'bg-white/10' : 'bg-gray-200'
          }`} />

          <div className="space-y-12">
            {experiences.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                darkMode={darkMode}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
