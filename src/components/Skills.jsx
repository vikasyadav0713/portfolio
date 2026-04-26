import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiCode, FiServer, FiCpu, FiTool,
} from 'react-icons/fi'
import { 
  SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs,
  SiTailwindcss, SiNodedotjs, SiExpress, SiFastapi, SiDjango,
  SiTensorflow, SiPytorch, SiScikitlearn, SiOpenai,
  SiGit, SiDocker, SiMongodb, SiPostgresql, SiLinux, SiFigma
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    icon: FiCode,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'React', icon: SiReact, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 85 },
      { name: 'JavaScript', icon: SiJavascript, level: 92 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 95 },
    ],
  },
  {
    title: 'Backend',
    icon: FiServer,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Python', icon: SiPython, level: 95 },
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
      { name: 'FastAPI', icon: SiFastapi, level: 88 },
      { name: 'Django', icon: SiDjango, level: 75 },
      { name: 'Express', icon: SiExpress, level: 82 },
    ],
  },
  {
    title: 'AI / ML',
    icon: FiCpu,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, level: 85 },
      { name: 'PyTorch', icon: SiPytorch, level: 80 },
      { name: 'Scikit-learn', icon: SiScikitlearn, level: 90 },
      { name: 'OpenAI', icon: SiOpenai, level: 88 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: FiTool,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git', icon: SiGit, level: 92 },
      { name: 'Docker', icon: SiDocker, level: 78 },
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 82 },
      { name: 'Linux', icon: SiLinux, level: 80 },
      { name: 'Figma', icon: SiFigma, level: 75 },
    ],
  },
]

const SkillBar = ({ skill, darkMode, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay }}
      className="flex items-center gap-4"
    >
      <div className={`p-2 rounded-lg ${
        darkMode ? 'bg-white/5' : 'bg-gray-100'
      }`}>
        <skill.icon className="w-5 h-5 text-primary-500" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className={`text-sm font-medium ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {skill.name}
          </span>
          <span className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            {skill.level}%
          </span>
        </div>
        <div className={`h-2 rounded-full overflow-hidden ${
          darkMode ? 'bg-white/10' : 'bg-gray-200'
        }`}>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.level}%` } : {}}
            transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
            className="h-full gradient-bg rounded-full"
          />
        </div>
      </div>
    </motion.div>
  )
}

const Skills = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className={`p-6 md:p-8 rounded-2xl ${
                darkMode ? 'glass' : 'bg-white shadow-lg'
              }`}
            >
              {/* Category header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-poppins font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    darkMode={darkMode}
                    delay={catIndex * 0.1 + skillIndex * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
