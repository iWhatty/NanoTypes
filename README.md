# justTypes

**Minimal, runtime-safe type guards for modern Vanilla JS.**
Works with zero setup, fully tree-shakable, and dev-friendly.

---

## Features

* ✅ Runtime-safe `instanceof` and `typeof` checks
* ✅ Dev-only logging with `window.__DEV__`
* ✅ Zero dependencies
* ✅ Fully tree-shakable
* ✅ JSDoc + IntelliSense ready
* ✅ Works in any modern JS environment

---

## Install

```bash
npm install justypes
```

---

## Usage

```js
import { is } from 'justypes';

if (is.string("hello")) {
  console.log("✅ It's a string!");
}

if (is(someValue, HTMLElement)) {
  someValue.focus();
}

if (is.textNode(document.createTextNode("x"))) {
  // Safely handle
}
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

| Method                  | Description               |
| ----------------------- | ------------------------- |
| `is.string(x)`          | `typeof x === "string"`   |
| `is.number(x)`          | Non-NaN number check      |
| `is.boolean(x)`         | Boolean primitive         |
| `is.defined(x)`         | Not `undefined` or `null` |
| `is.nullish(x)`         | `undefined` or `null`     |
| `is.array(x)`           | `Array.isArray(x)`        |
| `is.object(x)`          | Plain object (not array)  |
| `is.function(x)`        | Function check            |
| `is.textNode(x)`        | `instanceof Text`         |
| `is.element(x)`         | DOM `Element` node        |
| `is.htmlElement(x)`     | DOM `HTMLElement` node    |
| `is.inputEvent(x)`      | DOM `InputEvent` check    |
| `is.event(x)`           | DOM `Event` base class    |
| `is.contentEditable(x)` | Editable HTML element     |

---

## Philosophy

> Make JS safer, not heavier.

**justypes** gives you the essentials for runtime type checking — with no build step, no overhead, and total flexibility.

---

## License

\--{DR.WATT v3.0}--
