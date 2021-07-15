module.exports = {
    extends: [
              "stylelint-config-rational-order",
              "stylelint-prettier/recommended"
            ],
    plugins: ["stylelint-order"],
    rules: {
        "order/properties-order": [],
        "plugin/rational-order": [true, {
          "border-in-box-model": false,
          "empty-line-between-groups": true,
             }],
          }
}


