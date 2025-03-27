export async function addMusicService(musicData) {
  const apiUrl = "https://6579da3c1acd268f9afa4236.mockapi.io/api/music";
  try {
    const response = await fetch(apiUrl, {
      // Dont forget to define the method: POST
      method: "POST",

      headers: {
        // Dont forget to define the Content-Type everytime, we POST the data
        "Content-Type": "application/json",
      },
      // Covert Javascript Object into JSON, easy for sending data over the internet
      body: JSON.stringify(musicData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating music:", error);
    throw error;
  }
}
export async function getAllMusicService() {
  try {
    const response = await fetch(
      "https://6579da3c1acd268f9afa4236.mockapi.io/api/music",
      {
        next: { tags: ["music"] },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching music:", error);
    throw error;
  }
}
