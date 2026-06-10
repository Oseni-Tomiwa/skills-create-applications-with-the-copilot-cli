#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 * - Modulo (%)
 * - Exponentiation (**)
 * - Square Root (√)
 */

const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Calculate modulo - returns the remainder of a divided by b
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} Remainder of a divided by b
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo with zero divisor');
  }
  return a % b;
}

/**
 * Calculate power - returns base raised to the exponent
 * @param {number} base - The base number
 * @param {number} exponent - The exponent
 * @returns {number} Base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Calculate square root - returns the square root of n
 * @param {number} n - The number to find the square root of
 * @returns {number} The square root of n
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

/**
 * Perform arithmetic operation
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @param {string} operator - Operation (+, -, *, /, %, **)
 * @returns {number} Result of the operation
 */
function calculate(num1, num2, operator) {
  switch (operator) {
    // Addition
    case '+':
      return num1 + num2;
    // Subtraction
    case '-':
      return num1 - num2;
    // Multiplication
    case '*':
      return num1 * num2;
    // Division
    case '/':
      if (num2 === 0) {
        throw new Error('Cannot divide by zero');
      }
      return num1 / num2;
    // Modulo
    case '%':
      return modulo(num1, num2);
    // Exponentiation
    case '**':
      return power(num1, num2);
    default:
      throw new Error('Invalid operator. Supported operations: +, -, *, /, %, **');
  }
}

/**
 * Calculate square root for single operand operations
 * @param {string} operation - Operation name ('sqrt')
 * @param {number} num - The number to operate on
 * @returns {number} Result of the operation
 */
function calculateSingleOperand(operation, num) {
  switch (operation) {
    // Square Root
    case 'sqrt':
      return squareRoot(num);
    default:
      throw new Error('Invalid operation. Supported single operand operations: sqrt');
  }
}

/**
 * Display calculator menu and prompt user
 */
function showMenu() {
  console.log('\n========== Advanced Calculator ==========');
  console.log('Two-Operand Operations:');
  console.log('  + (Addition)');
  console.log('  - (Subtraction)');
  console.log('  * (Multiplication)');
  console.log('  / (Division)');
  console.log('  % (Modulo)');
  console.log('  ** (Exponentiation)');
  console.log('\nSingle-Operand Operations:');
  console.log('  sqrt (Square Root)');
  console.log('========================================\n');
}

/**
 * Main calculator loop
 */
function startCalculator() {
  showMenu();

  const askForInput = () => {
    rl.question('Enter first number (or "quit" to exit): ', (num1Input) => {
      if (num1Input.toLowerCase() === 'quit') {
        console.log('Thank you for using the calculator!');
        rl.close();
        return;
      }

      const num1 = parseFloat(num1Input);
      if (isNaN(num1)) {
        console.log('Invalid input. Please enter a valid number.');
        askForInput();
        return;
      }

      rl.question('Enter operator (+, -, *, /, %, **, sqrt): ', (operator) => {
        const validBinaryOps = ['+', '-', '*', '/', '%', '**'];
        const validUnaryOps = ['sqrt'];
        const allValidOps = [...validBinaryOps, ...validUnaryOps];

        if (!allValidOps.includes(operator)) {
          console.log('Invalid operator. Please use +, -, *, /, %, **, or sqrt');
          askForInput();
          return;
        }

        // Handle single-operand operations (sqrt)
        if (validUnaryOps.includes(operator)) {
          try {
            const result = calculateSingleOperand(operator, num1);
            console.log(`\nResult: ${operator}(${num1}) = ${result}\n`);
          } catch (error) {
            console.log(`Error: ${error.message}\n`);
          }
          askForInput();
          return;
        }

        // Handle binary operations
        rl.question('Enter second number: ', (num2Input) => {
          const num2 = parseFloat(num2Input);
          if (isNaN(num2)) {
            console.log('Invalid input. Please enter a valid number.');
            askForInput();
            return;
          }

          try {
            const result = calculate(num1, num2, operator);
            console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}\n`);
          } catch (error) {
            console.log(`Error: ${error.message}\n`);
          }

          askForInput();
        });
      });
    });
  };

  askForInput();
}

// Export all functions for testing
module.exports = { calculate, calculateSingleOperand, modulo, power, squareRoot };

// Start the calculator only when run directly
if (require.main === module) {
  startCalculator();
}
