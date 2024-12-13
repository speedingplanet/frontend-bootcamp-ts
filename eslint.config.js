import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		name: '@speedingplanet/eslint-config',
		languageOptions: {
			parserOptions: {
				warnOnUnsupportedTypeScriptVersion: false,
			},
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			'no-unused-private-class-members': 'warn',
			'no-unused-vars': ['warn'],
			'prefer-const': 'off',
		},
	},
	{
		name: '@speedingplanet/eslint-config-typescript',
		files: ['**/*.ts', '**/*.tsx'],
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},
);
