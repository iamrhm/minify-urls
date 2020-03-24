module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	moduleFileExtensions: ["ts", "tsx", "js"],

	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	globals: {
		"ts-jest": {
			tsConfig: "tsconfig.json"
		}
	},
	testMatch: ["**/__tests__/**/*.spec.+(ts|tsx|js)"],
	setupFiles: ["<rootDir>/src/__tests__/setup-file.ts"],
	testPathIgnorePatterns: ["<rootDir>/src/__tests__/config"]
};
