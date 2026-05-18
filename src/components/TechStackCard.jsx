const TechStackCard = ({tech})=>{
    return (
        <div className="border-b border-slate-800 pb-4 sm:pb-5 lg:pb-6">
            <div className="flex items-start sm:justify-between lg:justify-between gap-4 sm:gap-6 lg:gap-10">
                <h3 className="min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-[10px] sm:text-xs lg:text-sm uppercase lg:tracking-widest text-slate-500">
                    {tech.section}
                </h3>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-[15px] lg:text-base">
                    {tech.tech}
                </p>  
            </div>
        </div>
    )
}
export default TechStackCard;