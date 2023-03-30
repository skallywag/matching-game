import "./MemoryCard.scss";

interface MemoryCardProps {
  id?: number;
  imageUrl: string;
}
const MemoryCard: React.FC<MemoryCardProps> = ({ imageUrl, id }) => {
  return (
    <div className="memoryCard">
      <img src={imageUrl} alt="card-image" />
    </div>
  );
};

export { MemoryCard };
