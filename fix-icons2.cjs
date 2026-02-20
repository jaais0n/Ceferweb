const fs = require('fs');
const c = fs.readFileSync('c:/Users/Jaison/Desktop/Projects/Ceferweb/client/pages/Technographics.tsx', 'utf8');
const idx = c.indexOf('flex justify-center mb-4');
console.log('Found at index:', idx);
console.log('Snippet:', JSON.stringify(c.slice(idx, idx+200)));

const pages = [
  'client/pages/Technographics.tsx',
  'client/pages/EmailFinder.tsx',
  'client/pages/API.tsx',
  'client/pages/ChromeExtension.tsx',
  'client/pages/EmailVerification.tsx',
  'client/pages/IntentData.tsx',
  'client/pages/DataEnrichment.tsx',
  'client/pages/DataQuality.tsx',
  'client/pages/DataDeliveryAccess.tsx',
  'client/pages/DataPointsCoverage.tsx',
  'client/pages/Prospects.tsx'
];

const circleClass = 'w-16 h-16 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center text-[#0e7bf5]';

pages.forEach(p => {
  let content = fs.readFileSync(`c:/Users/Jaison/Desktop/Projects/Ceferweb/${p}`, 'utf8');
  const count = (content.match(/w-16 h-16 rounded-full bg-white/g) || []).length;
  
  // Simple string replacement approach - find and remove the circle div
  let changed = 0;
  while (content.includes(`>\n                  <div className="${circleClass}">`)) {
    content = content.replace(`>\n                  <div className="${circleClass}">`, '>');
    changed++;
  }
  // Also try with different indentation
  while (content.includes(`>\n                <div className="${circleClass}">`)) {
    content = content.replace(`>\n                <div className="${circleClass}">`, '>');
    changed++;
  }
  
  fs.writeFileSync(`c:/Users/Jaison/Desktop/Projects/Ceferweb/${p}`, content, 'utf8');
  console.log(p + ': changed=' + changed + ' (had ' + count + ' circles)');
});
