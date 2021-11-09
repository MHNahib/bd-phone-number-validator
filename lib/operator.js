const validate = require("./validate");

// number object
const number = {};

// // validate phone number
// const validate = (phoneNumber) => {
//   const expression = /(^([+]{1}[8]{2}|88)?(01){1}[3-9]{1}\d{8})$/;
//   const isMatch = phoneNumber.match(expression);

//   if (isMatch == null) return false;

//   return true;
// };

// find initial
const findInitial = (phoneNumber, length) => {
  if (length === 14) {
    return phoneNumber.charAt(5);
  } else if (length === 13) {
    return phoneNumber.charAt(4);
  } else if (length === 11) {
    return phoneNumber.charAt(2);
  } else {
    return null;
  }
};

// append
const appendOperator = (initial) => {
  if (initial === "3" || initial === "7") {
    number.operator = "GrameenPhone";
  } else if (initial === "4" || initial === "9") {
    number.operator = "Banglalink";
  } else if (initial === "5") {
    number.operator = "Teletalk";
  } else if (initial === "6") {
    number.operator = "Airtel";
  } else if (initial === "8") {
    number.operator = "Robi";
  }
  number.operator_status = `(01${initial}) is a valid operator`;
};

const findOperator = (phoneNumber) => {
  const length = phoneNumber.length;

  const initial = findInitial(phoneNumber, length);

  if (initial === null) {
    number.operator = `No match found!`;
    number.operator_status = `(01${initial}) is not a valid operator`;
  } else {
    appendOperator(initial);
  }
};

const operator = (phoneNumber) => {
  const isValidate = validate(phoneNumber);
  number.phoneNumber = phoneNumber;
  number.isValid = isValidate;

  // return number is not valid
  if (isValidate === false) {
    number.operator = `No match found!`;
    number.operator_status = `Not a valid operator`;
    return number;
  }

  // find operator
  findOperator(phoneNumber);
  return number;
};

// // test cases
// console.log(operator(`01721792128`));
// console.log(validate(`01021792128`));

module.exports = operator;
