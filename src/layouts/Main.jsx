import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectSection from "../components/ProjectSection";
import PublicationSection from "../components/PublicationsSection";
import TechStackSection from "../components/TechStackSection";

const MainLayout = ()=>{
    return (
        <div className="w-full px-6 pb-24 sm:px-10 lg:w-[50%] lg:py-24 lg:pr-24 xl:pr-35">
            <div className="space-y-20 lg:space-y-40">
                <AboutSection />
                <ExperienceSection />
                <ProjectSection />
                <PublicationSection />
                <TechStackSection />
                <ContactSection />     
            </div>
            <div className="text-center text-xs leading-relaxed text-slate-500">
                <p>
                    Designed & Built by Damini Kesharkar using React and Tailwind CSS.
                </p>
            </div>
        </div>
    )
}
export default MainLayout;