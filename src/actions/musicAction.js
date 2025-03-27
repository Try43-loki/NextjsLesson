"use server";

import { addMusicService } from "../services/music.service";

export const addMusicAction = async (formData) => {
  try {
    // Get whatever user input with formData.get()
    const title = formData.title;
    const genres = formData.genres;

    // Small Validation, ensure user complete both input field
    if (!title || !genres) {
      throw new Error("Title and genres are required");
    }

    // Everytime we submit data to API, we need to define it as an object
    const musicData = {
      title,
      genres,
    };

    // Calling addMusicService() and passing musicData to the service.
    const newMusic = await addMusicService(musicData);

    // REturn status and message to the form function that calling this action
    return { success: true, data: newMusic };
  } catch (error) {
    console.error("Error in addMusicAction:", error);
    return { success: false, error: error.message };
  }
};
