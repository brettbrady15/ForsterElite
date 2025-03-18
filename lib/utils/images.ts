/**
 * Image utilities for consistent image handling across the application
 */

// Default placeholder for missing images
export const DEFAULT_PLACEHOLDER = "/placeholder.svg";

// Define types for image mappings
interface MeetImageMapping {
  [key: string]: string;
}

interface AthleteImageMapping {
  [key: string]: string;
}

// Meet images mapping - this ensures we have consistent references
export const MEET_IMAGES: MeetImageMapping = {
  'portland-track-festival': '/meets/portlandTC.jpg',
  'PU-LC': '/meets/princeton.png',
  'MCTC': '/meets/MCTC.png',
  'lee-university-last-chance': '/meets/leeU.png',
  'cow-harbor-10k': '/meets/cowharbor.jpg',
  'marine-corps-marathon': '/meets/MCM.png',
  'indy-monumnet': '/meets/indymonumental.jpg',
};

// Athlete images mapping
export const ATHLETE_IMAGES: AthleteImageMapping = {
  'brandon-olden': '/athletes/Olden_Brandon.png',
  'jackson-siddall': '/athletes/Siddall_Jackson.jpg',
  'brett-brady': '/athletes/Brady_brett.png',
  'niko-dworczi': '/athletes/Niko.png',
};

/**
 * Get meet image URL with fallback
 * @param meetId The ID of the meet
 * @param placeholder Optional custom placeholder
 * @returns The image URL or a placeholder
 */
export function getMeetImageUrl(meetId: string, placeholder?: string): string {
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
 * @param athleteId The ID of the athlete
 * @param name The name of the athlete (for placeholder)
 * @returns The image URL or a placeholder
 */
export function getAthleteImageUrl(athleteId: string, name?: string): string {
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
 * @param text The text to display
 * @param width Optional width
 * @param height Optional height
 * @returns Placeholder image URL
 */
export function createPlaceholder(text: string, width: number = 300, height: number = 300): string {
  return `${DEFAULT_PLACEHOLDER}?width=${width}&height=${height}&text=${encodeURIComponent(text)}`;
} 