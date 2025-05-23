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
is.object = (x) => x && typeof x === 'object' && !Array.isArray(x);
is.defined = (x) => x !== undefined && x !== null;
is.nullish = (x) => x === undefined || x === null;
is.contentEditable = (x) => x instanceof HTMLElement && x.isContentEditable === true;


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