interface Interest {
  name: string;
}

interface InterestsProps {
  interests: Interest[];
}

const Interests = ({ interests }: InterestsProps) => {
  return (
    <div className="flex flex-col gap-4">
      {interests.map((interest, index) => (
        <div
          key={index}
          className="p-3 bg-gray-100 rounded-lg shadow-md hover:bg-yellow-500  transition-colors duration-300"
        >
          <span className="text-gray-800 text-sm font-semibold">{interest.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Interests;