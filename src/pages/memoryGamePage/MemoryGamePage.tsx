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
      console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  }

  return (
    <div className="memoryPage">
      <div className="gameContainer">
        {isLoading ? (
          <ClipLoader
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          gameCards.map((item) => {
            return <MemoryCard />;
          })
        )}
      </div>
    </div>
  );
};

export { MemoryGamePage };
