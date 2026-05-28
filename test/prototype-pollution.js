const { parse } = require('../cjs');

// Verify that prototype pollution via __proto__ is not possible
const malicious = '["1",{"__proto__":"0"},{"polluted":true}]';

const before = ({}).polluted;
const parsed = parse(malicious);
const after = ({}).polluted;

console.assert(before === after, 'prototype should not be polluted');
console.assert(({}).polluted === undefined, 'Object.prototype.polluted should be undefined');
console.log('prototype pollution', '✅');
