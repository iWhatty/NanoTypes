// ./src/typeof-map.js

// === Dynamic: "name → typeof" ===
// These are the basic JavaScript primitive type keywords.
// We expose them as is.<type>(x) shorthand guards.

export const typeofMap = {
    string: 'string',
    str: 'string',             // shorthand

    number: 'number',          // non-NaN check handled separately
    num: 'number',             // shorthand

    boolean: 'boolean',
    bool: 'boolean',           // shorthand

    bigint: 'bigint',
    bigi: 'bigint',            // shorthand

    symbol: 'symbol',
    sym: 'symbol',             // shorthand

    undefined: 'undefined',
    undef: 'undefined',        // shorthand

    func: 'function',          // alias of 'function' for safe property name
};