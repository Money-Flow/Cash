module.exports = {
  rules: {
    // The commit body must start with an empty line
    "body-leading-blank": [2, "always"],

    // The commit footer must start with a blank line
    "footer-leading-blank": [2, "always"],

    // Maximum header length 72 characters
    "header-max-length": [2, "always", 72],

    // Scope is always only lowercase
    "scope-case": [2, "always", "lower-case"],

    // Description cannot be empty
    "subject-empty": [2, "never"],

    // The description must not end with '.'
    "subject-full-stop": [2, "never", "."],

    // The type is always only in lower case
    "type-case": [2, "always", "lower-case"],

    // The type cannot be empty
    "type-empty": [2, "never"],

    // Let's list all the possible commit options
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "build",
        "docs",
        "test",
        "style",
        "refactor",
        "ci",
        "perf",
        "test",
        "chore",
        "revert",
        "WIP",
      ],
    ],
  },
};
