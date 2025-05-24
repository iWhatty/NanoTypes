// ./src/is.js

import { instanceofMap } from './instanceof-map.js';
import { typeofMap } from './typeof-map.js';

const DEV = typeof window !== 'undefined' && window.__DEV__ === true;

/**
 * Generic instanceof type checker
 */
function is(value, Type) {
    const result = value instanceof Type;
    if (!result && DEV) {
        console.warn(`Expected ${Type.name}, got ${value?.constructor?.name || typeof value}`, value);
    }
    return result;
}

// === Core instanceof Guards ===
for (const [name, Type] of Object.entries(instanceofMap)) {
    is[name] = (x) => x instanceof Type;
}

// === Core typeof Guards ===
for (const [name, typeString] of Object.entries(typeofMap)) {
    is[name] = (x) => typeof x === typeString;
}

// === Manual Guards ===
is.numberSafe = (x) => typeof x === 'number' && !Number.isNaN(x);
is.array = (x) => Array.isArray(x);
is.defined = (x) => x !== undefined && x !== null;
is.nullish = (x) => x === undefined || x === null;
is.nil = (x) => x === null;
is.contentEditable = (x) => x instanceof HTMLElement && x.isContentEditable === true;


// Basic object check: excludes null and arrays.
// Matches most non-null object-like values (including class instances, DOM nodes, etc.)
// Does not check prototype or class — good default for general use.
is.object = (x) => x && typeof x === 'object' && !Array.isArray(x);

// Stricter check: only matches plain Object instances (`{}`)
// Uses internal [[Class]] tag to confirm it's exactly `[object Object]`.
// Excludes things like Date, Map, DOM elements, etc.
is.objectStrict = (x) => Object.prototype.toString.call(x) === '[object Object]';

// POJO check: plain object with prototype of `Object` or `null`
// Excludes custom class instances, objects with modified prototypes, etc.
// Great for validating data structures, JSON payloads, configs, etc.
is.plainObject = (x) =>
  is.objectStrict(x) &&
  (Object.getPrototypeOf(x) === Object.prototype || Object.getPrototypeOf(x) === null);

// Alias for plainObject — ergonomic shorthand used in some communities.
is.pojo = is.plainObject;

// Loose object check: includes arrays, objects, and non-null values.
// Does NOT exclude arrays or special object types — very permissive.
// Useful for general reflection or fallback behavior (not validation).
is.objectLoose = (x) => typeof x === 'object' && x !== null;



// === Derived Boolean Checks ===
const basicChecks = {
    truthy: (x) => !!x,
    falsy: (x) => !x,
    emptyString: (x) => x === '',
    nonEmptyString: (x) => typeof x === 'string' && x.length > 0,
    positiveNumber: (x) => is.numberSafe(x) && x > 0,
    negativeNumber: (x) => is.numberSafe(x) && x < 0,
    integer: (x) => Number.isInteger(x),
    finite: (x) => Number.isFinite(x)
};

Object.assign(is, basicChecks);



export { is };