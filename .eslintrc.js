module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "prettier"],
    rules: {
        "no-console": "warn",
        "prefer-const": "error"
    }
};


