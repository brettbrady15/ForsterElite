"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import Image from "next/image";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { X, Edit, Plus, Upload, CalendarIcon, Flag } from "lucide-react";
import "flag-icons/css/flag-icons.min.css";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { athletes } from "@/lib/data/meets";

// Country options for the dropdown
const COUNTRIES = [
  { code: "us", name: "United States" },
  { code: "ca", name: "Canada" },
  { code: "gb", name: "United Kingdom" },
  { code: "de", name: "Germany" },
  { code: "fr", name: "France" },
  { code: "es", name: "Spain" },
  { code: "it", name: "Italy" },
  { code: "jp", name: "Japan" },
  { code: "cn", name: "China" },
  { code: "au", name: "Australia" },
  { code: "nz", name: "New Zealand" },
  { code: "ke", name: "Kenya" },
  { code: "et", name: "Ethiopia" },
  { code: "za", name: "South Africa" },
  { code: "pl", name: "Poland" },
  { code: "nl", name: "Netherlands" },
  { code: "se", name: "Sweden" },
  { code: "no", name: "Norway" },
  { code: "fi", name: "Finland" },
  { code: "dk", name: "Denmark" },
  { code: "mx", name: "Mexico" },
  { code: "br", name: "Brazil" },
  { code: "ar", name: "Argentina" },
];

// Define the athlete type for our state management
interface Athlete {
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

export default function ManageAthletesPage() {
  const { toast } = useToast();
  const [athletesList, setAthletesList] = useState<Athlete[]>([]);
  const [newAthlete, setNewAthlete] = useState<Partial<Athlete>>({
    id: "",
    name: "",
    events: [],
    birthdate: "",
    country: "",
    countryCode: "",
    bio: "",
    achievements: [],
    personalBests: {},
    socialLinks: {
      instagram: "",
      twitter: "",
      strava: "",
    },
    location: "",
  });
  
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAthletes, setFilteredAthletes] = useState<Athlete[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingAthleteId, setEditingAthleteId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [newEvent, setNewEvent] = useState("");
  const [newAchievement, setNewAchievement] = useState("");
  const [newPersonalBestEvent, setNewPersonalBestEvent] = useState("");
  const [newPersonalBestTime, setNewPersonalBestTime] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showConfirmDelete, setShowConfirmDelete] = useState<string | null>(null);
  const [jsonOutput, setJsonOutput] = useState("");

  // Load the athletes data when the component mounts
  useEffect(() => {
    setAthletesList([...athletes]);
  }, []);

  // Update JSON output when athletesList changes
  useEffect(() => {
    setJsonOutput(JSON.stringify(athletesList, null, 2));
  }, [athletesList]);

  // Filter athletes when search term or athletes list changes
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredAthletes(athletesList);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = athletesList.filter(athlete => 
      athlete.name.toLowerCase().includes(term) || 
      (athlete.location && athlete.location.toLowerCase().includes(term)) ||
      (athlete.country && athlete.country.toLowerCase().includes(term))
    );
    
