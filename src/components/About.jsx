import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-slate-800/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                About Me
                            </h2>
                            <div className="h-1 w-20 bg-neonCyan rounded-full"></div>

                            <p className="text-gray-300 leading-relaxed text-lg">
                                I am currently pursuing my B.Tech in Artificial Intelligence and Data Science (3rd Year, 6th Sem) at Prathyusha Engineering College.
                                I am passionate about building AI agents, analyzing complex data, and creating full-stack web applications.
                                I bridge the gap between technical logic and user-centric design.
                            </p>

                            <div className="pt-4">
                                <h3 className="text-neonPurple font-semibold mb-2">Languages Spoken</h3>
                                <div className="flex gap-4">
                                    {['English', 'Tamil', 'Telugu'].map((lang) => (
                                        <span key={lang} className="px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Optional: Add a profile image here or an abstract graphic */}
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 p-1 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-neonCyan/10 group-hover:bg-neonCyan/20 transition-colors duration-500"></div>
                                <div className="flex items-center justify-center h-full text-gray-500 italic">
                                    [Profile Image Placeholder]
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
