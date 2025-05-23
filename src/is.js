// src/is.js
const DEV = typeof window !== 'undefined' && window.__DEV__ === true;

/**
 * Generic type checker using instanceof.
 * @param {*} value
 * @param {Function} Type
 * @returns {boolean}
 */
function is(value, Type) {
  const result = value instanceof Type;
  if (!result && DEV) {
    console.warn(`Expected ${Type.name}, got ${value?.constructor?.name || typeof value}`, value);
  }
  return result;
}

is.string = (x) => typeof x === 'string';
is.number = (x) => typeof x === 'number' && !Number.isNaN(x);
is.boolean = (x) => typeof x === 'boolean';
is.defined = (x) => x !== undefined && x !== null;
is.nullish = (x) => x === undefined || x === null;
is.array = Array.isArray;
is.object = (x) => x && typeof x === 'object' && !Array.isArray(x);
is.function = (x) => typeof x === 'function';
is.textNode = (x) => x instanceof Text;
is.element = (x) => x instanceof Element;
is.htmlElement = (x) => x instanceof HTMLElement;
is.inputEvent = (x) => x instanceof InputEvent;
is.event = (x) => x instanceof Event;
is.contentEditable = (x) =>
  x instanceof HTMLElement && x.isContentEditable === true;

export { is };
