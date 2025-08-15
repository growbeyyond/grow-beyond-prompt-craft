import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
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
          // Enhanced Color Extensions
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
            glow: 'hsl(var(--primary-glow))',
            dark: 'hsl(var(--primary-dark))',
            light: 'hsl(var(--primary-light))',
            ultra: 'hsl(var(--primary-ultra))'
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
            light: 'hsl(var(--secondary-light))'
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
            glow: 'hsl(var(--accent-glow))',
            dark: 'hsl(var(--accent-dark))'
          },
          tertiary: {
            DEFAULT: 'hsl(var(--tertiary))',
            foreground: 'hsl(var(--tertiary-foreground))',
            glow: 'hsl(var(--tertiary-glow))'
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
            light: 'hsl(var(--muted-light))'
          },
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Grow Beyyond Brand Extensions
				glass: {
					DEFAULT: 'rgba(var(--glass-bg))',
					border: 'rgba(var(--glass-border))'
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				display: ['Clash Display', 'Satoshi', 'system-ui', 'sans-serif'],
				clash: ['Clash Display', 'system-ui', 'sans-serif'],
				satoshi: ['Satoshi', 'system-ui', 'sans-serif']
			},
			backdropBlur: {
				xs: '2px',
				sm: '4px',
				md: '12px',
				lg: '16px',
				xl: '24px',
				'2xl': '32px'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
        keyframes: {
          "accordion-down": {
            from: { height: "0" },
            to: { height: "var(--radix-accordion-content-height)" },
          },
          "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: "0" },
          },
          "lottery-spin": {
            "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
            "100%": { transform: "rotateX(360deg) rotateY(360deg)" }
          },
          "ball-bounce": {
            "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
            "40%": { transform: "translateY(-30px)" },
            "60%": { transform: "translateY(-15px)" }
          },
          "number-reveal": {
            "0%": { transform: "scale(0) rotate(180deg)", opacity: "0" },
            "50%": { transform: "scale(1.2) rotate(90deg)", opacity: "0.5" },
            "100%": { transform: "scale(1) rotate(0deg)", opacity: "1" }
          },
          "confetti-fall": {
            "0%": { transform: "translateY(-100vh) rotate(0deg)", opacity: "1" },
            "100%": { transform: "translateY(100vh) rotate(360deg)", opacity: "0" }
          },
          "wheel-spin": {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(1440deg)" }
          },
          "clean-pulse": {
            "0%, 100%": {
              opacity: "1",
              transform: "scale(1)"
            },
            "50%": {
              opacity: "0.8",
              transform: "scale(1.05)"
            }
          },
          // Premium Animations
          "premium-float": {
            "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
            "33%": { transform: "translateY(-10px) rotate(2deg)" },
            "66%": { transform: "translateY(5px) rotate(-2deg)" }
          },
          "premium-glow": {
            "0%, 100%": { 
              boxShadow: "0 0 20px hsl(var(--primary) / 0.3)",
              opacity: "1"
            },
            "50%": { 
              boxShadow: "0 0 40px hsl(var(--primary) / 0.6), 0 0 60px hsl(var(--accent) / 0.4)",
              opacity: "0.9"
            }
          },
          "premium-pulse": {
            "0%, 100%": { transform: "scale(1)", opacity: "1" },
            "50%": { transform: "scale(1.05)", opacity: "0.8" }
          },
          "gradient-shift": {
            "0%, 100%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" }
          },
          "slide-in-up": {
            "0%": { transform: "translateY(100px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" }
          },
          "slide-in-down": {
            "0%": { transform: "translateY(-100px)", opacity: "0" },
            "100%": { transform: "translateY(0)", opacity: "1" }
          },
          "slide-in-left": {
            "0%": { transform: "translateX(-100px)", opacity: "0" },
            "100%": { transform: "translateX(0)", opacity: "1" }
          },
          "slide-in-right": {
            "0%": { transform: "translateX(100px)", opacity: "0" },
            "100%": { transform: "translateX(0)", opacity: "1" }
          },
          "scale-in": {
            "0%": { transform: "scale(0.8)", opacity: "0" },
            "100%": { transform: "scale(1)", opacity: "1" }
          },
          "rotate-in": {
            "0%": { transform: "rotate(-180deg) scale(0.8)", opacity: "0" },
            "100%": { transform: "rotate(0deg) scale(1)", opacity: "1" }
          },
          "bounce-in": {
            "0%": { transform: "scale(0.3)", opacity: "0" },
            "50%": { transform: "scale(1.1)", opacity: "0.8" },
            "100%": { transform: "scale(1)", opacity: "1" }
          },
          "fade-in": {
            "0%": { opacity: "0" },
            "100%": { opacity: "1" }
          },
          "zoom-bounce": {
            "0%": { transform: "scale(0)", opacity: "0" },
            "60%": { transform: "scale(1.1)", opacity: "0.8" },
            "100%": { transform: "scale(1)", opacity: "1" }
          }
        },
        animation: {
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
          "lottery-spin": "lottery-spin 2s ease-in-out infinite",
          "ball-bounce": "ball-bounce 2s infinite",
          "number-reveal": "number-reveal 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          "confetti-fall": "confetti-fall 3s linear infinite",
          "wheel-spin": "wheel-spin 4s cubic-bezier(0.23, 1, 0.320, 1) forwards",
          "clean-pulse": "clean-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          // Premium Animations
          "float": "premium-float 6s ease-in-out infinite",
          "glow": "premium-glow 3s ease-in-out infinite",
          "pulse-premium": "premium-pulse 2s ease-in-out infinite",
          "gradient-flow": "gradient-shift 4s ease-in-out infinite",
          "slide-up": "slide-in-up 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          "slide-down": "slide-in-down 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          "slide-left": "slide-in-left 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          "slide-right": "slide-in-right 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          "scale-in": "scale-in 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          "rotate-in": "rotate-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          "bounce-in": "bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
          "fade-in": "fade-in 0.4s ease-out",
          "zoom-bounce": "zoom-bounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
        },
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
