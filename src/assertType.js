// src/assertType.js
import { is } from './is.js';

/**
 * Throws if value does not match given constructor
 * @param {*} value
 * @param {Function} Type
 */
function assertType(value, Type) {
  if (!is(value, Type)) {
    throw new TypeError(`Expected ${Type.name}, got ${value?.constructor?.name || typeof value}`);
  }
}

// Dynamic generation of assertType.<type> from is.<type>
const typesToWrap = [
  'string', 'number', 'boolean', 'array', 'function',
  'htmlElement', 'textNode'
];

for (const type of typesToWrap) {
  assertType[type] = (x) => {
    if (!is[type](x)) {
      throw new TypeError(`Expected ${type}, got ${typeof x}`);
    }
  };
}

export { assertType };
