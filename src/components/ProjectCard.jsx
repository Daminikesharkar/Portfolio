const ProjectCard = ({project})=>{
    return (
        <div className="group grid grid-cols-1 gap-4 rounded-xl p-4 transition sm:p-5 lg:grid-cols-8 lg:gap-6 lg:p-6 lg:hover:bg-slate-800/40">
            <div className="lg:col-span-2">
                <img 
                    src={project.image}
                    alt={project.title}
                    // className="rounded-lg border border-slate-700 object-cover transition group-hover:border-slate-500"
                    className="h-48 w-full rounded-lg border border-slate-700 object-cover transition group-hover:border-slate-500 sm:h-56 lg:h-auto"
                />
            </div>
            <div className="lg:col-span-6">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-200 group-hover:text-teal-300 transition">
                    {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                    {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <span
                        key={tech}
                        className="rounded-full bg-teal-400/10 px-2.5 py-1 text-[11px] sm:px-3 sm:text-xs font-medium text-teal-300"
                        >
                        {tech}
                        </span>
                    ))}
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-slate-300 transition hover:text-teal-300"
                    >
                        GitHub →
                    </a>
                    {/* <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-slate-300 transition hover:text-teal-300"
                    >
                        Live Demo →
                    </a> */}
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;