import { ArrowUp, Facebook, Github, Linkedin, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer
      className={`mt-auto py-12 transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Contact Section */}
          <div className="space-y-4">
            <h5 className="text-xl font-semibold uppercase tracking-wide">Contact</h5>
            <address className={`not-italic space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>
                <strong>Email: </strong>
                <a
                  href="mailto:hei.ainah.44@gmail.com"
                  className={`hover:text-blue-400 transition-colors duration-200 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  aria-label="Email RAJAOHERISOA Maminiaina Ando"
                >
                  hei.ainah.44@gmail.com
                </a>
              </p>
              <p>
                <strong>Phone: </strong>
                <a
                  href="tel:+261387005929"
                  className={`hover:text-blue-400 transition-colors duration-200 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  aria-label="Call RAJAOHERISOA Maminiaina Ando"
                >
                  +261 38 70 059 29
                </a>
              </p>
            </address>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center">
            <h5 className="text-xl font-semibold uppercase tracking-wide mb-4">Social Media</h5>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/ando-rajaoherisoa-9b4954282/"
                className={`p-3 rounded-full transition-all duration-200 ${
                  theme === 'dark' ? 'bg-gray-700/50 hover:bg-blue-500' : 'bg-gray-200 hover:bg-blue-400'
                } transform hover:scale-110`}
                aria-label="Visit LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Niainah"
                className={`p-3 rounded-full transition-all duration-200 ${
                  theme === 'dark' ? 'bg-gray-700/50 hover:bg-blue-500' : 'bg-gray-200 hover:bg-blue-400'
                } transform hover:scale-110`}
                aria-label="Visit GitHub profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=100085000382015"
                className={`p-3 rounded-full transition-all duration-200 ${
                  theme === 'dark' ? 'bg-gray-700/50 hover:bg-blue-500' : 'bg-gray-200 hover:bg-blue-400'
                } transform hover:scale-110`}
                aria-label="Visit Facebook profile"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4 text-center md:text-right">
            <h5 className="text-xl font-semibold uppercase tracking-wide">About</h5>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              © 2025 Ngourndii-dev<br />All rights reserved
            </p>
          </div>
        </div>

        {/* Theme Toggle and Scroll to Top Buttons */}
        <div className="mt-10 flex justify-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full transition-all duration-200 ${
              theme === 'dark' ? 'bg-gray-700/50 hover:bg-blue-500' : 'bg-gray-200 hover:bg-blue-400'
            } transform hover:scale-110`}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Scroll to Top Button */}
          <a
            href="#top"
            className={`p-3 rounded-full transition-all duration-200 ${
              theme === 'dark' ? 'bg-gray-700/50 hover:bg-blue-500' : 'bg-gray-200 hover:bg-blue-400'
            } transform hover:scale-110`}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}