import { BriefcaseIcon, GraduationCap, Heart, UserRound, Mail, FolderIcon, SlidersHorizontal } from "lucide-react";
import ResumeHeader from "@/components/ResumeHeader";
import SectionHeader from "@/components/SectionHeader";
import ExperienceItem from "@/components/ExperienceItem";
import EducationItem from "@/components/EducationItem";
import SkillList from "@/components/SkillList";
import PortfolioItem from "@/components/PortfolioItem";
import Interests from "@/components/Interests";

const Index = () => {
  
  const skills = [
    { name: "HTML,CSS,JS", level: 70 },
    { name: "REACT,TAILWIND,VUE,Vite", level: 50 },
    { name: "LARAVEL", level: 50 },
    { name: "MYSQL", level: 50 },
    { name: "English", level: 50 },

  ];
  
  const interests = [
    { name: "Web Design", },
    { name: "Photography", },
    { name: "Traveling",  },
    { name: "Music", },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Header Section */}
        <ResumeHeader 
          name="Yem soney"
          title="Junior Web Developer"
          email="yemsonney@email.com"
          phone="0966609389"
          website="https://github.com/Yemsoney"
          profile="Hello everyone My name is Yem soney, I'm 21 years old, I'm studying at Phanh chiet university, at the Faculty of Mathematics and Science, on the subject of computer science (CS)."
        />
        
        <div className="border-t border-gray-200 my-8"></div>
          
          {/* Personal Information Section */}
        <section className="mb-8">
          <SectionHeader icon={UserRound} title="Personal Information" />
          <div className="text-gray-600 ">
            <p>Name : Yem Soney.</p>
            <p>Age : 21.</p>
            <p>Gender : Male.</p>
            <p>Address : Dongkor, Phnom Penh, Cambodia.</p>
            
          </div>
        </section>
        
        {/* Experience Section */}
        <section className="mb-8">
          <SectionHeader icon={BriefcaseIcon} title="Experience" />
          
          <ExperienceItem
            title=""//            // No experience yet
            company=""//           
            location=""// 
            period=""
            description={
              <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>No Experience</li>
              </ul>
            }
          />
          
          <ExperienceItem
            title=""
            company=""
            location=""
            period=""
            description={
              <ul className="list-disc pl-5 mt-2 space-y-1">

              </ul>
            }
          />
        </section>
        
        {/* Education Section */}
        <section className="mb-8">
          <SectionHeader icon={GraduationCap} title="Education" />
          
          <EducationItem
            degree="Bachelor of Science in Computer Science"
            institution="Phanh Chiet University"
            location="Phnom Penh, Cambodia"
            year="2025"
            period="Expected Graduation: 2025"
          />
            <EducationItem
            degree="High School Diploma"
            institution="Heng Samrin Chak​​ High School"
            location="Chak , Ou Reang Ov, Tboung Khmum, Phnom Penh, Cambodia"
            year="2022"
            period="Expected Graduation: 2022"
          />
        </section>
        
        {/* Two Column Layout for Skills and Interests */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Skills Section */}
          <section>
            <SectionHeader icon={SlidersHorizontal} title="Skills" />
            <SkillList skills={skills} />
          </section>
          
          {/* Interests Section */}
          <section>
            <SectionHeader icon={Heart} title="Interests" />
            <Interests interests={interests} />
          </section>
        </div>
        
        {/* Portfolio Section */}
        <section className="mb-4">
          <SectionHeader icon={FolderIcon} title="Portfolio" />
          
          <div className="space-y-4">
            <PortfolioItem
              title="Movie Review Website"
              description="Developed a responsive movie review website using React and Tailwind CSS, featuring user authentication and a review submission system." 
            />
            
            <PortfolioItem
              title="My resume"
              description="Created a personal resume website using React Vite and Tailwind CSS, showcasing my skills and projects."
            />
            
            <PortfolioItem
              title="School management system"
              description="Developed a school management dashboard system using Laravel and MySQL, allowing for student enrollment, attendance tracking, and grade management."
            />
            
            <p className="text-sm text-gray-500 italic mt-4">
              Full portfolio available at <a href="https://github.com/Yemsoney" className="text-yellow-500 hover:underline">https://github.com/Yemsoney</a>
            </p>
          </div>
        </section>
      </div>
      
      <footer className="text-center text-gray-500 text-sm mt-8">
        © 2025 Yem Soney - Professional Web Developer. All rights reserved.
      </footer>
    </div>
  );
  
};

export default Index;
