// scripts/download-og-image.js
const fs = require('fs');
const https = require('https');
const path = require('path');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGE_URL = 'https://github.com/jamesweb83/recipe-calorie-calculator/blob/main/%ED%99%94%EB%A9%B4%20%EC%BA%A1%EC%B2%98%202025-03-03%20113018.png?raw=true';
const IMAGE_PATH = path.join(PUBLIC_DIR, 'og-image.jpg');

// Make sure public dir exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Download the file
console.log(`Downloading Open Graph image from: ${IMAGE_URL}`);
https.get(IMAGE_URL, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`);
    return;
  }

  const fileStream = fs.createWriteStream(IMAGE_PATH);
  response.pipe(fileStream);

  fileStream.on('finish', () => {
    fileStream.close();
    console.log(`Downloaded Open Graph image to: ${IMAGE_PATH}`);
  });
}).on('error', (err) => {
  console.error(`Error downloading image: ${err.message}`);
});