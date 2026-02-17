import { performance } from "node:perf_hooks";

async function bench(label, specifier) {
  const start = performance.now();
  await import(specifier);
  const end = performance.now();
  console.log(`${label} Import time: ${(end - start).toFixed(3)} ms`);
}

await bench("[src ]", "../src/index.js?bust=1");
await bench("[dist]", "../dist/index.js?bust=2");
await bench("[empty]", "./empty.mjs?bust=3");