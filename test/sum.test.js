const sum = require("./sum");

describe("sum test", function () {
	test("is equal 2", () => {
		expect(sum(1, 1)).toBe(2);
	});
});
