import {pathToFileURL} from 'node:url';
const toolPath='C:/Users/Vicky Mishra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs';
const {FileBlob,SpreadsheetFile}=await import(pathToFileURL(toolPath).href);
const path='C:/Users/Vicky Mishra/Downloads/testing 3/outputs/01a16509-b973-7573-a806-bbfe3bd773be/Website_Issues.xlsx';
const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(path));
const ws=wb.worksheets.getItem('Issues');
const rows=ws.getRange('A8:I45').values;
const completedStatuses=new Set(['Fixed','Fixed per owner request','Updated per owner','Resolved: form uses WhatsApp','Confirmed by owner','Keep separate WhatsApp button','Updated for India']);
console.log(JSON.stringify({w024:rows.find((row)=>row[0]==='W-024'),w025:rows.find((row)=>row[0]==='W-025'),w026:rows.find((row)=>row[0]==='W-026'),pendingCount:rows.filter((row)=>row[0] && !completedStatuses.has(row[7])).length},null,2));
