import axios from "axios";

export const memoryGameService = {
  getCharacters: async () => {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character/1,2,3,4,5,6"
    );
    return response.data;
  },
};
