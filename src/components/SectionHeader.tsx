
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  icon: LucideIcon;
  title: string;
  className?: string;
}

const SectionHeader = ({ icon: Icon, title, className }: SectionHeaderProps) => {
  return (
    <div className={cn("flex items-center gap-3 mb-4", className)}>
      <div className="bg-yellow-500 rounded-full p-2 flex items-center justify-center">
        <Icon size={18} className="text-white" />
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="flex-grow h-px bg-gray-200" />
    </div>
  );
};

export default SectionHeader;
