// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        screens: {
            xs: '375px',
            ...defaultTheme.screens,
        },
    },
    plugins: [],
    corePlugins: {
        // false disables TWs normalize
        preflight: true,
    },
};
