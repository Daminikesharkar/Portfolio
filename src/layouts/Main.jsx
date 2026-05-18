import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";
import ProjectSection from "../components/ProjectSection";
import PublicationSection from "../components/PublicationsSection";
import TechStackSection from "../components/TechStackSection";

const MainLayout = ()=>{
    return (
        <div className="w-[50%] py-24 pr-40">
            <div className="space-y-40">
                <AboutSection />
                <ExperienceSection />
                <ProjectSection />
                <PublicationSection />
                <TechStackSection />
                <ContactSection />     
            </div>
        </div>
    )
}
export default MainLayout;