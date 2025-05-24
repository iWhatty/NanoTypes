// ./src/instanceof-map.js

// === Dynamic: "name → instanceof" ===
// This map defines common global and browser-native constructors
// that we expose as is.<type> shorthand guards.

export const instanceofMap1 = {
    // --- Core DOM Types ---
    element: Element,
    htmlElement: HTMLElement,
    textNode: Text,
    comment: Comment,
    document: Document,
    node: Node,
    window: Window,

    // --- UI/Input/Event Types ---
    event: Event,
    inputEvent: InputEvent,
    keyboardEvent: KeyboardEvent,
    mouseEvent: MouseEvent,
    focusEvent: FocusEvent,
    formData: FormData,

    // --- Media & File Input ---
    file: File,
    fileList: FileList,
    image: Image,
    blob: Blob,
    canvas: HTMLCanvasElement,
    video: HTMLVideoElement,
    audio: HTMLAudioElement,
    imageBitmap: ImageBitmap,

    // --- Core JS Types ---
    date: Date,
    regexp: RegExp,
    map: Map,
    set: Set,
    weakMap: WeakMap,
    weakSet: WeakSet,
    arrayBuffer: ArrayBuffer,
    dataView: DataView,
    promise: Promise,
    error: Error,

    // --- Intl API Types ---
    intlDateTimeFormat: Intl.DateTimeFormat,
    intlNumberFormat: Intl.NumberFormat,
    intlCollator: Intl.Collator,

    // --- Web Platform Types ---
    url: URL,
    urlSearchParams: URLSearchParams,
    headers: Headers,
    request: Request,
    response: Response,

    // --- Background Threads & Channels ---
    worker: Worker,
    sharedWorker: SharedWorker,
    broadcastChannel: BroadcastChannel
  };

// const denylist = ['Function', 'Object', 'Symbol', 'Math', 'JSON', 'Reflect', 'Crypto'];
// function isValidInstanceofType([key, val]) {
//   return (
//     typeof val === 'function' &&
//     typeof val.prototype === 'object' &&
//     val.prototype !== null &&
//     /^[A-Z]/.test(key) && // likely a constructor
//     !denylist.includes(key)
//   );
// }

function isValidInstanceofType([key, val]) {
  const denylist = ['Function', 'Object', 'Symbol', 'Math', 'JSON', 'Reflect', 'Crypto'];

  if (typeof val !== 'function') {
    console.log(`❌ ${key}: not a function`);
    return false;
  }

  if (typeof val.prototype !== 'object' || val.prototype === null) {
    console.log(`❌ ${key}: invalid or missing prototype`);
    return false;
  }

  if (!/^[A-Z]/.test(key)) {
    console.log(`❌ ${key}: does not start with a capital letter`);
    return false;
  }

  if (denylist.includes(key)) {
    console.log(`⛔ ${key}: explicitly denied`);
    return false;
  }

  console.log(`✅ ${key}: included`);
  return true;
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