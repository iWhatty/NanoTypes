

import { generateInstanceofMap } from '../src/instanceof-map.js';

const start = performance.now();
generateInstanceofMap();
const end = performance.now();

console.log(`Map generation: ${(end - start).toFixed(3)} ms`);