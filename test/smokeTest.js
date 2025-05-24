import { is } from '../src/is.js';

console.log('\n== Type Check Smoke Test ==');

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
  ['plainObject', Object.create(null)],
  ['array', []],
  ['numberSafe', 42],
  ['number', NaN],
//   ['contentEditable', (() => {
//     const el = document.createElement('div');
//     el.contentEditable = 'true';
//     return el;
//   })()],
];

for (const [name, val] of tests) {
  if (val === null) {
    console.log(`is.${name} not supported in this environment`);
    continue;
  }

  try {
    const fn = is[name];
    const result = typeof fn === 'function' ? fn(val) : '❌ no guard';
    console.log(`is.${name}:`, result);
  } catch (e) {
    console.error(`❌ is.${name} threw error:`, e);
  }
}

console.log('\n Active is.* guards:', Object.keys(is).sort().join(', \n'));