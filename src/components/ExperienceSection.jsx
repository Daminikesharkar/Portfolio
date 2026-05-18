import { experiences } from "../data/experience";
import ExperienceCard from "./ExperienceCard";

const ExperienceSection = ()=>{

    return (
        <section id="experience">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
              Experience
            </h2>

            <div className="mt-10 space-y-12">
                {experiences.map((experience)=>(
                    <ExperienceCard key={experience.id} experience={experience}/>
                ))}
            </div>

            <div className="mt-2">
              <a
                href="/Damini_Kesharkar_SDE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-m font-medium text-slate-200 transition hover:text-teal-300"
              >
                <span>
                  View Full Resume
                </span>
                <span className="transition group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </section> 
    )

}
export default ExperienceSection;