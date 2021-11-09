<center>
<img src="https://i.ibb.co/FqTHdT1/npm-i-bangladesh-postcodes-npm.png" alt="npm i bd-phone-number-validator" border="0">
</center>

![npm](https://img.shields.io/npm/v/bd-phone-number-validator?color=green&style=flat-square) ![npm](https://img.shields.io/npm/dm/bd-phone-number-validator?color=orange&style=flat-square)

bd-phone-number-validator is a npm package designed to validate phone number of bangladesh. It can validates any Bangladeshi cell phone numbers and show all the information about the phone numbers operator.

## Features

- Can validae any Bangladeshi phone number (like +8801/8801/01).
- Can find operator of the phone number.
- Can return all the information of the phone number as object.

## Components/ Objects

- validate:
  - Takes phone number as input
  - Returns a boolean
    - true - if the number is valid
    - false - if not valid
- operator:

  - Takes phone number as input
  - Returns an object
  - object contains:

  ```javascript

  {
      phoneNumber: given phone number for validation',
      isValid: boolean,
      operator: operator name,
      operator_status: operator status
  }

  ```

## How to install?

```bash
  npm i bd-phone-number-validator
```

## Usage/Examples

```javascript
const { validate, operator } = require("bd-phone-number-validator");

/* 
// operator returns an object 
// object contains: 
{
  phoneNumber: given phone number for validation',
  isValid: boolean,
  operator: operator name,
  operator_status: operator status
}
*/
console.log(operator(`01700000000`));

// validate returns a boolean
// true - if the number is valid
// false - if not valid
console.log(validate(`01000000000`));
```

## Output

<center>
<img src="https://i.ibb.co/4dqfTX7/245111382-287150093050086-7706423223816390250-n.jpg" alt="bd-phone-number-validator" border="0">
</center>

## 🚀 Authors

[@MHNahib](https://www.github.com/MHNahib)

[![portfolio](https://img.shields.io/badge/facebook-000?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/profile.php?id=100017094937153)
[![portfolio](https://img.shields.io/badge/github-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MHNahib)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mhnahib)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/HNahib)

## License

[MIT](https://choosealicense.com/licenses/mit/)
