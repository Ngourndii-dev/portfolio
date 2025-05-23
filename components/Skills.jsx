import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { skills } from '../data/skills';
import { motion, AnimatePresence } from 'framer-motion';

// Constantes
const SKILLS_PER_PAGE = 8;
const CATEGORIES = ['all', 'frontend', 'backend', 'outils', 'autre'];

export default function Skills() {
  // Hooks et état
  const { theme } = useTheme();
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(0);
  const [isTurning, setIsTurning] = useState(false);

  // Données filtrées et paginées
  const filteredSkills = filter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === filter);

  const totalPages = Math.ceil(filteredSkills.length / SKILLS_PER_PAGE);
  const currentSkills = filteredSkills.slice(
    page * SKILLS_PER_PAGE,
    (page + 1) * SKILLS_PER_PAGE
  );

  // Handlers
  const changeFilter = (newFilter) => {
    setFilter(newFilter);
    setPage(0);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && page < totalPages - 1) {
      nextPage();
    } else if (e.key === 'ArrowLeft' && page > 0) {
      prevPage();
    }
  };

  const nextPage = () => {
    if (page < totalPages - 1 && !isTurning) {
      setIsTurning(true);
      setPage(prev => prev + 1);
      setTimeout(() => setIsTurning(false), 500);
    }
  };

  const prevPage = () => {
    if (page > 0 && !isTurning) {
      setIsTurning(true);
      setPage(prev => prev - 1);
      setTimeout(() => setIsTurning(false), 500);
    }
  };

  // Effets
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [page, totalPages, isTurning]);

  // Styles conditionnels
  const themeClasses = {
    section: theme === 'dark' ? 'bg-nori' : 'bg-white',
    text: theme === 'dark' ? 'text-white' : 'text-dark-blue',
    button: {
      active: 'bg-dark-blue text-bleu border-dark-blue',
      inactive: theme === 'dark' 
        ? 'bg-nori border-nori text-white hover:bg-dark-blue' 
        : 'bg-white border-dark-blue text-dark-blue hover:bg-dark-blue hover:text-white'
    },
    card: theme === 'dark' ? 'bg-dark-blue' : 'bg-white',
    border: theme === 'dark' ? 'border-dark-blue' : 'border-nori',
    pageButton: theme === 'dark' ? 'dark' : ''
  };

  return (
    <section className={`py-16 transition-colors duration-300 ${themeClasses.section}`}>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Titre */}
        <h2 className={`text-center text-4xl font-extrabold mb-10 ${themeClasses.text}`}>
          Mes Compétences
        </h2>

        {/* Filtres */}
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => changeFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                  filter === category
                    ? themeClasses.button.active
                    : themeClasses.button.inactive
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Livre des compétences */}
        <div className="relative flex justify-center">
          <div className={`book ${theme === 'dark' ? 'book-dark' : ''}`}>
            <div className="book-cover">
              <div className={`book-page ${isTurning ? 'turning' : ''}`}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={page}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`page-content ${themeClasses.section}`}
                  >
                    <div className="page-header">
                      <h3 className={`text-lg font-bold ${themeClasses.text}`}>
                        Page {page + 1} / {totalPages}
                      </h3>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4">
                      {currentSkills.map((skill, index) => (
                        <div
                          key={`${skill.name}-${index}`}
                          className={`skill-card ${themeClasses.card} ${themeClasses.border}`}
                        >
                          <div className="flex flex-col items-center p-3">
                            <i className={`${skill.icon} text-3xl mb-2 ${themeClasses.text}`}></i>
                            <h5 className={`text-sm font-semibold ${themeClasses.text}`}>
                              {skill.name}
                            </h5>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Contrôles de pagination */}
        <div className="flex justify-center items-center mt-10 gap-4">
          <button
            onClick={prevPage}
            disabled={page === 0 || isTurning}
            className={`page-button ${themeClasses.pageButton}`}
          >
            ⬅ Précédent
          </button>
          <button
            onClick={nextPage}
            disabled={page === totalPages - 1 || isTurning}
            className={`page-button ${themeClasses.pageButton}`}
          >
            Suivant ➡
          </button>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        :root {
          --dark-blue: #1E3A8A;
          --nori: #1A3C34;
          --white: rgb(3, 64, 197);
        }

        .book {
          width: 100%;
          max-width: 600px;
          height: 400px;
          perspective: 2000px;
          position: relative;
        }

        .book-dark {
          filter: brightness(0.9);
        }

        .book-cover {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }

        .book-page {
          width: 100%;
          height: 100%;
          background-color: ${theme === 'dark' ? 'var(--nori)' : 'var(--white)'};
          border-radius: 5px 15px 15px 5px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          padding: 20px;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
          transform-origin: left center;
          transition: transform 0.5s;
          border: 1px solid ${themeClasses.border};
        }

        .page-content {
          width: 100%;
          height: 100%;
          padding: 20px;
          position: relative;
        }

        .page-header {
          border-bottom: 1px solid ${themeClasses.border};
          padding-bottom: 10px;
          margin-bottom: 20px;
          text-align: center;
        }

        .skill-card {
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid ${themeClasses.border};
        }

        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          background-color: ${theme === 'dark' ? 'var(--dark-blue)' : 'blue'};
        }

        .page-button {
          padding: 8px 20px;
          border-radius: 20px;
          font-weight: 500;
          transition: all 0.3s;
          border: none;
          background-color: ${theme === 'dark' ? 'var(--dark-blue)' : 'var(--nori)'};
          color: var(--white);
        }

        .page-button:hover:not(:disabled) {
          background-color: var(--dark-blue);
          transform: scale(1.05);
        }

        .page-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .page-button.dark {
          background-color: var(--dark-blue);
        }
      `}</style>
    </section>
  );
}