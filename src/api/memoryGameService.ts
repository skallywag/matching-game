import axios from "axios";
import { Difficulty } from "../@types/models";

export const memoryGameService = {
  getGameCards: async (data: number[]) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${data}`
    );
    return response.data;
  },
};
