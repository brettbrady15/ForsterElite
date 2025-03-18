"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminPage() {
  const router = useRouter();

  return (
    <div className="container mx-auto py-8 pt-24">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-4">Manage Meets</h2>
          <p className="text-gray-600 mb-4">
            Add, edit, delete, and manage all race meets and competitions.
          </p>
          <Button asChild>
            <Link href="/admin/meets">Go to Meets</Link>
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-bold mb-4">Manage Athletes</h2>
          <p className="text-gray-600 mb-4">
            Manage athlete profiles, performance data, and biographical information.
          </p>
          <Button asChild>
            <Link href="/admin/athletes">Go to Athletes</Link>
          </Button>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow opacity-60">
          <h2 className="text-xl font-bold mb-4">Website Settings</h2>
          <p className="text-gray-600 mb-4">
            Configure website appearance, contact information, and general settings.
          </p>
          <Button disabled>Coming Soon</Button>
        </div>
      </div>
    </div>
  );
} 