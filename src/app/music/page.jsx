import { getAllMusicService } from "../../services/music.service";
import React from "react";
import SongFormComponent from "./_components/SongFormComponent";
import MusicTableComponent from "./_components/MusicTableComponent";

const MusicPage = async () => {
  const songsData = await getAllMusicService();
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 drop-shadow-sm">
          HRD Music Stream Service
        </h1>
        <div className="flex gap-12">
          <div className="w-1/3 transform hover:scale-[1.01] transition-transform duration-300">
            <SongFormComponent />
          </div>
          <div className="w-2/3">
            <MusicTableComponent songs={songsData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
