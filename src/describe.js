// src/describe.js

/**
 * Provides human-readable descriptions of JS values.
 */
export const describe = {
    /**
     * Returns a string description of a value's type.
     * @param {*} x
     * @returns {string}
     */
    value(x) {
      if (x === null) return 'null';
      if (x === undefined) return 'undefined';
      if (Array.isArray(x)) return 'Array';
      if (typeof x === 'object') {
        return x.constructor?.name || 'Object';
      }
      return typeof x;
    }
  };
  