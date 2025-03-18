import Image from 'next/image';
import { useState, useEffect } from 'react';
import { MEET_IMAGES, ATHLETE_IMAGES } from '@/lib/utils/images';

// This is a test page to verify all images are loading correctly
export default function ImageTestPage() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  useEffect(() => {
    // Initialize all images as not loaded
    const initialLoadState: Record<string, boolean> = {};
    
    // Process meet images
    Object.entries(MEET_IMAGES).forEach(([id, path]) => {
      initialLoadState[`meet_${id}`] = false;
    });
    
    // Process athlete images
    Object.entries(ATHLETE_IMAGES).forEach(([id, path]) => {
      initialLoadState[`athlete_${id}`] = false;
    });
    
    setLoadedImages(initialLoadState);
  }, []);
  
  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({
      ...prev,
      [id]: true
    }));
  };
  
  const handleImageError = (id: string, path: string) => {
    setErrors(prev => ({
      ...prev,
      [id]: `Failed to load image: ${path}`
    }));
    
    setLoadedImages(prev => ({
      ...prev,
      [id]: false
    }));
  };
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Image Test Page</h1>
      
      {Object.keys(errors).length > 0 && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-md">
          <h2 className="text-xl font-semibold text-red-700 mb-4">Image Loading Errors</h2>
          <ul className="list-disc pl-6">
            {Object.entries(errors).map(([id, error]) => (
              <li key={id} className="text-red-600">{error}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Meet Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(MEET_IMAGES).map(([id, path]) => (
            <div key={id} className="border rounded-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={path}
                  alt={`Meet: ${id}`}
                  fill
                  unoptimized
                  className="object-cover"
                  onLoad={() => handleImageLoad(`meet_${id}`)}
                  onError={() => handleImageError(`meet_${id}`, path)}
                />
              </div>
              <div className="p-2">
                <p className="font-medium">{id}</p>
                <p className="text-sm text-gray-500 truncate">{path}</p>
                <p className={`text-sm ${loadedImages[`meet_${id}`] ? 'text-green-600' : 'text-red-600'}`}>
                  {loadedImages[`meet_${id}`] ? 'Loaded ✓' : 'Failed to load ✗'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4">Athlete Images</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(ATHLETE_IMAGES).map(([id, path]) => (
            <div key={id} className="border rounded-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={path}
                  alt={`Athlete: ${id}`}
                  fill
                  unoptimized
                  className="object-cover"
                  onLoad={() => handleImageLoad(`athlete_${id}`)}
                  onError={() => handleImageError(`athlete_${id}`, path)}
                />
              </div>
              <div className="p-2">
                <p className="font-medium">{id}</p>
                <p className="text-sm text-gray-500 truncate">{path}</p>
                <p className={`text-sm ${loadedImages[`athlete_${id}`] ? 'text-green-600' : 'text-red-600'}`}>
                  {loadedImages[`athlete_${id}`] ? 'Loaded ✓' : 'Failed to load ✗'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 