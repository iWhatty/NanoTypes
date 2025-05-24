// ./src/instanceof-map.js

// === Dynamic: "name → instanceof" ===
// This map defines common global and browser-native constructors
// that we expose as is.<type> shorthand guards.


// Keys to exclude when checking isValidInstanceofType
const denylist = new Set(['Function', 'Object', 'Symbol', 'Math', 'JSON', 'Reflect', 'Crypto']);

function isValidInstanceofType([key, val]) {
  return (
    typeof val === 'function' &&
    typeof val.prototype === 'object' &&
    val.prototype !== null &&
    /^[A-Z]/.test(key) && // likely a constructor
    !denylist.has(key)
  );
}

export const aliasMap = {
  HTMLCanvasElement: 'canvas',
  HTMLVideoElement: 'video',
  HTMLAudioElement: 'audio',
  URL: 'url',
  URLSearchParams: 'urlSearchParams',
  URIError: 'uriError',
  DOMException: 'domException',
  // Crypto: 'cryptoConstructor', // only if you choose to expose this safely
};

function formatKey(name) {
  return aliasMap[name] || name[0].toLowerCase() + name.slice(1);
}

function generateInstanceofMap() {

  const entries = Reflect.ownKeys(globalThis)
    .map((key) => [key, globalThis[key]])
    .filter(([key]) => typeof key === 'string') // only string keys
    .filter(isValidInstanceofType)
    .map(([name, ctor]) => [formatKey(name), ctor]);

  // include nested Intl types
  if (typeof Intl === 'object') {
    entries.push(['intlDateTimeFormat', Intl.DateTimeFormat]);
    entries.push(['intlNumberFormat', Intl.NumberFormat]);
    entries.push(['intlCollator', Intl.Collator]);
  }

  return Object.fromEntries(entries);
}

export const instanceofMap = generateInstanceofMap();