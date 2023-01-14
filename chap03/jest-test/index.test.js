const { sum } = require("./index");

describe("test index.js file", () => {
  it("sums 1 * 2 to equal 2", () => {
    expect(sum(1, 2)).toBe(2);
  });
});
