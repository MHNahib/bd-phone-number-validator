// validate phone number
const validate = (phoneNumber) => {
  const expression = /(^([+]{1}[8]{2}|88)?(01){1}[3-9]{1}\d{8})$/;
  const isMatch = phoneNumber.match(expression);

  if (isMatch == null) return false;

  return true;
};

module.exports = validate;
