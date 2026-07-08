import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          secondary: 'var(--background-secondary)',
        },
        surface: {
          DEFAULT: 'var(--surface)',
          elevated: 'var(--surface-elevated)',
        },
        card: {
          DEFAULT: 'var(--card)',
          hover: 'var(--card-hover)',
        },
        border: {
          DEFAULT: 'var(--border)',
          strong: 'var(--border-strong)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        },
        accent: {
          primary: {
            DEFAULT: 'var(--accent-primary)',
            hover: 'var(--accent-primary-hover)',
            soft: 'var(--accent-primary-soft)',
          },
          secondary: {
            DEFAULT: 'var(--accent-secondary)',
            hover: 'var(--accent-secondary-hover)',
            soft: 'var(--accent-secondary-soft)',
          },
        },
        danger: 'var(--danger)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        overlay: 'var(--overlay)',
        focus: 'var(--focus)',
        selection: 'var(--selection)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'var(--font-persian)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
        persian: ['var(--font-persian)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'sm': 'calc(var(--radius-sm) * 1px)',
        'md': 'calc(var(--radius-md) * 1px)',
        'lg': 'calc(var(--radius-lg) * 1px)',
        'xl': 'calc(var(--radius-xl) * 1px)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
};

export default config;
