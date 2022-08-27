/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#365088",
                secondary: "#ffffff",
                transparentSecondary: "rgba(255, 255, 255, 0.5)",
                lightPrimary: "#365088",
                transparentPrimary: "rgba(56, 167, 184, 0.6)",
                lightGrey: "#edf5f6",
                transparentLightGrey: "rgba(56, 129, 231, 0.65)",
                grey: "#dcdcdc",
                disabled: "#e5e5e5",
                black: "#1f2223",
                gold: "#ffd700",
                silver: "#c0c0c0",
                bronze: "#cd7f32",
                red: "#cd5656",
            },
            fontWeight: {
                light: 300,
                regular: 400,
                medium: 500,
                semibold: 600,
                bold: 800,
            },
            margin: { defaultMargin: "5%" },
            height: { topBarHeight: "60px" },
            fontFamily: "Barlow",
        },
    },
    plugins: [],
};
