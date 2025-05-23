import { useForm } from 'react-hook-form';
import { useTheme } from '../context/ThemeContext';

export default function Form() {
  const { theme } = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    reset();
  };

  // Styles conditionnels
  const themeStyles = {
    section: {
      background: theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
    },
    card: {
      background: theme === 'dark' ? 'bg-gray-800' : 'bg-white',
    },
    text: {
      primary: theme === 'dark' ? 'text-gray-100' : 'text-gray-800',
      secondary: theme === 'dark' ? 'text-gray-300' : 'text-gray-700',
    },
    input: {
      base: 'w-full p-3 border rounded transition-colors duration-200',
      normal: theme === 'dark' 
        ? 'border-gray-700 bg-gray-900 text-gray-300 focus:border-blue-500 focus:ring-blue-500' 
        : 'border-gray-300 bg-white text-gray-800 focus:border-blue-500 focus:ring-blue-500',
      error: 'border-red-500 focus:border-red-500 focus:ring-red-500',
    },
    button: {
      base: 'w-full p-3 rounded transition-colors duration-200 font-medium',
      normal: theme === 'dark'
        ? 'bg-blue-600 hover:bg-blue-700 text-white'
        : 'bg-blue-500 hover:bg-blue-600 text-white',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    success: 'text-center text-green-500 font-medium',
  };

  return (
    <section id="contact" className={`py-12 ${themeStyles.section.background}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-center text-4xl font-bold mb-8 ${themeStyles.text.primary}`}>
          Contact Me
        </h2>
        
        <div className={`max-w-lg mx-auto p-8 rounded-lg shadow-md ${themeStyles.card.background}`}>
          {isSubmitSuccessful ? (
            <p className={themeStyles.success}>Message sent successfully!</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className={`block font-medium mb-2 ${themeStyles.text.secondary}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register('name', { required: 'Name is required' })}
                  className={`${themeStyles.input.base} ${
                    errors.name ? themeStyles.input.error : themeStyles.input.normal
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className={`block font-medium mb-2 ${themeStyles.text.secondary}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: { 
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
                      message: 'Invalid email address' 
                    },
                  })}
                  className={`${themeStyles.input.base} ${
                    errors.email ? themeStyles.input.error : themeStyles.input.normal
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className={`block font-medium mb-2 ${themeStyles.text.secondary}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message', { required: 'Message is required' })}
                  className={`${themeStyles.input.base} ${
                    errors.message ? themeStyles.input.error : themeStyles.input.normal
                  }`}
                  rows="5"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${themeStyles.button.base} ${themeStyles.button.normal} ${
                  isSubmitting ? themeStyles.button.disabled : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}