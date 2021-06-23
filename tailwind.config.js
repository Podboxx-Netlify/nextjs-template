module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            spacing: {
                'player': '235px',
            },
            colors: {
                'cards-dark': '#292d35',
                'main-dark': '#151a23',
                'header-red': '#4d1e1f',
                'post': '#202527',
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.300'),
                        h1: {
                            color: theme('colors.gray.300'),
                            // color: '#d4d4d4'
                        },
                    },
                },
            }),
        },
        container: {
            center: true,
            // padding: '2rem'
        },
    },
    variants: {
        extend: {
            display: ['first', 'last']
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        function ({addComponents}) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '515px',
                    },
                    '@screen md': {
                        maxWidth: '625px',
                    },
                    '@screen lg': {
                        maxWidth: '1120px',
                    },
                    '@screen xl': {
                        maxWidth: '1200px',
                    },
                }
            })
        }
    ],
}