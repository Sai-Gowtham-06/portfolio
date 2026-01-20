import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Electronic Tongue",
        description: "A website maker and prototype for an electronic tongue device. Selected as an SIH Prototype.",
        tags: ["IoT", "Web Dev", "Prototyping"],
        highlight: true,
    },
    {
        title: "OS/Web AI Agent",
        description: "An intelligent agent designed to assist software developers with OS tasks and website navigation.",
        tags: ["AI", "Automation", "Python"],
    },
    {
        title: "Stock Market AI Prediction",
        description: "A predictive model analyzing market trends for stock forecasting using historical data.",
        tags: ["ML", "Data Analysis", "Finance"],
    },
    {
        title: "Business Analytics Agent",
        description: "An AI tool designed to automate data analytics for business insights and reporting.",
        tags: ["AI", "Analytics", "Business Intelligence"],
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
                    <div className="h-1 w-24 bg-neonCyan mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3 }}
                            className="group relative bg-slate-800/30 p-8 rounded-2xl border border-white/5 hover:border-neonCyan/50 transition-colors overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-neonCyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white group-hover:text-neonCyan transition-colors">
                                    {project.title}
                                </h3>
                                <div className="flex gap-2 text-gray-400">
                                    <Github size={20} className="hover:text-neonPurple cursor-pointer" />
                                    <ExternalLink size={20} className="hover:text-neonPurple cursor-pointer" />
                                </div>
                            </div>

                            <p className="text-gray-300 mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 text-neonCyan rounded font-mono">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {project.highlight && (
                                <div className="absolute top-4 right-4 text-xs font-bold text-slate-900 bg-neonCyan px-2 py-1 rounded">
                                    SIH PROTOTYPE
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
