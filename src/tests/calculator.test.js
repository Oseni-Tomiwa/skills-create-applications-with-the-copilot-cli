/**
 * Calculator Unit Tests
 * 
 * Comprehensive test suite for the calculator's seven operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (**)
 * - Square Root (sqrt)
 * 
 * Also includes edge case testing such as division by zero, 
 * negative square roots, and zero divisor for modulo
 */

const { calculate, calculateSingleOperand, modulo, power, squareRoot } = require('../calculator');

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

describe('Calculator - Modulo Operation (%)', () => {
  test('should return remainder when dividing two positive numbers', () => {
    expect(calculate(10, 3, '%')).toBe(1);
  });

  test('example from image: 5 % 2 = 1', () => {
    expect(calculate(5, 2, '%')).toBe(1);
  });

  test('should return zero when dividing evenly', () => {
    expect(calculate(20, 5, '%')).toBe(0);
  });

  test('should handle modulo with negative numbers', () => {
    expect(calculate(-10, 3, '%')).toBe(-1);
  });

  test('should handle modulo with negative divisor', () => {
    expect(calculate(10, -3, '%')).toBe(1);
  });

  test('should handle modulo with decimal numbers', () => {
    expect(calculate(10.5, 3, '%')).toBeCloseTo(1.5, 1);
  });

  test('should throw error when modulo by zero', () => {
    expect(() => calculate(10, 0, '%')).toThrow('Cannot perform modulo with zero divisor');
  });

  test('should return correct modulo with large numbers', () => {
    expect(calculate(1000, 7, '%')).toBe(6);
  });
});

describe('Calculator - Exponentiation Operation (**)', () => {
  test('should raise base to positive power', () => {
    expect(calculate(2, 3, '**')).toBe(8);
  });

  test('example from image: 2 ** 3 = 8', () => {
    expect(calculate(2, 3, '**')).toBe(8);
  });

  test('should raise to power of zero', () => {
    expect(calculate(5, 0, '**')).toBe(1);
  });

  test('should raise to power of one', () => {
    expect(calculate(7, 1, '**')).toBe(7);
  });

  test('should handle negative exponent', () => {
    expect(calculate(2, -1, '**')).toBe(0.5);
  });

  test('should handle base of zero', () => {
    expect(calculate(0, 5, '**')).toBe(0);
  });

  test('should handle negative base with positive exponent', () => {
    expect(calculate(-2, 3, '**')).toBe(-8);
  });

  test('should handle decimal base and exponent', () => {
    expect(calculate(2.5, 2, '**')).toBe(6.25);
  });

  test('should handle large exponents', () => {
    expect(calculate(10, 3, '**')).toBe(1000);
  });

  test('should handle fractional exponents', () => {
    expect(calculate(4, 0.5, '**')).toBe(2);
  });
});

describe('Calculator - Square Root Operation (sqrt)', () => {
  test('should return square root of perfect square', () => {
    expect(calculateSingleOperand('sqrt', 16)).toBe(4);
  });

  test('example from image: sqrt(16) = 4', () => {
    expect(calculateSingleOperand('sqrt', 16)).toBe(4);
  });

  test('should return square root of 25', () => {
    expect(calculateSingleOperand('sqrt', 25)).toBe(5);
  });

  test('should handle square root of zero', () => {
    expect(calculateSingleOperand('sqrt', 0)).toBe(0);
  });

  test('should handle square root of one', () => {
    expect(calculateSingleOperand('sqrt', 1)).toBe(1);
  });

  test('should return approximate square root of non-perfect square', () => {
    expect(calculateSingleOperand('sqrt', 2)).toBeCloseTo(1.414, 2);
  });

  test('should handle square root of decimal numbers', () => {
    expect(calculateSingleOperand('sqrt', 0.25)).toBe(0.5);
  });

  test('should handle square root of large numbers', () => {
    expect(calculateSingleOperand('sqrt', 10000)).toBe(100);
  });

  test('should throw error when taking square root of negative number', () => {
    expect(() => calculateSingleOperand('sqrt', -4)).toThrow('Cannot calculate square root of a negative number');
  });

  test('should throw error for any negative number square root', () => {
    expect(() => calculateSingleOperand('sqrt', -1)).toThrow('Cannot calculate square root of a negative number');
  });

  test('should throw error for large negative numbers', () => {
    expect(() => calculateSingleOperand('sqrt', -100)).toThrow('Cannot calculate square root of a negative number');
  });
});

describe('Calculator - Individual Function Testing', () => {
  test('modulo function works correctly', () => {
    expect(modulo(10, 3)).toBe(1);
    expect(modulo(20, 5)).toBe(0);
  });

  test('modulo function throws error on zero divisor', () => {
    expect(() => modulo(10, 0)).toThrow('Cannot perform modulo with zero divisor');
  });

  test('power function works correctly', () => {
    expect(power(2, 3)).toBe(8);
    expect(power(5, 2)).toBe(25);
  });

  test('power function handles edge cases', () => {
    expect(power(0, 5)).toBe(0);
    expect(power(5, 0)).toBe(1);
    expect(power(2, -1)).toBe(0.5);
  });

  test('squareRoot function works correctly', () => {
    expect(squareRoot(16)).toBe(4);
    expect(squareRoot(25)).toBe(5);
  });

  test('squareRoot function throws error for negative numbers', () => {
    expect(() => squareRoot(-4)).toThrow('Cannot calculate square root of a negative number');
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

  test('should handle combined operations: (2 ** 3) % 5', () => {
    const result1 = calculate(2, 3, '**');
    const result2 = calculate(result1, 5, '%');
    expect(result2).toBe(3);
  });

  test('should handle very large exponents with small base', () => {
    expect(calculate(1, 1000, '**')).toBe(1);
  });

  test('should handle fractional square roots', () => {
    expect(calculateSingleOperand('sqrt', 6.25)).toBe(2.5);
  });
});