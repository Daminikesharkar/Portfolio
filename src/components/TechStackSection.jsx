import { techs } from "../data/techstack";
import TechStackCard from "./TechStackCard";

const TechStackSection = ()=>{
    return (
        <section id="techstack">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-slate-300 mb-6 lg:mb-10">
              Tech Stack
            </h2>  
                 
            <div className="mt-10 space-y-5 sm:space-y-6 lg:mt-20 lg:space-y-8">
                {techs.map((tech)=>(
                    <TechStackCard key={tech.id} tech={tech}/>
                ))} 
            </div>
        </section>
    )
}
export default TechStackSection;