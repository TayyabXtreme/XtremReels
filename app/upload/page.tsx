"use client";

import VideoUploadForm from "../components/VideoUploadForm";

export default function VideoUploadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white">Upload New Reel</h1>
          <p className="text-blue-100 mt-2">Share your amazing content with the world</p>
        </div>
        <div className="p-6 sm:p-8">
          <VideoUploadForm />
        </div>
      </div>
    </div>
  );
}