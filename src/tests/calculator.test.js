/**
 * Calculator Unit Tests
 * 
 * Comprehensive test suite for the calculator's four basic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * 
 * Also includes edge case testing such as division by zero
 */

const { calculate } = require('../calculator');

describe('Calculator - Addition Operation (+)', () => {
  test('should add two positive numbers', () => {
    expect(calculate(2, 3, '+')).toBe(5);
  });

  test('should add two negative numbers', () => {
    expect(calculate(-5, -3, '+')).toBe(-8);
  });

  test('should add a positive and negative number', () => {
    expect(calculate(10, -4, '+')).toBe(6);
  });

  test('should handle decimal numbers', () => {
    expect(calculate(1.5, 2.5, '+')).toBe(4);
  });

  test('should return zero when adding zero', () => {
    expect(calculate(5, 0, '+')).toBe(5);
  });

  test('should return zero when adding two zeros', () => {
    expect(calculate(0, 0, '+')).toBe(0);
  });

  test('example from image: 2 + 3 = 5', () => {
    expect(calculate(2, 3, '+')).toBe(5);
  });
});

describe('Calculator - Subtraction Operation (-)', () => {
  test('should subtract two positive numbers', () => {
    expect(calculate(10, 4, '-')).toBe(6);
  });

  test('should subtract resulting in negative number', () => {
    expect(calculate(5, 10, '-')).toBe(-5);
  });

  test('should subtract two negative numbers', () => {
    expect(calculate(-5, -3, '-')).toBe(-2);
  });

  test('should subtract a negative from a positive', () => {
    expect(calculate(10, -5, '-')).toBe(15);
  });

  test('should handle decimal numbers', () => {
    expect(calculate(5.5, 2.5, '-')).toBe(3);
  });

  test('should return zero when subtracting equal numbers', () => {
    expect(calculate(7, 7, '-')).toBe(0);
  });

  test('should return zero when subtracting from zero', () => {
    expect(calculate(0, 0, '-')).toBe(0);
  });

  test('example from image: 10 - 4 = 6', () => {
    expect(calculate(10, 4, '-')).toBe(6);
  });
});

describe('Calculator - Multiplication Operation (*)', () => {
  test('should multiply two positive numbers', () => {
    expect(calculate(45, 2, '*')).toBe(90);
  });

  test('should multiply with zero', () => {
    expect(calculate(5, 0, '*')).toBe(0);
  });

  test('should multiply two negative numbers', () => {
    expect(calculate(-3, -4, '*')).toBe(12);
  });

  test('should multiply positive by negative number', () => {
    expect(calculate(5, -3, '*')).toBe(-15);
  });

  test('should handle decimal numbers', () => {
    expect(calculate(2.5, 4, '*')).toBe(10);
  });

  test('should multiply by one', () => {
    expect(calculate(7, 1, '*')).toBe(7);
  });

  test('should multiply large numbers', () => {
    expect(calculate(1000, 1000, '*')).toBe(1000000);
  });

  test('example from image: 45 * 2 = 90', () => {
    expect(calculate(45, 2, '*')).toBe(90);
  });
});

describe('Calculator - Division Operation (/)', () => {
  test('should divide two positive numbers', () => {
    expect(calculate(20, 5, '/')).toBe(4);
  });

  test('should divide resulting in decimal', () => {
    expect(calculate(10, 3, '/')).toBeCloseTo(3.33, 2);
  });

  test('should divide two negative numbers', () => {
    expect(calculate(-20, -5, '/')).toBe(4);
  });

  test('should divide positive by negative number', () => {
    expect(calculate(20, -5, '/')).toBe(-4);
  });

  test('should divide by one', () => {
    expect(calculate(7, 1, '/')).toBe(7);
  });

  test('should divide zero by a number', () => {
    expect(calculate(0, 5, '/')).toBe(0);
  });

  test('should throw error when dividing by zero', () => {
    expect(() => calculate(20, 0, '/')).toThrow('Cannot divide by zero');
  });

  test('should throw error when dividing negative by zero', () => {
    expect(() => calculate(-10, 0, '/')).toThrow('Cannot divide by zero');
  });

  test('example from image: 20 / 5 = 4', () => {
    expect(calculate(20, 5, '/')).toBe(4);
  });
});

describe('Calculator - Error Handling', () => {
  test('should throw error for invalid operator', () => {
    expect(() => calculate(5, 3, '%')).toThrow('Invalid operator. Supported operations: +, -, *, /');
  });

  test('should throw error for unsupported operator symbol', () => {
    expect(() => calculate(5, 3, '^')).toThrow('Invalid operator. Supported operations: +, -, *, /');
  });

  test('should throw error for empty operator', () => {
    expect(() => calculate(5, 3, '')).toThrow('Invalid operator. Supported operations: +, -, *, /');
  });

  test('should throw error for null operator', () => {
    expect(() => calculate(5, 3, null)).toThrow('Invalid operator. Supported operations: +, -, *, /');
  });
});

describe('Calculator - Edge Cases', () => {
  test('should handle very large numbers in addition', () => {
    expect(calculate(999999999, 1, '+')).toBe(1000000000);
  });

  test('should handle very small decimal numbers', () => {
    expect(calculate(0.0001, 0.0002, '+')).toBeCloseTo(0.0003, 4);
  });

  test('should handle negative zero', () => {
    expect(calculate(-0, 5, '+')).toBe(5);
  });

  test('should handle scientific notation', () => {
    expect(calculate(1e3, 2e3, '+')).toBe(3000);
  });

  test('should maintain precision in complex calculations', () => {
    // First: 10 - 4 = 6
    const result1 = calculate(10, 4, '-');
    // Then: 6 * 2 = 12
    const result2 = calculate(result1, 2, '*');
    expect(result2).toBe(12);
  });
});
