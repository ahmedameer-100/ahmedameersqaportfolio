const fs = require('fs');
const path = require('path');

const srcImg = 'C:/Users/AZT/.gemini/antigravity/brain/fa7bd4e5-4625-47c4-beb0-f90589226a8d/gift_well_soon_1785158275962.jpg';
const destImg = './public/projects/gift-well-soon.jpg';

fs.copyFileSync(srcImg, destImg);
console.log('gift-well-soon.jpg copied successfully');

const rubySvg = `<svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <rect width="120" height="120" rx="24" fill="#1c1b22" />
  <path d="M60 25 L88 48 L76 92 L44 92 L32 48 Z" fill="#e53935" />
  <path d="M60 25 L88 48 L60 62 L32 48 Z" fill="#ff5252" />
  <path d="M60 62 L76 92 L60 80 L44 92 Z" fill="#b71c1c" />
</svg>`;

fs.writeFileSync('./public/logos/rubyzoom.svg', rubySvg);
console.log('rubyzoom.svg created successfully');
