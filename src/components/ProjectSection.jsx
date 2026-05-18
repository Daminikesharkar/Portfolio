import { projects } from "../data/projects"
import ProjectCard from "./ProjectCard"

const ProjectSection = ()=>{
    return (
        <section id="projects">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-300">
                Projects
            </h2>
            <div className="mt-10 space-y-8">
                {projects.map((project)=>(
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>    
        </section>
    )

}
export default ProjectSection;