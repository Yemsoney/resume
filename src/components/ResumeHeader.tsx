
import { Mail, Phone, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ResumeHeaderProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  profile: string;
}

const ResumeHeader = ({ name, title, email, phone, website, profile }: ResumeHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      {/* Profile Photo */}
      <div className="flex-shrink-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-yellow-100 border-4 border-yellow-500 mx-auto md:mx-0">
          <img 
          
            src="/public/image.jpg" // Replace with your image path 
            alt="Nina Lane"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Name and Contact Info */}
      <div className="flex-grow">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-1">{name}</h1>
          <Badge variant="outline" className="bg-yellow-500 text-black font-medium text-sm py-1 px-3 mb-4">
            {title}
          </Badge>
          
          <p className="text-gray-700 mb-4 max-w-2xl">
            {profile}
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-500" />
              <a href={`mailto:${email}`} className="hover:text-yellow-500 transition-colors">
                {email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-500" />
              <a href={`tel:${phone}`} className="hover:text-yellow-500 transition-colors">
                {phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={16} className="text-yellow-500" />
              <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors">
                {website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHeader;
