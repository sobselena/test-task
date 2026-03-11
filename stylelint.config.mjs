export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-clean-order'],
  plugins: ['stylelint-scss'],
  rules: {
    'custom-property-empty-line-before': null,
    'selector-class-pattern': null,
    'no-descending-specificity': null,
    'color-function-notation': 'modern',
    'alpha-value-notation': 'number',
    'declaration-block-no-redundant-longhand-properties': [
      true,
      { ignoreShorthands: ['grid-template'] },
    ],

    'scss/at-rule-no-unknown': true,
    'scss/selector-no-redundant-nesting-selector': true,
  },
  ignoreFiles: [
    '**/node_modules/**',
    '**/dist/**',
    '**/*.js',
    '**/*.ts',
    '**/*.json',
    '**/modern-normalize.css',
  ],
};
