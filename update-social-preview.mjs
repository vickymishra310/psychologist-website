import { pathToFileURL } from 'node:url';
import fs from 'node:fs/promises';

const toolPath = 'C:/Users/Vicky Mishra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';
const { FileBlob, SpreadsheetFile } = await import(pathToFileURL(toolPath).href);
const path = 'C:/Users/Vicky Mishra/Downloads/testing 3/outputs/01a16509-b973-7573-a806-bbfe3bd773be/Website_Issues.xlsx';
const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(path));
const ws = wb.worksheets.getItem('Issues');
const rows = ws.getRange('A8:I45').values;
const index = rows.findIndex((row) => row[0] === 'W-025');
if (index < 0) throw new Error('Could not find W-025 in the Issues sheet');
const rowNumber = index + 8;
ws.getRange(`H${rowNumber}:I${rowNumber}`).values = [[
  'Fixed',
  'Replaced the starter Open Graph and Twitter image with a branded 1200×630 sage-and-cream preview card for Nikhitha Chaudhary, Psychologist. Added descriptive image alt metadata. Production build succeeds; the public deployment domain is not yet available, so metadata uses the site-root asset path /social-preview.png.'
]];
ws.getRange(`I${rowNumber}`).format = { font: { color: '#24312D', size: 10 }, wrapText: true, verticalAlignment: 'top', fill: '#F0F4EE' };
await wb.recalculate();
const preview = await wb.render({ sheetName: 'Issues', range: `G${rowNumber}:I${rowNumber}`, scale: 1, format: 'png' });
await fs.writeFile('C:/Users/Vicky Mishra/Downloads/testing 3/outputs/01a16509-b973-7573-a806-bbfe3bd773be/Website_Issues_w025_preview.png', new Uint8Array(await preview.arrayBuffer()));
const check = await wb.inspect({ kind: 'region', sheetId: 'Issues', range: `G${rowNumber}:I${rowNumber}`, maxChars: 1800 });
console.log(check.ndjson ?? JSON.stringify(check));
const file = await SpreadsheetFile.exportXlsx(wb);
await file.save(path);
console.log(`SAVED ${path}; W-025 written to row ${rowNumber}`);
