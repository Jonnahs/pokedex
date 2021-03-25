module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recomended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'arrow-parens': ['error','as-needed', {requireForBlockBody: true}],
    'import/no-extraneous-depondencies': 'off',
    'indent': ['error', 'tab'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-tabs': 'off',
		'prefer-destructuring': ['error', {
			'object': true,
			'array': false,
		}],
		'vue/html-indent': ['error', 'tab'],
		'vue/max-attributes-per-line': ['error', {
			'singleline': 3,
			'multiline': {
				'max': 1,
				'allowFirstLine': false
			}
		}],
		'vue/script-indent': ['error', 'tab', {
			'baseIndent': 1,
			'switchCase': 1,
		}],
		'vue/singleline-html-element-content-newline': 'off',
	},
  // Corrige erro de indentação por TAB
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 'off',
			},
		},
	],
};