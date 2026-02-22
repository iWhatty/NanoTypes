

// ./src/env.js
export const DEV =
  (typeof globalThis !== "undefined" && globalThis.__DEV__ === true) ||
  (typeof process !== "undefined" && process.env?.NODE_ENV !== "production");