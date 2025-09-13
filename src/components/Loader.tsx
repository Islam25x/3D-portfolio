import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LoaderProps = {
    onFinish: () => void;
};

const Loader: React.FC<LoaderProps> = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 3500); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#1a0f2b] to-[#0f0f0f]"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Pulsing Logo */}
                <motion.img
                    className="w-24 h-24 rounded-full bg-gradient-to-r from-[#915EFF] via-[#FF6B6B] to-[#F9F871] shadow-2xl"
                    src="/logo.png"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                />

                {/* Loading Text with typewriter style */}
                <motion.p
                    className="mt-6 text-white text-lg font-bold tracking-wider"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Loading Portfolio...
                </motion.p>

                {/* Animated dots */}
                <div className="flex mt-3 space-x-2">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-3 h-3 bg-[#915EFF] rounded-full"
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 0.6,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Loader;
