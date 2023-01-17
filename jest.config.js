/**
 * @type {import('jest').Config}
 */
module.exports = {
	cache: true,
	// It indicates the listing where Jest must save the cached dependency details gathered from all throughout the tests
	cacheDirectory: "./tmp/jest",
	// It shows whether or not it have to have the coverage data collected while executing the test
	collectCoverage: true,
	// This configuration shows the Jest to an array of regex expression sample strings which are matched towards all source record paths, matched documents will pass transformation
	transformIgnorePatterns: ["/node_modules/"],
	// This configuration factors to the glob patterns Jest uses to detect test files
	testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
	// This configuration shows the Jest framework to the list of paths to directories that Jest ought to use to look for files inside them
	roots: ["<rootDir>"],
	// It indicates that an array of glob patterns indicating a hard and fast of files for which insurance statistics ought to be collected
	collectCoverageFrom: [
		"lib/*.{js,ts}",
		"utils/*.{js,ts}",
		"!**/node_modules/**",
		"!**/vendor/**",
		"!**/test/**",
		"!**/*.test.{js,ts}",
	],
	// It indicates the directory in which Jest ought to output its coverage documents and test files
	coverageDirectory: "coverage",
	// This property shows that an array of regexp sample strings used to skip the test coverage collection
	coveragePathIgnorePatterns: ["/node_modules/"],
	// It indicates that a list of reporter names that Jest makes use of whilst writing coverage reports
	coverageReporters: ["json", "text", "lcov", "clover"],
	// It indicates an array of directory names to be searched recursively up from the requiring module's location
	moduleDirectories: ["node_modules"],
};
