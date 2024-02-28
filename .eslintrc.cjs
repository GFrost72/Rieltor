module.exports = {
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": "latest"
    },
    "env": {
        "es6": true
    },
    extends: [
        "plugin:astro/recommended",
        "plugin:react/recommended"
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
    rules: {
        "indent": [
            "error", 
            4
        ],
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0
    }
}
