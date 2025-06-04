import { IKVideo } from "imagekitio-next";
import Link from "next/link";
import { IVideo } from "@/models/Video";

export default function VideoComponent({ video }: { video: IVideo }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <Link href={`/videos/${video._id}`} className="block w-full">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "9/16" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <IKVideo
              path={video.videoUrl}
              transformation={[
                {
                  height: "1920",
                  width: "1080",
                },
              ]}
              controls={video.controls}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute bottom-3 right-3 z-20 bg-black/70 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Watch
            </div>
          </div>
        </Link>
      </div>

      <div className="p-4">
        <Link
          href={`/videos/${video._id}`}
          className="block group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
        >
          <h2 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 line-clamp-1">
            {video.title}
          </h2>
        </Link>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
          {video.description}
        </p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {  new Date(Date.now()).toLocaleDateString()}
          </span>
          
          <Link 
            href={`/videos/${video._id}`}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}