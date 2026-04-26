import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/vikasyadav0713', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/vikasyadav1307/', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:yadavvikas1307@gmail.com', label: 'Email' },
  ]

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <footer className={`relative py-12 px-4 ${
      darkMode 
        ? 'bg-dark-800/50 border-t border-white/5' 
        : 'bg-gray-100 border-t border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-poppins font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            &lt;VY /&gt;
          </motion.a>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-white/10' 
                    : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-8 pt-8 text-center text-sm ${
          darkMode 
            ? 'border-t border-white/5 text-gray-500' 
            : 'border-t border-gray-200 text-gray-400'
        }`}>
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Vikas Yadav. Made with 
            <FiHeart className="w-4 h-4 text-red-500 inline" /> 
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
