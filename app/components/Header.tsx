"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Home, User } from "lucide-react";
import { useNotification } from "./Notification";

export default function Header() {
  const { data: session } = useSession();
  const { showNotification } = useNotification();

  const handleSignOut = async () => {
    try {
      await signOut();
      showNotification("Signed out successfully", "success");
    } catch {
      showNotification("Failed to sign out", "error");
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 shadow-md backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              prefetch={true}
              onClick={() =>
                showNotification("Welcome to XtremReels", "info")
              }
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-sm">
                <Home className="w-5 h-5" />
              </div>
              <span className="hidden sm:inline">XtremReels</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            {session && (
              <Link
                href="/upload"
                className="hidden sm:flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all shadow-sm hover:shadow-md"
                onClick={() => showNotification("Upload a new video", "info")}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
                Upload
              </Link>
            )}
            
            <div className="relative">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                aria-label="User menu"
                onClick={(e) => {
                  const menu = document.getElementById('user-menu');
                  if (menu) menu.classList.toggle('hidden');
                }}
              >
                <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
              
              <div id="user-menu" className="hidden absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-2 border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-200 ease-in-out">
                {session ? (
                  <>
                    <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {session.user?.email?.split("@")[0]}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">
                        {session.user?.email}
                      </p>
                    </div>

                    <div className="py-1">
                      <Link
                        href="/upload"
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        onClick={() =>
                          showNotification("Upload a new video", "info")
                        }
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="23 7 16 12 23 17 23 7" />
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                        </svg>
                        Video Upload
                      </Link>
                    </div>

                    <div className="py-1 border-t border-gray-200 dark:border-gray-700">
                      <button
                        onClick={handleSignOut}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full text-left"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                          <polyline points="16 17 21 12 16 7" />
                          <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        Sign Out
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="py-1">
                    <Link
                      href="/login"
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      onClick={() =>
                        showNotification("Please sign in to continue", "info")
                      }
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                        <polyline points="10 17 15 12 10 7" />
                        <line x1="15" y1="12" x2="3" y2="12" />
                      </svg>
                      Login
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}