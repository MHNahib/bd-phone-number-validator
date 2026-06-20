const validate = (phoneNumber: string): boolean => {
  const expression = /(^([+]{1}[8]{2}|88)?(01){1}[3-9]{1}\d{8})$/;
  return phoneNumber.match(expression) !== null;
};

export default validate;
