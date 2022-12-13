const stringLength = require('./stringLength');

test('stringLength of cat to equal 3', () => {
    expect(stringLength('cat')).toBe(3);
});

test('string Length longer than 10', () => {
    expect(stringLength('characteristics')).toBe(`characteristics is longer or less than the required length`);
});

test('string Length less than 1', () => {
    expect(stringLength('')).toBe(` is longer or less than the required length`);
});