

export const About = () => {

    const frontendSkills = ["React", "Wordpress", "TailwindCSS"]
    const backendSkills = ["Node.js", "Javascript"]

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">

                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border border-white/5 hover:-translate-y-1 transition-all text-center">
                    <p className="text-gray-300 mb-6">Life Before Death</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>

                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadhow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>

                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadhow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">📖 Education</h3>
                                    <ul className=" text-gray-300 space-y-2 my-3">
                                        <li>
                                            <strong>Certificate of Completion</strong> - University of Wisconsin Online Boot Camp (2023)
                                        </li>
                                        <li className="list-disc list-inside">
                                            <span className="italic">Relevant Coursework:</span> Javascript, Data Structures, Object-Oriented Programming, React, Web Applications...
                                        </li>
                                    </ul>
                                    <ul className="text-gray-300 space-y-2 my-3">
                                        <li>
                                            <strong>Double-Star Ranger</strong> - Salesforce Trailhead
                                        </li>
                                        <li className="list-disc list-inside">
                                            <span className="italic">Relevant Coursework:</span> Sales Cloud, Service Cloud, Experience Cloud, Data Analytics, Flows...
                                        </li>
                                    </ul>
                                <h3 className="text-xl font-bold mb-4">🏢 Work Experience</h3>
                                <h3 className="text-xl font-bold mb-4">🍳 Skills</h3>
                        </div>
                </div>

            </div>
        </section>
    )
}