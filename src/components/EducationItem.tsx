
interface EducationItemProps {
  degree: string;
  institution: string;
  location: string;
  year: string;
  period: string;
}

const EducationItem = ({ degree, institution, location, year, period }: EducationItemProps) => {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-1">
        <div>
          <h3 className="text-lg font-semibold">{degree}</h3>
          <p className="text-gray-700">
            {institution}, {location}
          </p>
        </div>
        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-1 md:mt-0">
          {year}
        </span>  
      </div>
      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full mt-1 md:mt-0">
          {period}
        </span>
    </div>
  );
};

export default EducationItem;
