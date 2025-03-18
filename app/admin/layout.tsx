"use client";

import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  // Handle logout
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      // Redirect to login page
      router.push("/admin/login");
      router.refresh();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Don't show admin header on login page
  if (pathname === '/admin/login') {
    return children;
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="bg-primary text-white py-2 px-4 fixed top-16 left-0 right-0 z-10 flex justify-between items-center">
        <h2 className="font-semibold">Admin Dashboard</h2>
        <div className="flex gap-3 items-center">
          <Button 
            variant="link"
            className="text-white p-0 h-auto"
            onClick={() => router.push('/admin')}
          >
            Dashboard
          </Button>
          <Button
            onClick={handleLogout}
            variant="secondary"
            size="sm"
            className="bg-primary-foreground/20"
          >
            Logout
          </Button>
        </div>
      </div>
      <div className="pt-10">
        {children}
      </div>
    </div>
  );
} 