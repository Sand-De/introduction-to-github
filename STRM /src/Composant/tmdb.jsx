const apiKey = "ab84482547885d747fc8285e261dc0ea";
const baseURL = "https://api.themoviedb.org/3";

const tmdbService = {
  get: async (endpoint) => {
    try {
      const response = await fetch(`${baseURL}${endpoint}?api_key=${apiKey}`);
      if (!response.ok) {
        throw new Error(`Erreur HTTP : ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      throw error;
    }
  },
};

export default tmdbService;