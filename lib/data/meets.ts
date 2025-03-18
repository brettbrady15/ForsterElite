import { format, isBefore, isAfter, parseISO } from 'date-fns';

// Define types for our meet data
export interface Athlete {
  id: string;
  name: string;
  events?: string[];
  birthdate?: string;
  country?: string;
  countryCode?: string;
  bio?: string;
  achievements?: string[];
  personalBests?: Record<string, string>;
  photoUrl?: string;
  socialLinks?: {
    instagram?: string;
    twitter?: string;
    strava?: string;
  };
  location?: string;
  height?: string;
  weight?: string;
}

export interface Meet {
  id: string;
  date: string; // ISO format date string
  title: string;
  location: string;
  description?: string;
  imageUrl?: string; // Add imageUrl property
  athleteIds: string[]; // IDs of participating athletes
  websiteUrl?: string;
}

// Sample athlete data with expanded fields
export const athletes: Athlete[] = [
  {
    id: 'brandon-olden',
    name: 'Brandon Olden',
    events: ['5000m', '10000m', 'Half Marathon'],
    countryCode: 'us',
    country: 'United States',
    location: 'EKU - Richmond, KY',
    photoUrl: '/athletes/Olden_Brandon.png',
    bio: "Brandon, currently a coach at Eastern Kentucky University and a graduate of Tennessee and Siena, is an elite competitor with two NCAA Division I East Regional appearances in track. He holds personal bests of 13:42 for the 5k, 7:56 for the 3k, and 28:30 for the 10k. Brandon's combination of coaching expertise and competitive success makes him a key asset to the program. He is based in Richmond, KY.",
    personalBests: {
      "3k": "7:56",
      "5k": "13:42",
      "10k": "28:30"
    }
  },
  {
    id: 'jackson-siddall',
    name: 'Jackson Siddall',
    events: ['5000m', '10000m', 'Half Marathon'],
    countryCode: 'us',
    country: 'United States',
    location: 'Colorado Springs, CO',
    photoUrl: '/athletes/Siddall_Jackson.jpg',
    bio: "An accomplished graduate of Eastern Kentucky University, Jackson placed 8th at the USATF 10k Road Championships and 24th at the USATF Half Marathon Championships. His personal bests include 7:59 for the 3k, 29:03 for the 10k, and 63:23 for the half marathon. Jackson balances his athletic pursuits with a full-time career as a sixth-grade teacher and a part-time position at a local running store. He resides and trains in Colorado Springs, Colorado.",
    personalBests: {
      "3k": "7:59",
      "10k": "29:03",
      "Half Marathon": "63:23"
    }
  },
  {
    id: 'brett-brady',
    name: 'Brett Brady',
    events: ['5000m', '10000m', 'Half Marathon', '3k Steeplechase'],
    countryCode: 'us',
    country: 'United States',
    location: 'Pensacola, FL',
    photoUrl: '/athletes/Brady_brett.png',
    bio: "A standout athlete with an impressive resume, Brett qualified for the CISM Winter World Military Games and spent four years at the U.S. Naval Academy before completing a graduate year at the University of Tennessee. He boasts personal bests of 8:52 in the 3k steeplechase, 23:55 in the 8k cross country, and 45:51 in the 15k. His achievements include winning a prestigious Patriot League title in the steeplechase, showcasing his versatility and competitive edge across multiple distances. As he continues his elite running career, he continues his service as an officer in the Navy.",
    personalBests: {
      "3k Steeplechase": "8:52",
      "8k XC": "23:55",
      "15k": "45:51"
    }
  },
  {
    id: 'niko-dworczi',
    name: 'Niko Dworczi',
    events: ['5000m', '10000m', 'Half Marathon'],
    countryCode: 'pl',
    country: 'Poland',
    location: 'EKU - Richmond, KY',
    photoUrl: '/athletes/Niko.png',
    bio: "Niko, also coaching at Eastern Kentucky University, has competed at the highest collegiate level with an appearance at the NCAA Division I Nationals in the 10k. His personal bests include 7:59 for the 3k, 13:51 for the 5k, 28:48 for the 10k, and 64:03 for the half marathon. Niko's experience at the national level and his deep understanding of the sport make him a valuable member of the coaching staff. He is based in Richmond, KY.",
    personalBests: {
      "3k": "7:59",
      "5k": "13:51",
      "10k": "28:48",
      "Half Marathon": "64:03"
    }
  }
];

