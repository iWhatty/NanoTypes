// esbuild.config.js
import { build } from 'esbuild';
import { cpSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const shared = {
  entryPoints: ['./src/index.js'],
  bundle: true,
  minify: true,
  sourcemap: false,
  target: 'es2022',
};

// Create dist/ if it doesn't exist
mkdirSync('dist', { recursive: true });

// ESM output
await build({
  ...shared,
  format: 'esm',
  outfile: 'dist/index.js',
});

// CJS output -- dropping .cjs support for now
// await build({
//   ...shared,
//   format: 'cjs',
//   outfile: 'dist/index.cjs',
// });

// Copy index.d.ts manually
cpSync(`${__dirname}/src/index.d.ts`, `${__dirname}/dist/index.d.ts`);