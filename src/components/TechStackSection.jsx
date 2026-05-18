import { techs } from "../data/techstack";
import TechStackCard from "./TechStackCard";

const TechStackSection = ()=>{
    return (
        <section id="techstack">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
              Tech Stack
            </h2>  
                 
            <div className="mt-20 space-y-8">
                {techs.map((tech)=>(
                    <TechStackCard key={tech.id} tech={tech}/>
                ))} 
            </div>
        </section>
    )
}
export default TechStackSection;