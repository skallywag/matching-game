import axios from "axios";

export const memoryGameService = {
  getCharacters: async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character/1,183"
    );
    return response;
  },
};
