/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			GreenBG: '#00A6BE',
  			subHeaderBG: '#38BACC',
  			loginGreen: '#006F7F',
  			searchGreen: '#38BACC',
  			green2: '#3A919E',
  			green3: '#00C5E2',
  			textGray: '#515151',
  			sidebarBG: '#CBF9FF',
  			blue: '#147DDD',
  			blue3: '#71EDFF',
  			blueBG: '#F2FDFF',
  			blue4: '#1CD5F0',
  			blue1: '#85D6E2',
  			blueBorder: '#85D6E2',
  			grayText: '#334155FA',
  			grayText2: '#717171',
  			grayFilter: '#E4E4E7',
  			gray2: '#F4F4F5',
  			gray3: '#B6B6B6',
  			gray9: '#747474',
  			gray4: '#4C4C4C',
  			gray5: '#8D8D8D',
  			gray10: '#D9D9D9',
  			gray6: '#0F172A',
  			gray7: '#0000008F',
  			gray8: '#94A3B8',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		fontSize: {
  			'font-lg': '24px',
  			'font-btn': '26px',
  			'20-size': '20px',
  			'16-size': '16px',
  			'font-md': '18px',
  			font15: '15px',
  			'font-sm': '14px',
  			'reset-password': '13px',
  			'x-sm': '12px',
  			sm10: '10px',
  			'sm-9': '9px',
  			sm8: '8px',
  			'input-font': '20px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
