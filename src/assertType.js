// src/assertType.js
import { is } from './is.js';
import { describe } from './describe.js';

import { DEV } from './env.js';



/**
 * Throws if value does not match given constructor
 * @param {*} value
 * @param {Function} Type
 */
function assertType(value, Type) {
    if (!is(value, Type)) {
        throw new TypeError(`Expected ${Type.name}, got ${describe.value(value)}`);
    }
}


// Keys to exclude when wrapping is.<type> into assertType.<type>
const skipKeys = new Set(['length', 'name', 'prototype', 'default', '__proto__']);

// Dynamic generation of assertType.<type> for every is.<type>
for (const key of Object.keys(is)) {
    if (skipKeys.has(key)) continue;

    const guard = is[key];
    if (typeof guard !== 'function') continue;

    assertType[key] = (x) => {
        if (!Boolean(guard(x))) {
            throw new TypeError(`Expected ${key}, got ${describe.value(x)}`);
        }
    };
}



if (!DEV) Object.freeze(assertType);

export { assertType };