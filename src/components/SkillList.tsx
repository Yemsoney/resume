interface Skill {
  name: string;
  level: number; // Skill level as a percentage (0-100)
}

interface SkillListProps {
  skills: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <div className="flex flex-col gap-4">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between items-center mb-1">
            <span className="text-gray-800 text-sm font-medium">{skill.name}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-yellow-500 h-2.5 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillList;