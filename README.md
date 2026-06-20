<center>
<img src="https://i.ibb.co/FqTHdT1/npm-i-bangladesh-postcodes-npm.png" alt="npm i bd-phone-number-validator" border="0">
</center>

![npm](https://img.shields.io/npm/v/bd-phone-number-validator?color=green&style=flat-square) ![npm](https://img.shields.io/npm/dm/bd-phone-number-validator?color=orange&style=flat-square)

A npm package to validate Bangladeshi phone numbers and identify their mobile operator. Ships with full TypeScript support.

## Features

- Validates any Bangladeshi phone number (`+8801` / `8801` / `01` formats)
- Identifies the operator (GrameenPhone, Banglalink, Teletalk, Airtel, Robi)
- Returns a typed result object with full number info
- Zero runtime dependencies

## Installation

```bash
npm i bd-phone-number-validator
```

## Usage

**CommonJS**
```javascript
const { validate, operator } = require("bd-phone-number-validator");

console.log(validate("01700000000"));  // true
console.log(validate("01000000000"));  // false

console.log(operator("01700000000"));
// {
//   phoneNumber: '01700000000',
//   isValid: true,
//   operator: 'GrameenPhone',
//   operator_status: '(017) is a valid operator'
// }
```

**TypeScript**
```typescript
import { validate, operator, PhoneNumberInfo } from "bd-phone-number-validator";

const isValid: boolean = validate("01700000000");

const info: PhoneNumberInfo = operator("01700000000");
```

## API

### `validate(phoneNumber: string): boolean`

Returns `true` if the number is a valid Bangladeshi mobile number, `false` otherwise.

Accepted formats: `01XXXXXXXXX` (11 digits), `8801XXXXXXXXX` (13 digits), `+8801XXXXXXXXX` (14 digits).

### `operator(phoneNumber: string): PhoneNumberInfo`

Returns a `PhoneNumberInfo` object:

```typescript
{
  phoneNumber: string;      // the input number
  isValid: boolean;         // whether the number is valid
  operator: string;         // operator name, or 'No match found!'
  operator_status: string;  // human-readable status message
}
```

## Output

<center>
<img src="https://i.ibb.co/4dqfTX7/245111382-287150093050086-7706423223816390250-n.jpg" alt="bd-phone-number-validator" border="0">
</center>

## Development

```bash
npm run build          # compile TypeScript
npm test               # run test suite
npm run test:coverage  # run tests with coverage report
npm run lint           # lint with ESLint
```

## Authors

[@MHNahib](https://www.github.com/MHNahib)

[![portfolio](https://img.shields.io/badge/facebook-000?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=100017094937153)
[![portfolio](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MHNahib)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mhnahib)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/HNahib)

## License

[MIT](https://choosealicense.com/licenses/mit/)
