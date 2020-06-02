const {SHA256} = require('crypto-js');
const bcrypt = require('bcrypt');

var password = "123abc!";

var message = 'I am MJ';

var hash = SHA256(message);
console.log(`message : ${message}`);
console.log(`message : ${hash}`);