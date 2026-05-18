const TechStackCard = ({tech})=>{
    return (
        <div className="border-b border-slate-800 pb-6">
            <div className="flex items-start justify-between gap-10">
                <h3 className="min-w-[140px] text-sm uppercase tracking-widest text-slate-500">
                    {tech.section}
                </h3>
                <p className="leading-relaxed text-slate-300">
                    {tech.tech}
                </p>  
            </div>
        </div>
    )
}
export default TechStackCard;