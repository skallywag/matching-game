//@ts-ignore
import img from "../../assets/catering-home.jpeg";
import "./MemoryCard.scss";

interface MemoryCardProps {}
const MemoryCard: React.FC<MemoryCardProps> = () => {
  return (
    <div className="memoryCard">
      <img src={img} alt="image" />
    </div>
  );
};

export { MemoryCard };
