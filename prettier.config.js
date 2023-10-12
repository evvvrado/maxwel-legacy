module.exports = {
	tabWidth: 4,
	endOfLine: "auto",
	charset: "utf-8",
	trimTrailingWhitespace: true,
	insertFinalNewline: true,
	singleQuote: false,
	plugins: [
		"prettier-plugin-tailwindcss",
		"@ianvs/prettier-plugin-sort-imports",
	],
	importOrder: [
		"^react$",
		"",
		"^next$",
		"^next/(.*)$",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^(@)(/.*)$",
		"",
		"^[.]",
	],
};
