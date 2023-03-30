import { useEffect, useState } from "react";
import { MemoryCard } from "../../components/memoryCard/MemoryCard";
import ClipLoader from "react-spinners/ClipLoader";
import { memoryGameService } from "../../api/memoryGameService";
import "./MemoryGamePage.scss";

const MemoryGamePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gameCards, setGameCards] = useState([]);

  useEffect(() => {
    getCharacters().catch(console.error);
  }, []);

  async function getCharacters() {
    setIsLoading(true);
    try {
      const response = await memoryGameService.getCharacters();
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

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
          gameCards.map((item: any) => {
            return <MemoryCard key={item.id} image={item.url} />;
          })
        )}
      </div>
    </div>
  );
};

export { MemoryGamePage };
