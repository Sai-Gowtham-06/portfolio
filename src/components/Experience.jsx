import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Internship Experience */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Briefcase className="text-neonPurple" size={28} />
                            <h2 className="text-3xl font-bold text-white">Experience</h2>
                        </div>

                        <div className="space-y-8 pl-4 border-l-2 border-slate-700">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-8"
                            >
                                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-neonPurple"></div>
                                <h3 className="text-xl font-bold text-white">Intern</h3>
                                <div className="text-neonCyan mb-1">Retech Solution Pvt Ltd</div>
                                <div className="text-gray-400 text-sm mb-2">15 Days</div>
                                <p className="text-gray-300">Gained practical experience in technical solutions and development processes.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="relative pl-8"
                            >
                                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-neonPurple"></div>
                                <h3 className="text-xl font-bold text-white">Intern</h3>
                                <div className="text-neonCyan mb-1">CodeBind Technologies</div>
                                <div className="text-gray-400 text-sm mb-2">15 Days</div>
                                <p className="text-gray-300">Worked on real-world projects and enhanced coding skills.</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Certifications & Achievements */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="text-neonCyan" size={28} />
                            <h2 className="text-3xl font-bold text-white">Achievements</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                { title: "SIH Participant", sub: "Electronic Tongue Prototype", color: "border-neonCyan" },
                                { title: "NPTEL Certifications", sub: "Joy of Computing using Python, IoT, Java", color: "border-gray-600" },
                                { title: "Infosys Springboard", sub: "Course Completion", color: "border-gray-600" }
                            ].map((cert, md) => (
                                <motion.div
                                    key={md}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: md * 0.1 }}
                                    className={`p-4 rounded-lg bg-white/5 border-l-4 ${cert.color} hover:bg-white/10 transition-colors`}
                                >
                                    <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                                    <p className="text-gray-400 text-sm">{cert.sub}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
