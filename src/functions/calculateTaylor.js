import * as math from 'mathjs';
import chop from './Chop';
import round from './Round';

function getDerivatives(degree) {
  let func = 'math.acos(x)';
  let derivatives = [math.pi / 2];

  for (let i = 1; i <= degree; i++) {
    let newFunc = math.derivative(func, 'x');

    if (i === 1) {
      derivatives.push(newFunc.evaluate({ x: 0 })); // Evaluate the first derivative at x = xValue
    } else {
      for (let j = 2; j <= i; j++) {
        newFunc = math.derivative(newFunc, 'x');
      }

      derivatives.push(newFunc.evaluate({ x: 0 })); // Evaluate the derivative at x = xValue
    }
  }

  return derivatives;
}

// Modify calculateTaylor to use getDerivatives function
export default function calculateTaylor(degree, taylorValue, decimalPlace) {
  let taylorPolynomial = 0;
  const derivatives = getDerivatives(degree);

  for (let i = 0; i <= degree; i++) {
    const constant = derivatives[i] / math.factorial(i); // Use the precomputed derivatives
    taylorPolynomial += constant * Math.pow(taylorValue, i);
  }

  // Evaluate the Taylor polynomial, chop, and round the result
  return {
    trueValue: taylorPolynomial,
    chopped: chop(taylorPolynomial, decimalPlace),
    rounded: round(taylorPolynomial, decimalPlace),
  };
}
