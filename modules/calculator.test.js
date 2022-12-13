const calculate = require('./calculator');

describe('add', () => {
test('test.add 4,5 equals 9', () => {
    expect(calculate.add(4,5)).toBe(9);
});

test('test.add 10,5 equals 15', () => {
    expect(calculate.add(10,5)).toBe(15);
});

test('test.add 10,10 equals 20', () => {
    expect(calculate.add(10,10)).toBe(20);
});
});

describe('subtract', () => {
    test('test.subtract 4,5 equals -1', () => {
        expect(calculate.subtract(4,5)).toBe(-1);
    });
    
    test('test.subtract 10,5 equals 5', () => {
        expect(calculate.subtract(10,5)).toBe(5);
    });
    
    test('test.subtract 10,10 equals 0', () => {
        expect(calculate.subtract(10,10)).toBe(0);
    });
});

describe('multiply', () => {
    test('test.multiply 4,5 equals -1', () => {
        expect(calculate.multiply(4,5)).toBe(20);
    });
    
    test('test.multiply 10,5 equals 5', () => {
        expect(calculate.multiply(10,5)).toBe(50);
    });
    
    test('test.multiply 10,10 equals 0', () => {
        expect(calculate.multiply(10,10)).toBe(100);
    });
});

describe('divide', () => {
    test('test.divide 4,5 equals -1', () => {
        expect(calculate.divide(15,5)).toBe(3);
    });
    
    test('test.divide 10,5 equals 5', () => {
        expect(calculate.divide(10,5)).toBe(2);
    });
    
    test('test.divide 10,10 equals 0', () => {
        expect(calculate.divide(10,10)).toBe(1);
    });
});

