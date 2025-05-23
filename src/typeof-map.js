// ./src/typeof-map.js

// === Dynamic: "name → typeof" ===
// These are the basic JavaScript primitive type keywords.
// We expose them as is.<type>(x) shorthand guards.

export const typeofMap = {
    string: 'string',
    number: 'number',          // non-NaN check handled separately
    boolean: 'boolean',
    bigint: 'bigint',
    symbol: 'symbol',
    undefined: 'undefined',
    func: 'function',          // alias of 'function' for safe property name
};
