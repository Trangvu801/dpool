// src/app/main/BottomMenu.tsx
import React, { useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for navigation
import { HomeIcon, BellIcon, MessageSquareIcon, MenuIcon } from "lucide-react";

export default function BottomMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const redirectTo = (path: string) => {
    router.push(path); // Use Next.js router for navigation
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-between items-center p-4">
      <div className="flex gap-4">
        <button onClick={() => redirectTo("/home")} aria-label="Home">
          <HomeIcon />
        </button>
        <button onClick={() => redirectTo("/notifications")} aria-label="Notifications">
          <BellIcon />
        </button>
        <button onClick={() => redirectTo("/messages")} aria-label="Messages">
          <MessageSquareIcon />
        </button>
      </div>
      <button onClick={toggleMenu} className="flex items-center" aria-label="Menu">
        <MenuIcon />
      </button>
      {isMenuOpen && (
        <div className="absolute bottom-12 left-0 right-0 bg-white shadow-md p-4">
          <button onClick={() => redirectTo("/bookmarks")} className="block w-full text-left">Bookmarks</button>
          <button onClick={() => redirectTo("/guidelines")} className="block w-full text-left">Guidelines</button>
          <button onClick={() => redirectTo("/feedback")} className="block w-full text-left">Feedback</button>
        </div>
      )}
    </div>
  );
}
