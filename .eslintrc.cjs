module.exports = {
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "env": {
        "es6": true
    },
    extends: [
        "plugin:astro/recommended",
    ],
    overrides: [
        {
            files: ["*.astro"],
            parser: "astro-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                extraFileExtensions: [".astro"],
            },
            rules: {
            },
        },
    ],
}
