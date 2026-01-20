import React from 'react';
import { motion } from 'framer-motion';

const skillsData = {
    "Core AI & Data Science": [
        "Data Analytics", "Machine Learning", "Model Training & Evaluation",
        "Deep Learning", "NLP", "Computer Vision",
        "TensorFlow", "PyTorch", "Pandas/NumPy"
    ],
    "Web Development": [
        "React.js", "Node.js", "HTML", "CSS", "JavaScript"
    ],
    "Programming": [
        "Python", "Java", "C"
    ],
    "Tools": [
        "MySQL", "PowerBI", "MS Excel", "Git/GitHub"
    ],
    "Soft Skills": [
        "Communication", "Problem Solving", "Leadership"
    ]
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="absolute inset-0 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="h-1 w-24 bg-neonPurple mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-slate-800/40 p-6 rounded-xl border border-white/5 hover:border-neonCyan/30 transition-all duration-300"
                        >
                            <h3 className="text-xl font-semibold text-neonCyan mb-4 border-l-4 border-neonPurple pl-3">{category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-slate-700/50 text-gray-300 rounded-md text-sm border border-white/5 hover:text-white hover:bg-slate-700 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
