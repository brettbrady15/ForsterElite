/**
 * Image utilities for consistent image handling across the application
 * CommonJS version for build scripts
 */

// Default placeholder for missing images
const DEFAULT_PLACEHOLDER = "/placeholder.svg";

// Meet images mapping - this ensures we have consistent references
const MEET_IMAGES = {
  'portland-track-festival': '/meets/portlandTC.jpg',
  'PU-LC': '/meets/princeton.png',
  'MCTC': '/meets/MCTC.png',
  'lee-university-last-chance': '/meets/leeU.png',
  'cow-harbor-10k': '/meets/cowharbor.jpg',
  'marine-corps-marathon': '/meets/MCM.png',
  'indy-monumnet': '/meets/indymonumental.jpg',
};

// Athlete images mapping
const ATHLETE_IMAGES = {
  'brandon-olden': '/athletes/Olden_Brandon.png',
  'jackson-siddall': '/athletes/Siddall_Jackson.jpg',
  'brett-brady': '/athletes/Brady_brett.png',
  'niko-dworczi': '/athletes/Niko.png',
};

/**
 * Get meet image URL with fallback
 * @param {string} meetId - The ID of the meet
 * @param {string} placeholder - Optional custom placeholder
 * @returns {string} The image URL or a placeholder
 */
function getMeetImageUrl(meetId, placeholder) {
  // Use the mapping if available
  const imageUrl = MEET_IMAGES[meetId];
  
  // If no image found or image is undefined, use placeholder
  if (!imageUrl) {
    return placeholder || `${DEFAULT_PLACEHOLDER}?text=Meet`;
  }
  
  return imageUrl;
}

/**
 * Get athlete image URL with fallback
 * @param {string} athleteId - The ID of the athlete
 * @param {string} name - The name of the athlete (for placeholder)
 * @returns {string} The image URL or a placeholder
 */
function getAthleteImageUrl(athleteId, name) {
  const imageUrl = ATHLETE_IMAGES[athleteId];
  
  if (!imageUrl) {
    // Create a placeholder with the first letter of the name
    const initial = name ? name.charAt(0) : 'A';
    return `${DEFAULT_PLACEHOLDER}?text=${initial}`;
  }
  
  return imageUrl;
}

/**
 * Create a placeholder image URL
 * @param {string} text - The text to display
 * @param {number} width - Optional width
 * @param {number} height - Optional height
 * @returns {string} Placeholder image URL
 */
function createPlaceholder(text, width = 300, height = 300) {
  return `${DEFAULT_PLACEHOLDER}?width=${width}&height=${height}&text=${encodeURIComponent(text)}`;
}

module.exports = {
  DEFAULT_PLACEHOLDER,
  MEET_IMAGES,
  ATHLETE_IMAGES,
  getMeetImageUrl,
  getAthleteImageUrl,
  createPlaceholder
}; 