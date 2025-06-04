"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { Loader2 } from "lucide-react";
import { useNotification } from "./Notification";
import { apiClient } from "@/lib/api-client";
import FileUpload from "./FileUpload";

interface VideoFormData {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export default function VideoUploadForm() {
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { showNotification } = useNotification();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VideoFormData>({
    defaultValues: {
      title: "",
      description: "",
      videoUrl: "",
      thumbnailUrl: "",
    },
  });

  const handleUploadSuccess = (response: IKUploadResponse) => {
    setValue("videoUrl", response.filePath);
    setValue("thumbnailUrl", response.thumbnailUrl || response.filePath);
    showNotification("Video uploaded successfully!", "success");
  };

  const handleUploadProgress = (progress: number) => {
    setUploadProgress(progress);
  };

  const onSubmit = async (data: VideoFormData) => {
    if (!data.videoUrl) {
      showNotification("Please upload a video first", "error");
      return;
    }

    setLoading(true);
    try {
      await apiClient.createVideo(data);
      showNotification("Video published successfully!", "success");

      // Reset form after successful submission
      setValue("title", "");
      setValue("description", "");
      setValue("videoUrl", "");
      setValue("thumbnailUrl", "");
      setUploadProgress(0);
    } catch (error) {
      showNotification(
        error instanceof Error ? error.message : "Failed to publish video",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="form-control col-span-full">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter a catchy title for your reel"
            className={`w-full px-4 py-3 rounded-lg border ${errors.title 
              ? "border-red-500 focus:ring-red-500 focus:border-red-500" 
              : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"} 
              bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
              focus:outline-none focus:ring-2 transition-colors`}
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.title.message}
            </p>
          )}
        </div>

        <div className="form-control col-span-full">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
          <textarea
            placeholder="Describe your reel to help viewers understand what it's about"
            rows={4}
            className={`w-full px-4 py-3 rounded-lg border ${errors.description 
              ? "border-red-500 focus:ring-red-500 focus:border-red-500" 
              : "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"} 
              bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
              focus:outline-none focus:ring-2 transition-colors resize-none`}
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && (
            <p className="mt-1.5 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>
      </div>

      <div className="form-control bg-gray-50 dark:bg-gray-800/50 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Upload Video</label>
        <div className="bg-white dark:bg-gray-700 rounded-lg p-4 border border-dashed border-gray-300 dark:border-gray-600">
          <FileUpload
            fileType="video"
            onSuccess={handleUploadSuccess}
            onProgress={handleUploadProgress}
          />
        </div>
        {uploadProgress > 0 && (
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
              <span>Upload progress</span>
              <span>{uploadProgress}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all ${loading || !uploadProgress 
            ? "bg-gray-400 cursor-not-allowed" 
            : "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg"}`}
          disabled={loading || !uploadProgress}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              <span>Publishing Video...</span>
            </div>
          ) : (
            "Publish Video"
          )}
        </button>
        {!uploadProgress && !loading && (
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
            Upload a video first to enable publishing
          </p>
        )}
      </div>
    </form>
  );
}