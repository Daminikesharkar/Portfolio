const ExperienceCard = ({experience})=>{
    return (
        <div className="group grid grid-cols-1 gap-4 rounded-xl p-4 transition sm:p-5 lg:grid-cols-8 lg:gap-6 lg:p-6 lg:hover:bg-slate-800/40">
            <div className="col-span-2">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                    {experience.period}
                </p>
            </div>

            <div className="col-span-6">
                <h3 className="text-base sm:text-lg font-semibold text-slate-200 group-hover:text-teal-300 transition">
                    {experience.role}
                    <span className="text-slate-400">
                        {" "}· {experience.company}
                    </span>
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                    {experience.location}
                </p>

                <p className="mt-4 text-sm leading-relaxed sm:text-base text-slate-400">
                    {experience.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                    {experience.tech.map((tech) => (
                        <span
                        key={tech}
                        className="rounded-full bg-teal-400/10 px-2.5 py-1 text-[11px] sm:px-3 sm:text-xs font-medium text-teal-300"
                        >
                        {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ExperienceCard;