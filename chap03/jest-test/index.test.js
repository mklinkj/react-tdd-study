const { sum, person, toggle, range } = require('./index');

describe('test index.js file', () => {
  // toBe()
  it('sums 1 * 2 to equal 2', () => {
    expect(sum(1, 2)).toBe(2);
  });

  // toEqual()
  // toBe를 사용하면 === 비교, toEqual을 사용하면 오브젝트의 내용으로 비교
  it('make a person', () => {
    expect(person('Kim', 20)).toEqual({
      name: 'Kim',
      age: 20,
    });
  });

  // toBeFalsy(), toBeTruthy()
  it('returns false', () => {
    expect(toggle(true)).toBeFalsy();
    expect(toggle(false)).toBeTruthy();
    expect(toggle(true)).not.toBeTruthy();
  });

  // toContain()
  it('has 2', () => {
    expect(range(1, 3)).toContain(2);
  });
});
