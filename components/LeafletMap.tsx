"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Create custom pin icon outside of component
const createCustomPin = () => L.divIcon({
  className: "bg-transparent",
  html: `<svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 9 12 24 12 24s12-15 12-24c0-6.63-5.37-12-12-12zm0 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#15803d"/>
  </svg>`,
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -36]
});

export default function LeafletMap() {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (!mapRef.current) {
      const map = L.map('map').setView([39.8283, -98.5795], 4);
      
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      const locations = [
        {
          name: 'EKU - Richmond, KY',
          coords: [37.7358, -84.2946],
          athletes: 'Brandon Olden, Niko Dworczi'
        },
        {
          name: 'Pensacola, FL',
          coords: [30.4213, -87.2169],
          athletes: 'Brett Brady'
        },
        {
          name: 'Colorado Springs, CO',
          coords: [38.8339, -104.8214],
          athletes: 'Jackson Siddall'
        }
      ];

      // Create the custom pin icon
      const customPin = createCustomPin();

      // Add markers to the map
      locations.forEach(location => {
        L.marker(location.coords as L.LatLngExpression, { icon: customPin })
          .bindPopup(`
            <div class="text-sm">
              <h3 class="font-bold">${location.name}</h3>
              <p>${location.athletes}</p>
            </div>
          `)
          .addTo(map);
      });

      // Set bounds to continental US
      map.setMaxBounds([
        [24.396308, -125.000000], // Southwest coordinates
        [49.384358, -66.934570]   // Northeast coordinates
      ]);

      mapRef.current = map;
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div id="map" className="h-full w-full" />;
} 