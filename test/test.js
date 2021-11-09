const { validate, operator } = require("bd-phone-number-validator");

// test cases
console.log(operator(`01700000000`));
console.log(validate(`01000000000`));
