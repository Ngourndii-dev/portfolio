import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function Header() {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const backgroundImageUrl = theme === 'dark'
    ? 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
    : '/images/images/fondb.png'; // Utilisation correcte du chemin public

  return (
    <header className={`relative py-16 overflow-hidden ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'}`}>
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} opacity-70`}></div>
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        ></div>
      </div>

      <motion.div 
        className="container mx-auto px-4 text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          variants={itemVariants}
        >
          Développeuse Full Stack
        </motion.h1>
        
        <motion.p 
          className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Étudiante en informatique passionnée par le développement web, 
          je suis à la recherche d'un stage de 3 mois à partir de juin, 
          afin de mettre en pratique mes compétences dans un projet concret 
          de digitalisation. Curieuse, motivée et prête à relever des défis, 
          je souhaite contribuer activement au développement d'une application de 
          gestion innovante, tout en enrichissant mon expérience professionnelle.
        </motion.p>
        
        <motion.div variants={itemVariants}>
          <a
            href="mailto:hei.ainah.44@gmail.com"
            className={`inline-block px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
            }`}
          >
            Contactez-moi
          </a>
        </motion.div>
      </motion.div>
    </header>
  );
}
