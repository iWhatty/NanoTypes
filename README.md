# NanoTypes

[![npm](https://img.shields.io/npm/v/nanotypes)](https://www.npmjs.com/package/nanotypes)
[![gzip size](https://img.shields.io/bundlephobia/minzip/nanotypes)](https://bundlephobia.com/package/nanotypes)
[![downloads](https://img.shields.io/npm/dw/nanotypes)](https://www.npmjs.com/package/nanotypes)
[![GitHub stars](https://img.shields.io/github/stars/iWhatty/nanotypes?style=social)](https://github.com/iWhatty/nanotypes)

**Minimal, runtime-safe type guards for modern JavaScript.**

Tree-shakable, zero-config, developer-friendly guards for `typeof`, `instanceof`, and structural checks.

* **Minified:** \~2.5 KB
* **Gzipped:** \~1.3 KB

---

## Features

*  Runtime-safe `typeof` and `instanceof` matching
*  Dynamic support for global constructors (`Map`, `URL`, etc.)
*  Dev-only logging with `window.__DEV__`
*  Auto-generated `assertType.*` versions
*  No dependencies
*  Works in any modern JS runtime (Node, browser, workers)

---

## Install

```bash
npm install nanotypes
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
  // Safe to access nodeValue, etc.
}

assertType.promise(Promise.resolve()); // throws TypeError if invalid

console.log(describe.value(new Map())); // "Map"
```

---

## API

### Generic Matcher

```ts
is(value, Class)
```

* Uses `instanceof` internally
* Logs warning in dev if mismatched (via `window.__DEV__ = true`)

### Type-Specific Guards

Over 60 guards are exposed automatically:

| Guard                   | Description                              |
| ----------------------- | ---------------------------------------- |
| `is.string(x)`          | `typeof x === "string"`                  |
| `is.numberSafe(x)`      | Safe number (non-NaN)                    |
| `is.boolean(x)`         | Boolean primitive                        |
| `is.defined(x)`         | Not `null` or `undefined`                |
| `is.nullish(x)`         | `null` or `undefined`                    |
| `is.array(x)`           | Array literal check                      |
| `is.object(x)`          | Non-null object, not array               |
| `is.objectStrict(x)`    | Exactly a `{}` object                    |
| `is.plainObject(x)`     | Object with prototype `Object` or `null` |
| `is.func(x)`            | Function check                           |
| `is.map(x)`             | Instance of `Map`                        |
| `is.date(x)`            | Instance of `Date`                       |
| `is.error(x)`           | Instance of `Error`                      |
| `is.textNode(x)`        | DOM Text node                            |
| `is.htmlElement(x)`     | `HTMLElement` node                       |
| `is.contentEditable(x)` | Editable DOM node                        |
| `is.positiveNumber(x)`  | Greater than 0                           |
| `is.negativeNumber(x)`  | Less than 0                              |
| `is.integer(x)`         | Whole number                             |
| `is.finite(x)`          | Not `Infinity`, not `NaN`                |
| `is.truthy(x)`          | Coerces to `true`                        |
| `is.falsy(x)`           | Coerces to `false`                       |

### Assertive Guards

All `is.*` functions have an `assertType.*` equivalent:

```ts
assertType.url(x) // throws TypeError if not a URL
```

---

## Philosophy

**Make JavaScript safer without making it heavier.**

NanoTypes avoids boilerplate and unnecessary runtime bloat. Just clean, modern type guards ready for anything from browser UIs to CLI tools.

---

## License

**DR.WATT v3.0**
