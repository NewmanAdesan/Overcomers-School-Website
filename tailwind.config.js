/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxxs: "350px",
      
      xxs: "365px",

      sm: "640px",

      md: "768px",

	  md2: "850px",

	  md3: "900px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1440px",
    },
  	extend: {
      width: {
        "90vw": "90vw"
      },
  		maxHeight: {
  			'662px': '662px'
  		},
  		lineHeight: {
  			'48px': '48px',
        '9.5px': '9.5px'
  		},
      borderWidth: {
        '0.6px': '0.6px'
      },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)',
        "19px": "19px",
        "32px": "32px",
  		},
      fontSize: {
		"12px": "12px",
		"14px": "14px",
		"20px": "20px",
		"24px": "24px",
        "32px": "32px",
		"40px": "40px",
      },
	  lineHeight: {
		"22px": "22px",
		"29px": "29px",
		"39px": '39px',
		"150%": '150%'
	  },
      letterSpacing: {
        "2%": "2%",
      },
      margin: {
        "52px": "52px",
      },
      boxShadow: {
        "yellow-inside-border-0.6px": 'inset 0 0 0 0.6px #FBB040',
        "yellow-inside-border-1px": 'inset 0 0 0 1px #FBB040',
		"white-inside-border-4px": 'inset 0 0 0 4px #FFFFFF',
		"blur": '0 4px 10px rgba(0, 0, 0, 0.25)',
      },
		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
			card: {
				DEFAULT: 'hsl(var(--card))',
				foreground: 'hsl(var(--card-foreground))'
			},
			popover: {
				DEFAULT: 'hsl(var(--popover))',
				foreground: 'hsl(var(--popover-foreground))'
			},
			primary: {
				DEFAULT: 'hsl(var(--primary))',
				foreground: 'hsl(var(--primary-foreground))'
			},
			secondary: {
				DEFAULT: 'hsl(var(--secondary))',
				foreground: 'hsl(var(--secondary-foreground))'
			},
			muted: {
				DEFAULT: 'hsl(var(--muted))',
				foreground: 'hsl(var(--muted-foreground))'
			},
			accent: {
				DEFAULT: 'hsl(var(--accent))',
				foreground: 'hsl(var(--accent-foreground))'
			},
			destructive: {
				DEFAULT: 'hsl(var(--destructive))',
				foreground: 'hsl(var(--destructive-foreground))'
			},
			border: 'hsl(var(--border))',
			input: 'hsl(var(--input))',
			ring: 'hsl(var(--ring))',
			chart: {
				'1': 'hsl(var(--chart-1))',
				'2': 'hsl(var(--chart-2))',
				'3': 'hsl(var(--chart-3))',
				'4': 'hsl(var(--chart-4))',
				'5': 'hsl(var(--chart-5))'
			},

		'shkula-primary': '#4044A7',
		'shkula-secondary': '#FBB040',
		'schoolcom': '#313131',
		'gray-1': 'rgba(232, 232, 232, 50%)',
		'gray-2': '#333333',
		'dark-1': '#101828',
		'white-1': '#f3f3f3'
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

