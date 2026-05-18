import { useEffect, useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"

const LeftSideLayout = ()=>{
    const menu = [
        {
            name:'About',
            link:'#about'
        },
        {
            name:'Experience',
            link:'#experience'
        },
        {
            name:'Projects',
            link:'#projects'
        },
        {
            name:'Publications',
            link:'#publications'
        },
        {
            name:'Tech Stack',
            link:'#techstack'
        },
        {
            name:'Lets Connect',
            link:'#contact'
        },
    ];
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const sections = document.querySelectorAll("section")
        const handleScroll = () => {
            let current = ""

            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute("id")
                }
            })
            setActiveSection(current)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <div className="w-full lg:w-[50%] xl:w-[45%]">
            <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col gap-6 lg:justify-between px-6 py-12 sm:px-10 lg:px-35 lg:py-24">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-100">Damini Kesharkar</h1>
                    <h2 className="mt-4 text-lg lg:text-xl font-medium tracking-tight text-teal-300">Backend Heavy Full-stack Developer</h2>
                    <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400 lg:text-base">I build scalable backend systems 
                    <br/> and clean web experiences.</p>
                </div>
    
                <nav className="hidden lg:block">
                    <ul className="space-y-2">
                        {menu.map((m) => {
                            const isActive =
                                activeSection === m.link.replace("#", "")

                            return (
                                <li key={m.name}>
                                    <a
                                        href={m.link}
                                        className="group flex items-center gap-4"
                                    >
                                        <span
                                            className={`h-px transition-all duration-300
                                            ${
                                                isActive
                                                    ? "w-20 bg-teal-300"
                                                    : "w-8 bg-slate-500 group-hover:w-16 group-hover:bg-teal-300"
                                            }`}
                                        ></span>
                                        <span
                                            className={`text-sm font-bold uppercase tracking-widest transition
                                            ${
                                                isActive
                                                    ? "text-teal-300"
                                                    : "text-slate-400 group-hover:text-teal-300"
                                            }`}
                                        >
                                            {m.name}
                                        </span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
    
                <div className="flex items-center gap-6 text-xl lg:text-2xl text-slate-400">
                    <a href="https://github.com/Daminikesharkar" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:-translate-y-1 hover:text-teal-300"><FaGithub /></a>
                    <a href="https://linkedin.com/in/damini-kesharkar-121236195" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:-translate-y-1 hover:text-teal-300"><FaLinkedin /></a>
                    <a href="mailto:daminisk272@gmail.com" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:-translate-y-1 hover:text-teal-300"><FaEnvelope /></a>
                    <a href="https://leetcode.com/u/daminiKesharkar/" target="_blank" rel="noopener noreferrer" className="transition duration-300 hover:-translate-y-1 hover:text-teal-300"><SiLeetcode /></a>
                </div>
            </div>
        </div>
    )
}
export default LeftSideLayout