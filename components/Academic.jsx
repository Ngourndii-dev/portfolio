import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Academic() {
  const { theme, toggleTheme } = useTheme();
  const [openSection, setOpenSection] = useState('collapseOne');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section
      id="about"
      className="py-16 font-mono min-h-screen relative overflow-hidden"
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(rgba(10, 15, 30, 0.9), rgba(5, 10, 25, 0.95))' 
          : 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(241, 245, 249, 0.95))',
      }}
    >
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-15 -z-10 blur-sm transform transition-transform duration-1000" 
        data-aos="fade"
        data-aos-duration="1500"
      ></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div 
          className="bg-[var(--bg-primary)]/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-[var(--border-primary)]/40 overflow-hidden"
          data-aos="zoom-in"
          data-aos-duration="800"
        >
          {/* VSCode title bar */}
          <div 
            className="flex items-center px-4 py-3 bg-[var(--bg-secondary)]/95 text-sm text-[var(--text-primary)] border-b border-[var(--border-primary)]/50"
            style={{
              borderTopLeftRadius: '14px',
              borderTopRightRadius: '14px',
            }}
          >
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-600 transition-colors"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-600 transition-colors"></span>
            </div>
            <span className="ml-4 font-medium tracking-wide">Academic.jsx - Visual Studio Code</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center px-8 py-12 gap-8">
            <div 
              className="w-full lg:w-1/3 mb-8 lg:mb-0 text-center"
              data-aos="fade-up-right"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="relative group">
                <img
                  src="/images/me.png"
                  alt="Profile photo of RAJAOHERISOA Maminiaina Ando"
                  className="w-56 h-56 rounded-full shadow-2xl mx-auto object-cover border-4 border-[var(--accent-primary)] group-hover:border-[var(--accent-hover)] group-hover:scale-105 transition-all duration-500 ease-out"
                  style={{
                    boxShadow: '0 8px 25px var(--shadow-primary)',
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--accent-primary)]/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div 
              className="w-full lg:w-2/3"
              data-aos="fade-up-left"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center lg:text-left text-[var(--text-primary)] tracking-tight">
                My Academic Journey
              </h1>
              <div className="space-y-6">
                <div 
                  className="bg-[var(--bg-primary)]/95 backdrop-blur-sm border border-[var(--border-primary)]/40 rounded-xl shadow-xl overflow-hidden"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                >
                  <h2 className="text-xl font-semibold">
                    <button
                      className={`w-full text-left p-5 flex items-center justify-between ${
                        openSection === 'collapseOne' ? 'bg-[var(--accent-primary)]/95' : 'bg-[var(--bg-secondary)]/95'
                      } hover:bg-[var(--accent-hover)]/95 text-[var(--text-primary)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/50`}
                      onClick={() => toggleSection('collapseOne')}
                      aria-expanded={openSection === 'collapseOne'}
                      aria-controls="collapseOne"
                    >
                      <span className="font-medium">L3 in Software Ecosystem at HEI MADAGASCAR</span>
                      <svg
                        className={`w-6 h-6 transition-transform duration-300 ${
                          openSection === 'collapseOne' ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className={`transition-all duration-500 ease-in-out ${
                      openSection === 'collapseOne' ? 'block' : 'hidden'
                    } bg-[var(--bg-primary)]/90`}
                  >
                    <div className="p-6 text-[var(--text-secondary)] leading-relaxed">
                      <strong>Since 2023</strong>, I have been pursuing my degree at{' '}
                      <code className="bg-[var(--bg-secondary)]/90 px-2 py-1 rounded-lg text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors duration-200">
                        Haute Ecole d'Informatique
                      </code>{' '}
                      after securing admission through a competitive selection process.
                    </div>
                  </div>
                </div>

                <div 
                  className="bg-[var(--bg-primary)]/95 backdrop-blur-sm border border-[var(--border-primary)]/40 rounded-xl shadow-xl overflow-hidden"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  <h2 className="text-xl font-semibold">
                    <button
                      className={`w-full text-left p-5 flex items-center justify-between ${
                        openSection === 'collapseTwo' ? 'bg-[var(--accent-primary)]/95' : 'bg-[var(--bg-secondary)]/95'
                      } hover:bg-[var(--accent-hover)]/95 text-[var(--text-primary)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/50`}
                      onClick={() => toggleSection('collapseTwo')}
                      aria-expanded={openSection === 'collapseTwo'}
                      aria-controls="collapseTwo"
                    >
                      <span className="font-medium">Baccalauréat Scientifique</span>
                      <svg
                        className={`w-6 h-6 transition-transform duration-300 ${
                          openSection === 'collapseTwo' ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className={`transition-all duration-500 ease-in-out ${
                      openSection === 'collapseTwo' ? 'block' : 'hidden'
                    } bg-[var(--bg-primary)]/90`}
                  >
                    <div className="p-6 text-[var(--text-secondary)] leading-relaxed">
                      <strong>2023</strong>, I earned{' '}
                      <code className="bg-[var(--bg-secondary)]/90 px-2 py-1 rounded-lg text-[var(--accent-primary)] hover:text-[var(--accent-hover)] transition-colors duration-200">
                        my Baccalauréat Scientifique
                      </code>{' '}
                      from Lycée Jean Joseph RABERIVELO Analakely with distinction.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}