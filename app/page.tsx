"use client";

import React, { useEffect, useState } from "react";
import VideoFeed from "./components/VideoFeed";
import { IVideo } from "@/models/Video";
import { apiClient } from "@/lib/api-client";

export default function Home() {
  const [videos, setVideos] = useState<IVideo[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await apiClient.getVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                XtremReels
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover and share amazing short-form videos with the world
            </p>
            {videos.length > 0 && (
              <div className="flex justify-center gap-4 mt-6">
                <a 
                  href="#trending"
                  className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg font-medium backdrop-blur-sm transition-all shadow-md hover:shadow-lg"
                >
                  Explore Videos
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Videos Section */}
      <section id="trending" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {videos.length > 0 ? 'Trending Videos' : 'No Videos Yet'}
          </h2>
          {videos.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <span>{videos.length} video{videos.length !== 1 ? 's' : ''}</span>
            </div>
          )}
        </div>

        {videos.length > 0 ? (
          <VideoFeed videos={videos} />
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-12 text-center">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">No videos available</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Be the first to upload and share amazing content!</p>
          </div>
        )}
      </section>
    </main>
  );
}