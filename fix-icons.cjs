const fs = require('fs');

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

pages.forEach(p => {
  let c = fs.readFileSync(p, 'utf8');
  const before = (c.match(/w-16 h-16 rounded-full bg-white/g) || []).length;

  // Remove circle wrapper opening: replace "flex justify-center mb-4"> + newline + circle div with just "flex justify-center mb-4">
  c = c.replace(
    /<div className="flex justify-center mb-4">\s*\n\s*<div className="w-16 h-16 rounded-full bg-white shadow-\[0_4px_16px_rgba\(0,0,0,0\.15\)\] flex items-center justify-center text-\[#0e7bf5\]">/g,
    '<div className="flex justify-center mb-4 text-[#0e7bf5]">'
  );

  // Remove the extra closing </div> for the circle wrapper
  // Pattern after SVG close: </svg>\n  </div>\n  </div>\n  <div className="text-4xl
  // We want: </svg>\n  </div>\n  <div className="text-4xl
  // Use two-pass approach for safety
  c = c.replace(
    /(<\/svg>)\s*\n(\s*)<\/div>(\s*\n\s*)<\/div>(\s*\n\s*<div className="text-4xl)/g,
    '$1\n$2</div>$4'
  );

  // Also handle heroicon (</svg> with indent before it)
  c = c.replace(
    /(\s*<\/svg>)\s*\n(\s*)<\/div>(\s*\n\s*)<\/div>(\s*\n\s*<div className="text-4xl)/g,
    '$1\n$2</div>$4'
  );

  const after = (c.match(/w-16 h-16 rounded-full bg-white/g) || []).length;
  fs.writeFileSync(p, c, 'utf8');
  console.log(p + ': removed ' + (before - after) + ' circle wrappers (was ' + before + ', now ' + after + ')');
});

console.log('\nDone!');
