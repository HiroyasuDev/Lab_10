module.exports = [
  {
    languageOptions: {
      globals: {
        module: "writable",
        exports: "writable",
        require: "readonly",
      },
    },
    files: ["**/*.js"],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn",
    },
  },
];
