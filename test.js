const assert = require('assert');
const getEc2Price = require('./index');

getEc2Price('t2.micro').then((price) => assert(typeof price === 'number'));
