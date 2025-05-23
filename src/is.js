// src/is.js
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

// === Dynamic: "name → instanceof" ===
const instanceofMap = {
  textNode: Text,
  element: Element,
  htmlElement: HTMLElement,
  inputEvent: InputEvent,
  event: Event
};

for (const [name, Type] of Object.entries(instanceofMap)) {
  is[name] = (x) => x instanceof Type;
}

// === Dynamic: "name → typeof" ===
const typeofMap = {
  string: 'string',
  boolean: 'boolean',
  func: 'function'
};

for (const [name, typeString] of Object.entries(typeofMap)) {
  is[name] = (x) => typeof x === typeString;
}

// === Manual definitions for nuanced checks ===
is.number = (x) => typeof x === 'number' && !Number.isNaN(x);
is.array = Array.isArray;
is.object = (x) => x && typeof x === 'object' && !Array.isArray(x);
is.defined = (x) => x !== undefined && x !== null;
is.nullish = (x) => x === undefined || x === null;
is.contentEditable = (x) => x instanceof HTMLElement && x.isContentEditable === true;

export { is };