    setFilteredAthletes(filtered);
  }, [searchTerm, athletesList]);

  // Handle basic input changes (text inputs)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewAthlete(prev => ({ ...prev, [name]: value }));
  };

  // Handle social media input changes
  const handleSocialChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewAthlete(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value,
      }
    }));
  };

  // Handle country selection
  const handleCountryChange = (value: string) => {
    const country = COUNTRIES.find(c => c.code === value);
    if (country) {
      setNewAthlete(prev => ({
        ...prev,
        country: country.name,
        countryCode: country.code
      }));
    }
  };

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setNewAthlete(prev => ({ ...prev, birthdate: format(date, "yyyy-MM-dd") }));
    }
  };

  // Handle image selection
  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      
      // Create a preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add a new event to the athlete's events
  const handleAddEvent = () => {
    if (!newEvent.trim()) return;
    
    setNewAthlete(prev => ({
      ...prev,
      events: [...(prev.events || []), newEvent]
    }));
    setNewEvent("");
  };

  // Remove an event from the athlete's events
  const handleRemoveEvent = (event: string) => {
    setNewAthlete(prev => ({
      ...prev,
      events: prev.events?.filter(e => e !== event)
    }));
  };

  // Add a new achievement
  const handleAddAchievement = () => {
    if (!newAchievement.trim()) return;
    
    setNewAthlete(prev => ({
      ...prev,
      achievements: [...(prev.achievements || []), newAchievement]
    }));
    setNewAchievement("");
  };

  // Remove an achievement
  const handleRemoveAchievement = (achievement: string) => {
    setNewAthlete(prev => ({
      ...prev,
      achievements: prev.achievements?.filter(a => a !== achievement)
    }));
  };

  // Add a new personal best
  const handleAddPersonalBest = () => {
    if (!newPersonalBestEvent.trim() || !newPersonalBestTime.trim()) return;
    
    setNewAthlete(prev => ({
      ...prev,
      personalBests: {
        ...(prev.personalBests || {}),
        [newPersonalBestEvent]: newPersonalBestTime
      }
    }));
    
    setNewPersonalBestEvent("");
    setNewPersonalBestTime("");
  };

  // Remove a personal best
  const handleRemovePersonalBest = (event: string) => {
    if (!newAthlete.personalBests) return;
    
    const updatedPBs = { ...newAthlete.personalBests };
    delete updatedPBs[event];
    
    setNewAthlete(prev => ({
      ...prev,
      personalBests: updatedPBs
    }));
  };

  // Initialize editing an athlete
  const handleEditAthlete = (athlete: Athlete) => {
    setNewAthlete({
      ...athlete,
      // Ensure we have the right structure for nested objects
      socialLinks: athlete.socialLinks || {
        instagram: "",
        twitter: "",
        strava: "",
      }
    });
    
    setSelectedDate(athlete.birthdate ? new Date(athlete.birthdate) : undefined);
    setImagePreview(athlete.photoUrl || null);
    setEditingAthleteId(athlete.id);
    setIsEditing(true);
    
    // Scroll to the form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setNewAthlete({
      id: "",
      name: "",
      events: [],
      birthdate: "",
      country: "",
      countryCode: "",
      bio: "",
      achievements: [],
      personalBests: {},
      socialLinks: {
        instagram: "",
        twitter: "",
        strava: "",
      },
      location: "",
    });
    
    setSelectedDate(undefined);
    setImagePreview(null);
    setImageFile(null);
    setEditingAthleteId(null);
    setIsEditing(false);
  };

  // Delete an athlete
  const handleDeleteAthlete = (id: string) => {
    setAthletesList(prev => prev.filter(athlete => athlete.id !== id));
    setShowConfirmDelete(null);
    
    toast({
      title: "Athlete Deleted",
      description: "Athlete has been deleted successfully",
      variant: "destructive",
    });
  };

  // Submit form to add or update an athlete
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!newAthlete.name) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in the athlete's name",
        variant: "destructive",
      });
      return;
    }
    
    // Generate ID if not provided or editing
    let athleteId = newAthlete.id;
    if (!athleteId && !isEditing) {
      athleteId = newAthlete.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    }
    
    // Create the athlete object
    const athleteToSave: Athlete = {
      id: athleteId || "",
      name: newAthlete.name || "",
      events: newAthlete.events || [],
      birthdate: newAthlete.birthdate,
      country: newAthlete.country,
      countryCode: newAthlete.countryCode,
      bio: newAthlete.bio,
      achievements: newAthlete.achievements || [],
      personalBests: newAthlete.personalBests || {},
      photoUrl: imagePreview || newAthlete.photoUrl,
      socialLinks: newAthlete.socialLinks,
      location: newAthlete.location,
      height: newAthlete.height,
      weight: newAthlete.weight,
    };
    
    if (isEditing) {
      // Update existing athlete
      setAthletesList(prev => 
        prev.map(athlete => athlete.id === editingAthleteId ? athleteToSave : athlete)
      );
      
      toast({
        title: "Athlete Updated",
        description: `${athleteToSave.name} has been updated successfully`,
      });
    } else {
      // Add new athlete
      setAthletesList(prev => [...prev, athleteToSave]);
      
      toast({
        title: "Athlete Added",
        description: `${athleteToSave.name} has been added successfully`,
      });
    }
    
    // Reset form
    handleCancelEdit();
  };

  // Download athlete data as a TypeScript file
  const handleDownloadData = () => {
    const tsContent = `// Generated from admin interface on ${new Date().toLocaleString()}
import { format, isBefore, isAfter, parseISO } from 'date-fns';

// Define types for athlete data
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

// Athlete data
export const athletes: Athlete[] = ${jsonOutput};
`;

    // Create a blob with the content
    const blob = new Blob([tsContent], { type: 'text/plain' });
    
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'athletes.ts';
    
    // Trigger a click on the anchor
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Data Downloaded",
      description: "Athletes data file has been downloaded",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Manage Athletes</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add/Edit Athlete Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            {isEditing ? 'Edit Athlete' : 'Add New Athlete'}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Basic Information</h3>
              
              <div>
                <Label htmlFor="name">Name*</Label>
                <Input
                  id="name"
                  name="name"
                  value={newAthlete.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="id">ID {isEditing ? '' : '(generated if empty)'}</Label>
                <Input
                  id="id"
                  name="id"
                  value={newAthlete.id}
                  onChange={handleInputChange}
                  placeholder="unique-id"
                  disabled={isEditing}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Birthdate</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !selectedDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, "PPP") : "Select Date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleDateSelect}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div>
                  <Label>Country</Label>
                  <Select
                    value={newAthlete.countryCode}
                    onValueChange={handleCountryChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Country">
                        {newAthlete.countryCode && (
                          <div className="flex items-center">
                            <span className={`fi fi-${newAthlete.countryCode} mr-2`}></span>
                            {newAthlete.country}
                          </div>
                        )}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {COUNTRIES.map((country) => (
                        <SelectItem key={country.code} value={country.code}>
                          <div className="flex items-center">
                            <span className={`fi fi-${country.code} mr-2`}></span>
                            {country.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="location">Training Location</Label>
                <Input
                  id="location"
                  name="location"
                  value={newAthlete.location || ''}
                  onChange={handleInputChange}
                  placeholder="City, State/Province"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="height">Height</Label>
                  <Input
                    id="height"
                    name="height"
                    value={newAthlete.height || ''}
                    onChange={handleInputChange}
                    placeholder="e.g., 6'2&quot; / 188 cm"
                  />
                </div>
                
                <div>
                  <Label htmlFor="weight">Weight</Label>
                  <Input
                    id="weight"
                    name="weight"
                    value={newAthlete.weight || ''}
                    onChange={handleInputChange}
                    placeholder="e.g., 160 lbs / 73 kg"
                  />
                </div>
              </div>
            </div>
            
            {/* Events */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Events</h3>
              
              <div className="flex gap-2">
                <Input
                  value={newEvent}
                  onChange={(e) => setNewEvent(e.target.value)}
                  placeholder="Add an event (e.g., 5000m)"
                />
                <Button type="button" onClick={handleAddEvent} variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {newAthlete.events?.map((event) => (
                  <div key={event} className="bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
                    <span>{event}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveEvent(event)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Personal Bests */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Personal Bests</h3>
              
              <div className="flex gap-2">
                <Input
                  value={newPersonalBestEvent}
                  onChange={(e) => setNewPersonalBestEvent(e.target.value)}
                  placeholder="Event (e.g., 5000m)"
                  className="flex-1"
                />
                <Input
                  value={newPersonalBestTime}
                  onChange={(e) => setNewPersonalBestTime(e.target.value)}
                  placeholder="Time (e.g., 13:45.21)"
                  className="flex-1"
                />
                <Button type="button" onClick={handleAddPersonalBest} variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                {newAthlete.personalBests && Object.entries(newAthlete.personalBests).map(([event, time]) => (
                  <div key={event} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <div>
                      <span className="font-medium">{event}:</span> {time}
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemovePersonalBest(event)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Achievements</h3>
              
              <div className="flex gap-2">
                <Input
                  value={newAchievement}
                  onChange={(e) => setNewAchievement(e.target.value)}
                  placeholder="Add an achievement"
                />
                <Button type="button" onClick={handleAddAchievement} variant="outline">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-2">
                {newAthlete.achievements?.map((achievement) => (
                  <div key={achievement} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span>{achievement}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveAchievement(achievement)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Bio */}
            <div>
              <Label htmlFor="bio">Biography</Label>
              <Textarea
                id="bio"
                name="bio"
                value={newAthlete.bio || ''}
                onChange={handleInputChange}
                placeholder="Write a short biography"
                rows={5}
              />
            </div>
            
            {/* Social Media Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Social Media</h3>
              
              <div>
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  name="instagram"
                  value={newAthlete.socialLinks?.instagram || ''}
                  onChange={handleSocialChange}
                  placeholder="@username"
                />
              </div>
              
              <div>
                <Label htmlFor="twitter">Twitter/X</Label>
                <Input
                  id="twitter"
                  name="twitter"
                  value={newAthlete.socialLinks?.twitter || ''}
                  onChange={handleSocialChange}
                  placeholder="@username"
                />
              </div>
              
              <div>
                <Label htmlFor="strava">Strava</Label>
                <Input
                  id="strava"
                  name="strava"
                  value={newAthlete.socialLinks?.strava || ''}
                  onChange={handleSocialChange}
                  placeholder="Profile name"
                />
              </div>
            </div>
            
            {/* Photo Upload */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold border-b pb-2">Profile Photo</h3>
              
              <div className="flex flex-col items-center">
                {imagePreview ? (
                  <div className="relative w-48 h-64 mb-4">
                    <Image 
                      src={imagePreview} 
                      alt="Preview" 
                      fill
                      className="object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setImagePreview(null);
                        setImageFile(null);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="w-48 h-64 bg-gray-100 flex flex-col items-center justify-center rounded-lg mb-4">
                    <Upload className="h-12 w-12 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">No photo selected</p>
                  </div>
                )}
                
                <div className="w-full">
                  <Label htmlFor="photo-upload" className="mb-2 block">Upload Photo</Label>
                  <Input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Recommended size: 600x800px. Maximum size: 2MB.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Form Actions */}
            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                {isEditing ? 'Update Athlete' : 'Add Athlete'}
              </Button>
              
              {isEditing && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleCancelEdit}
                  className="flex-1"
                >
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </div>
        
        {/* Athletes List & JSON Output */}
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-4">Athletes List</h2>
            
            <div className="mb-4">
              <Input
                placeholder="Search athletes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="space-y-4 max-h-[500px] overflow-y-auto bg-white p-4 rounded-lg shadow-md">
              {filteredAthletes.length === 0 ? (
                <p className="text-center text-gray-500 py-10">No athletes found.</p>
              ) : (
                filteredAthletes.map((athlete) => (
                  <div key={athlete.id} className="border rounded-lg overflow-hidden">
                    <div className="flex border-b">
                      <div className="w-20 h-20 relative flex-shrink-0">
                        {athlete.photoUrl ? (
                          <Image
                            src={athlete.photoUrl}
                            alt={athlete.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <span className="text-2xl text-gray-400">
                              {athlete.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-3 flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-bold text-lg">{athlete.name}</h3>
                          <div className="flex gap-1">
                            <button
                              onClick={() => handleEditAthlete(athlete)}
                              className="text-blue-500 hover:text-blue-700"
                              title="Edit athlete"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => setShowConfirmDelete(athlete.id)}
                              className="text-red-500 hover:text-red-700"
                              title="Delete athlete"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mt-1">
                          {athlete.countryCode && (
                            <span className="inline-flex items-center text-xs bg-gray-100 px-2 py-1 rounded-full">
                              <span className={`fi fi-${athlete.countryCode} mr-1`}></span>
                              {athlete.country}
                            </span>
                          )}
                          
                          {athlete.events?.map((event) => (
                            <span key={event} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              {event}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Confirmation modal for delete */}
                    {showConfirmDelete === athlete.id && (
                      <div className="p-3 bg-red-50 border-t">
                        <p className="text-sm text-red-700 mb-2">
                          Are you sure you want to delete this athlete? This action cannot be undone.
                        </p>
                        <div className="flex justify-end gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setShowConfirmDelete(null)}
                          >
                            Cancel
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteAthlete(athlete.id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
          
          {/* JSON Output */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Data Export</h2>
              <Button
                onClick={handleDownloadData}
                size="sm"
                variant="secondary"
              >
                Download as TypeScript
              </Button>
            </div>
            
            <div className="border bg-gray-100 p-4 rounded-md">
              <p className="text-sm mb-2">Preview of the data format:</p>
              <pre className="text-xs overflow-x-auto max-h-40">
                {jsonOutput}
              </pre>
            </div>
          </div>
        </div>
      </div>
      
      <Toaster />
    </div>
  );
} 