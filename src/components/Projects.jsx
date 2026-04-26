import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const projects = [
  {
    title: 'AI Image Generator',
    description: 'A full-stack application that generates images using AI models. Features include style transfer, image enhancement, and batch processing.',
    tech: ['Python', 'FastAPI', 'React', 'TensorFlow', 'Docker'],
    github: '[github.com](https://github.com/yourusername/ai-image-gen)',
    live: '[ai-image-gen.demo.com](https://ai-image-gen.demo.com)',
    featured: true,
  },
  {
    title: 'Smart Task Manager',
    description: 'An intelligent task management app with ML-powered priority suggestions and natural language processing for task creation.',
    tech: ['React', 'Node.js', 'MongoDB', 'OpenAI API', 'Tailwind'],
    github: '[github.com](https://github.com/yourusername/smart-tasks)',
    live: '[smart-tasks.demo.com](https://smart-tasks.demo.com)',
    featured: true,
  },
  {
    title: 'Sentiment Analysis Dashboard',
    description: 'Real-time sentiment analysis tool for social media monitoring with interactive visualizations and trend detection.',
    tech: ['Python', 'scikit-learn', 'Streamlit', 'Plotly', 'NLTK'],
    github: '[github.com](https://github.com/yourusername/sentiment-dash)',
    featured: true,
  },
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce solution with payment integration, inventory management, and admin dashboard.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'Tailwind'],
    github: '[github.com](https://github.com/yourusername/ecommerce)',
    live: '[ecommerce.demo.com](https://ecommerce.demo.com)',
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with 7-day forecasts, location detection, and animated weather icons.',
    tech: ['React Native', 'Expo', 'OpenWeather API', 'Reanimated'],
    github: '[github.com](https://github.com/yourusername/weather-app)',
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    github: '[github.com](https://github.com/yourusername/portfolio)',
    live: '[yourname.dev](https://yourname.dev)',
  },
]

const ProjectCard = ({ project, index, darkMode, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative rounded-2xl overflow-hidden ${
        darkMode ? 'glass' : 'bg-white shadow-lg'
      } hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500`}
    >
      {/* Card top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <FiFolder className="w-10 h-10 text-primary-500" />
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'hover:bg-white/10 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                }`}
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'hover:bg-white/10 text-gray-400 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                }`}
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-xl font-poppins font-semibold mb-3 group-hover:text-primary-400 transition-colors ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-sm leading-relaxed mb-6 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`text-xs px-3 py-1 rounded-full ${
                darkMode 
                  ? 'bg-white/5 text-gray-300' 
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Some things I've built
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              darkMode={darkMode}
              inView={inView}
            />
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="[github.com](https://github.com/yourusername)"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium
                       border transition-all duration-300 hover:scale-105 ${
              darkMode 
                ? 'border-white/20 hover:bg-white/10' 
                : 'border-gray-300 hover:bg-gray-100'
            }`}
          >
            <FiGithub className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
