const validate = require("./lib/validate");
const operator = require("./lib/operator");

// // test cases
// console.log(operator(`01721792128`));
// console.log(validate(`01021792128`));

module.exports.validate = validate;
module.exports.operator = operator;
