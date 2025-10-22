/*
 * @violetshine/prettier-config
 * 
 * My shared Prettier config that I use for all of my web projects
 * to maintain my personal coding style. Designed to be used in combination
 * with `@violetshine/eslint-config`.
 * 
 * Feel free to use/extend if you like my coding style!
 */

/**
 * @type {import('prettier').Config}
 */
const config = {
	// Experimental configuration options
	experimentalTernaries: true,
	experimentalOperatorPosition: 'start',

	printWidth: 80, // NOT the hard upper allowed line length limit
	
	// Tabs of width 4 for indentation
	useTabs: true,
	tabWidth: 4,

	// No semicolons at the end of every statement - it feels unnecessary
	semi: false,

	// Prefer single quotes to double quotes, even in JSX
	singleQuote: true,
	jsxSingleQuote: true,
	quoteProps: 'as-needed', // Only quote props when needed

	// Trailing commas result in neater git diffs so use them wherever possible
	// Requires at least ES2017 support but we're not really concerned about
	// Internet Explorer anymore so ES2017 should be okay to use
	trailingComma: 'all',

	// `{ foo: bar }` looks much cleaner than `{foo: bar}`
	bracketSpacing: true,

	// These should be put on their own lines
	objectWrap: 'preserve',
	bracketSameLine: false,

	// Always having brackets around arrow function parameters makes it easier to
	// add types or more parameters later
	arrowParens: 'always',

	// Unix-style line endings instead of Windows
	endOfLine: 'lf',

	// No need to have strictly one attribute per line for readability
	singleAttributePerLine: false,
}

export default config
