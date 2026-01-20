import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonCyan/20 rounded-full blur-3xl filter opacity-50 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonPurple/20 rounded-full blur-3xl filter opacity-50 animate-pulse delay-1000"></div>

            <div className="max-w-7xl mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-neonCyan text-xl md:text-2xl font-semibold mb-4 tracking-wide">
                        Hi, I'm Sai Gowtham.
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Bridging Artificial Intelligence, <br />
                        <span className="bg-gradient-to-r from-neonCyan to-neonPurple bg-clip-text text-transparent">
                            Data Science
                        </span> & Full Stack Development.
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                        3rd Year AI & DS Student | SIH Participant | Innovative Problem Solver
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-transparent border-2 border-neonCyan text-neonCyan hover:bg-neonCyan hover:text-slate-900 transition-all duration-300 font-semibold shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.6)]"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-gradient-to-r from-neonPurple to-purple-600 text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-[0_0_15px_rgba(188,19,254,0.3)]"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
