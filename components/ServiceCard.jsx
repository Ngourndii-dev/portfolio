import { useTheme } from '../context/ThemeContext';
import { services } from '../data/services';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const ANIMATION_DURATION = 0.6;
const STAGGER_DELAY = 0.2;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
};

const hoverEffects = {
  hover: {
    y: -12,
    scale: 1.05,
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const overlayTransition = {
  duration: 0.3,
  ease: "easeOut"
};

export default function ServiceCard() {
  const { theme } = useTheme();
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const themeClasses = {
    section: theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100',
    card: theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
    title: theme === 'dark' ? 'text-gray-100' : 'text-gray-800',
    description: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
    button: theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600',
    overlay: theme === 'dark' ? 'bg-gray-800/95' : 'white/95'
  };

  return (
    <section
      id="services"
      className={`py-24 ${themeClasses.section} transition-colors duration-500`}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center text-5xl font-extrabold mb-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500">
          Nos Services
        </h2>

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-full aspect-square relative group"
              variants={itemVariants}
              whileHover="hover"
            >
              <motion.div
                className={`relative w-full h-full p-8 flex flex-col items-center justify-center 
                  ${themeClasses.card}
                  rounded-3xl border-2 shadow-xl transition-all duration-300 overflow-hidden`}
                variants={hoverEffects}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.7 }}
                  transition={overlayTransition}
                />

                <motion.div
                  className="relative flex flex-col items-center justify-center h-full z-20"
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${themeClasses.title} text-center`}>
                    {service.title}
                  </h3>
                </motion.div>

                <motion.div
                  className={`absolute inset-0 p-8 flex flex-col items-center justify-center 
                    ${themeClasses.overlay} 
                    rounded-3xl z-20`}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className={`text-center ${themeClasses.description} mb-6 text-base leading-relaxed`}>
                    {service.description}
                  </p>
                  <button
                    className={`mt-auto px-8 py-3 rounded-lg font-medium
                    ${themeClasses.button} 
                    text-white transition-all duration-300 transform hover:scale-105`}
                  >
                    Contact us
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
