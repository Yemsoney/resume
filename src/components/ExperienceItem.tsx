
interface ExperienceItemProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: React.ReactNode;
}

const ExperienceItem = ({ title, company, location, period, description }: ExperienceItemProps) => {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-700">
            {company}, {location}
          </p>
        </div>
        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-1 md:mt-0">
          {period}
        </span>
      </div>
      <div className="text-gray-600">
        {description}
      </div>
    </div>
  );
};

export default ExperienceItem;
