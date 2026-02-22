// ./test/smokeTest.js

console.log('\n== Type Check Smoke Test ==');

// Disable DEV warnings for this smoke run.
// env.js reads NODE_ENV during module evaluation, so set it before importing.
process.env.NODE_ENV = 'production';

const [{ is }, { describe }] = await Promise.all([
  import('../src/is.js'),
  import('../src/describe.js'),
]);

const tests = [
  ['map', new Map()],
  ['set', new Set()],
  ['promise', Promise.resolve()],
  ['date', new Date()],
  ['error', new Error('Oops')],
  ['blob', typeof Blob !== 'undefined' ? new Blob() : null],
  ['canvas', typeof HTMLCanvasElement !== 'undefined' ? document.createElement('canvas') : null],
  ['worker', typeof Worker !== 'undefined' ? new Worker(URL.createObjectURL(new Blob(['']))) : null],
  ['intlDateTimeFormat', new Intl.DateTimeFormat()],
  ['url', new URL('https://example.com')],
  ['objectStrict', {}],
  ['plainObject', {}],
  ['array', []],
  ['numberSafe', 42],
  ['number', NaN],
];

// Per-guard negative samples (so “negative” actually means negative)
const negatives = {
  // instanceof-style guards
  map: {},
  set: {},
  promise: {},
  date: {},
  error: {},
  blob: {},
  canvas: {},
  worker: {},
  intlDateTimeFormat: {},
  url: {},

  // structural/manual guards
  objectStrict: new Map(),
  plainObject: new Map(),
  array: {},
  numberSafe: NaN,
  number: 'not-a-number',
};

const defaultNegative = '___nanotypes_negative___';

for (const [name, val] of tests) {
  if (val === null) {
    console.log(`is.${name} not supported in this environment`);
    continue;
  }

  const fn = is[name];
  if (typeof fn !== 'function') {
    console.log(`is.${name}: ❌ no guard`);
    continue;
  }

  try {
    const ok = Boolean(fn(val));
    const negVal = Object.prototype.hasOwnProperty.call(negatives, name) ? negatives[name] : defaultNegative;
    const bad = Boolean(fn(negVal));

    console.log(`is.${name}:`, ok, '| negative:', bad);

    if (ok !== true || bad !== false) process.exitCode = 1;
    
  } catch (e) {
    console.error(`❌ is.${name} threw error:`, e);
  }
}

// Null-proto behavior (not a guard; a behavior check)
const nullProto = Object.create(null);
console.log('\n describe.value(Object.create(null)):', describe.value(nullProto));

console.log('\n Active is.* guards:', Object.keys(is).sort().join(', \n'));