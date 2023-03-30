import "./MemoryCard.scss";

interface MemoryCardProps {
  id?: number;
  image: string;
}
const MemoryCard: React.FC<MemoryCardProps> = ({ image, id }) => {
  return (
    <div className="memoryCard">
      <img src={image} alt="card-image" />
    </div>
  );
};

export { MemoryCard };
