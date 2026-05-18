const ProjectCard = ({project})=>{
    return (
        <div className="group grid grid-cols-8 gap-6 rounded-xl p-6 transition hover:bg-slate-800/40">
                <div className="col-span-2">
                    <img 
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg border border-slate-700 object-cover transition group-hover:border-slate-500"
                    />
                </div>
                <div className="col-span-6">
                    <h3 className="text-xl font-semibold text-slate-200 group-hover:text-teal-300 transition">
                        {project.title}
                    </h3>
                    <p className="mt-4 leading-relaxed text-slate-400">
                        {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                            <span
                            key={tech}
                            className="rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300"
                            >
                            {tech}
                            </span>
                        ))}
                    </div>
                    <div className="mt-6 flex items-center gap-6">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-slate-300 transition hover:text-teal-300"
                        >
                            GitHub →
                        </a>
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-slate-300 transition hover:text-teal-300"
                        >
                            Live Demo →
                        </a>
                    </div>
                </div>
        </div>
    )

}
export default ProjectCard;