import * as math from 'mathjs';

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

export default function getTaylor(degree, xValue) {
  const derivatives = getDerivatives(degree);
  let taylorSeries = '';

  for (let i = 0; i <= degree; i++) {
    if (i === 0) {
      taylorSeries += 'f(x) \\approx \\theta + ';
    } else if (i === 1) {
      taylorSeries +=
        '\\left( \\frac{{d}}{{dx}} f(x) \\right)\\bigg|_{x=0} (x - x_0) + ';
    } else {
      taylorSeries +=
        '\\frac{{1}}{{' +
        i +
        '!}} \\left( \\frac{{d^{' +
        i +
        '}}}{{dx^{' +
        i +
        '}}} f(x) \\right)\\bigg|_{x=0} (x - x_0)^{' +
        i +
        '} + ';
    }
  }

  // Remove the extra ' + ' at the end
  taylorSeries = taylorSeries.slice(0, -3);

  return taylorSeries;
}
