module.exports = {
    extends: [
      "stylelint-config-standard",
      "stylelint-config-rational-order",
      "stylelint-prettier/recommended",
    ],
    plugins: ["stylelint-order"],
    rules: {
      "declaration-empty-line-before": null,
      "order/properties-order": [],
      "plugin/rational-order": [
        true,
        {
          "border-in-box-model": false,
          "empty-line-between-groups": true,
          "severity": "error"
        },
      ],
      'selector-class-pattern': null
    },
    ignoreFiles: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.svg", "**/*.mdx"]
  };
