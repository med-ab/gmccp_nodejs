var password_generator = require('generate-password')
var generate_passwords = (number_of_passwords = 3) => password_generator.generateMultiple(number_of_passwords)
console.log(generate_passwords())
