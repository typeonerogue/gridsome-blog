module.exports = {
    root: true,
    parser: "babel-eslint",
    parserOptions: {
        sourceType: "module"
    },
    env: {
        browser: true
    },
    extends: [
        "prettier",
        "prettier/standard",
        "plugin:vue/recommended"
    ],
    plugins: [
        "vue",
        "prettier"
    ],
    rules: {
        indent: 0,
        "no-tabs": 0,
        "eol-last": "off",
        "generator-star-spacing": 0,
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
    }
};