// Sample meet data
export const meets: Meet[] = [
  {
    id: 'portland-track-festival',
    date: '2025-06-14',
    title: 'Portland Track Festival',
    location: 'Portland, Oregon',
    description: 'Premier track festival hosted in Portland, Oregon.',
    imageUrl: '/meets/portlandTC.jpg',
    athleteIds: ['brandon-olden', 'jackson-siddall', 'brett-brady','niko-dworczi'],
    websiteUrl: 'https://www.portlandtrackfestival.com'
  },
  {
    id: 'PU-LC',
    date: '2025-05-17',
    title: 'Princeton Last Chance',
    location: 'Princeton, New Jersey',
    description: 'Last Chance Track Meet.',
    imageUrl: '/meets/princeton.png',
    athleteIds: ['brett-brady', 'niko-dworczi'],
    websiteUrl: 'https://www.princetontrack.com'
  },
  {
    id: 'MCTC',
    date: '2025-05-30',
    title: 'Music City Track Festival',
    location: 'Nashville, Tennessee',
    description: 'Premier track and field event in Nashville.',
    imageUrl: '/meets/MCTC.png',
    athleteIds: ['brandon-olden', 'jackson-siddall', 'brett-brady'],
    websiteUrl: 'https://www.musiccitytrackfestival.com'
  },
  {
    id: 'lee-university-last-chance',
    date: '2025-05-10',
    title: 'Lee University Last Chance',
    location: 'Cleveland, Tennessee',
    description: 'Last chance qualifier meet for championships.',
    imageUrl: '/meets/leeU.png',
    athleteIds: ['brandon-olden', 'brett-brady', 'niko-dworczi'],
    websiteUrl: 'https://www.leeuniversity.edu'
  },
  
  {
    id: 'cow-harbor-10k',
    date: '2025-08-15',
    title: 'Cow Harbor 10K',
    location: 'Northport, New York',
    description: 'Elite road race through the scenic hills of Northport.',
    imageUrl: '/meets/cowharbor2.jpg',
    athleteIds: ['jackson-siddall', 'brandon-olden', 'brett-brady', 'niko-dworczi'],
    websiteUrl: 'https://www.cowharbor10k.com'
  },
  {
    id: 'marine-corps-marathon',
    date: '2025-10-26',
    title: 'Marine Corps Marathon',
    location: 'Washington, D.C.',
    description: 'One of the largest marathons in the US.',
    imageUrl: '/meets/MCM.png',
    athleteIds: ['brett-brady'],
    websiteUrl: 'https://www.marinemarathon.com'
  },
  {
    id: 'indy-monumnet',
    date: '2025-10-08',
    title: 'Indianapolis Monumental Marathon',
    location: 'Indianapolis, Indiana',
    description: 'Elite half=marathon focused on fast times.',
    imageUrl: '/meets/indymonumental.jpg',
    athleteIds: ['brandon-olden', 'jackson-siddall', 'brett-brady','niko-dworczi'],
    websiteUrl: 'https://www.indymonumental.com'
  }
];

// Utility functions

// Get athlete by ID
export function getAthleteById(id: string): Athlete | undefined {
  return athletes.find(athlete => athlete.id === id);
}

// Get athletes for a specific meet
export function getAthletesForMeet(meetId: string): Athlete[] {
  const meet = meets.find(m => m.id === meetId);
  if (!meet) return [];
  
  return meet.athleteIds.map(id => {
    const athlete = getAthleteById(id);
    return athlete!;
  }).filter(Boolean);
}

// Get upcoming meets (meets with dates in the future)
export function getUpcomingMeets(): Meet[] {
  const today = new Date();
  return meets
    .filter(meet => isAfter(parseISO(meet.date), today))
    .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime());
}

// Get past meets
export function getPastMeets(): Meet[] {
  const today = new Date();
  return meets
    .filter(meet => isBefore(parseISO(meet.date), today))
    .sort((a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime());
}

// Get meets for a specific athlete
export function getMeetsForAthlete(athleteId: string): Meet[] {
  return meets
    .filter(meet => meet.athleteIds.includes(athleteId))
    .sort((a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime());
}

// Format a date for display
export function formatMeetDate(dateString: string): string {
  return format(parseISO(dateString), 'MMMM d, yyyy');
}

export function getMeetById(id: string): Meet | undefined {
  return meets.find(meet => meet.id === id);
} 