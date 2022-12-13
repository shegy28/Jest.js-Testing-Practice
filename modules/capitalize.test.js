const capitalize = require('./capitalize');

test('capitalize str returns Str', () => {
    expect(capitalize('car')).toBe('Car');
})