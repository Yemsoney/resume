
interface PortfolioItemProps {
  title: string;
  description: string;
}

const PortfolioItem = ({ title, description }: PortfolioItemProps) => {
  return (
    <div className="mb-3 last:mb-0">
      <h3 className="text-lg font-medium text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default PortfolioItem;
