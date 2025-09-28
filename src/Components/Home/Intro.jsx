import {motion} from "framer-motion";

const Intro = () => {
    return (
        <div className="w-full py-8 md:py-32 px-2 md:px-8">
            {/* 🔹 Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6  items-center h-full">
                {/* Text Content */}
                <motion.div
                    className="md:col-span-2 lg:col-span-4 space-y-4 text-center md:text-left h-full"
                    initial={{opacity: 0, x: -100}} // start hidden + left
                    animate={{opacity: 1, x: 0}} // fade in + slide to position
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <p className="text-4xl md:text-6xl font-bold leading-tight">Your Most Trusted Tally Partner.</p>
                    <p className="text-lg md:text-3xl text-gray-700">
                        GV Enterprises has expertise around all Tally products and has been selling, implementing, customizing,
                        and supporting customers all over India for more than 3 decades.
                    </p>
                    {/* 🔹 Marquee */}
                    <div className="overflow-hidden relative py-2">
                        <p className="whitespace-nowrap animate-marquee text-base md:text-2xl text-red-700 font-bold">
                            Experience the Power of Banking with All-New TallyPrime 6.0.
                        </p>
                    </div>
                </motion.div>

                {/* Video */}
                <motion.div
                    className="md:col-span-1 lg:col-span-2 w-full h-full"
                    initial={{opacity: 0, x: 100}} // start hidden + right
                    animate={{opacity: 1, x: 0}} // fade in + slide to position
                    transition={{duration: 0.8, ease: "easeOut", delay: 0.3}}
                >
                    <video
                        src=""
                        className="aspect-video h-auto md:rounded-xl shadow-md border border-gray-200"
                        // controls
                        poster="https://via.placeholder.com/600x400.png?text=Tally+Intro+Video"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Intro;
