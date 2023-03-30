import { useEffect, useState } from "react";
import { MemoryCard } from "../../components/memoryCard/MemoryCard";
import ClipLoader from "react-spinners/ClipLoader";
import { memoryGameService } from "../../api/memoryGameService";
import "./MemoryGamePage.scss";
import { Difficulty, GameCard } from "../../@types/models";

const MemoryGamePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gameCards, setGameCards] = useState<GameCard[] | undefined>([]);
  const [difficulty, setDifficulty] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    getGameCards().catch(console.error);
  }, []);

  async function getGameCards() {
    setIsLoading(true);
    try {
      const response = await memoryGameService.getGameCards(difficulty);
      concatGameCards(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  function concatGameCards(response: any) {
    const newCardArray = response.map((item: GameCard) => {
      return {
        id: item.id,
        imageUrl: item.image,
      };
    });

    setGameCards(
      newCardArray.concat(
        newCardArray.map((item: GameCard) => {
          return {
            ...item,
            id: item.id + "1",
          };
        })
      )
    );
  }
  console.log(gameCards);

  return (
    <div className="memoryPage">
      <h2>Difficulty</h2>
      <div className="gameContainer">
        {isLoading ? (
          <ClipLoader
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          gameCards?.map((item: GameCard) => {
            return <MemoryCard key={item.id} imageUrl={item.imageUrl} />;
          })
        )}
      </div>
    </div>
  );
};

export { MemoryGamePage };
