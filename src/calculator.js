#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Perform arithmetic operation
 * @param {number} num1 - First number
 * @param {number} num2 - Second number
 * @param {string} operator - Operation (+, -, *, /)
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
    default:
      throw new Error('Invalid operator. Supported operations: +, -, *, /');
  }
}

/**
 * Display calculator menu and prompt user
 */
function showMenu() {
  console.log('\n========== Simple Calculator ==========');
  console.log('Supported Operations:');
  console.log('  + (Addition)');
  console.log('  - (Subtraction)');
  console.log('  * (Multiplication)');
  console.log('  / (Division)');
  console.log('======================================\n');
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

      rl.question('Enter operator (+, -, *, /): ', (operator) => {
        if (!['+', '-', '*', '/'].includes(operator)) {
          console.log('Invalid operator. Please use +, -, *, or /');
          askForInput();
          return;
        }

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

// Export the calculate function for testing
module.exports = { calculate };

// Start the calculator only when run directly
if (require.main === module) {
  startCalculator();
}
