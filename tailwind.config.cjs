/**
 * Tailwind configuration: add project brand colors.
 *
 * Colors defined:
 * - brand: rgb(229,110,139) (#e56e8b)
 * - brand-bg: rgba(229,110,139,0.06) (as translucent background)
 * - brand-foreground: rgb(30,30,30) (#1e1e1e)
 */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
      }
    }
  },
  plugins: []
};
