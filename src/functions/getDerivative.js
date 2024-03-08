import * as math from 'mathjs';

export default function calculateDerivative(func, x, degree) {
  for (let i = 1; i <= degree; i++) {
    func = math.derivative(func, x).toString() + '*x^' + (i - 1);
  }
  return new Function('x', func)(0); // Evaluate the derivative at zero to remove any constant terms
}

// Define the original function as a string
const func = 'x^3 + 2*x + 1';

// Calculate the derivative of the function at x=2 up to the 2nd degree
const derivativeValue = calculateDerivative(func, 2, 2);
console.log(derivativeValue); // Output: 12
