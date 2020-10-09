module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    },
    purge: {
        content: ["./src/*.svelte"],
        layers: ["utilities"]
    },
    theme: {
        extend: {
            boxShadow: {
                dark: "0 -2px 10px rgba(0, 0, 0, 1)"
            },
            colors: {
                dark: "#121212",
                violet: "#d896ff"
            },
            minWidth: {
                sm: "385px"
            },
            opacity: {
                high: ".93",
                medium: ".60",
                low: ".38"
            }
        }
    },
    variants: {},
    plugins: []
};
