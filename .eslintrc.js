module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/standard'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		indent: 0,
		semi: [1, 'always'],
		'arrow-spacing': [2, { before: true, after: true }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs']
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
};
