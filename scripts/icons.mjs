// Dev helper: renders favicon PNGs. Run with SKILL_BROWSER=/path/to/browser.mjs (from the awwwards skill).
const { launch } = await import(process.env.SKILL_BROWSER);
import fs from 'node:fs';
const [svgPath, outDir] = process.argv.slice(2);
const svg = fs.readFileSync(svgPath, 'utf8');
const b = await launch();
for (const [name, size] of [['favicon-32.png', 32], ['apple-touch-icon.png', 180]]) {
  const p = await b.newPage({ viewport: { width: size, height: size } });
  await p.setContent(`<style>*{margin:0}svg{width:${size}px;height:${size}px;display:block}</style>${svg}`);
  await p.screenshot({ path: `${outDir}/${name}`, omitBackground: true });
}
await b.close();
