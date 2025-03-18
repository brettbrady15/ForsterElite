/**
 * Script to verify that all referenced images exist before build
 * Run this before building the application to ensure all images are properly available
 */

const fs = require('fs');
const path = require('path');
const { MEET_IMAGES, ATHLETE_IMAGES } = require('../lib/utils/images');

// Convert TypeScript export to CommonJS module.exports
const meetImages = {};
const athleteImages = {};

// Define the public directory
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

console.log('Verifying image files...');

// Check if the images directory exists, create it if it doesn't
const imagesDir = path.join(PUBLIC_DIR, 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('Created images directory');
}

// Create placeholder SVG for missing images
const createPlaceholderSvg = (text = 'Image') => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
    <rect width="300" height="300" fill="#f0f0f0"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" text-anchor="middle" dominant-baseline="middle" fill="#666">
      ${text}
    </text>
  </svg>`;
};

// Write placeholder.svg if it doesn't exist
const placeholderPath = path.join(PUBLIC_DIR, 'placeholder.svg');
if (!fs.existsSync(placeholderPath)) {
  fs.writeFileSync(placeholderPath, createPlaceholderSvg());
  console.log('Created placeholder SVG');
}

// Function to verify an image exists
const verifyImage = (imagePath, entityName, entityType) => {
  const fullPath = path.join(PUBLIC_DIR, imagePath);
  
  if (!fs.existsSync(fullPath)) {
    console.warn(`⚠️ Warning: ${entityType} image not found: ${imagePath} for ${entityName}`);
    
    // Create directory if it doesn't exist
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
    
    // Create a placeholder image
    fs.writeFileSync(fullPath, createPlaceholderSvg(`${entityName} (Missing)`));
    console.log(`Created placeholder for: ${imagePath}`);
    return false;
  }
  
  return true;
};

// Verify all meet images
let meetImageErrors = 0;
Object.entries(MEET_IMAGES).forEach(([meetId, imagePath]) => {
  if (!verifyImage(imagePath, meetId, 'Meet')) {
    meetImageErrors++;
  }
});

// Verify all athlete images
let athleteImageErrors = 0;
Object.entries(ATHLETE_IMAGES).forEach(([athleteId, imagePath]) => {
  if (!verifyImage(imagePath, athleteId, 'Athlete')) {
    athleteImageErrors++;
  }
});

// Report results
console.log(`
Image Verification Complete:
- ${meetImageErrors} meet image issues found and placeholders created
- ${athleteImageErrors} athlete image issues found and placeholders created
`);

// Exit with an error if any images were missing
if (meetImageErrors > 0 || athleteImageErrors > 0) {
  process.exit(1);
}

process.exit(0); 