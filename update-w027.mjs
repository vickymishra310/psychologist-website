import { pathToFileURL } from 'node:url';

const toolPath = 'C:/Users/Vicky Mishra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';
const { FileBlob, SpreadsheetFile } = await import(pathToFileURL(toolPath).href);
const path = 'C:/Users/Vicky Mishra/Downloads/testing 3/outputs/01a16509-b973-7573-a806-bbfe3bd773be/Website_Issues.xlsx';
const wb = await SpreadsheetFile.importXlsx(await FileBlob.load(path));
const ws = wb.worksheets.getItem('Issues');
const rows = ws.getRange('A8:I45').values;
const index = rows.findIndex((row) => row[0] === 'W-027');
if (index < 0) throw new Error('Could not find W-027 in the Issues sheet');
const rowNumber = index + 8;
ws.getRange(`H${rowNumber}:I${rowNumber}`).values = [[
  'Partially addressed; owner input pending',
  'Replaced the Home hero Pexels photo with the owner-provided illustration in public/home-hero-illustration.webp, added a soft transparent edge, removed the frame, shadow, and dark overlay, updated its alt text, and moved the sage caption below the image on mobile so it does not cover the artwork. The separate Pexels image in the About section remains; confirm that it is not intended to depict the practitioner before closing this issue.'
]];
ws.getRange(`I${rowNumber}`).format = { font: { color: '#24312D', size: 10 }, wrapText: true, verticalAlignment: 'top', fill: '#F0F4EE' };
await wb.recalculate();
const file = await SpreadsheetFile.exportXlsx(wb);
await file.save(path);
console.log(`SAVED ${path}; W-027 updated in row ${rowNumber}`);
