const reverseString = require('./reverseString');

test('Reversed str of cat equals tac', () => {
    expect(reverseString('cat is')).toBe('si tac');
});