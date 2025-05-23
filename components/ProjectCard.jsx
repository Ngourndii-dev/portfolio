import { projects } from '../data/projects';
import { useTheme } from '../context/ThemeContext';

export default function ProjectCard() {
  const { theme } = useTheme();

  // Styles conditionnels
  const themeClasses = {
    section: theme === 'dark' ? 'bg-dark' : 'bg-light',
    text: {
      primary: theme === 'dark' ? 'text-white' : 'text-dark-blue',
      secondary: theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
    },
    card: {
      front: theme === 'dark' ? 'border-gray-700' : 'border-gray-200',
      back: theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200',
      hover: theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-blue-100'
    },
    button: theme === 'dark' ? 'bg-gray-700 text-blue-400' : 'bg-blue-50 text-blue-600'
  };

  return (
    <section 
      id="projects" 
      className={`py-20 transition-colors duration-300 ${themeClasses.section}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-3 ${themeClasses.text.primary}`}>
            My Projects <span role="img" aria-label="folder">🚀</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${themeClasses.text.secondary}`}>
            Each project tells a unique story - hover to discover what's behind
          </p>
        </div>

        {/* Grid de projets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id || index}
              className="group perspective h-72 sm:h-80 md:h-84"
            >
              <div className="relative w-full h-full transition-all duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Face avant */}
                <div className={`absolute w-full h-full backface-hidden rounded-xl shadow-2xl overflow-hidden border-2 ${themeClasses.card.front}`}>
                  <div className="relative w-full h-full">
                    <img
                      src={project.image}
                      alt={`${project.title} project showcase`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Face arrière */}
                <div className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-lg p-6 flex flex-col border-2 ${themeClasses.card.back}`}>
                  <h3 className={`text-xl font-bold mb-3 ${themeClasses.text.primary}`}>
                    {project.title}
                  </h3>
                  <p className={`${themeClasses.text.secondary} mb-5 flex-grow`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 rounded-lg transition-colors duration-200 ${themeClasses.button} ${themeClasses.card.hover}`}
                        aria-label={`${link.label} (opens in new tab)`}
                      >
                        <span className="mr-2 text-lg">{link.icon}</span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styles CSS */}
      <style jsx>{`
        .perspective {
          perspective: 1200px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .bg-light {
          background-color: #ffffff;
        }
        .bg-dark {
          background-color:bg-blue-50;
        }
        .text-dark-blue {
          color: #1E3A8A;
        }
      `}</style>
    </section>
  );
}