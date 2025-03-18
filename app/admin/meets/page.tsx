"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { meets, athletes, Meet } from "@/lib/data/meets";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

export default function AdminMeetsPage() {
  const { toast } = useToast();
  const [meetsList, setMeetsList] = useState<Meet[]>([]);
  const [newMeet, setNewMeet] = useState<Partial<Meet>>({
    id: "",
    title: "",
    date: "",
    location: "",
    description: "",
    athleteIds: []
  });
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [jsonOutput, setJsonOutput] = useState("");
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredMeets, setFilteredMeets] = useState<Meet[]>([]);
  const [editingMeet, setEditingMeet] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [meetToDelete, setMeetToDelete] = useState<string | null>(null);
  const [selectedMeets, setSelectedMeets] = useState<string[]>([]);
  const [bulkDeleteConfirm, setBulkDeleteConfirm] = useState(false);

  // Load the meets data when the component mounts
  useEffect(() => {
    setMeetsList([...meets]);
  }, []);

  // Update JSON output when meetsList changes
  useEffect(() => {
    setJsonOutput(JSON.stringify(meetsList, null, 2));
  }, [meetsList]);

  // Filter meets when search term or meets list changes
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredMeets(meetsList);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const filtered = meetsList.filter(meet => 
      meet.title.toLowerCase().includes(term) || 
      meet.location.toLowerCase().includes(term)
    );
    
    setFilteredMeets(filtered);
  }, [searchTerm, meetsList]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewMeet(prev => ({ ...prev, [name]: value }));
  };

  // Handle athlete checkbox changes
  const handleAthleteChange = (athleteId: string, checked: boolean) => {
    setNewMeet(prev => {
      const athleteIds = prev.athleteIds || [];
      if (checked) {
        return { ...prev, athleteIds: [...athleteIds, athleteId] };
      } else {
        return { ...prev, athleteIds: athleteIds.filter(id => id !== athleteId) };
      }
    });
  };

  // Handle date selection
  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      setNewMeet(prev => ({ ...prev, date: format(date, "yyyy-MM-dd") }));
    }
  };

  // Handle form submission to add a new meet
  const handleAddMeet = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate an ID if none provided
    let meetId = newMeet.id;
    if (!meetId) {
      meetId = newMeet.title?.toLowerCase().replace(/[^a-z0-9]+/g, "-") || `meet-${Date.now()}`;
    }
    
    // Create the new meet object
    const meetToAdd: Meet = {
      id: meetId,
      title: newMeet.title || "",
      date: newMeet.date || "",
      location: newMeet.location || "",
      description: newMeet.description || "",
      athleteIds: newMeet.athleteIds || []
    };
    
    if (isEditing) {
      // Update existing meet
      setMeetsList(prev => prev.map(meet => 
        meet.id === editingMeet ? meetToAdd : meet
      ));
      setIsEditing(false);
      setEditingMeet(null);
      
      // Show success toast
      toast({
        title: "Meet Updated",
        description: `"${meetToAdd.title}" has been updated successfully.`,
      });
    } else {
      // Add new meet
      setMeetsList(prev => [...prev, meetToAdd]);
      
      // Show success toast
      toast({
        title: "Meet Added",
        description: `"${meetToAdd.title}" has been added successfully.`,
      });
    }
    
    // Reset the form
    setNewMeet({
      id: "",
      title: "",
      date: "",
      location: "",
      description: "",
      athleteIds: []
    });
    setSelectedDate(undefined);
  };

  // Handle meet deletion
  const handleDeleteMeet = (id: string) => {
    setMeetToDelete(id);
  };

  // Confirm meet deletion
  const confirmDeleteMeet = () => {
    if (meetToDelete) {
      // Find the meet to get its title for the toast message
      const meetTitle = meetsList.find(meet => meet.id === meetToDelete)?.title || "Meet";
      
      // Delete the meet
      setMeetsList(prev => prev.filter(meet => meet.id !== meetToDelete));
      setMeetToDelete(null);
      
      // Show success toast
      toast({
        title: "Meet Deleted",
        description: `"${meetTitle}" has been deleted successfully.`,
        variant: "destructive",
      });
    }
  };

  // Cancel meet deletion
  const cancelDeleteMeet = () => {
    setMeetToDelete(null);
  };

  // Handle editing a meet
  const handleEditMeet = (meet: Meet) => {
    setNewMeet({
      id: meet.id,
      title: meet.title,
      date: meet.date,
      location: meet.location,
      description: meet.description,
      athleteIds: [...meet.athleteIds]
    });
    setSelectedDate(meet.date ? new Date(meet.date) : undefined);
    setEditingMeet(meet.id);
    setIsEditing(true);
    
    // Scroll to the form
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle duplicating a meet
  const handleDuplicateMeet = (meet: Meet) => {
    // Create a new ID by appending "-copy" to the original ID
    const newId = `${meet.id}-copy-${Date.now().toString().slice(-4)}`;
    
    // Create a duplicate meet with the new ID
    const duplicatedMeet: Meet = {
      ...meet,
      id: newId,
      title: `${meet.title} (Copy)`
    };
    
    // Add the duplicated meet to the list
    setMeetsList(prev => [...prev, duplicatedMeet]);
    
    // Show success toast
    toast({
      title: "Meet Duplicated",
      description: `"${meet.title}" has been duplicated successfully.`,
    });
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setNewMeet({
      id: "",
      title: "",
      date: "",
      location: "",
      description: "",
      athleteIds: []
    });
    setSelectedDate(undefined);
    setEditingMeet(null);
    setIsEditing(false);
  };

  // Handle sorting meets by date
  const handleSortByDate = () => {
    const newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    setSortDirection(newDirection);
    
    setMeetsList(prev => [...prev].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return newDirection === 'asc' ? dateA - dateB : dateB - dateA;
    }));
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Handle downloading the JSON data as a file
  const handleDownloadJSON = () => {
    // Create the full TypeScript content
    const tsContent = `import { format, isBefore, isAfter, parseISO } from 'date-fns';

// Define types for our meet data
export interface Athlete {
  id: string;
  name: string;
  events?: string[];
}

export interface Meet {
  id: string;
  date: string; // ISO format date string
  title: string;
  location: string;
  description?: string;
  athleteIds: string[]; // IDs of participating athletes
}

// Sample athlete data
export const athletes: Athlete[] = [
  {
    id: 'brandon-olden',
    name: 'Brandon Olden',
    events: ['5000m', '10000m', 'Half Marathon']
  },
  {
    id: 'jackson-siddall',
    name: 'Jackson Siddall',
    events: ['5000m', '10000m', 'Half Marathon']
  },
  {
    id: 'brett-brady',
    name: 'Brett Brady',
    events: ['5000m', '10000m', 'Half Marathon']
  },
  {
    id: 'niko-dworczi',
    name: 'Niko Dworczi',
    events: ['5000m', '10000m', 'Half Marathon']
  }
];

// Sample meet data
export const meets: Meet[] = ${jsonOutput};

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
}`;

    // Create a blob with the content
    const blob = new Blob([tsContent], { type: 'text/plain' });
    
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meets.ts';
    
    // Trigger a click on the anchor
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Handle meet selection for bulk actions
  const handleSelectMeet = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedMeets(prev => [...prev, id]);
    } else {
      setSelectedMeets(prev => prev.filter(meetId => meetId !== id));
    }
  };

  // Select all meets
  const handleSelectAll = () => {
    if (selectedMeets.length === filteredMeets.length) {
      // If all are selected, deselect all
      setSelectedMeets([]);
    } else {
      // Otherwise, select all
      setSelectedMeets(filteredMeets.map(meet => meet.id));
    }
  };

  // Handle bulk delete
  const handleBulkDelete = () => {
    if (selectedMeets.length > 0) {
      setBulkDeleteConfirm(true);
    }
  };

  // Confirm bulk delete
  const confirmBulkDelete = () => {
    if (selectedMeets.length > 0) {
      // Delete all selected meets
      setMeetsList(prev => prev.filter(meet => !selectedMeets.includes(meet.id)));
      
      // Show success toast
      toast({
        title: "Meets Deleted",
        description: `${selectedMeets.length} meets have been deleted successfully.`,
        variant: "destructive",
      });
      
      // Reset selection
      setSelectedMeets([]);
      setBulkDeleteConfirm(false);
    }
  };

  // Cancel bulk delete
  const cancelBulkDelete = () => {
    setBulkDeleteConfirm(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Manage Meets</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Add New Meet Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">{isEditing ? 'Edit Meet' : 'Add New Meet'}</h2>
          <form onSubmit={handleAddMeet} className="space-y-4">
            <div>
              <Label htmlFor="title">Meet Title</Label>
              <Input 
                id="title" 
                name="title" 
                value={newMeet.title} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            
            <div>
              <Label htmlFor="id">ID {isEditing ? '' : '(optional, will be generated)'}</Label>
              <Input 
                id="id" 
                name="id" 
                value={newMeet.id} 
                onChange={handleInputChange}
                disabled={isEditing}
              />
            </div>
            
            <div>
              <Label>Date</Label>
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={handleDateSelect}
                className="border rounded-md p-2 mt-2"
              />
              {newMeet.date && (
                <p className="text-sm mt-1">Selected: {newMeet.date}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location" 
                name="location" 
                value={newMeet.location} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                name="description" 
                value={newMeet.description} 
                onChange={handleInputChange} 
              />
            </div>
            
            <div>
              <Label>Athletes</Label>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {athletes.map(athlete => (
                  <div key={athlete.id} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`athlete-${athlete.id}`}
                      checked={(newMeet.athleteIds || []).includes(athlete.id)}
                      onCheckedChange={(checked) => 
                        handleAthleteChange(athlete.id, checked as boolean)
                      }
                    />
                    <Label htmlFor={`athlete-${athlete.id}`} className="text-sm">
                      {athlete.name}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                {isEditing ? 'Update Meet' : 'Add Meet'}
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
        
        {/* Current Meets List */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Current Meets</h2>
            <Button 
              onClick={handleSortByDate} 
              variant="outline" 
              size="sm"
              className="flex items-center gap-1"
            >
              Sort by Date {sortDirection === 'asc' ? '↑' : '↓'}
            </Button>
          </div>
          
          <div className="mb-4">
            <Input
              placeholder="Search meets by title or location..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full"
            />
          </div>
          
          {filteredMeets.length > 0 && (
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <Checkbox 
                  id="select-all"
                  checked={selectedMeets.length === filteredMeets.length && filteredMeets.length > 0}
                  onCheckedChange={handleSelectAll}
                />
                <Label htmlFor="select-all" className="text-sm">
                  Select All
                </Label>
              </div>
              
              {selectedMeets.length > 0 && (
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={handleBulkDelete}
                >
                  Delete Selected ({selectedMeets.length})
                </Button>
              )}
            </div>
          )}
          
          <div className="space-y-4 max-h-96 overflow-y-auto p-4 bg-white rounded-lg shadow-md">
            {filteredMeets.length === 0 ? (
              <p className="text-center text-gray-500 py-4">No meets found matching your search.</p>
            ) : (
              filteredMeets.map(meet => (
                <div key={meet.id} className="border p-4 rounded-md relative">
                  <div className="absolute top-2 right-2 flex gap-1">
                    <button 
                      onClick={() => handleEditMeet(meet)}
                      className="text-blue-500 hover:text-blue-700"
                      title="Edit meet"
                    >
                      ✎
                    </button>
                    <button 
                      onClick={() => handleDuplicateMeet(meet)}
                      className="text-green-500 hover:text-green-700"
                      title="Duplicate meet"
                    >
                      ⧉
                    </button>
                    <button 
                      onClick={() => handleDeleteMeet(meet.id)}
                      className="text-red-500 hover:text-red-700"
                      title="Delete meet"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Checkbox 
                      id={`select-${meet.id}`}
                      checked={selectedMeets.includes(meet.id)}
                      onCheckedChange={(checked) => handleSelectMeet(meet.id, checked as boolean)}
                    />
                    <h3 className="font-bold">{meet.title}</h3>
                  </div>
                  <p className="text-sm">{meet.date}</p>
                  <p className="text-sm text-gray-600">{meet.location}</p>
                  {meet.athleteIds.length > 0 && (
                    <div className="mt-2">
                      <p className="text-xs font-medium">Athletes:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {meet.athleteIds.map(id => (
                          <span 
                            key={id} 
                            className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                          >
                            {athletes.find(a => a.id === id)?.name || id}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
          
          {/* JSON Output */}
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">JSON Output</h2>
            <p className="text-sm mb-2">Copy this JSON to update your data file:</p>
            <div className="border bg-gray-100 p-4 rounded-md">
              <pre className="text-xs overflow-x-auto max-h-96">
                {jsonOutput}
              </pre>
            </div>
            <Button 
              onClick={handleDownloadJSON} 
              className="mt-4 w-full"
              variant="secondary"
            >
              Download as meets.ts File
            </Button>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      {meetToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p className="mb-6">
              Are you sure you want to delete this meet? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                onClick={cancelDeleteMeet}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={confirmDeleteMeet}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Bulk Delete Confirmation Dialog */}
      {bulkDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirm Bulk Deletion</h3>
            <p className="mb-6">
              Are you sure you want to delete {selectedMeets.length} meets? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-2">
              <Button 
                variant="outline" 
                onClick={cancelBulkDelete}
              >
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={confirmBulkDelete}
              >
                Delete All
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Toast notifications */}
      <Toaster />
    </div>
  );
} 