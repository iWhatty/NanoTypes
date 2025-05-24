# NanoTypes
[![npm](https://img.shields.io/npm/v/nanotypes)](https://www.npmjs.com/package/nanotypes)
[![gzip size](https://img.shields.io/bundlephobia/minzip/nanotypes)](https://bundlephobia.com/package/nanotypes)
[![downloads](https://img.shields.io/npm/dw/nanotypes)](https://www.npmjs.com/package/nanotypes)
[![GitHub stars](https://img.shields.io/github/stars/iWhatty/nanotypes?style=social)](https://github.com/iWhatty/nanotypes)



**Minimal, runtime-safe type guards for modern Vanilla JS.**
Works with zero setup, fully tree-shakable, and dev-friendly.

* Minified: (2.22 KB)
* Gzipped: (1.17 KB)

---

## Features

*  Runtime-safe `instanceof` and `typeof` checks
*  Dev-only logging with `window.__DEV__`
*  Zero dependencies
*  Fully tree-shakable
*  JSDoc + IntelliSense ready
*  Works in any modern JS environment

---

## Install

```bash
npm install NanoTypes
```

---

## Usage

```js
import { is, assertType, describe } from 'nanotypes';

if (is.string("hello")) {
  console.log("It's a string!");
}

if (is(someValue, HTMLElement)) {
  someValue.focus();
}

if (is.textNode(document.createTextNode("x"))) {
  // Safely handle
}

assertType.string("hi"); // throws error if not a string

console.log(describe.value(new Map())); // "Map"
```

---

## API

### Generic Matcher

```js
is(value, Class)
```

* Uses `instanceof` under the hood
* Logs a warning in dev mode if the type mismatches

```js
window.__DEV__ = true;
is(42, String); // console.warn: expected String, got Number
```

---

### Specific Checks

| Method                    | Description                       |
|---------------------------|-----------------------------------|
| `is.string(x)`            | `typeof x === "string"`           |
| `is.numberSafe(x)`        | Safe number (non-NaN) check       |
| `is.boolean(x)`           | Boolean primitive                 |
| `is.defined(x)`           | Not `undefined` or `null`         |
| `is.nullish(x)`           | `undefined` or `null`             |
| `is.array(x)`             | `Array.isArray(x)`                |
| `is.object(x)`            | Plain object (not array)          |
| `is.func(x)`              | Function check                    |
| `is.textNode(x)`          | `instanceof Text`                 |
| `is.element(x)`           | DOM `Element` node                |
| `is.htmlElement(x)`       | DOM `HTMLElement` node            |
| `is.inputEvent(x)`        | DOM `InputEvent` check            |
| `is.event(x)`             | DOM `Event` base class            |
| `is.contentEditable(x)`   | Editable HTML element             |
| `is.positiveNumber(x)`    | number > 0                        |
| `is.negativeNumber(x)`    | number < 0                        |
| `is.finite(x)`            | finite number check               |
| `is.integer(x)`           | integer check                     |
| `is.truthy(x)`            | boolean truthiness                |
| `is.falsy(x)`             | boolean falsiness                 |

And many more — auto-inferred from `instanceof`, `typeof`, and boolean logic checks.

---

## Philosophy

Make JS safer, not heavier.

**NanoTypes** gives you the essentials for runtime type checking — with no build step, no overhead, and total flexibility.

---

## License

\--{DR.WATT v3.0}--
