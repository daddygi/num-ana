// import * as math from "mathjs";
// import chop from "./Chop";
// import round from "./Round";

// export default function calculateTaylor(degree, taylorValue, decimalPlace) {
//   let validEquation = `${taylorValue}`;

//   for (let i = 2; i <= degree; i++) {
//     let validTemp;
//     validTemp = `+(${taylorValue}^${i}/${i})`;
//     if (i % 2 == 0) {
//       validTemp = `-(${taylorValue}^${i}/${i})`;
//     }
//     validEquation += validTemp;
//   }

//   // const trueValue = math.evaluate(validEquation);
//   return {trueValue: math.evaluate(validEquation), chopped: chop(validEquation, decimalPlace), rounded: round(validEquation, decimalPlace)};
// }
//cos(x)
// import * as math from 'mathjs';
// import chop from './Chop';
// import round from './Round';

// export default function calculateTaylor(degree, taylorValue, decimalPlace) {
//   let validEquation = '1'; // Initial term for cos(x)

//   for (let i = 2; i <= degree; i++) {
//     let validTemp;
//     validTemp = `+(${taylorValue}^${2 * i - 2}/(${2 * i - 2}!))`; // Adjusted term for cos(x)
//     if (i % 2 == 0) {
//       validTemp = `-(${taylorValue}^${2 * i - 2}/(${2 * i - 2}!))`; // Adjusted sign for even powers
//     }
//     validEquation += validTemp;
//   }

//   // Evaluate the Taylor polynomial, chop, and round the result
//   return {
//     trueValue: math.evaluate(validEquation),
//     chopped: chop(math.evaluate(validEquation), decimalPlace),
//     rounded: round(math.evaluate(validEquation), decimalPlace),
//   };
// }

import * as math from 'mathjs';
import chop from './Chop';
import round from './Round';

export default function calculateTaylor(degree, taylorValue, decimalPlace) {
  let validEquation = `${taylorValue}`; // Initial term for acos(x)

  for (let i = 1; i <= degree; i++) {
    const exponent = 2 * i + 1;
    const factorial = math.factorial(2 * i);
    let validTemp = `${taylorValue}^${exponent} / ${factorial}`; // Adjusted term for acos(x)
    validTemp = i % 2 === 0 ? `-${validTemp}` : `+${validTemp}`; // Alternate signs
    validEquation += validTemp;
  }

  // Evaluate the Taylor polynomial, chop, and round the result
  return {
    trueValue: math.evaluate(validEquation),
    chopped: chop(math.evaluate(validEquation), decimalPlace),
    rounded: round(math.evaluate(validEquation), decimalPlace),
  };
}
