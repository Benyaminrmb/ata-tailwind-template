export default {
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        themes: [
            {
                dddd: {
                    "primary": "#da0d0c",
                    "secondary": "#2c353e",
                    "accent": "#37cdbe",
                    "neutral": "#3d4451",
                    "base-100": "#ffffff",
                },
            },

        ],
    },
    content: [
        `./components/**/*.{vue,js,ts}`,
        `./layouts/**/*.vue`,
        `./pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `./utils/**/*.{js,ts}`,
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./Error.{js,ts,vue}`,
        `./error.{js,ts,vue}`,
        `./app.config.{js,ts}`
    ]
}