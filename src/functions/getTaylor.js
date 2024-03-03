// import * as math from 'mathjs';

// export default function getTaylor(degree) {
//   let taylorEquation = `x`;
//   for (let i = 2; i <= degree; i++) {
//     const constant = math.pow(-1, i + 1);
//     let temp;
//     temp = `+${constant}/${i}x^${i}`;
//     if (i % 2 == 0) {
//       temp = `${constant}/${i}x^${i}`
//     }
//     taylorEquation += temp;
//   }
//   taylorEquation = math.parse(taylorEquation);
//   return taylorEquation.toTex();
// }
//cos(x)
// import * as math from 'mathjs';

// export default function getTaylor(degree) {
//   let taylorEquation = `1`; // Initial term for cos(x)
//   for (let i = 2; i <= degree; i++) {
//     const constant = math.pow(-1, i); // Change to generate alternating signs
//     let temp;
//     temp = `+${constant}/(${2 * i - 2}!)x^${2 * i - 2}`; // Change to generate terms for cos(x)
//     if (i % 2 === 0) {
//       temp = `${constant}/(${2 * i - 2}!)x^${2 * i - 2}`; // Adjust sign for even powers
//     }
//     taylorEquation += temp;
//   }
//   taylorEquation = math.parse(taylorEquation);
//   return taylorEquation.toTex();
// }

import * as math from 'mathjs';

export default function getTaylor(degree) {
  let taylorEquation = `x`; // Initial term for acos(x)
  for (let i = 1; i <= degree; i++) {
    const constant = math.pow(-1, i); // Generate alternating signs
    const exponent = 2 * i + 1;
    const factorial = math.factorial(2 * i);
    const term = `${constant} x^${exponent} / ${factorial} `; // Generate terms for acos(x)
    taylorEquation += i % 2 === 0 ? `+${term}` : `-${term}`; // Alternate signs
  }
  taylorEquation = math.parse(taylorEquation);
  return taylorEquation.toTex();
}
